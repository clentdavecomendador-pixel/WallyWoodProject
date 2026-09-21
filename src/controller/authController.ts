import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { NextFunction, Request, Response } from 'express';
import { prisma } from '../prisma.js';

interface JwtPayload {
    exp: number;
    data: {
        id: number;
    }
}

declare global {
    namespace Express {
        interface Request {
            user?: { id: number };
        }
    }
}

class AuthController {
    generateToken = (
        user: { id: number },
        type: 'access' | 'refresh'
    ) => {
        const key = process.env[`TOKEN_${type.toUpperCase()}_KEY`];
        const expiresIn = process.env[`TOKEN_${type.toUpperCase()}_EXPIRATION_SECS`];

        if (!key || !expiresIn) {
            throw new Error(`Missing env vars for ${type} token`);
        }

        return jwt.sign(
            {
                id: user.id,
            },
            key,
            {
                expiresIn: Number(expiresIn),
            }
        );
    };

    authenticate = async (req: Request, res: Response) => {
        const { username, password } = req.body as {
            username?: string;
            password?: string;
        };

        if (!username || !password) {
            return res.status(400).json({
                message: 'Missing credentials',
            });
        }

        try {
            const user = await prisma.user.findFirst({
                where: {
                    email: username,
                    isActive: true,
                },
                select: {
                    id: true,
                    firstname: true,
                    lastname: true,
                    password: true,
                },
            });

            if (!user) {
                return res.sendStatus(401);
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res.sendStatus(401);
            }

            const accessToken = this.generateToken(user, 'access');

            return res.json({
                accessToken,
                user: {
                    id: user.id,
                    firstname: user.firstname,
                    lastname: user.lastname,
                },
            });
        } catch (error: any) {
            return res.status(500).json({
                message: error.message,
            });
        }
    };

    authorize = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        const bearerHeader = req.headers["authorization"];

        if (!bearerHeader?.startsWith("Bearer ")) {
            return res.status(401).json({
                message: "Token not accepted"
            })
        }

        const token = bearerHeader.split(" ")[1];

        try {
            const decoded = jwt.verify(
                token, 
                process.env.TOKEN_ACCESS_KEY!
            ) as JwtPayload;

            req.user = decoded.data;

            return next();
        } catch (error: any) {
            return res.status(403).json({
                message: error.message
            })
        }
    }
}

export const authController = new AuthController();
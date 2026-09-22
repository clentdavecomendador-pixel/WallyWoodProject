import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { prisma } from '../prisma.js';
class AuthController {
    constructor() {
        this.generateToken = (user, type) => {
            const key = process.env[`TOKEN_${type.toUpperCase()}_KEY`];
            const expiresIn = process.env[`TOKEN_${type.toUpperCase()}_EXPIRATION_SECS`];
            if (!key || !expiresIn) {
                throw new Error(`Missing env vars for ${type} token`);
            }
            return jwt.sign({
                id: user.id,
            }, key, {
                expiresIn: Number(expiresIn),
            });
        };
        this.authenticate = async (req, res) => {
            const { username, password } = req.body;
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
            }
            catch (error) {
                return res.status(500).json({
                    message: error.message,
                });
            }
        };
        this.authorize = async (req, res, next) => {
            const bearerHeader = req.headers["authorization"];
            if (!bearerHeader?.startsWith("Bearer ")) {
                return res.status(401).json({
                    message: "Token not accepted"
                });
            }
            const token = bearerHeader.split(" ")[1];
            try {
                const decoded = jwt.verify(token, process.env.TOKEN_ACCESS_KEY);
                req.user = decoded.data;
                return next();
            }
            catch (error) {
                return res.status(403).json({
                    message: error.message
                });
            }
        };
    }
}
export const authController = new AuthController();

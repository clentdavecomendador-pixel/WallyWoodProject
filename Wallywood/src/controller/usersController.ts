import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { prisma } from "../prisma.js";


class UsersController {
    createUser = async (req: Request, res: Response) => {
        const { firstname, lastname, email, password, role, isActive, createdAt} = req.body;

        const hashedPassword = await bcrypt.hash(password, 10)

        try {
            const data = await prisma.user.create({
            data:  {
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: hashedPassword,
                role: role,
                isActive: isActive,
                createdAt: createdAt
            }
         })
         return res.status(200).json(data)
        } catch (error) {
            console.error(`we cant get the id youre looking for: ${error}`)
        }
    };

    getUser = async (req: Request, res: Response) => {
        const { id } = req.params;
        try {
            const data = await prisma.user.findUnique({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(data)
        } catch (error) {
            console.error(`we cant get the id youre looking for: ${error}`)
        }
    };

    getUsers = async (req: Request, res: Response) => {
        try {
            console.time("users")
            const data = await prisma.user.findMany({
                select: {
                    id: true,
                    firstname: true,
                    lastname: true,
                    email: true,
                    password: true,
                    role: true,
                    isActive: true,
                    createdAt: true
                },
                orderBy: {
                    firstname: 'asc' // or desc
                }
            })
            console.timeEnd("users")
            return res.status(200).json(data)
        } catch (error) {
            console.error(`we cant get the id youre looking for: ${error}`)
        }
    };

    updateUsers = async (req: Request, res: Response) => {
        const id = Number(req.params.id)
        const body = req.body

        try {
            const data = await prisma.user.update({
                where: { id },
                data: {
                    firstname: body.firstname, 
                    lastname: body.lastname, 
                    email: body.email, 
                    password: body.password, 
                    role: body.role, 
                    isActive: body.isActive, 
                    createdAt: body.createdAt
                }
            })
            return res.status(201).json(data)
        } catch (error) {
            console.error(`we cant get the id youre looking for: ${error}`)
        }
    };

    deleteUsers = async (req: Request, res: Response) => {
        const id = Number(req.params.id);

        try {
            await prisma.user.delete({
                where: {id}
            })
            return res.status(200).json({
                message: `Users nr. ${id} is deleted`
            })
        } catch (error) {
            console.error(`we cant get the id youre looking for: ${error}`)
        }
    }
}

export const usersController = new UsersController;
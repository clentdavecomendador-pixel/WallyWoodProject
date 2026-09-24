import { Request, Response } from "express";
import { prisma } from "../prisma.js";

class Cartlines {
    createCartlines = async (req: Request, res:Response) => {
        const { userId, posterId, quantity, createdAt } = req.body;
        try {
            const data = await prisma.cartline.create({
                data: {
                    userId: Number(userId),
                    posterId: Number(posterId),
                    quantity: Number(quantity),
                    createdAt: createdAt
                }
            })
            return res.status(200).json(data)
        } catch (error) {
            console.error(`Could not create a post: ${error}`)
        }
    };

    getCartline = async (req: Request, res: Response) => {
        const { id } = req.params;
        try {
            const data = await prisma.cartline.findUnique({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(data)
        } catch (error) {
            console.error(`we cant get the id youre looking for: ${error}`)
        }
    };

    getCartlines = async (req: Request, res: Response) => {
        try {
            console.time("cartline")
            const data = await prisma.cartline.findMany({
                select: {
                    id: true,
                   userId:true,
                   posterId: true,
                   quantity: true, 
                   createdAt: true
                },
               orderBy: {
                userId: 'asc'
               }
            })
            console.timeEnd("cartline")
            return res.status(200).json(data)
        } catch (error) {
            console.error(`we cant get the id youre looking for: ${error}`)
        }
    };

    updateCartlines = async (req: Request, res: Response) => {
        const id = Number(req.params.id)
        const body = req.body
        try {
            const data = await prisma.cartline.update({
                where: { id },
                data: {
                    userId: body.userId,
                    posterId: body.posterId,
                    quantity: body.quantity,
                    createdAt: body.createdAt
                }
            })
            return res.status(201).json(data)
        } catch (error) {
            console.error(`we cant get the id youre looking for: ${error}`)
        }
    };

    deleteCartlines = async (req: Request, res: Response) => {
        const id = Number(req.params.id);

        try {
            await prisma.user.delete({
                where: { id }
            })
            return res.status(200).json({
                message: `Cartline nr. ${id} is deleted`
            })
        } catch (error) {
            console.error(`we cant get the id youre looking for: ${error}`)
        }
    }
}

export const cartlines = new Cartlines
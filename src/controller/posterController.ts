import { Request, Response } from "express";
import { prisma } from "../prisma.js";
import { slugiefy } from "../utils/index.js";

class PosterController {
    createPoster = async(req: Request, res: Response) => {
        const { name, description, image, width, height, price, stock, createdAt, updatedAt} = req.body;
        const slug = slugiefy(name);
        try {
            const data = await prisma.poster.create({
                data: {
                    name: name,
                    slug: slug,
                    description: description,
                    image: image,
                    width: Number(width),
                    height: Number(height),
                    price: Number(price),
                    stock: Number(stock),
                    createdAt: createdAt,
                    updatedAt: updatedAt
                }
            })
            return res.status(200).json(data)
        } catch (error) {
            console.error(`Could not create poster: ${error}`)
        }
    };

    getPoster = async(req: Request, res: Response) => {
        const { id } = req.params;
        try {
            const data = await prisma.poster.findUnique({
                where:{
                    id: Number(id)
                }
            })
            return res.status(200).json(data)
        } catch (error) {
            console.error(`we cant get the id youre looking for: ${error}`)
        }
    };

    getPosters = async(req: Request, res:Response) => {
        try {
            console.time("poster")
            const data = await prisma.poster.findMany({
                select: {
                    id: true,
                    name: true,
                    slug: true,
                    description: true,
                    image: true,
                    width: true,
                    height: true,
                    price: true,
                    stock: true,
                    createdAt: true,
                    updatedAt: true,
                },
                orderBy: {
                    name: 'asc' // or desc
                }
            })
            console.timeEnd("poster")
            return res.status(200).json(data)
        } catch (error) {
            console.error(`we can't get the id you're looking for: ${error}`)
        }
    };

    updatePoster = async(req: Request, res: Response) => {
        const id = Number(req.params.id)
        const body = req.body
        try {
            const data = await prisma.poster.update({
                where: { id },
                data: {
                    name: body.name,
                    slug: body.slug,
                    description: body.description,
                    image: body.image,
                    width: Number(body.width),
                    height: Number(body.height),
                    price: Number(body.price),
                    stock: Number(body.stock),
                    createdAt: body.createdAt,
                    updatedAt: body.updatedAt
                }
            })
            return res.status(201).json(data)
        } catch (error) {
            console.error(`we cant get the id youre looking for: ${error}`)
        }
    };

    deletePoster = async(req: Request, res: Response) => {
        const id = Number(req.params.id)
        try {
            await prisma.poster.delete({
                where: { id }
            })
            return res.status(200).json({
                message: `Poster nr. ${id} is deleted`
            })
        } catch (error) {
            console.error(`we cant get the id youre looking for: ${error}`)
        }
    };
}

export const posterController = new PosterController;
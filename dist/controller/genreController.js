import { prisma } from "../prisma.js";
import { slugiefy } from "../utils/index.js";
class GenreController {
    constructor() {
        this.createRecord = async (req, res) => {
            const { title, createdAt, updatedAt } = req.body;
            const slug = slugiefy(title);
            console.log(slug);
            try {
                const data = await prisma.genre.create({
                    data: {
                        title: title,
                        slug: slug,
                        createdAt: createdAt,
                        updatedAt: updatedAt
                    }
                });
                return res.status(200).json(data);
            }
            catch (error) {
                console.error(`we cant get the id youre looking for: ${error}`);
            }
        };
        this.getRecord = async (req, res) => {
            const { id } = req.params;
            try {
                const data = await prisma.genre.findUnique({
                    where: {
                        id: Number(id),
                    }
                });
                return res.status(200).json(data);
            }
            catch (error) {
                console.error(`we cant get the id youre looking for: ${error}`);
            }
        };
        this.getRecords = async (req, res) => {
            try {
                console.time("genre");
                const data = await prisma.genre.findMany({
                    select: {
                        id: true,
                        title: true,
                        slug: true,
                        createdAt: true,
                        updatedAt: true
                    },
                    orderBy: {
                        title: 'asc' // or desc
                    }
                });
                console.timeEnd("genre");
                return res.status(200).json(data);
            }
            catch (error) {
                console.error(`we cant get the id youre looking for: ${error}`);
            }
        };
        this.updateRecord = async (req, res) => {
            const id = Number(req.params.id);
            const body = req.body;
            try {
                const data = await prisma.genre.update({
                    where: { id },
                    data: {
                        title: body.title,
                        slug: body.slug,
                        createdAt: body.createdAt,
                        updatedAt: body.updatedAt
                    }
                });
                return res.status(201).json(data);
            }
            catch (error) {
                console.error(`we cant get the id youre looking for: ${error}`);
            }
        };
        this.deleteRecord = async (req, res) => {
            const id = Number(req.params.id);
            try {
                await prisma.genre.delete({
                    where: { id },
                });
                return res.status(200).json({
                    message: `Genre nr. ${id} is deleted`
                });
            }
            catch (error) {
                console.error(`we cant get the id youre looking for: ${error}`);
            }
        };
    }
}
export const genreController = new GenreController();

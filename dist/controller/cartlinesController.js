import { prisma } from "../prisma.js";
class Cartlines {
    constructor() {
        this.createCartlines = async (req, res) => {
            const { userId, posterId, quantity, createdAt } = req.body;
            try {
                const data = await prisma.cartline.create({
                    data: {
                        userId: Number(userId),
                        posterId: Number(posterId),
                        quantity: Number(quantity),
                        createdAt: createdAt
                    }
                });
                return res.status(200).json(data);
            }
            catch (error) {
                console.error(`Could not create a post: ${error}`);
            }
        };
        this.getCartline = async (req, res) => {
            const { id } = req.params;
            try {
                const data = await prisma.cartline.findUnique({
                    where: {
                        id: Number(id)
                    }
                });
                return res.status(200).json(data);
            }
            catch (error) {
                console.error(`we cant get the id youre looking for: ${error}`);
            }
        };
        this.getCartlines = async (req, res) => {
            try {
                console.time("cartline");
                const data = await prisma.cartline.findMany({
                    select: {
                        id: true,
                        userId: true,
                        posterId: true,
                        quantity: true,
                        createdAt: true
                    },
                    orderBy: {
                        userId: 'asc'
                    }
                });
                console.timeEnd("cartline");
                return res.status(200).json(data);
            }
            catch (error) {
                console.error(`we cant get the id youre looking for: ${error}`);
            }
        };
        this.updateCartlines = async (req, res) => {
            const id = Number(req.params.id);
            const body = req.body;
            try {
                const data = await prisma.cartline.update({
                    where: { id },
                    data: {
                        userId: body.userId,
                        posterId: body.posterId,
                        quantity: body.quantity,
                        createdAt: body.createdAt
                    }
                });
                return res.status(201).json(data);
            }
            catch (error) {
                console.error(`we cant get the id youre looking for: ${error}`);
            }
        };
        this.deleteCartlines = async (req, res) => {
            const id = Number(req.params.id);
            try {
                await prisma.user.delete({
                    where: { id }
                });
                return res.status(200).json({
                    message: `Cartline nr. ${id} is deleted`
                });
            }
            catch (error) {
                console.error(`we cant get the id youre looking for: ${error}`);
            }
        };
    }
}
export const cartlines = new Cartlines;

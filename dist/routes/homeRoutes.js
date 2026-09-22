import { Router } from "express";
const routes = Router();
routes.get('/', (req, res) => {
    res.send('This is my homepage');
});
export const Home = routes;

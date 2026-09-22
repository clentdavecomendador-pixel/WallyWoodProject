import { Router } from "express";
import { posterController } from "../controller/posterController.js";
const routes = Router();
routes.post('/poster', (req, res) => {
    posterController.createPoster(req, res);
});
routes.get('/poster/:id', (req, res) => {
    posterController.getPoster(req, res);
});
routes.get('/poster', (req, res) => {
    posterController.getPosters(req, res);
});
routes.put('/poster/:id', (req, res) => {
    posterController.updatePoster(req, res);
});
routes.delete('/poster/:id', (req, res) => {
    posterController.deletePoster(req, res);
});
export const Poster = routes;

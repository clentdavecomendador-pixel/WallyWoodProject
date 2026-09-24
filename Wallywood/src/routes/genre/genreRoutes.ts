import { Router } from "express";
import { genreController } from "../../controller/genreController.js";

const routes = Router();

routes.post('/genre', (req, res) => {
    genreController.createRecord(req, res)
})

routes.get('/genre', (req, res) => {
    genreController.getRecords(req, res)
})

routes.get('/genre/:id', (req, res) => {
    genreController.getRecord(req, res)
})

routes.put('/genre/:id', (req, res) => {
    genreController.updateRecord(req, res)
})

routes.delete('/genre/:id', (req, res) => {
    genreController.deleteRecord(req, res)
})

export const Genre = routes;
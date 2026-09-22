import { Router } from "express";
import { cartlines } from "../controller/cartlinesController.js";
const routes = Router();
routes.post('/cartline', (req, res) => {
    cartlines.createCartlines(req, res);
});
routes.get('/cartline/:id', (req, res) => {
    cartlines.getCartline(req, res);
});
routes.get('/cartline', (req, res) => {
    cartlines.getCartlines(req, res);
});
routes.put('/cartline/:id', (req, res) => {
    cartlines.updateCartlines(req, res);
});
routes.delete('/cartline/:id', (req, res) => {
    cartlines.deleteCartlines(req, res);
});
export const Cartlines = routes;

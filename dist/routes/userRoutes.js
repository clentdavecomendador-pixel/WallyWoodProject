import { Router } from "express";
import { usersController } from "../controller/usersController.js";
const routes = Router();
routes.post('/users', (req, res) => {
    usersController.createUser(req, res);
});
routes.get('/users/:id', (req, res) => {
    usersController.getUser(req, res);
});
routes.get('/users', (req, res) => {
    usersController.getUsers(req, res);
});
routes.put('/users/:id', (req, res) => {
    usersController.updateUsers(req, res);
});
routes.delete('/users/:id', (req, res) => {
    usersController.deleteUsers(req, res);
});
export const Users = routes;

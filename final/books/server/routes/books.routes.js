import BookController from "../controllers/books.controller.js";

import Router from "express";

const router = Router();

router.route("/books").get(BookController.all).post(BookController.create);
router.route("/books/:id").get(BookController.get).put(BookController.update).delete(BookController.delete)

export default router;

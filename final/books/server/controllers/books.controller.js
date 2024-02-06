import Book from '../models/books.model.js';

const BookController = {

    all: async (req, res) => {
        Book.find()
            .then(allBooks => res.json(allBooks))
            .catch(err => res.status(400).json(err))
    },
    create: async (req, res) => {
        Book.create(req.body)
            .then(newBook => res.status(201).json(newBook))
            .catch(err => res.status(400).json(err))
    },

    get: (req, res) => {
        Book.findById(req.params.id)
            .then(oneBook => res.status(200).json(oneBook))
            .catch(err => res.status(400).json(err))
    },

    update: (req, res) => {
        Book.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
            .then(updatedBook => res.status(200).json(updatedBook))
            .catch(err => res.status(400).json(err))
    },
    delete: (req, res) => {
        Book.findByIdAndDelete(req.params.id)
            .then(() => res.status(200).json({message: "Successfully deleted"}))
            .catch(err => res.status(400).json(err))
    }

}

export default BookController;
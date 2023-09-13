// import model
const Author = require("../models/author.model");

// Server Test:

module.exports.apiTest = (req, res) => {
    res.json({ message: "Server is working!" });
};

// 2 export all functions with placeholder

// Create One
module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
        .then((newAuthor) => res.json(newAuthor))
        .catch((err) => res.status(400).json(err));
};

// Read All
module.exports.allAuthor = (req, res) => {
    Author.find()
        .then((authorList) => res.json(authorList))
        .catch((err) => res.status(400).json(err));
};

// Read One
module.exports.oneAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then((oneAuthor) => res.json(oneAuthor))
        .catch((err) => res.status(400).json(err));
};

// Update One
module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true, // Enabling validation step
    })
        .then((updatedAuthor) => res.json(updatedAuthor))
        .catch((err) => res.status(400).json(err));
};

// Delete One
module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then((status) => res.json(status))
        .catch((err) => res.status(400).json(err));
};

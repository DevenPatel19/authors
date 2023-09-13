// Define a DB structure with our models

// ! 1 import Mongoose

const mongoose = require("mongoose");

// ? 2. Define the schema with keys + validations

const AuthorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Author name is required!"],
            minlength: [2, "Must be 2+ characters in length"],
        },
    },
    { timestamps: true }
);

// * 3. Create a model with the schema and export it

const author = mongoose.model("author", AuthorSchema);

module.exports = author;

// favorite: {
//     type: Boolean,
//     default: false,
// }

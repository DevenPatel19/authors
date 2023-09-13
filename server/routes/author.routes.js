// Import the controller
const AuthorController = require("../controllers/author.controller");

module.exports = (app) => {
    // Get requests
    //  Test
    app.get("/api/test", AuthorController.apiTest); // Get all route
    app.get("/api/authors", AuthorController.allAuthor);

    // Get one by ID
    app.get("/api/authors/:id", AuthorController.oneAuthor);

    // Post Requests
    app.post("/api/authors/", AuthorController.createAuthor);

    // 	Put Requests
    // ? Put vs Patch?
    // ? Put sets the entire data entry and patch only does a piece
    app.put("/api/authors/:id/edit", AuthorController.updateAuthor);

    // Delete Requests
    app.delete("/api/authors/:id", AuthorController.deleteAuthor);
};

// 3 Import routes to our server!

// module.exports = router;

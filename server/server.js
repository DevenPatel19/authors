// STEP 1 IMPORT DEPENDENCIES
const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.port;

const cors = require("cors");

// STEP 2 CONFIGURE EXPRESS
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require("./config/mongoose.config");

// STEP 3 ROUTES
// const routes = require("./routes/movie.routes");
// routes(app);
const routes = require("./routes/author.routes")(app);
// routes(app); chose single line method

// 4 Listen to Port
// this needs to be below the other code blocks - listen
app.listen(PORT, () => console.log(`🎈🎈🎈 Listening on port: ${PORT}`));

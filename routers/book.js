const bookC = require("../controllers/book");

const router = require("express").Router();

router.get("/", bookC.ThreeBookController);

router.get("/books", bookC.bookController);

module.exports = router;

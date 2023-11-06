const router = require("express").Router();
const {findAllBooks, detailBook, tambahBuku, hapusBuku, updateBuku} = require("../controllers/BookControllers");

router.get("/books", findAllBooks);
router.get("/findbook", detailBook);
router.post("/books", tambahBuku);
router.delete("/hapus", hapusBuku);
router.put("/up", updateBuku);

module.exports = router;
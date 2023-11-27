const { Book } = require("../models");
const findAllBooks = async (req, res) => {
        // AMBIL DATA DARI DATABASE
        const data = await Book.findAll();


        // tampilkan
        res.json({
            message: "ini dari router",
            data: data,
        });
}

const detailBook = async (req, res) => {
  try {
    const response = await Book.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
    // //get id dari request
    // let id = parseInt(req.body.id);

    // // AMBIL DATA DARI DATABASE
    // const data = await Book.findByPk(id);

    // // tampilkan
    // res.json({
    //     message: "ini dari router",
    //     data: data,
    // });
}

const tambahBuku = async (req, res) => {
    try {

    const data = req.body;

    const result = await Book.create(data);
        // insert ke database
        // tampilkan status
        res.json({
            result: result,
        });
    }catch (error) {
        res.json({
            message: "error :" + error,
        });
    }
}

const hapusBuku = async (req, res) => {
    try {
      // ambil data dari database
      const id = req.body.id;

      // hapus data dari database
      const result = await Book.destroy({
        where: {
          id: id,
        },
      });

      // tampilkan status
      res.json({
        message: "berhasil dihapus",
      });
    } catch (error) {
    res.json({
      message: "error : " + error,
     });
    }
};

const updateBuku = async (req, res) => {
  try {
    // ambil data dari database
    const id = req.body.id;

    // hapus data dari database
    const result = await Book.update({
        newData,
    }, {
      where: {
        id: id,
      },
    });

    // tampilkan status
    res.json({
      message: "berhasil update Mantap!!!",
      data: newData,
    });
  } catch (error) {
    res.json({
      message: "error : " + error,
    });
  }
};
module.exports = { findAllBooks, detailBook, tambahBuku, hapusBuku, updateBuku};
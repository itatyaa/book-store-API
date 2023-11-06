const express = require('express');
// const mysql = require("mysql");

const app = express()
const port = 5656
app.use(express.json());

const router = require("./routes/index");
app.use(router);

// var db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     database: "BOOK-STORE-API",
//     password: "",
// });

// db.connect( function (err) {
//     if (err) throw err;
//     console.log("Connected!");
// });

// app.get("/users", (req,res) => {
//     //koneksi
//     db.query("select * from users", (req,result) =>{
//         res.json(result);
//     });


//     //ambil data


//     //tampilkan
// });

// app.get('/users/:id', async (req,res) => {
//     let id = parseInt(req.params.id)

//     try {
//         const query = "Select * from users where id = ?";

//     db.query(query, [id], (err, result) => {
        
//         if (result.length === 0) {
//             return res.status(404).json({
//                 message : "Data Not Found",
//             });
//         } else {
//             res.json({
//                 data : result[0],
//             });
//         }
//     })

//     } catch (error) {
//         return res.status(404).json({
//             message : "Error DataBase nya..",
//         });
//     }

//     res.send("Ini adalah id :" + id)
// });

// app.post("/users", async (req, res) => {
//     let data = req,body;

//     const query =
//     "INSERT INTO public.users(user_id, nama, alamat) VALUES ($1, $2, $3;";
//     client.query(query, [data.id, data.nama, data.alamat]);
// })

app.listen(port, () => console.log('Server running on port ${port}'));
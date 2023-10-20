const express = require('express')

const app = express()
const port = 2222

app.get('/SeblakIyam',(req,res) =>{
    res.json({
        message: "Seblak Iyam",
    });
})
app.post('/SeblakIyam',(req,res) =>{
    res.json({
        message: "Seblak Lada",
    });
})
app.get("/SeblakIyam", (req, res) => {
    res.json({
        message: "Seblak Yayah",
    });
});
app.delete('/SeblakIyam',(req,res) =>{
    res.json({
        message: "Seblak Tidak Tersedia",
    });
})

const data_users = [
    { id: 1, name: "Chandra", alamat: "Sukabumi" },
    { id: 2, name: "Arga", alamat: "Bandung" },
    { id: 3, name: "Jaya", alamat: "Jakarta" },
    { id: 4, name: "Alfarel", alamat: "Bandung" },
];

app.get("/jambul", (req, res) => {
    const data = data_users;

    let result = {
        status: 200,
        data: data,
    };

    res.json(result);
});
app.get("/jambul/:id", (req, res) => {

    let id = parseInt(req.params.id);

    let result;
    const user = data_users.find((user) => user.id === id);
    if (user) {
        result = {
        status: 200,
        data: user,
        };
    } else {
        res.status(404).json({ error: "User not found" });
    }
    res.json(result);
    })
app.listen(port,() => console.log(`Server running on port ${port}`))
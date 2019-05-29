const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path")
const bodyParser = require("body-parser");
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./backend/database.db")

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.listen(port, () => {
    console.log(`Server started on port : ${port}`);
})
app.use(express.static(__dirname + '/../frontend'));

app.get('/', (req, res) => {
    res.render('index.html')
})

app.get('/manage', (req, res) => {
    res.sendFile(path.join(__dirname + '/../frontend/manage.html'))
})

app.get('/signin', (req, res) => {
    res.sendFile(path.join(__dirname + '/../frontend/login.html'))
})

app.get('/item', (req, res) => {
    const sql = 'SELECT * FROM Items'
    db.all(sql, (err, data) => {
        if (err) throw err;
        console.log("data berhasil di ambil");
        res.json(data)
    })
})

app.get("/item/:id", (req, res) => {
    const sql = "SELECT * FROM Items WHERE id = ?"
    const params = req.params.id

    db.get(sql, params, (err, data) => {
        if (err) throw err;
        console.log('data berhasil di ambil')
        res.json(data, { "message": 'data-view by id' })
    })
})

app.post("/item", (req, res) => {
    const sql = "INSERT INTO Items(productName,price,category,stock) values(?,?,?,?)"
    const params = [req.body.productName, req.body.price, req.body.category, req.body.stock]

    db.run(sql, params, (err, data) => {
        if (err) throw err;
        console.log('data berhasil di tambah')
        res.json(data)
    })
})

app.put("/item/:id", (req, res, ) => {
    const sql = `UPDATE Items SET 
      productName = ?,
      price = ?, 
      category = ?,
      stock = ?
      where id = ?`
    const params = [req.body.productName, req.body.price, req.body.category, req.body.stocks, req.params.id]

    db.run(sql, params, (err, data) => {
        if (err) throw err;
        console.log('data berhasil di edit')
        res.json(data)
    })

})

app.delete("/item/:id", (req, res, ) => {
    const sql = "DELETE FROM Items where id = ?"
    const params = req.params.id

    db.run(sql, params, (err, data) => {
        if (err) throw err;
        console.log('data berhasil di hapus')
        res.json(data)
    })
})

app.get("/users/signin/:email", (req, res) => {
    const sql = "select * from users where email = ?"
    const param = req.params.email

    db.get(sql, param, (err, data) => {
        if (err) throw err;
        console.log("berhasil login")

        res.json(data)
    })
})

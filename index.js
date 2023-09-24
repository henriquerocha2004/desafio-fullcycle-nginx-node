const express = require('express')
const app = express()
app.set('view engine', 'ejs');
app.set('views', './views');
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

const mysql = require('mysql2')
const connection = mysql.createConnection(config)
const sql = `INSERT INTO people (name) VALUES ('Henrique Rocha')`
connection.query(sql)


app.get('/', (req, res) => {

   const results = connection.query(`SELECT * FROM people`, (err, results, fields) => {
        res.render('index', {peoples: results})
    })
    
})

app.listen(3000, () => console.log('Rodando ....'))
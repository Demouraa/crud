const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '140431Mg',
    database : 'users'
});

connection.connect();

/**Create */
app.post('/users', function(req, res){
	console.log(req.body); 
    const data = {
        name: req.body.name,
        age: req.body.age
    };
    
    connection.query('INSERT INTO persons SET ?', data, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send({
            status: 'Data sent sucessfuly!',
            id: null,
            name: req.body.name,
            age: req.body.age
        });
    });
});

/**Read */
app.get('/users', function(req,res) {
    connection.query('SELECT * FROM persons', (err, result)=> {
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});

/**Update */
app.put('/users/:id', function(req, res) {
    let data = req.body;
    connection.query(`UPDATE USERS SET ? WHERE ID = ${req.params.id}`, dados, function(error, result){
        res.send('Got a PUT request at /users/:id');
    });
});



/**Delete */
app.delete('/users/:id', function (req, res) {
    connection.query(`delete from persons where id=${req.params.id}`, (err, result) => {
        if(err) console.log(err);
        res.send('Got a DELETE request at /user');
        console.log(`ID ${req.params.id} deletado com sucesso`)
    })
});

app.listen(5000, () => {
    console.log('Server running in port 5000')
});
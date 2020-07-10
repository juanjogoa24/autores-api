require('./config/config');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/usuario', function(req, res) {
    res.json([{
            "nombre": "Jhon Smith",
            "twiter": "@jhonsmith",
            "blog": "http://www.johns-blog.com/",
            "id": 1,
            "idArt": 1,
            "titulo": ""
        },
        {
            "nombre": "Max Rules",
            "twiter": "@max_rules",
            "blog": "http://www.johns-blog.com/",
            "id": 2,
            "idArt": 2,
            "titulo": ""
        }
    ]);
});



app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});
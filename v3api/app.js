const express = require('express')
const app = express()
const PORT = 3000

app.listen(PORT, ()=> {
    console.log('Hello API');
})

app.get('/', function(req,res) {
    res.send('hello, world');
})

app.get('/v2/:name', function(req,res) {
    res.send('hello, ' + req.params.name);
})

app.get('/v3/:name/json/:lang', function(req,res) {
    const lang = req.params.lang
    if (lang == 'pt-br') {
        res.json(
            {
                msg: 'Oi, ' + req.params.name
            }
        );
    }
    else if (lang == 'en') {
        res.json({
            msg: 'Hi, ' + req.params.name
          });
    }
    else if (lang == 'es') {
        res.json({
            msg: 'Hola, ' + req.params.name
        });
    }
    else {
        res.json("Inválido");
    }
})


app.get('/v3/:name/:lang', function(req,res) {
    const lang = req.params.lang
    if (lang == 'pt-br') {
        res.send('Oi, ' + req.params.name);
    }
    else if (lang == 'en') {
        res.send('Hi, ' + req.params.name);
    }
    else if (lang == 'es') {
        res.send('Hola, ' + req.params.name);
    }

    else {
        res.send("Inválido");
    }
})

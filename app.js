const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Conexão com banco de dados
mongoose.connect('mongodb+srv://gabiz:root@apicluster.xiwf2.mongodb.net/web3-trab?retryWrites=true&w=majority');
//Confirmar conexão
mongoose.connection.on('connected', function () {
    console.log('Connected to Database');
});
// Mensagem de Erro
mongoose.connection.on('error', (err) => {
    console.log('Database error ' + err);
});

app.use(bodyParser.json());

let port = 5000;
app.listen(process.env.port || port, () => {
    console.log('Servidor em execução no porto: ' + port);
});

// ‘END POINT INVÁLIDO!’
app.get('/', function (req, res) {
    res.send('Endereço inválido!');

});

const routes = require('./routes/api');
app.use('/api', routes);

app.use(function(err, req, res, next){
    console.log(err);
   res.status(422).send({error: err.message});
 });
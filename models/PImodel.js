const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PISchema = new Schema({
    nome: {
        type: String,
        required: [true, '*Campo obrigatório!']
    },
    sobrenome: {
        type: String
    },
    idade: {
        type: Number
    },
    sexo: {
        type: String
    }
});
const PI = mongoose.model('usuario', PISchema);
module.exports = PI;
const { Schema, model} = require('mongoose');

const esquemaUsuario = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    genero: String,
    fecha: {
        type: Date,
        default: Date.now
    }
},{
    timestamps: true
});

module.exports = model('Usuario', esquemaUsuario);
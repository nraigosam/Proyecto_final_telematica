const mongoose = require('mongoose');

console.log(process.env.MONGODB_URI);
const URI = process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb://localhost/database_test' ;

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const conexion = mongoose.connection;

conexion.once('open', ()=> {
    console.log('DB conectada');
});
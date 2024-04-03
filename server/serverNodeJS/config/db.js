const mongoose = require('mongoose');

const local = "mongodb+srv://duylh17:SCccEuvJPCG6M9LZ@cluster0.0n8qgpd.mongodb.net/md18303";

const connect = async () => {
    try {
        await mongoose.connect(local);
        console.log('Connect success');
    } catch (error) {
        console.error('Connection to MongoDB failed:', error);
    }
}

module.exports = { connect };

const mongoose = require('mongoose');
const uri = "mongodb+srv://fdsalva:over38416960@cluster0.e0uhk.mongodb.net/origen?retryWrites=true&w=majority";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
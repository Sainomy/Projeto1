const mongoose = require("mongoose");

const uri = "mongodb+srv://sainomy:aluno@cluster0.7b55y.mongodb.net/anime";

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set("useFindAndModify", false);

module.exports = mongoose;
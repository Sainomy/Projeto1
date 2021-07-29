const moongoose = require("mongoose");

const url = "mongodb+srv://sainomy:<password>@cluster0.7b55y.mongodb.net/projeto1";

moongoose.connect(url, {useNewUrlParse: true, useUnfledTopology: true});
moongoose.set("useFindAndModify", false);

module.exports = mongoose;
var Usuario = require("../model/Usuario");

async function abreAdd(req, res){
    res.render("usuario/add.ejs", {});
}

async function add(req, res){
    let nome = req.body.nome;
    let email = req.body.email;
    let senha = req.body.senha;
    let foto = req.body.foto;

var novoUsuario = new Usuario({
    nome:nome,
    email:email,
    senha:senha,
    foto:foto,
});
novoUsuario.save(function(err){
    if(err){
        console.log("O erro que aconteceu foi: " + err);
    } else {
        res.render("Usuario/list.ejs", req.body);
    }
 });
}

async function listar(req, res){
    res.send("Oi mundo!");
}

async function listarFiltro(req, res){}

async function abreEdt(req, res){}

async function edt(req, res){}

async function del(req, res){}

module.exports = {
    add,
    abreAdd,
    listar,
    listarFiltro,
    abreEdt,
    edt,
    del,
}
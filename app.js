const express =require("express");
const path =require("path");

const app = express(); 
//configuración ´public, para disponibilizar la carpeta public para el front
app.use(express.static(path.resolve(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname,"./views/home.html"));
});
app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname,"./views/register.html"));
});

app.get("/register/:idRegister" ,(req, res)=>{
    res.send("Bienvenidos al registro número" + req.params.idRegister)
});
app.get("/register/:idRegister/comentario", (req, res)=>{
    res.send("Bienvenidos al comentario del registro número" + req.params.idRegister)
});
app.get("/register/:idRegister/comentario/:idComentario?", (req,res)=>{
    res.send("Bienvenidos al comentario del registro número " + req.params.idRegister + req.params.idComentario)
});
app.listen(process.env.PORT || 3000,function(){
    console.log("server corriendo en el puerto 3000")

})

let express = require("express"); //Inyeccion de la dependencia
let router = express.Router(); //Instalacion del router

router.get("/student", (req, res) => {
  res.render("student");
});
//Renderzamos la informacion en display del metodo send al render
router.post("/addStudent", (req, res) => {
  res.render("displayData", {
    nss: req.body.nss,
    nombre: req.body.nombre,
    edad: req.body.edad,
    tipoSangre: req.body.tipoSangre,
  });
});
//Y aqui lo hacemos por el metodo post

//Ahora parseamos las peticiones que contienen un JSON.
//Esto se mostrara en la terminal
router.post("/personJson", express.json({ type: "*/*" }), function (req, res) {
  console.log(`Nombre: ${req.body.Nombre} Apellido: ${req.body.Apellido}`);
});

//Y despues la renderoizamos la vista
router.get("/testJson", function (req, res) {
  res.render("testJson");
});
module.exports = router;

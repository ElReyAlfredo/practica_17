let express = require("express");
let router = express.Router();

router.post("/addStudent", (req, res) => {
  res.render("displayData", {
    nombre: req.body.nombre,
    edad: req.body.edad,
    nss: req.body.nss,
    tipoSangre: req.body.tipoSangre,
  });
});
// Para poder renderizar la información en displayData cambiamos el metodo send al render y lo convertimos a 4 keys
// también usamos el metodo post

module.exports = router;

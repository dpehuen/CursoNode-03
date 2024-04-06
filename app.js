const { crearArchivo } = require("./helpers/multiplicar");
const colors = require("colors");
const argv = require("./config/yargs");

console.clear();

crearArchivo(argv.b, argv.l,argv.h)
  .then((crearArchivo) => console.log(crearArchivo.rainbow, "Creado"))
  .catch((err) => console.log("Error al Crear el archivo: ", err));

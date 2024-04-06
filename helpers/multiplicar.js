const fs = require("fs");
const { resolve } = require("path");
const colors = require("colors");

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    let salida = "";

    for (let i = 0; i <= hasta; i++) {
      salida += base + " x " + i + " = " + base * i + "\n";
    }

    if (listar) {
      console.log(salida);
    }
    // Guardar el resultado en un archivo de texto

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt Creada`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};

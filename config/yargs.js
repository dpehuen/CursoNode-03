const argv = require("yargs")
  .option("b", {
    alias: "base",
    demandOption: true,
    type: "number",
    describe: "Es la base de la tabla de multiplicar",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    demandOption: true,
    default: false,
    describe: "Lista los numeros en vez de hacerlos multiplicar",
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    default: 10,
    describe: "Lista los numeros hasta donde multiplicar",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base debe ser un número";
    }
    return true;
  }).argv;

module.exports = argv;

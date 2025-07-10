console.log("soy Dylan Ore y este es el trabajo de Node.js para PDI (La mejor materia)");
import chalk from "chalk";
import { format } from "date-fns";

console.log(chalk.green("Hola, soy Dylan Ore"));

const hoy = new Date();
console.log(chalk.blue(format(hoy, "10/06/2025")));

const fechaEntrega = new Date(2025, 6, 15);
if (hoy <= fechaEntrega) {
  console.log(chalk.yellow(format(fechaEntrega, "15/06/2025")));
} else {
  console.log(chalk.red(format(fechaEntrega, "15/06/2025")));
}
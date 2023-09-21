const http = require("http");
const chalk = require("chalk");

const host = "localhost";
const port = 8000;

const servidor = http.createServer((_req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  const respuesta = JSON.stringify({
    nombre: "Yanet Olmedo",
    mensaje: "¡Hola Colombia, saludos desde Argentina!",
  });
  res.end(respuesta);
});

servidor.listen(port, host, () => {
  console.log(chalk.green(`Servidor escuchando en http://${host}:${port}`));
});

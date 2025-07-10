import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ mensaje: "Bienvenido a la API de boosme" });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
// Rutas para entidad "habitos"

// GET para todos los productos
app.get("/habitos", (req, res) => {
    res.json({ mensaje: "Esta es la ruta GET de mi entidad habitos" });
  });
  
  // POST para crear un producto
  app.post("/habitos", (req, res) => {
    res.json({ mensaje: "Esta es la ruta POST de mi entidad habitos" });
  });
  
  // PUT para actualizar un producto
  app.put("/habitos", (req, res) => {
    res.json({ mensaje: "Esta es la ruta PUT de mi entidad habitos" });
  });
  
  // DELETE para eliminar un producto
  app.delete("/habitos", (req, res) => {
    res.json({ mensaje: "Esta es la ruta DELETE de mi entidad habitos" });
  });
  export default router;
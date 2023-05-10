import express from 'express';
import { makeRequest } from './operations.js';
import config from './config.js';
import ejs from 'ejs';

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('formulario');
});

app.post('/submit', async (req, res) => {
    const nombre = req.body.nombre;
    const escenario = req.body.escenario;
  
    const prompt = `Construye una historia de no mas de tres oraciones con ${nombre} y... ${escenario}.`;
  
    try {
      const response = await makeRequest(prompt);
      res.render('historia', { prompt, response });
    } catch (error) {
      res.send(error.message);
    }
  });  

app.listen(3000, () => {
  console.log('Servidor iniciado en http://localhost:3000');
});

export default app;

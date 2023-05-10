const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = 3000;

let submissions = [];

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/form', (req, res) => {
  res.render('form');
});

app.post('/submit-form', (req, res) => {
  const { name, escenario } = req.body;
  const story = `Esta es una historia sobre ${name} en un escenario ${escenario}.`;
  submissions.push({ name, escenario, story });
  console.log(`Formulario enviado con éxito: ${name} ${escenario}`);
  res.redirect('/data');
});

app.get('/form-submitted', (req, res) => {
  res.render('form-submitted');
});

app.get('/data', (req, res) => {
  const latestSubmissions = submissions.slice(Math.max(submissions.length - 5, 0));
  res.render('data', { data: latestSubmissions });
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});


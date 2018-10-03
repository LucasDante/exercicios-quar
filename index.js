const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/episodios', (req, res) => {
    res.render('espisodios');
});

app.get('/filmes', (req, res) => {
    res.render('filmes');
});

app.get('/quem-seremos', (req, res) => {
    res.render('quem-seremos');
});

app.listen(3000, () => {
    console.log('Servidor inicializado.');
});

const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Rota exata para os arquivos index (evita redirecionamento para /nome/)
app.get('/recomeco', (req, res) => res.sendFile(path.join(__dirname, 'recomeco', 'index.html')));
app.get('/quiz', (req, res) => res.sendFile(path.join(__dirname, 'Quiz', 'index.html')));

// Servir pastas de cada site (para assets)
app.use('/recomeco', express.static(path.join(__dirname, 'recomeco'), { redirect: false }));
app.use('/quiz', express.static(path.join(__dirname, 'Quiz'), { redirect: false }));
app.use('/public', express.static(path.join(__dirname, 'public')));

// Rota raiz
app.get('/', (req, res) => {
  res.redirect('/recomeco');
});

app.listen(PORT, () => {
  console.log(`\n🚀 Servidor voando em http://localhost:${PORT}`);
  console.log(`📍 Workshop: http://localhost:${PORT}/recomeco`);
  console.log(`📍 Quiz: http://localhost:${PORT}/quiz\n`);
});

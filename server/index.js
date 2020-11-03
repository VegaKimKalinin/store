const express = require('express');
const app = express();

const manifest = require('../dist/manifest.json');
const webpackAsset = (main) => manifest[main.js];
app.use(express.static('dist'));
app.set('views', __dirname);
app.set('view engine', 'ejs');

app.get('*', (req, res) => {
  res.render('index', { webpackAsset });
});

app.listen(8080, () => {
  console.log('Server listening on 8080');
});

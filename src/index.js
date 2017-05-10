const express = require('express');
const app = express();
const path = require('path');

app.set('port', (process.env.PORT || 5000));

app.use('/img', express.static(path.join(__dirname, 'img/')));
app.use('/js', express.static(path.join(__dirname, 'js/')));
app.use('/css', express.static(path.join(__dirname, 'css/')));

console.log(__dirname)
app.get('/', (request, response) => response.sendFile(path.join(__dirname, 'index.html')));

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});

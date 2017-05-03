const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 5000));

app.use('/static', express.static(`${__dirname}/src`));

app.get('/', (request, response) => response.sendFile(`${__dirname}/src/index.html`));

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});

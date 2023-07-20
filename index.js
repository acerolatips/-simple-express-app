const express = require('express');
const logger = require('morgan')
const app = express();
const port = 3000;

app.use(logger('tiny'))
app.get('/', (req, res) => {
  res.send('Hello App Runner!');
  console.log("Hello App Runner!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

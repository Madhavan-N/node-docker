const express = require('express');
const PORT = 8080;
const app = express();
app.get('/', (req, res, next) => {
  res.send('Hello From Node application');
});
app.listen(PORT, () => console.log(`server listening to ${PORT}`));
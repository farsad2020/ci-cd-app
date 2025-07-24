const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Todo API is working!');
});

app.listen(port, () => {
  console.log(`Todo backend listening at http://localhost:${port}`);
});

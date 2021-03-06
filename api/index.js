const app = require('./lib/server');
const port = 8000;

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
})

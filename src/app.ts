import express from 'express';
import connectDB from './conf/config';

connectDB();
const app = express();
const port = process.env.PORT || 5000;


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

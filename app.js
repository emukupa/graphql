// instantiate an app from the Server
const app = require('./server');

const port = 5000;
app.listen(port, err => {
  console.log(`Server is running on ${port}`);
})

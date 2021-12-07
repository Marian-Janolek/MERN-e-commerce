const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/user');

dotenv.config();
connectDB = mongoose.connect;

app.use('/api/users', userRoute);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
      .then(() => console.log('Successful connected to DB'))
      .catch((err) => console.log(err));
    app.listen(port, console.log(`Server is running on port : ${port}`));
  } catch (error) {
    console.log(error);
  }
};
start();
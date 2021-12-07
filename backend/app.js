const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');
const cartRoute = require('./routes/cart');
const orderRoute = require('./routes/order');
const morgan = require('morgan');

dotenv.config();
connectDB = mongoose.connect;
app.use(morgan('tiny'));

app.use(express.json());

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use('/api/carts', cartRoute);
app.use('/api/orders', orderRoute);

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

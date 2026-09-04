const http = require('http');
const express = require('express');

const app = express();

const userRouter = require('./routes/userRoutes');
const productRouter = require('./routes/productRoutes');
const cartRouter = require('./routes/cartRoutes');

// Use the routers
app.use('/users', userRouter);
app.use('/products', productRouter);
app.use('/cart', cartRouter);

// Create server
const server = http.createServer(app);

// Start server
server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
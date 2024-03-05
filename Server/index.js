// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Cart = require('./Models/Cart'); // Fix the path to your model

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/hluleka', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });

// Define route to handle POST requests
app.post("/Cart", async (req, res) => {
    try {
      // Create a new Cart instance from the request body
      let cart = new Cart(req.body);
  
      // Save the cart to the database
      let result = await cart.save();
  
      // Send the result as the response
      res.send(result);
    } catch (error) {
      console.error('Error saving cart:', error.message);
      res.status(500).send('Internal Server Error');
    }
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


// Close MongoDB connection when the Node.js process exits
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('MongoDB connection closed');
    process.exit(0);
  });
});

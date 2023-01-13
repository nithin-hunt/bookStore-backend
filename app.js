const express = require("express");
const app = express();

const {connectDB} = require("./config/db");

const PORT = process.env.PORT || 5000;

app.use(express.json());

const start = async () => {
    try {
      await connectDB();
      app.listen(PORT, () =>
        console.log(`Server is listening on port ${PORT}...`)
      );
    } catch (error) {
      console.log(error);
    }
  };
  
  start();
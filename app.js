const express = require("express");
const app = express();

const {connectDB} = require("./config/db");

const bookRoutes = require("./routes/book");

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/api/v1/books", bookRoutes);

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
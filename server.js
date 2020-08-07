const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const routes = require("./src/routes/index");

app.use((req, res, next) => {
  res.header("Smart Buddy Test App");
  next();
});

app.use(routes);
app.listen(port, console.log(`Server running on port ${port}`));

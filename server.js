const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

db.once("open", () => {
  app.listen(port, () => {
    console.log(`listening on pirt ${port}`);
  });
});

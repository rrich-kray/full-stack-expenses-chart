const express = require("express");
const path = require("path");
const sequelize = require("./db/connection");
const PORT = process.env.PORT || 3001;
const routes = require("./routes/api.js");
const cors = require("cors");

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`);
  });
});

// trying to make a request through port 3000, server is on 3001

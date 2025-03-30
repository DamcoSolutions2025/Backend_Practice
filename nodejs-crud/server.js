const express = require("express");
const api = require("./api.js");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoutes = require("./src/routes/user.routes.js");
const productRoutes = require("./src/routes/product.routes.js");
const port = 3000;
const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(
  express.json({
    limit: "16kb",
  })
);

app.use(
  express.urlencoded({
    extended: true,
    limit: "16kb",
  })
);

app.use(express.static("public"));

app.listen(port, function () {
  console.log("Server is listening at port:" + port);
});

app.use(cookieParser());

app.use("/api/user", userRoutes);
app.use("/api/product", productRoutes);

const express = require("express");
const colors = require("colors");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const multer = require("multer");

const connectDB = require("./config/db");

require("dotenv").config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.set("view engine", "ejs");

const home = require("./routes/home");
const allroutes = require("./routes/routes");
app.use("/", home);
app.use("/api", allroutes);

// app.use("/images", express.static(path.join(__dirname, "public/images")));

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "public/images");
//   },
//   filename: (req, file, cb) => {
//     cb(null, req.body.name);
//   },
// });

// const upload = multer({ storage: storage });
// app.post("/api/upload", upload.single("file"), (req, res) => {
//   try {
//     return res.status(200).json("File uploded successfully");
//   } catch (error) {
//     console.error(error);
//   }
// });

const port = 8080;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

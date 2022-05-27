const express = require("express");
const app = express();
const port = 504;

app.get("/", (req, res) => res.send("portofolio"));

app.listen(port, () => console.log('Aplikasi berjalan di port ${port}'));

const express = require("express");

const app = express();

app.get("/", (_req, res) => res.send("<h1>Server is running....</h1>"));

const PORT = process.env.PORT | 5000;
app.listen(PORT, () => console.log(`SERVER LISTENING ON PORT ${PORT}`));

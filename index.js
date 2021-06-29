const express = require("express");
const app = express();
const DATA = require("./DATA.json");
let PORT = process.env.PORT || 3000;

// Home route
app.get("/", (req, res) => {
  res.send("HELLO I AM RUNNING....");
});

// get data with name
app.get("/:name", (req, res) => {
  try {
    DATA.laureates.forEach((laureate) => {
      const fname = laureate.firstname;
      const sname = laureate.surname;
      const fullname = fname.concat(sname).toUpperCase();
      const usrqryname = req.params.name.toUpperCase();
      if (usrqryname == fullname) {
        res.status(200).send(laureate);
        console.log("Can do shit");
      }
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});

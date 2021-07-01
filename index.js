const alasql = require("alasql");
const express = require("express");
const app = express();
const DATA = require("./DATA.json");
let PORT = process.env.PORT || 3000;

// Home route
app.get("/", (req, res) => {
  res.send("<h1>This is an API without a DATABASE, Please see <a href= \"https://www.github.com/code-reaper08/NAPI\">here</a> for more deatails of the routes to request</h1>");
});

// get data with name
app.get("/name/:name", (req, res) => {
  try {
    DATA.laureates.forEach((laureate) => {
      const fname = laureate.firstname;
      const sname = laureate.surname;
      const fullname = fname.concat(sname).toUpperCase();
      const usrqryname = req.params.name.toUpperCase();
      if (usrqryname == fullname) {
        res.status(200).send(laureate);
      }
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// get all data based on born country code
app.get("/bornat/:CC", (req, res) => {
  try {
    const CCqry = req.params.CC;
    var values = Object.values(DATA.laureates);
    const result = alasql("SELECT * FROM ? WHERE bornCountryCode = ? ", [
      values,
      CCqry,
    ]);
    res.status(200).json(result);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

// get all data based on died at country code
app.get("/diedat/:DCC", (req, res) => {
  try {
    const DCCqry = req.params.DCC;
    var values = Object.values(DATA.laureates);
    const result = alasql("SELECT * FROM ? WHERE diedCountryCode = ? ", [
      values,
      DCCqry,
    ]);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
// get all data based on Gender
app.get("/gender/:GEN", (req, res) => {
  try {
    GENqry = req.params.GEN;
    values = Object.values(DATA.laureates);
    const result = alasql("SELECT * FROM ? WHERE gender = ? ", [
      values,
      GENqry,
    ]);
    res.status(200).json(result);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

// get all data based on gender and Country
app.get("/gender/:GEN/:CC", (req, res) => {
  try {
    GENqry = req.params.GEN;
    CCqry = req.params.CC;
    values = Object.values(DATA.laureates);
    const result = alasql(
      "SELECT * FROM ? WHERE gender = ? AND bornCountryCode = ?",
      [values, GENqry, CCqry]
    );
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// get all data based on born cc and died cc
app.get("/bornat/:BCC/diedat/:DCC", (req, res) => {
  try {
    BCCqry = req.params.BCC;
    DCCqry = req.params.DCC;
    values = Object.values(DATA.laureates);
    const result = alasql(
      "SELECT * FROM ? WHERE bornCountryCode = ? AND diedCountryCode = ?",
      [values, BCCqry, DCCqry]
    );
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});

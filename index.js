const alasql = require("alasql");
const express = require("express");
const app = express();
const DATA = require("./DATA.json");
let PORT = process.env.PORT || 3000;

// Home route
app.get("/", (req, res) => {
  res.send("HELLO I AM RUNNING....");
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
        console.log("Can do shit");
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
    // //select
    const result = alasql("SELECT * FROM ? WHERE bornCountryCode = ? ", [
      values,
      CCqry,
    ]);
    // const findAllServers = ( id_server, values ) => Object.values( values ).filter( values => values.bornCountryCode === CCqry );
    // const all_servers_2343262364124 = findAllServers ( 'CCqry', values );
    // will log an array
    // console.log( all_servers_2343262364124 );
    res.status(200).json(result);
  } catch (err) {
    res.json({ message: err.message });
  }
});

// get all data based on Gender
app.get("/gender/:GEN", (req, res) => {
  try {
    GENqry = req.params.GEN;
    values = Object.values(DATA.laureates);
    const result = alasql("SELECT * FROM ? WHERE gender = ? ",[values,GENqry]);
    res.status(200).json(result);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

// get all data based on gender and Country
app.get("/gender/:GEN/:CC", (req,res) => {
  try{
    GENqry = req.params.GEN;
    CCqry = req.params.CC;
    values = Object.values(DATA.laureates);
    const result = alasql("SELECT * FROM ? WHERE gender = ? AND bornCountryCode = ?",[values,GENqry,CCqry]);
    res.json(result);
  }catch(err){
    res.status(400).json({message : err.message});
    }
})

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});

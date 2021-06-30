const alasql = require("alasql");
const express = require("express");
const app = express();
const DATA = require("./DATA.json");
// const DATA2 = JSON.parse(DATA);
const records = {
  "15432213213564": {
      "server": "1234756783612",
      "time": "infinite",
      "reason": "not provided"
  },
  "4567863243123": {
      "server": "2343262364124",
      "time": "infinite",
      "reason": "not provided"
  },
  "5763542345345": {
      "server": "2343262364124",
      "time": "20",
      "reason": "test"
  }
};
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
// app.get("/borncountry/:CC",(req,res) => {
//   try{
//     const arr =[];
//     DATA.laureates.forEach((laureate) => {
//       const CC = laureate.bornCountryCode;
//       const CCqry = req.params.CC;
//       if(CCqry == CC){
//          arr.push(laureate);
//         console.log(arr);
//          res.json(arr);
//       }
//     });
//   }catch(err){
//     res.status(404).json({message : err.message});
//   }
// })

app.get("/bornat/:CC",(req,res) => {
  try{
    // const newdata = JSON.parse(DATA.laureates);
    const CCqry = req.params.CC;
    var values =Object.values(DATA.laureates);
// //select
const result = alasql("SELECT * FROM ? WHERE bornCountryCode = ? ", [values,CCqry]);
// const findAllServers = ( id_server, values ) => Object.values( values ).filter( values => values.bornCountryCode === CCqry );
// const all_servers_2343262364124 = findAllServers ( 'CCqry', values );
// will log an array
// console.log( all_servers_2343262364124 );
res.status(200).json(result);
  }catch(err){
    res.json({message : err.message});
  }
})

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});

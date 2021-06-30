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

// get all data based on born country code
app.get("/borncountry/:CC",(req,res) => {
  try{
    const obj = {}
    const arr =[]
    DATA.laureates.forEach((laureate) => {
      const CC = laureate.bornCountryCode;
      const CCqry = req.params.CC;
      if(CCqry == CC){
        arr.push(laureate);
        obj.push(arr);
        console.log(arr);
        // res.json(arr);
        return true;
        
      }
    });
  }catch(err){
    res.status(404).json({message : err.message});
  }
})

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});

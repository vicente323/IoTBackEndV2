const EnergyData =  require ('../DB/schema.js')


const express = require("express");
const app = express();
const port = 3000;
const mongoose =require("mongoose");

const  database = module.exports = () =>{

  try{
    mongoose.connect('mongodb+srv://bejarano3231:gdZ2Q8tN0zRiPYQi@iot.w54mtph.mongodb.net/?retryWrites=true&w=majority');
    mongoose.model('EnergyData',EnergyData);
    console.log("Database conected succesfully");
  }catch(error){
    console.log("Database connection failed");

  }
}
console.log(EnergyData)
database();


//const EnergyDataSchema = mongoose.model('EnegryData',EnergyData.EnergyData);
app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.post("/send",function async (req,res){
  doc = new EnergyData ({User:"Test"});
  doc.save()
  res.send("Done")
  mongoose.model
})

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

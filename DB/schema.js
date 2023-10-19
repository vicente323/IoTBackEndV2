const mongoose = require ('mongoose');
const { Schema } = mongoose;

const EnergyData = new Schema({

  User: String,
  date: { type: Date, default: Date.now },
 
  meta: {
    Power: Number
  }
});

module.exports = mongoose.model('EnergyData',EnergyData);
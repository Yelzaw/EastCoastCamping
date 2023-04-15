
const { Schema, model } = require('mongoose');

const campGroundSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  location:{
     type:String,
     required:true,
  },
  image:{
    type:String,
    required:false,
 },
  favourited: {
    type: Number,
  },
  availability: {
    type: Number,
    required: true,
  },
  available: {
    type: Boolean,
    }, 
  price:{
    type:Number,
    required:true,
  },
  features:{
    type:String,
    required:false,
  }

})

const CampGround = model('CampGround', campGroundSchema);

module.exports = CampGround;
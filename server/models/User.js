import {mongoose } from 'mongoose';

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    min: 6,
    max: 255
  },
  lastName: {
    type: String,
    required: true,
    min: 6,
    max: 255
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 255
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 1024
  },
  picturePath: {
    type: String,
    required: true,
    default: "",
  },
  friends: {
    type: Array,
    default: [],
  },
  location: {
    type: String,
  },
  occupation: {
    type: String,
  },
  viewedProfile: {
    type: Number,
  },
  impressions: {
    type: Number,
  } 
}, 
{ timestamps: true });

const User = mongoose.model('User', UserSchema);
export default User;
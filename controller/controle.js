const mongoose = require('mongoose');
const DjezzyModal = require('../models/models');
// GET ALL VALUES :

const GetAllValues = async (req, res, next) =>{
        const workouts = await DjezzyModal.find({}).sort({createdAt: -1});
        console.log('SUCCESS'.bgYellow);
        console.table(workouts);
        res.status(200).json(workouts);
}
// GET Djezzy flexy values :
const GetDjezzy = async (req, res, next) =>{
    res.status(200).json({
        Response:'success'
    })
}

// GET Mobilise Aresli values :
const GetMobilise = async (req, res, next) =>{
    res.status(200).json({
        Response:'success'
    })
}

// GET Ooredoo Stormili values :
const GetOoredoo = async (req, res, next) =>{
    res.status(200).json({
        Response:'success'
    })
}

// ADD  Djezzy flexy values :
const AddDjezzy = async (req, res, next) =>{
    const { PhoneNumber, Number, Fees} = req.body;

    let emptyFields = []
  
    if (!PhoneNumber) {
      emptyFields.push('PhoneNumber')
    }
    if (!Number) {
      emptyFields.push('Number')
    }
    if (!Fees) {
      emptyFields.push('Fees')
    }
    if (emptyFields.length > 0) {
      return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
    }
      // add doc to db
      try {
          const workoutes = await DjezzyModal.create(req.body);
          console.log(workoutes.createdAt);
          console.log('SUCCESS'.bgYellow);
          res.status(200).json(workoutes);
      } catch (error) {
          res.status(400).json({error : error.message})
      }
}

// ADD  Mobilise Aresli values :
const AddMobilise = async (req, res, next) =>{
    res.status(200).json({
        Response:'success'
    })
}

// ADD Ooredoo Stormili values :
const AddOoredoo = async (req, res, next) =>{
    res.status(200).json({
        Response:'success'
    })
}

// DELETE  Djezzy flexy values :
const DeleteDjezzy  = async (req, res, next) =>{
    res.status(200).json({
        Response:'success'
    })
}

// DELETE  Mobilise Aresli values :
const DeleteMobilise = async (req, res, next) =>{
    res.status(200).json({
        Response:'success'
    })
}

// DELETE Ooredoo Stormili values :
const DeleteOoredoo = async (req, res, next) =>{
    res.status(200).json({
        Response:'success'
    })
}



module.exports = {
    GetAllValues,
    GetDjezzy,
    GetMobilise,
    GetOoredoo,
    AddDjezzy,
    AddMobilise,
    AddOoredoo,
    DeleteDjezzy,
    DeleteMobilise,
    DeleteOoredoo
}
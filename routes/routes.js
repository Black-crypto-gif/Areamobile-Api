const express = require('express');
const router = express.Router();
const {
    GetAllValues, GetDjezzy, GetMobilise, GetOoredoo, AddDjezzy, AddMobilise, AddOoredoo, DeleteDjezzy, DeleteMobilise, DeleteOoredoo
} = require('../controller/controle');



// GET all values :
router.get('/values', GetAllValues);
// GET Djezzy flexy values :
router.get('/djezzy', GetDjezzy)
// GET Mobilise Aresli values :
router.get('/mobilise', GetMobilise)
// GET Ooredoo Stormili values :
router.get('/ooredoo', GetOoredoo)
// ADD  Djezzy flexy values :
router.post('/add/flexy',AddDjezzy)
// ADD  Mobilise Aresli values :
router.post('/add/aresli',AddMobilise)
// ADD Ooredoo Stormili values :
router.post('/add/stormili',AddOoredoo)
// DELETE  Djezzy flexy values :
router.delete('/del/flexy',DeleteDjezzy)
// DELETE  Mobilise Aresli values :
router.delete('/del/aresli',DeleteMobilise)
// DELETE Ooredoo Stormili values :
router.delete('/del/stormili',DeleteOoredoo)

module.exports = router;



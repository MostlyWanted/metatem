const router = require('express').Router();
const {getServices,addServices, getServicesId, updateServices, deleteServices} = require('../controlers/servicesCtrl');






// ............education................

// get services user
router.get('/services',getServices)

// add services user
router.post('/services', addServices)

// // get specific user by id 
router.get('/services/:id', getServicesId)


// update specific user by id
router.put('/services/update/:id',updateServices)


  // delete specific user by id
router.delete('/services/:id',deleteServices)




module.exports = router;
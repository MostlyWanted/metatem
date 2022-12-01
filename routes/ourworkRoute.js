const router = require('express').Router();
const {getOurwork,addOurwork, getOurworkId, updateOurwork, deleteOurwork} = require('../controlers/ourworkCtrl');





// ............ourwork................

// get ourwork user
router.get('/ourwork',getOurwork)

// add ourwork user
router.post('/ourwork', addOurwork)

// // get specific user by id 
router.get('/ourwork/:id', getOurworkId)


// update specific user by id
router.put('/ourwork/update/:id',updateOurwork)


  // delete specific user by id
router.delete('/ourwork/:id',deleteOurwork)




module.exports = router;
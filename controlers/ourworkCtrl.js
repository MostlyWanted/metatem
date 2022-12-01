const ourworkSchema = require('../models/ourworkModel');

exports.getOurwork =  async (req, res)=>{ 
    const ourwork = await ourworkSchema.find();
    
    try {
        res.json(ourwork);

    } catch (error) {
        res.status(500).json({msg:'server problem'})
    }}
     //second way
//     ourworkSchema.find()
//     .then(ourwork=>res.json(ourwork))
//     .catch(err=>res.status(500).json(`error:${err}`))




exports.addOurwork = 
async (req, res)=> {

        const{ourwork} = req.body;
    
        try {
            const newOurwork = new ourworkSchema({
                ourwork:ourwork
            })
            await newOurwork.save();
            res.json({msg:'new work added'});
    
        } catch (error) {
            res.status(500).json({msg:'server problem'})
            
        }
    
       //second way promises
    // const newOurwork = new ourworkSchema({
    //             ourwork:ourwork
    // })
    
    // newOurwork.save()
    // .then(ourwork=>res.json('the article was sent'))
    // .catch(err=>res.status(500).json(`error:${err}`))
}

exports.getOurworkId = async (req,res)=>{

  
        try {
            const ourwork = await ourworkSchema.findById(req.params.id);
        
            res.json(ourwork);
        } catch (error) {
            res.status(500).json({msg:'server problem'})
            
        }
    
        // ourworkSchema.findById(req.params.id)
        // .then(ourwork=>res.json(ourwork))
        // .catch(err=>res.status(400).json({msg:err}))
    
    
}
exports.updateOurwork = async (req, res)=>{
    const {ourwork} = req.body;
   
    try {
     const newOurwork = await ourworkSchema.findByIdAndUpdate(req.params.id, {
  
        ourwork
   
      });
   
      let results = await newOurwork.save();
      await results;
      res.json({msg:'Item updated'})
      
    } 
    catch (error) {
     res.status(500).json({msg:'server problem'})
    }
  
  
  
  }
  

exports.deleteOurwork = async (req, res)=> {
    const ourwork = await ourworkSchema.findByIdAndDelete(req.params.id)
    ourwork;
    res.json({msg:"Item deleted"})
}

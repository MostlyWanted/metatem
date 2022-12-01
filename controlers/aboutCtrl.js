const aboutSchema = require('../models/aboutModel')

exports.getAbout =  async (req, res)=>{ 
    const about = await aboutSchema.find();
    
    try {
        res.json(about);

    } catch (error) {
        res.status(500).json({msg:'server problem'})
    }}
     //second way
//     aboutSchema.find()
//     .then(about=>res.json(about))
//     .catch(err=>res.status(500).json(`error:${err}`))




exports.addAbout = 
async (req, res)=> {

        const{about} = req.body;
    
        try {
            const newAbout = new aboutSchema({
                about:about
            })
            await newAbout.save();
            res.json(newAbout);
    
        } catch (error) {
            res.status(500).json({msg:'server problem'})
            
        }
    
       //second way promises
    // const newAbout = new aboutSchema({
    //             about:about
    // })
    
    // newAbout.save()
    // .then(about=>res.json('the article was sent'))
    // .catch(err=>res.status(500).json(`error:${err}`))
}

exports.getAboutId = async (req,res)=>{

  
        try {
            const about = await aboutSchema.findById(req.params.id);
        
            res.json(about);
        } catch (error) {
            res.status(500).json({msg:'server problem'})
            
        }
    
        // aboutSchema.findById(req.params.id)
        // .then(about=>res.json(about))
        // .catch(err=>res.status(400).json({msg:err}))
    
    
}
exports.updateAbout = async (req, res)=>{
    const {about} = req.body;
   
    try {
     const newAbout = await aboutSchema.findByIdAndUpdate(req.params.id, {
  
       about
   
      });
   
      let results = await newAbout.save();
      await results;
      res.json({msg:'Item updated'})
      
    } 
    catch (error) {
     res.status(500).json({msg:'server problem'})
    }
  
  
  
  }
  

exports.deleteAbout = async (req, res)=> {
    const about = await aboutSchema.findByIdAndDelete(req.params.id)
    about;
    res.json({msg:"Item deleted"})
}

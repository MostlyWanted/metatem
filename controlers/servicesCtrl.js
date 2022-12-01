const servicesSchema = require('../models/servicesModel');

exports.getServices =  async (req, res)=>{ 
    const services = await servicesSchema.find();
    
    try {
        res.json(services);

    } catch (error) {
        res.status(500).json({msg:'server problem'})
    }}
     //second way
//     servicesSchema.find()
//     .then(services=>res.json(services))
//     .catch(err=>res.status(500).json(`error:${err}`))




exports.addServices = 
async (req, res)=> {

        const{services} = req.body;
    
        try {
            const newServices = new servicesSchema({
                services:services
            })
            await newServices.save();
            res.json(newServices);
    
        } catch (error) {
            res.status(500).json({msg:'server problem'})
            
        }
    
       //second way promises
    // const newServices = new servicesSchema({
    //             services:services
    // })
    
    // newServices.save()
    // .then(services=>res.json('the article was sent'))
    // .catch(err=>res.status(500).json(`error:${err}`))
}

exports.getServicesId = async (req,res)=>{

  
        try {
            const services = await servicesSchema.findById(req.params.id);
        
            res.json(services);
        } catch (error) {
            res.status(500).json({msg:'server problem'})
            
        }
    
        // servicesSchema.findById(req.params.id)
        // .then(services=>res.json(services))
        // .catch(err=>res.status(400).json({msg:err}))
    
    
}
exports.updateServices = async (req,res)=>{
    const{services} = req.body;
    
    try {
        const newServices = await servicesSchema.findByIdAndUpdate(req.params.id, {
            services
        });
    
        let results = await newServices.save();
        await results;
        res.json({msg:`Itemu updated`})
        
    } catch (error) {
        res.status(500).json({msg:'server problem'})
    }
    

} 

exports.deleteServices = async (req, res)=> {
    const services = await servicesSchema.findByIdAndDelete(req.params.id)
    services;
    res.json({msg:"Item deleted"})
}

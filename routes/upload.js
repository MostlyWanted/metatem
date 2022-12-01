const router = require('express').Router();
const cloudinary = require('cloudinary');
const fs = require('fs');

//uploading image to cloudinary

cloudinary.config({
    
cloud_name:process.env.cloud_name,
api_key:process.env.api_key,
api_secret:process.env.api_secret
})

// post uploaded image

router.post('/upload', (req,res)=> {

    try {


    if(!req.files || Object.keys(req.files).length==0){
        return res.status(400).send('no files uploaded')
    }

    const file=req.files.file;
    if(file.size>1024*1024){
        removeTm(file.tempFilePath);
        return res.status(400).json({msg:'please upload a smaller iamge'})
    }

    if(file.mimetype !=='image/jpeg' && file.mimetype !=='image/png'){
        returnTmp(file.tempFilePath);
        return res.status(400).json({msg:'incorrect file format'})
    }

    cloudinary.v2.uploader.upload(file.tempFilePath, {folder:"metatem"}, 
    async (error,result)=>{
        if(error) throw error;
        removeTmp(file.tempFilePath);
        res.json({public_id:result.public_id, url:result.secure_url})
    
    })


        
    } catch (error) {
        res.status(500).json({msg:error.message})
        
    }

})

// delete image
router.post('/destroy', (req,res)=> {
    const {public_id} =req.body;
 try {
    
    if(!public_id){
        return res.status(400).json({msg:"no images selected"})
    }
    cloudinary.v2.uploader.destroy(public_id, async(error,result)=>
    {
        if(error) throw error;
        res.json({msg:"image deleted"})

    })
    
 } catch (error) {
    res.status(500).json({msg:error.message})
    
 }
})



const removeTmp = (path) => {
    fs.unlink(path, error =>{
        if(error) throw error;
    })

}

module.exports=router;
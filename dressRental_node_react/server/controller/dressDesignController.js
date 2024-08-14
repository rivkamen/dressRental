const Dress = require('../models/Dress');
const createDressDesign=async(req,res)=>{
  const {name,description,imageUrl,dressListSizes} = req.body
  if (!name || !dressListSizes) {
      return res.status(400).json({message:'required field is missing'})
      }
      let imageUrll=null
  if(imageUrl){
  imageUrll = req.file.path;}
  const dress = await Dress.create({name,description,images:imageUrll,dressListSizes})
  if(dress){
     return res.status(201).json({success:true,
          message:`dress ${dress.name} created successfuly`,
          })
  }
  else
      return res.status(400).json({message:"failed"})
    
}


const getDressesDesign=async(req,res)=>{
  const dresses=await Dress.find().lean()
  if(!dresses)
  {
    res.status(500).json({ error: error.message });
  }

  return res.status(200).json(dresses);

}

const getDressDesignById=async(req,res)=>{
  const {_id}=req.params
  const dress=await Dress.findById(_id).lean()
  
  if(!dress)
  {
    return  res.status(401).json({message:"not found"})
  }
  return res.json(dress)
  }

const updateDressDesign=async(req,res)=>{
  const {_id}=req.params
    const {name,description,imageUrl,dressListSizes}=req.body
    const dress=await Dress.findById(_id).exec()
    if(!dress){
    return res.status(401).json({message:"not found"})
    }

        if(description){
            dress.description=description
        }
        if(name){
            dress.name=name;
        }
        
        if(imageUrl)
          {
              dress.images=imageUrl;
          }
        if(dressListSizes)
          {
              dress.dressListSizes=dressListSizes;
          }
          
    
        const MyUpdateDress=await dress.save()
        return res.status(201).json({success:true,
            message:`dress ${dress.name} updated successfuly`,
            })
 

}

const deleteDressDesign=async(req,res)=>{
  const {_id}=req.params
  const dress=await Dress.findById(_id).exec()

if(!dress){
  return res.status(401).json({message:"not found"})

  }
      await dress.deleteOne()
      return res.status(201).json({success:true,
          message:`one dress deleted successfuly`
          })
     
     }

const rentedDressDesign=async(_id)=>{
  const dress=await Dress.findById(_id).exec()
  if(!dress){
    return false
      }
     
      dress.rented=dress.rented+1;
     
      const MyUpdateDress=await dress.save()
      return true;

}
const unRentedDressDesign=async(_id)=>{
  const dress=await Dress.findById(_id).exec()
  if(!dress){
    return false
      }
     
      dress.rented=dress.rented-1;
     
      const MyUpdateDress=await dress.save()
      return true

}
module.exports = {createDressDesign,getDressesDesign,getDressDesignById,updateDressDesign,deleteDressDesign,rentedDressDesign,unRentedDressDesign}
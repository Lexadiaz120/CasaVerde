const express = require("express");
const router = express.Router();   
const Product = require('./../models/Product.model')
 
 

 router.get('/', async  (req, res) => {  

    try {
        const products = await Product.find()
            .populate('beloning')
        if (!products) {
            return res.status(500).json("List null")
        }
        else {
            return res.status(200).json(products)
        }  
        
    } catch (error) {
         return res.status(500).json(error)
    }
   
})  

 
router.get('/:id', async(req, res) => {
     const {id} = req.query; 
     const {name} = req.body; 
      try { 
          const product = await Product.findById(id)
          return !product ?
              res.status(402).json("Product not found") :
              res.status(200).json(product)
          
      } catch (error) {
          return res.status(500).json(error)
      }
})
 

router.post('/new', async (req, res) => {
        const {name} = req.body; 
        if(name){
            try { 
                const product = await Product.findOne({name})  
                if(!product){
                    const newProduct = new Product(req.body); 
                    await Product 
                      .create(newProduct)  
                      .then((data) => {
                          return res.status(200).json(data)
                      })   
                      .catch((error) => {
                          return res.status(500).json(error)
                      })
                
                    }              
            } catch (error) {
                return res.status(500).json(error)  
            }
        }
})
 
router.delete('/:id', async(req, res) => {
     const product = await Product.findById(id) 
     if(!product){
         res.status(500).json("Product  not found ")
     }else{
         const deleteProduct = await Product.deleteOne({id}) 
         res.status(422).json('Remove product', deleteProduct)
     }
}) 


router.put('/:id', async(req, res) => {
    try { 
        const updateProduct = await Product.findByIdAndUpdate(id, req.body) 
        console.log(updateProduct) 
         return !updateProduct ? 
         res.status(402).json("Product not update") : 
         res.status(200).json(updateProduct)
        
    } catch (error) {
        res.status(500).json("Product not found")        
    }
})


module.exports = router;
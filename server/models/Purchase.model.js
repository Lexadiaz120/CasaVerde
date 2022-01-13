const { Schema, model } = require('mongoose'); 

const PurchaseSchema = new Schema({
    number: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    productId: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Product"
    }],
    discounts: [{
        type: Schema.Types.ObjectId,
    }],
    amount: {
        type: Number,
        required: true
    }
}, { timestamps: true }) 


  
const Purchase = model("Purchase", PurchaseSchema)  
 
module.exports = Purchase;
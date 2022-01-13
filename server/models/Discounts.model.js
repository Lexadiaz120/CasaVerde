const { Schema, model } = require('mongoose'); 


const discountsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    discounts: [{
        name: {
            type: String,
        },
        amount: {
            type: Number
        }
    }],
    duration: {
        type: Date,
    }
}, { timestamps: true }) 


 
const Discount = model("Discount", discountsSchema) 

module.exports = Discount; 



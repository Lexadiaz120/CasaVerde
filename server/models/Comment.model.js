const { Schema, model } = require('mongoose'); 


const CommentsModel = new Schema({
    productId: {
        type: Schema.Types.ObjectId,
        ref: "Product"
    },
    rating: {
        type: String
    },
    description: {
        type: String
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
}) 

 
 
const  Comments = model("Comment", CommentsModel); 

module.exports = Comments; 



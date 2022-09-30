const { Schema, model } = require('mongoose');

const resturantSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true
        },
        // image: {
        //     type: String,
        // },
        description: {
            type: String
        },
    }
)


const resturant = model('resturant', resturantSchema)
module.exports = resturant;
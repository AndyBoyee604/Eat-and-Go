const { Schema, model } = require('mongoose');

const resturantSchema = new Schema(
    {
        rsturantName: {
            type: String,
            trim: true,
            required: true
        },
        image: {
            type: String,
        },
        description: {
            type: String
        },
    }
)

const Resturant = model('Resturant', resturantSchema);

module.exports = Resturant;
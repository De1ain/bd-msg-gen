import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const andSchema = new Schema({
    text: {
        type: String,
        required: true
    },
});

const And = mongoose.model('And', andSchema);

export { And as default }
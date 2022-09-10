import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const beSchema = new Schema({
    text: {
        type: String,
        required: true
    },
});

const Be = mongoose.model('Be', beSchema);

export { Be as default }
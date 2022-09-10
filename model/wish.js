import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const wishSchema = new Schema({
    text: {
        type: String,
        required: true
    },
});

const Wish = mongoose.model('Wish', wishSchema);

export { Wish as default }
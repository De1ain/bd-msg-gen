import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const appealSchema = new Schema({
    text: {
        type: String,
        required: true
    },
});

const Appeal = mongoose.model('Appeal', appealSchema);

export { Appeal as default }
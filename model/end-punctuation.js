import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const endPunctuationSchema = new Schema({
    text: {
        type: String,
        required: true
    },
});

const EndPunctuation = mongoose.model('EndPunctuation', endPunctuationSchema);

export { EndPunctuation as default }
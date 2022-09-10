import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const personTypeSchema = new Schema({
    text: {
        type: String,
        required: true
    },
});

const PersonType = mongoose.model('PersonType', personTypeSchema);

export { PersonType as default }
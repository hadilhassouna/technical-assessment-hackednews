var mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Stories = new Schema({
    title: {
        type: String
    },
    id: {
        type: Number
    },
    author: {
        type: String
    }

});

module.export = mongoose.model('Stories', Stories);

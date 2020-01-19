const mongoose = require('mongoose');

const ModuleSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    name: {
      type: String,
      required: true
    },
    serialnumber: {
      type: Number,
      required: true
    },
    imei: {
      type: Number,
      required: true
    },
    macaddress: {
      type: String,
      required: true
    }
});

module.exports = Module = mongoose.model('module', ModuleSchema);
const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    // createdOn: { type: Date, default: Date.now },
    companyName: String,
    cin: Number,
    is_active:  { type: Boolean, default: false },
    is_verified:  { type: Boolean, default: false },
    is_deleted:  { type: Boolean, default: false }
}, {
    collection: 'companylist',
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);
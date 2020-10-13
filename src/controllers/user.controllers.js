const User = require('../models/user.model.js');
// Retrieve and return all users from the database.
exports.findAll = async (req, res) => {
    await User.find()
        .then(users => {
            console.log(users, " : users");
            res.status(200).send(users);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Something went wrong while getting list of users."
            });
        });
};
// Create and Save a new User
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        return res.status(400).send({
            message: "Please fill all required field"
        });
    }
    // Create a new User
    const user = new User({
        companyName: req.body.companyName,
        cin: req.body.cin
    });
    // Save user in the database
    user.save()
        .then(data => {
            res.status(200).send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Something went wrong while creating new user."
            });
        });
};

exports.searchList = (req, res) => {
    const searchField = req.query.name;
    User.find({companyName: {$regex: searchField, $options: '$i'}})
    .then(data=> {
        res.status(200).send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Something went wrong while creating new user."
        });
    })
}
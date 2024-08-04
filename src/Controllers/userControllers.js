const User = require('../Models/userModel');

const getUserProfile = async (req, res) => {
    const user = await User.findById(req.user.id);

    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
};

const updateUserProfile = async (req, res) => {
    const user = await User.findById(req.user.id);

    if (user) {
        user.name = req.body.name || user.name;
        user.age = req.body.age || user.age;
        user.height = req.body.height || user.height;
        user.weight = req.body.weight || user.weight;

        const updatedUser = await user.save();

        res.json(updatedUser);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
};

module.exports = { getUserProfile, updateUserProfile };

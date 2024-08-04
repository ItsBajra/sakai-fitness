const Auth = require('../Models/authModel');
const User = require('../Models/userModel');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    const { email, password, role } = req.body;
    const userExists = await Auth.findOne({ email });

    if (userExists) {
        return res.status(400).json({ message: 'User already exists' });
    }

    const user = await Auth.create({ email, password, role });

    if (user) {
        const userProfile = await User.create({ email, name: "", age: 0, height: 0, weight: 0 });
        res.status(201).json({
            _id: user._id,
            email: user.email,
            role: user.role,
            token: generateToken(user._id)
        });
    } else {
        res.status(400).json({ message: 'Invalid user data' });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;

    const user = await Auth.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            email: user.email,
            role: user.role,
            token: generateToken(user._id)
        });
    } else {
        res.status(401).json({ message: 'Invalid email or password' });
    }
};

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

module.exports = { register, login };

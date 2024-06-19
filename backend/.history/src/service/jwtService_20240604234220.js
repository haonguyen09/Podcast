const jwt = require('jsonwebtoken');

function generateAccessToken(username) {
    return jwt.sign(username, process.env.ACCESS_TOKEN, { expiresIn: '1800s' });
}
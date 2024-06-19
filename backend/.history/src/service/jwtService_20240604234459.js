const jwt = require('jsonwebtoken');

function generateAccessToken(username) {
    return jwt.sign(username, process.env.ACCESS_TOKEN, { expiresIn: '30s' });
}


function generateRefreshToken(username) {
    return jwt.sign(username, process.env.REFRESH_TOKEN, { expiresIn: '30s' });
}
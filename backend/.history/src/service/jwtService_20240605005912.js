const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')
dotenv.config()

function generateAccessToken(payload) {

    return jwt.sign({...payload}, process.env.ACCESS_TOKEN, { expiresIn: '30s' });
}


function generateRefreshToken(payload) {
    return jwt.sign({...payload}, process.env.REFRESH_TOKEN, { expiresIn: '365d' });
}

module.exports = {
    generateAccessToken,
    generateRefreshToken
}
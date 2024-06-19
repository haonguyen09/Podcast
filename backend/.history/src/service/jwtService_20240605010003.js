const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')
dotenv.config()

generateAccessToken = async(payload) => {
    return jwt.sign({...payload}, process.env.ACCESS_TOKEN, { expiresIn: '30s' });
}


generateRefreshToken = async(payload) => {
    return jwt.sign({...payload}, process.env.REFRESH_TOKEN, { expiresIn: '365d' });
}

module.exports = {
    generateAccessToken,
    generateRefreshToken
}
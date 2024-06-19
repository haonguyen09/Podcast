const jwt = require('jsonwebtoken');

function generateAccessToken(payload) {

    const {_id, role} = payload

    return jwt.sign(payload, process.env.ACCESS_TOKEN, { expiresIn: '30s' });
}


function generateRefreshToken(payload) {

    const {_id, role} = payload

    return jwt.sign(payload, process.env.REFRESH_TOKEN, { expiresIn: '365d' });
}

module.exports = {
    generateAccessToken,
    generateRefreshToken
}
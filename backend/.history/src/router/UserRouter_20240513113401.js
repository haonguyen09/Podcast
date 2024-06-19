const { model } = require("mongoose")

const UserRouter = () => {
    get('get-all', UserController)
}

module.exports = UserRouter
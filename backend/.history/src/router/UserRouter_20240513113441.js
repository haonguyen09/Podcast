
const UserRouter = (app) => {
    app.get('get-all', UserController.UserGetAll)
}

module.exports = UserRouter
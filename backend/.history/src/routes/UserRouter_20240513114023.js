import UserController from '../controller/UserController'

const UserRouter = (app) => {
    app.get('get-all', UserController.getAllUser)
}

module.exports = UserRouter
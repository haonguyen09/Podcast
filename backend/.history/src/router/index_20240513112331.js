import UserRouter from './UserRouter'

export const router = (app) => {
    app.get("/api/user/", UserRouter)
}


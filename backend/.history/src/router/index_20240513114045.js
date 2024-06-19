import UserRouter from './UserRouter'
import { Router } from 'express'

const router = (app) => {
    app.get("/api/user", UserRouter)
}

module.exports = router
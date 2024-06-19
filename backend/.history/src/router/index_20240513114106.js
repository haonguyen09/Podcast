import UserRouter from './UserRouter'
import { Router } from 'express'

const router = (app) => {
    Router("/api/user", UserRouter)
}

module.exports = router
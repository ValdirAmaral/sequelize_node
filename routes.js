import express, { Router } from "express"

const routes = express.Router()

routes.get('/', (req, res) => {
    return res.json({name: "Ciclano Fulano"})
})

export { routes as default }
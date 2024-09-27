import express from 'express'

const routes = (app) => {
    app.route("/").get((req,res) => res.status(200).send("rota inicial"))
    app.use(express.json())
}

export default routes
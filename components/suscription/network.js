const express = require('express');
const respons = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.post('/', (req, res) => {
    controller.addSuscription(req.body.country, req.body.name, req.body.email)
        .then((message) => {
            respons.success(req, res, message)
        })
        .catch((error) => {
            respons.error(req, res, "Ocurrio un error.", 400, error)
        })
})

module.exports = router;
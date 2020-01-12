const express = require('express');
const suscription = require('../components/suscription/network');

const routes = function (server) {
    server.use('/suscription', suscription);
}

module.exports = routes;
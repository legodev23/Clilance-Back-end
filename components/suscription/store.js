const Model = require('./model');

function addSuscription (suscription) {
    const mySuscription = new Model(suscription);
    mySuscription.save();
}

module.exports = { add: addSuscription };
const store = require('./store');

function addSuscription (country, name, email) {
    return new Promise((resolve, reject) => {
        if (!country || !name || !email) {
            return reject('faltan datos');
        };

        let suscription = {
            country,
            name,
            email,
            date: new Date()
        };

        store.add(suscription);

        resolve(suscription);
    });
};

module.exports = {addSuscription};
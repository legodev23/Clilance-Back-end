const db = require('mongoose');

db.Promise = global.Promise;

async function connect (URL) {
    await db.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log('[db] Connect.');
};

module.exports = connect;
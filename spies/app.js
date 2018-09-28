const db = require('./db');

const handleSingup = (email, pass) => {
    db.saveUser({ email, pass });
};

module.exports = {
    handleSingup
};
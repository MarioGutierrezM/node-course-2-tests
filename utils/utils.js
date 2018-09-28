const add = (a, b) => a + b;

const square = (a) => a * a;

const setName = (user, fullName) => {
    let names = fullName.split(' ');
    user.firstName = names[0];
    user.lastName = names[1];
    return user;
};

const asyncAdd = (a, b, callback) => {
    setTimeout(() => {
        callback(a+b);
    }, 1000);
};

const asyncSquare = (a, callback) => {
    setTimeout(() => {
        callback(a*a);
    }, 1000);
};

module.exports = {
    add,
    square,
    setName,
    asyncAdd,
    asyncSquare
};
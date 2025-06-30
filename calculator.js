const calculator = {
    add: (a, b) => {
        return parseInt(a) + parseInt(b);
    },

    subtract: (a, b) => {
        return parseInt(a) - parseInt(b);
    },

    divide: (a, b) => {
        if (parseInt(b) === 0) {
            throw("cannot divide by zero");
        }
        return parseInt(a) / parseInt(b);
    },

    multiply: (a, b) => {
        return parseInt(a) * parseInt(b);
    },
}

module.exports = calculator;
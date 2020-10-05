const ciphers = {
    'pigLatin': {
        encrypt: (text) => PigLat(text),
    },

};

const PigLat = (text) => text.split(' ').map(word => `${
        word.slice(1, word.length)
    }${
        word.charAt(0)
    }ay`).join(` `);

const encrypt = (text, method = 'pigLatin') => {
    return ciphers[method].encrypt(text);
};

module.exports = {
    encrypt,
}
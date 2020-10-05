const ciphers = {
    'pigLatin': {
        encrypt: (text) => PigLatEncrypt(text),
        decrypt: (text) => PigLatDecrypt(text),
    },

};

const PigLatEncrypt = (text) => text.split(' ').map(word => `${
        word.slice(1, word.length)
    }${
        word.charAt(0)
    }ay`).join(` `);

const PigLatDecrypt = (text) => text.split(' ').map(word => `${
        word.charAt(word.length - 3)
    }${
        word.slice(0, -3)
    }`).join(` `);

const encrypt = (text, method = 'pigLatin') => {
    return ciphers[method].encrypt(text);
};
const decrypt = (text, method = 'pigLatin') => {
    return ciphers[method].decrypt(text);
};

module.exports = {
    encrypt,
    decrypt,
}
const ALPHA_REGEX = new RegExp(/[A-Za-z]/);
const ALPHABET = [...'abcdefghijklmnopqrstuvwxyz'];

const EncryptPigLat = (text) => text.split(' ').map(word => `${
        word.slice(1, word.length)
    }${
        word.charAt(0)
    }ay`).join(` `);

const DecryptPigLat = (text) => text.split(' ').map(word => `${
        word.charAt(word.length - 3)
    }${
        word.slice(0, -3)
    }`).join(` `);

const EncryptRotation = (text, options) => {
    return [...text].map((char, idx) => {
        if (char.match(ALPHA_REGEX)) {
            const convertCase = char === char.toUpperCase();
            let newIndex = ALPHABET.indexOf(char.toLowerCase()) + options.val;

            if (newIndex > 25) {
                newIndex -= 26
            }
            if (convertCase === true) {
                return (ALPHABET[newIndex]).toUpperCase();
            }
            return (ALPHABET[newIndex]);
        }
        return char;
    }).join('');
}

module.exports = {
    EncryptPigLat,
    DecryptPigLat,
    EncryptRotation,
}
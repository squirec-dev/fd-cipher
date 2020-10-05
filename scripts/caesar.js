const ALPHA_REGEX = new RegExp(/[A-Za-z]/);
const ALPHABET = [...'abcdefghijklmnopqrstuvwxyz'];
const MATH = {
    add: (valA, valB) =>  valA + valB,
    subtract: (valA, valB) =>  valA - valB,
}

const CaesarCipher = (text, options) => {
    return [...text].map((char) => {
        if (char.match(ALPHA_REGEX)) {
            const convertCase = char === char.toUpperCase();
            let newIndex = MATH[options.method](
                ALPHABET.indexOf(char.toLowerCase()),
                options.val,
            );

            if (newIndex > 25) {
                newIndex -= 26
            }
            if (newIndex < 0) {
                newIndex += 26
            }
            if (convertCase === true) {
                return (ALPHABET[newIndex]).toUpperCase();
            }
            return (ALPHABET[newIndex]);
        }
        return char;
    }).join('');
};

module.exports = {
    CaesarCipher,
};

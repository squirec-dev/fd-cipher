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

module.exports = {
    EncryptPigLat,
    DecryptPigLat,
}

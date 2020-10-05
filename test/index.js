const { expect } = require('chai');
const {
    EncryptPigLat,
    DecryptPigLat,
    CaesarCipher,
} = require('../index');

describe('Pig Latin:', () => {
    it('Encrypt; Given a string, returns encrypted', () => {
        expect(EncryptPigLat(
            'grisedale tarn',
        )).to.equal('risedalegay arntay');
    });
    
    it('Decrypt; Given a string, returns decrypted', () => {
        expect(DecryptPigLat(
            'risedalegay arntay',
        )).to.equal('grisedale tarn');
    });
});

describe('Caesar:', () => {
    it('Encrypt; Given a string & a rotation number, returns encrypted', () => {
        expect(CaesarCipher(
            'The quick brown fox jumps over the lazy dog',
            {
                val: 2,
                method: 'add',
            },
        )).to.equal('Vjg swkem dtqyp hqz lworu qxgt vjg ncba fqi');
    });
    
    it('Decrypt; Given a string & a rotation number, returns decrypted', () => {
        expect(CaesarCipher(
            'Vjg swkem dtqyp hqz lworu qxgt vjg ncba fqi',
            {
                val: 2,
                method: 'subtract',
            },
        )).to.equal('The quick brown fox jumps over the lazy dog');
    });
});

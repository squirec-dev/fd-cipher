const { expect } = require('chai');
const { encrypt, decrypt } = require('../index');

describe('Encrypt:', () => {
    it('Default; Given a string, returns encrypted', () => {
        expect(encrypt(
            'grisedale tarn',
        )).to.equal('risedalegay arntay');
    });
});

describe('Decrypt:', () => {
    it('Default; Given a string, returns decrypted', () => {
        expect(decrypt(
            'risedalegay arntay',
        )).to.equal('grisedale tarn');
    });
});
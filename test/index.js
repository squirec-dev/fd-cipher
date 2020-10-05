const { expect } = require('chai');
const { encrypt } = require('../index');

describe('Encrypt:', () => {
    it('Given a string, returns an encrypted', () => {
        expect(encrypt(
            'grisedale tarn',
        )).to.equal('risedalegay arntay');
    });
});
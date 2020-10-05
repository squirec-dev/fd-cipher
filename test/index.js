const { expect } = require('chai');
const { EncryptPigLat, DecryptPigLat, EncryptRotation } = require('../index');

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

describe('Rotation:', () => {
    it('Encrypt; Given a string & a rotation number, returns encrypted', () => {
        expect(EncryptRotation(
            'x y z',
            {
                val: 2,
            },
        )).to.equal('z a b');
    });

    it('Encrypt; Given a string & a rotation number, returns encrypted', () => {
        expect(EncryptRotation(
            'The quick brown fox jumps over the lazy dog',
            {
                val: 2,
            },
        )).to.equal('Vjg swkem dtqyp hqz lworu qxgt vjg ncba fqi');
    });
});

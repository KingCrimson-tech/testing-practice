const ceaserCipher = require('./ceaserCipher');

test('alphabet wrapping', () => {
    expect(ceaserCipher('xyz', 3)).toBe('abc');
})

test('HeLLo is KhOOr', () => {
    expect(ceaserCipher('HeLLo', 3)).toBe('KhOOr');
})

test('Hello, World! should return Khoor, Zruog!', () => {
    expect(ceaserCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
})
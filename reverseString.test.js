const reverseString = require('./reverseString');

test('Reverse of hello is olleh', () => {
    expect(reverseString('hello')).toBe('olleh');
});
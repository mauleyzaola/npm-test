const calc = require('./index')

test('should add two numbers', () => {
    const expected = 5;
    const got = calc.add(3, 2)
    expect(got).toBe(expected)
})
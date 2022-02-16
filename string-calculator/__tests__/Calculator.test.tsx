import calc from '../Calculator';

describe('Calc', () => {
    test('should zero for empty string', () => {
        expect(calc.add("")).toEqual(0);
    });

});
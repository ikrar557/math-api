const MathBasic = require('./MathBasic')

describe('A MathBasic', () => {
    it('should contains add, subtract, multiply, and divide function', () => {
        expect(MathBasic).toHaveProperty('add')
        expect(MathBasic).toHaveProperty('subtract')
        expect(MathBasic).toHaveProperty('multiply')
        expect(MathBasic).toHaveProperty('divide')
        expect(MathBasic.add).toBeInstanceOf(Function)
        expect(MathBasic.subtract).toBeInstanceOf(Function)
        expect(MathBasic.multiply).toBeInstanceOf(Function)
        expect(MathBasic.divide).toBeInstanceOf(Function)
    })

    describe('A add function', () => {
        it('should throw error when not given 2 params', () => {
            expect(() => MathBasic.add()).toThrowError()
            expect(() => MathBasic.add(1)).toThrowError()
            expect(() => MathBasic.add(1, 2, 3)).toThrowError()
            expect
        })

        it('should throw error when not given non-number paramaeters', () => {
            expect(() => MathBasic.add('1', '2')).toThrowError()
            expect(() => MathBasic.add(true, {})).toThrowError()
            expect(() => MathBasic.add(null, false)).toThrowError
        })

        it('should return a +b when given two number parameters', () => {
            expect(MathBasic.add(2,2)).toEqual(4);
            expect(MathBasic.add(10, 10)).toEqual(20);
            expect(MathBasic.add(9,9)).toEqual(18); 
        })
    })

    describe ('A subtract function', () => {
        it('should throw error when not given 2 params', () => {
            expect(() => MathBasic.subtract()).toThrowError()
            expect(() => MathBasic.subtract(1)).toThrowError()
            expect(() => MathBasic.subtract(1, 2, 3)).toThrowError()
            expect(() => MathBasic.subtract(1, 2, 3, 4)).toThrowError
        })

        it('should throw error when not given non-number parameters', () => {
            expect(() => MathBasic.subtract('1', '2')).toThrowError()
            expect(() => MathBasic.subtract(true, {})).toThrowError()
            expect(() => MathBasic.subtract(null, false)).toThrowError()
        })

        it('should return a-b when given two number params', () => {
            expect(MathBasic.subtract(2,2)).toEqual(0);
            expect(MathBasic.subtract(10, 10)).toEqual(0);
            expect(MathBasic.subtract(9,9)).toEqual(0); 
        })
    })

    describe('A multiply function', () => {
        it('should throw error when not given 2 parameters', () => {
            expect(() => MathBasic.multiply()).toThrowError()
            expect(() => MathBasic.multiply(1)).toThrowError()
            expect(() => MathBasic.multiply(1, 2, 3)).toThrowError()
        })

        it('should throw error when given non number params', () => {
            expect(() => MathBasic.multiply('1', '2')).toThrowError()
            expect(() => MathBasic.multiply(true, {})).toThrowError()
            expect(() => MathBasic.multiply(null, false)).toThrowError()
        })

        it('should return a * b when given two number params', () => {
            expect(MathBasic.multiply(2, 2)).toEqual(4);
            expect(MathBasic.multiply(10, 10)).toEqual(100);
            expect(MathBasic.multiply(50, 10)).toEqual(500);
        })
    })

    describe('A divide function', () => {
        it('should throw error when not given 2 params', () => {
            expect(() => MathBasic.divide()).toThrowError()
            expect(() => MathBasic.divide(1)).toThrowError()
            expect(() => MathBasic.divide(1, 2, 3)).toThrowError()
        })

        it('shoud throw error when given non-number params', () => {
            expect(() => MathBasic.divide('1', '2')).toThrowError()
            expect(() => MathBasic.divide(true, {})).toThrowError()
            expect(() => MathBasic.divide(null, false)).toThrowError()
        })

        it('should return a / b when given two number', () => {
            expect(MathBasic.divide(6, 2)).toEqual(3);
            expect(MathBasic.divide(8, 4)).toEqual(2);
            expect(MathBasic.divide(35, 5)).toEqual(7);
        })
    })
})

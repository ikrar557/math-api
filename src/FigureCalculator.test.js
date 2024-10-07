const FigureCalculator = require('./FigureCalculator')
const MathBasic = require('./MathBasic')

describe('A FigureCalculator', () => {
    it('should contain calculateRectanglePerimeter, calculateRectangleArea, calculateTrianglePerimeter, and calculateTriangleArea functions', () => {
        const figureCalculator = new FigureCalculator({})

        expect(figureCalculator).toHaveProperty('calculateRectanglePerimeter')
        expect(figureCalculator).toHaveProperty('calculateRectangleArea')
        expect(figureCalculator).toHaveProperty('calculateTrianglePerimeter')
        expect(figureCalculator).toHaveProperty('calculateTriangleArea')

        expect(figureCalculator.calculateRectanglePerimeter).toBeInstanceOf(Function)
        expect(figureCalculator.calculateRectangleArea).toBeInstanceOf(Function)
        expect(figureCalculator.calculateTrianglePerimeter).toBeInstanceOf(Function)
        expect(figureCalculator.calculateTriangleArea).toBeInstanceOf(Function)
    })

    describe('A calculateRectanglePerimeter function', () => {
        it('should throw error when not given 2 params', () => {
            const figureCalculator = new FigureCalculator({})

            expect(() => figureCalculator.calculateRectanglePerimeter()).toThrowError()
            expect(() => figureCalculator.calculateRectanglePerimeter(1)).toThrowError;
            expect(() => figureCalculator.calculateRectanglePerimeter(1, 2, 3)).toThrowError()
        })
        
        it('should throw error when given with non-number params', () => {
            const figureCalculator = new FigureCalculator({})

            expect(() => figureCalculator.calculateRectanglePerimeter('a', 'b')).toThrowError()
            expect(() => figureCalculator.calculateRectanglePerimeter(false, 'b')).toThrowError()
            expect(() => figureCalculator.calculateRectanglePerimeter('a', null)).toThrowError()
        })

        it('should return correct value based on rectangle perimeter formula', () => {
            // Arrange
            const length = 20;
            const width = 10;
            const spyAdd = jest.spyOn(MathBasic, 'add')
            const spyMultiply = jest.spyOn(MathBasic, 'multiply')

            const figureCalculator = new FigureCalculator(MathBasic)

            // Action
            const result = figureCalculator.calculateRectanglePerimeter(length, width)

            // Assert
            expect(result).toEqual(60);
            expect(spyAdd).toHaveBeenCalledWith(length, width);
            expect(spyMultiply).toHaveBeenCalledWith(2, 30);
        })
    })

    describe('A calculateRectangleArea function', () => {
        it('should return error when not given 2 params', () => {
            const figureCalculator = new FigureCalculator({});

            expect(() => figureCalculator.calculateRectangleArea()).toThrowError();
            expect(() => figureCalculator.calculateRectangleArea(1)).toThrowError();
            expect(() => figureCalculator.calculateRectangleArea(1, 2, 3)).toThrowError();
        })

        it('should return error when given with non-number params', () => {
            const figureCalculator = new FigureCalculator({});

            expect(() => figureCalculator.calculateRectangleArea('a', 'b')).toThrowError();
            expect(() => figureCalculator.calculateRectangleArea(false, 'b')).toThrowError();
            expect(() => figureCalculator.calculateRectangleArea('a', null)).toThrowError();
        })

        it('should return correct value based on rectangle area formula', () => {
            // Arrange
            const length = 10;
            const width = 10;
            const spyMultiply = jest.spyOn(MathBasic, 'multiply');

            const figureCalculator = new FigureCalculator(MathBasic);

            // Action
            const result = figureCalculator.calculateRectangleArea(length, width);

            // Assert
            expect(result).toEqual(100);
            expect(spyMultiply).toHaveBeenCalledWith(length, width);
        });

    })

    describe('A calculateTrianglePerimeter function', () => {
        
        it('should return error when given parameters less or more than 3', () => {
            const figureCalculator = new FigureCalculator({})

            expect(() => figureCalculator.calculateTrianglePerimeter()).toThrowError();
            expect(() => figureCalculator.calculateTrianglePerimeter(1)).toThrowError();
            expect(() => figureCalculator.calculateTrianglePerimeter(1, 2, 3, 4)).toThrowError();
        })

        it('should return error when given paramaters is non-number', () => {
            const figureCalculator = new FigureCalculator({})

            expect(() => figureCalculator.calculateTrianglePerimeter('a', 'b', 'c')).toThrowError();
            expect(() => figureCalculator.calculateTrianglePerimeter(false, 'b', 'c')).toThrowError();
            expect(() => figureCalculator.calculateTrianglePerimeter('a', null, false)).toThrowError();
        })

        it('should return valid response when given correct answer', () => {
            const base = 10
            const sideA = 20
            const sideB = 30
            const spyAdd = jest.spyOn(MathBasic, 'add')
    
            const figureCalculator = new FigureCalculator(MathBasic)
    
            const result = figureCalculator.calculateTrianglePerimeter(base, sideA, sideB)
    
            expect(result).toEqual(60)
            expect(spyAdd).toHaveBeenCalledWith(50, base)
        })

    })

// TODO: Sebuah fungsi calculateTriangleArea
// Harus mengembalikan error ketika tidak diberikan 2 parameter
// Harus mengembalikan error ketika diberikan parameter selain number
// Harus mengembalikan nilai yang tepat berdasarkan rumus luas segitiga
    describe(' A calculateTriangleArea function', () => {
        it('should return error when not given correct params', () => {
// Suggested code may be subject to a license. Learn more: ~LicenseLog:635618080.
            const figureCalculator = new FigureCalculator({})

            expect(() => figureCalculator.calculateTriangleArea()).toThrowError()
            expect(() => figureCalculator.calculateTriangleArea(1)).toThrowError()
        })

        it('should return error when gien params is not number', () => {
            const figureCalculator = new FigureCalculator({})

            expect(() => figureCalculator.calculateTriangleArea('a', 'b')).toThrowError()
            expect(() => figureCalculator.calculateTriangleArea(false, 'b')).toThrowError()
        })
        it('should return correct value based on triangle area formula', () => {
            const base = 20
            const height = 3
            const spyMultiply = jest.spyOn(MathBasic, 'multiply')
            const spyDivide = jest.spyOn(MathBasic, 'divide')

            const figureCalculator = new FigureCalculator(MathBasic)

            const result = figureCalculator.calculateTriangleArea(base, height)

            expect(result).toEqual(30)
            expect(spyDivide).toHaveBeenCalledWith(60, 2);
            expect(spyMultiply).toHaveBeenCalledWith(base, height);
        })
            
    })
})
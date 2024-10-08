class FigureCalculator {
    constructor(mathBasic) {
        this._mathBasic = mathBasic;
    }

    calculateRectanglePerimeter(...args) {
        if (args.length !== 2) {
            throw new Error('fungsi hanya menerima dua parameter')
        }

        const [length, width] = args;

        if (typeof length !== 'number' || typeof width !== 'number') {
            throw new Error('fungsi hanya menerima parameter number')
        }

        return this._mathBasic.multiply(2, this._mathBasic.add(length, width));
    }

    calculateRectangleArea(...args) {
        if (args.length !== 2 ) {
            throw new Error('fungsi hanya menerima dua parameter')
        }

        const [length, width] = args;

        if (typeof length !== 'number' || typeof width !== 'number') {
            throw new Error('fungsi hanya menerima parameter number')
        }

        return this._mathBasic.multiply(length, width);
    }
    
    calculateTrianglePerimeter(...args) {
        if (args.length !== 3) {
            throw new Error('fungsi hanya manerima tiga parameter')
        }

        const [base, sideA, sideB] = args;

        if (typeof base !== 'number' || typeof sideA !== 'number' || typeof sideB !== 'number') {
            throw new Error('fungsi hanya menerima parameter number')
        }

        return this._mathBasic.add(this._mathBasic.add(sideA, sideB), base);

    }

    calculateTriangleArea(...args) {
        if ( args.length !==2 ) {
            throw new Error('fungsi hanya menerima 2 parameter')
        } 
        
        const [base, height] = args;

        if (typeof base !== 'number' || typeof height !== 'number') {
            throw new Error('fungsi hanya menerima parameter number')
        }

        return this._mathBasic.divide(this._mathBasic.multiply(base, height), 2)
    }
}

module.exports = FigureCalculator;

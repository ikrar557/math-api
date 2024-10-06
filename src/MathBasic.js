const MathBasic = {
    add : (...args) => {
        if (args.length < 2 || args.length > 2) {
            throw new Error('Fungsi add hanya menerima dua parameter')
        }

    const [a, b] = args;

    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Parameter harus berupa angka')
        }

        return a + b;
    },
    subtract: (...args) => {
        if (args.length !== 2 ) {
            throw new Error('Fungsi subtract hanya menerima dua parameter')
        }

        const [a, b] = args;

        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('Parameter harus berupa angka')
        }

        return a - b;
    },
    multiply: (...args) => {
        if (args.length !== 2 ){
            throw new Error('Fungsi multiply hanya menerima 2 param')
        }

        const [a,b] = args;

        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('Parameter harus berupa angka')
        }

        return a * b;
    },
    divide: (...args) => {
        if ( args.length !== 2 ) {
            throw new Error('Fungsi divide hanya menerima 2 params')
        }

        const [a,b] = args;
        
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('Paramater harus berupa angka')
        }

        return a / b;
    }

}

module.exports = MathBasic;

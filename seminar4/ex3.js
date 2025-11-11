function powGen() {
    const cache = {};
    const pow = (base, exp) => {
        const key = `${base},${exp}`;
        if (cache[key] !== undefined) {
            console.log('found ' + key);
            return cache[key];
        } else {
            console.log('calculated ' + key);
            let result;
            if (exp === 0) {
                result = 1;
            } else {
                result = base * pow(base, exp - 1);
            }
            cache[key] = result;
            return result;
        }
    }
    return pow;
}

const pow = powGen();
console.log(pow(2, 3));
console.log(pow(2, 5));
console.log(pow(2, 3));

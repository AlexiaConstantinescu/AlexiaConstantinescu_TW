function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj; 

    if (Array.isArray(obj)) {
        return obj.map(item => deepClone(item)); 
    }

    const cloned = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloned[key] = deepClone(obj[key]); 
        }
    }
    return cloned;
}

const original = {
    a: 1,
    b: { c: 2, d: [3, 4] },
    e: [5, { f: 6 }]
};

const copy = deepClone(original);

console.log(copy);
console.log(copy.b === original.b); // false, obiectul intern a fost clonat
console.log(copy.e[1] === original.e[1]); // false

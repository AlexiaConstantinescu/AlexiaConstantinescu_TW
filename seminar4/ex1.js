class Stream {
    #value;
    #nextvalue;

    static #count = 0;

    constructor(value, nextValue) {
        this.#value = value;
        this.#nextvalue = nextValue;
        Stream.#count++;
    }

    get value() {
        return this.#value;
    }

    get next() {
        this.#value = this.#nextvalue(this.#value);
        return this.#value;
    }

    static get count() {
        return Stream.#count;
    }
}

class ConstantStream extends Stream {
    constructor(value) {
        super(value, value => value);
    }
}

class NextIntegerStream extends Stream {
    constructor() {
        super(0, value => value + 1);
    }
}


class EvenStream extends Stream {
    constructor(initialValue) {
        // dacă valoarea inițială e impară, pornim de la următorul număr par
        super(
            (initialValue % 2 === 0) ? initialValue : initialValue + 1,
            value => value + 2
        );
    }
}


const constant = new ConstantStream(1);
const nextInteger = new NextIntegerStream();
const evenStream = new EvenStream(5); // va începe de la 6

for (let i = 0; i < 10; i++) {
    console.log(`constant[${i}] = ${constant.next}`);
    console.log(`nextInteger[${i}] = ${nextInteger.next}`);
    console.log(`even[${i}] = ${evenStream.next}`);
}

console.log(`Total stream-uri create: ${Stream.count}`);

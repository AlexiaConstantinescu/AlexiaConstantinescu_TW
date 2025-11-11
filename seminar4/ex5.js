function increaseSalary(salaries, percent) {
    if (!Array.isArray(salaries)) {
        throw new Error('Primul parametru trebuie să fie un array');
    }
    if (typeof percent !== 'number') {
        throw new Error('Al doilea parametru trebuie să fie un număr');
    }

    return salaries.map(salary => salary + (salary * percent / 100));
}


try {
    const newSalaries = increaseSalary([1000, 2000, 3000], 10);
    console.log(newSalaries); // [1100, 2200, 3300]

    increaseSalary('nu e array', 10); 
} catch (err) {
    console.log(err.message);
}

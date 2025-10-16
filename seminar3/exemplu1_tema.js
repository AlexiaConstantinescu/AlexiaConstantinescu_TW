const birthYears = [1990, 2005, 2010, 1985, 2008, 2012];

const currentYear = new Date().getFullYear();

const adultAges = birthYears
    .map(year => currentYear - year)
    .filter(age => age >= 18);

console.log(adultAges);

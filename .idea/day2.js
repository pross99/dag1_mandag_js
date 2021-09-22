

const randomNames = ['Konge', 'Hans', 'Tulip']
let containA = randomNames.filter(randomNames=> randomNames.includes('a'));

console.log(containA)



const randomNames2 = ['Konge', 'Hans', 'Tulip']
const reversed = randomNames2.map(function iterateNames(randomNames2) {
    return randomNames2
}).reverse();
;
console.log(reversed)
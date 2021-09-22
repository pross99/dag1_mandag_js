

function add(n1, n2) {
    return n1 + n2;
}


const  sub = function (n1,n2){
    return n1 - n2
}

const mul = function (n1,n2){
    return n1 / n2
}


let names = ['Lars', 'Peter', 'Mads', 'Patrick', 'ibu', 'Jacob']
let newnames = []
names.forEach(name => {
    if (name.length<=3){
        newnames.push(name)
    }
})

let array = ['Lars', 'Peter', 'Mads', 'Patrick', 'Oliva', 'Jacob'];
let uppers = array.map(function (x) {return x.toUpperCase()});



const elements = ['Peter', 'Kokkefar', 'Skinke']

const cb = function (n1, n2, callback) {
    return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
};

const cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];
let newer = cars.filter(cars => cars.year >1999)
let v = cars.filter(cars => cars.make =='Volvo')
let lower = cars.filter(cars => cars.price<5000)




console.log(add(1,2))
console.log(add)
console.log(add(1,2,3));
console.log(add(1));
console.log(cb(3,3,add));
console.log(cb(4,3,sub));
console.log(cb(3,3,add));
console.log(cb(3,"hh",add));
console.log(cb(2,4,mul));
console.log(newnames);
console.log(names)
console.log(uppers)
console.log(newer)
console.log(v)
console.log(lower)


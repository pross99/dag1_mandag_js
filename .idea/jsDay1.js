

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
const map = names
map(function (names) {
    names.toUpperCase()
})

const cb = function (n1, n2, callback) {
    return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
};

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
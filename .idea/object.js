

let person = {firstName:'Peter',lastName:'Ross',age:21,cool:'indeed'}
delete person.cool;
person.isFriendly = 'true';
for(prop in person){
    console.log(prop,person[prop]);
}

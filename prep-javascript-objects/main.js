var person = {
  firstName: 'John',
  lastName: 'Doe',
  hobby: 'Valorant'
};

console.log(person);

var fullName = person.firstName + person.lastName;

console.log('Their name is ' + fullName);
person.job = 'e-sports player';

console.log('He currently makes a living as an ' + person.job);

person.previousJob = 'frycook';
console.log('They used to be a ' + person.previousJob);

console.log(person);

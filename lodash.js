const _ = require('lodash');

const members = [
    { name: 'Aman Makhija', age: 20 },
    { name: 'Suresh Jsharma', age: 40 },
    { name: 'Vijay Sahu', age: 40 },
    { name: 'Rakesh Srivastava', age: 40 },
    { name: 'Chandraprakash Sharma' },
    { name: 'Swpril Ahuja', age: 45 },
    { name: 'Yogesh Khatri', age: 51 }
  ];

  //1. Get array of first names of everyone
const firstNames = _.map(members, member => member.name.split(' ')[0]);

console.log("First Question")
console.log(firstNames);
  
//2. Make everyone's last names in UPPERCASE in given array of objects
const secondNames = _.map(members, member => member.name.split(' ').pop().toUpperCase());
console.log("Second Question")
console.log(secondNames);
console.log(members)

//3. Get entries where age is between 41-60
const ages = _.filter(members, member => member.age > 41 && member.age < 60);
console.log("third question")
console.log(ages);

//4. Get average age
//const allAges = _.chain(members).filter(member => member.age).map(member => member.age).value();

const averageAge = _.sumBy(members, member => member.age)/members.length;
console.log("fourth question");
console.log(averageAge);

//5. Get Person with maximum age
const maxAge = _.maxBy(members, member=>member.age)
//use max function here
console.log("Fifth Question")
console.log(maxAge);

// 6. Divide persons in three groups, result should look like
//     {
//       'young': [],
//       'old': [],
//       'noage': []
//     }
//     Less than 35yrs is young, above 35 is old

const lessthen35 = _.groupBy(members, member => member.age < 35);
const morethan35 = _.groupBy(members, member => member.age > 35);
const noage = _.groupBy(members, member => !member.age);
const groupByAge = _.groupBy(members, member => member.age);
console.log(groupByAge);
const groups = {
    young: lessthen35[true],
    old: morethan35[true],
    noage: noage[true]
}
// use group by function here
console.log("Sixth Question")
console.log(groups);

//7. add a new member to same members array instance at index 2
const newMember = {
  "name": "John",
  "age": 30,
}

members.splice(2, 0, newMember);
console.log("seventh question")
console.log(members);

//8. extract first and second element using destructing
const [first, second] = members;
console.log("eighth question")
console.log(first);
console.log(second);

//9. Create a new array instance adding a new member at index 0,
// and keeping existing afterwards
const newdata = {
    name: 'Rakesh Srivastava',
    age: 17
  };
  
  const updatedMembers = _.concat(newdata,members); 
  console.log("ninth question")
console.log(updatedMembers);

const data = {
    name: "shubham",
    age: 35,
    city:"jaipur"
}
  
//10. Extract properties of object using destructuring
const { name, age, city } = data
console.log("tenth question")
console.log(name);
console.log(age);
console.log(city);

//11. Rename extracted property of object while destructing
const { name:newname, age:newage, city:newcity } = data
console.log("Eleventh question")
console.log(newname)
console.log(newage)
console.log(newcity)

//12. Destructure any property of an object and use spread operator
//to get remaining properties in an object
const { name: anothername, ...rest } = data
console.log("twelth question")
console.log(anothername)
console.log(rest)

//13. Create a new object by copying using spread operator, override
//     one of the properties to assign a new value in the same step
const newObject = {
    ...data,
    age: 30 
};
console.log("thirteenth question")
console.log(newObject)

//14. Use reduce function on array and object
const marks = {
    rave: 1,
    rahul:2
}
const totalAge = _.chain(marks).values().reduce((acc, member) => acc+member, 0).value();
console.log("fourteenth question")
console.log('Total Age:', totalAge);
const arr = [1, 2, 3, 4, 5];
const sum = _.reduce(arr, (acc, num) => acc + num, 0);
console.log('Sum:', sum);
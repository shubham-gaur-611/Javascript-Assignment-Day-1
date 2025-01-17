const members = [
    {name: 'Aman Makhija', age: 20},
    {name: 'Suresh Jsharma', age: 40},
    {name: 'Vijay Sahu', age: 41},
    {name: 'Rakesh Srivastava', age: 17},
    {name: 'Chandraprakash Sharma'},
    {name: 'Swpril Ahuja', age: 45},
    {name: 'Yogesh Khatri', age: 51}
  ];
// 1. Get array of first names of everyone
 
const firstNames = members.map(member => member.name.split(' ')[0]);
console.log(firstNames);

//2. Make everyone's last names in UPPERCASE in given array of objects
const secondNames = members.map(member => member.name.split(' ')[1].toUpperCase());
console.log(secondNames);

//3. Get entries where age is between 41-60
const ages = members.filter(member => member.age > 41 && member.age < 60);
console.log(ages);

//4. Get average age
const validAges = members.filter(member => member.age);
const allAges = validAges.map(member => member.age);
const averageAge = allAges.reduce((acc, age) => acc + age)/allAges.length;
console.log(averageAge);
console.log("without decimal", Math.floor(averageAge))  //35
console.log("with decimal", averageAge.toFixed(2))
console.log("with highest value proper integer", Math.ceil(35.25))


//5. Get Person with maximum age
const maxAge = allAges.reduce((acc, age) => acc > age ? acc : age);
const maxAgePerson = members.find(member => member.age === maxAge);
console.log(maxAgePerson);

// 6. Divide persons in three groups, result should look like
//     {
//       'young': [],
//       'old': [],
//       'noage': []
//     }
//     Less than 35yrs is young, above 35 is old


const lessthen35 = members.filter(member => member.age && member.age < 35 );
const morethan35 = members.filter(member => member.age && member.age > 35);
const noage = members.filter(member => !member.age);
const groups = {
    young: lessthen35,
    old: morethan35,
    noage: noage
}
console.log(groups);

//7. add a new member to same members array instance at index 2
const newMember = {
  "name": "John",
  "age": 30,
}

members.splice(2, 0, newMember);

console.log(members);


//8. extract first and second element using destructing
const [first, second] = members;

console.log(first);
console.log(second);

//9. Create a new array instance adding a new member at index 0,
// and keeping existing afterwards
const newdata = {
    name: 'Rakesh Srivastava',
    age: 17
}

const newArray = [newdata, ...members];

console.log(newArray);


const user = {
  name: "shubham",
  age: 35,
  city:"jaipur"
}
//10. Extract properties of object using destructuring
const { name, age, city } = user
console.log("tenth question")
console.log(name);
console.log(age);
console.log(city);

//11. Rename extracted property of object while destructing
const { name:newname, age:newage, city:newcity } = user
console.log("Eleventh question")
console.log(newname)
console.log(newage)
console.log(newcity)


//12. Destructure any property of an object and use spread operator
//to get remaining properties in an object

const { name: anothername, ...rest } = user
console.log("twelth question")
console.log(anothername)
console.log(rest)

// 13. Create a new object by copying using spread operator, override
//     one of the properties to assign a new value in the same step
const updatedMembers = {...user,age:30}



console.log('Updated Members:', updatedMembers);

//14. Use reduce function on array and object

const totalAge = members.reduce((acc, member) => acc + (member.age || 0), 0);
console.log('Total Age:', totalAge);
const dataa = {
  ravi:1,rahul:2
}
console.log(Object.values(dataa).reduce((acc,num)=>acc+num,0))

const arr = [1, 2, 3, 4, 5];

const sum = dataa.reduce((acc, num) => acc + num);

console.log('Sum:', sum);


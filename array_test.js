// const arr = Array.of(6)
// // console.log(arr);

// // const arr2 = Array.from(
// //     {
// //         name: "yash",
// //         age : 18,
// //         gender: "male",
// //         hobbiles: ["codeing", "running"]
// //     }
// // ) // it's not an iterable

// const hobbies =  ["codeing", "running"]
// hobbies.push("reading")

// // const pop = hobbies.pop()
// // console.log(pop);

// // hobbies[2] = "gym"
// hobbies[3] = "gym"

// hobbies.splice(1,0,"Good Food")
// console.log(hobbies);

// const testData = [{name: "Yash"}, {name : "Dev"}]
// testData.find((person) => person.name === "Dev" )
// console.log(testData);

// const  data = [1,100,34,22,89,32]
// console.log(data);
// const result = data.sort()
// console.log(result === data);

const spredLearn = [
  { name: "Yash", age: 56 },
  { name: "Dev", age: 66 },
];
const newData = [...spredLearn];
spredLearn.push({
  name: "Yuvi",
  age: 90,
});
spredLearn[0].age = 20;
// console.log(spredLearn, newData);

const data = {
  name: "yash",
  greeting: () => {
    console.log(this);
  },
  cupOfTea: function tea() {
    console.log(this);
  },
};

// const data2 = {...data}
// console.log(data2);

class A {
  functionA() {}
}

class B {
  functionB() {}
}

const b1 = new B();
b1.__proto__.__proto__ = A.prototype;

// console.log(Object.prototype.__proto__);

let userName = "Yash";

function print() {
  let name = userName;
  console.log(`username is ${name}`);
}

userName = "Dev";
// print()

// const getPosition = () => {
//   const promise = new Promise(
//     (resolve, reject) => {
//       navigator.geolocation.getCurrentPosition((success) => resolve(success));
//     },
//     (error) => reject(error)
//   );
//   return promise;
// };
// const position = getPosition()
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

const a = "" ?? 10;
// console.log(a);

let p1 = {
  name: "yash",
  greeting: function () {
    // console.log(this);

    // console.log(`Nmae is: ${this.name}`);
  },
};

let p2 = {
  name: "dev",
  age:20
};
// console.log("hii");

setTimeout(
  p1.greeting,0
)
// console.log("byyy");
let ans =0
for(let i =0 ; i<=1000000; i++){
  ans += i
}
// console.log(ans);  


// ES6 module

let arr = [1, 2, 3, 4, 5]
const b = arr.forEach((a) => {
  // console.log(a * a);  
  return a * a
})

const da = arr.map((a) => {
  // console.log(a * a);  
  return a * a
})

const studentData = [ 
  {name : "xyz", age : 20},
  {name : "abc", age : 23},
  {name : "mno", age : 17},
  {name : "def", age : 15},
]

studentData.filter((student) => {
  return student.age > 18
})

console.log(studentData);
// console.log(newStudentData);


// console.log(da);
// console.log(arr);




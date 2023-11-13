// Object have properties, properties have value


const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

// Find the person with most skill
let person_most_skill = "";
let max = 0;

for(let name in users){

    for(let properties in users[name]){
        if(properties === "skills"){
            if (users[name][properties].length > max){
                max = users[name][properties].length;
                person_most_skill = name;
            }
        }
    }
    
}

console.log(person_most_skill); // return Asab
console.log("------------");

// count users having greater than or equal to 50 points 
for(let name in users){
    for(let properties in users[name]){
        if(properties == "points"){
            let pts = users[name][properties];
            if(pts >= 50){
                console.log(name);
                console.log(pts);
                
            }
            
        }
    }
}
console.log("------------");

// Find people who are MERN stack developer from the users object (MongoDB, Express, React, Node)

for(let name in users){
    for(let properties in users[name]){
        if (properties == "skills"){
            let ar = users[name][properties];
            if(ar.includes("React") & ar.includes("MongoDB") & ar.includes("Express") & (ar.includes("Node") || ar.includes("Node.js"))){
                console.log(name);
            }
        }
    }
}

// Set your name in the users object without modifying the original users object
// make a copy, then add my info
const copy_user = Object.assign({}, users)
copy_user.Wayne = {
    email: "example@gmail.com",
    skills: ["Python", "Javascript"],
    age: 34,
}
console.log("------------");

// Get all keys or properties of users object
all_name = []
for(let name in users){
    all_name.push(name);
}
console.log(all_name);
console.log("------------");

// Get all the values of users object
// get them in a array with Object.value
let b = Object.values(users)
console.log(b)
console.log("------------");

/* ES6 Part 2
**********************/

/* Rest and Spread */

// Use the spread operator with arrays
/* const maleStudents = ["Alfredo", "Nicola", "Marco"];
const femaleStudents = ["Mariapia", "Angela", "Romina"];
// prints all strings in a single line
console.log(...maleStudents);
// prints all strings in a single line
console.log(...femaleStudents);

// merges the two arrays
const students = [...maleStudents, ...femaleStudents];
// prints the new merged array
console.log(students); */



// use the spread operator with objects

/* class Athlete {
    constructor(name, lastName, sport, status) {
        this.name = name;
        this.lastName = lastName; 
        this.sport = sport;
        this.status = status;
    }
}

let mike = new Athlete("Mike", "Tyson", "Boxe", "Retired");
console.log(mike);
mike = {...mike, age: 56 };
console.log(mike);


// Add a variable number of parameters to a function

function sum(x, y) {
    return x + y;
}
console.log(sum(4,5)); */
/* 
function sum_2(...numbers) {
    console.log(numbers);
    let total = 0;
    for (const number of numbers) {
            total+=number
    }
    return total
}
console.log(sum_2(2,3,5,7)); */

// Posizione del parametro Rest

// what if I have more numbers to sum? The Rest operator is here to help!
/* function sum_3 (...numbers, x, y) {
    console.log(numbers);
    let total = 0;
    for (const number of numbers) {
            total+=number
    }
    return total + x + y
}
console.log(sum_3(10, 2, 4, 5, 6, 7, 9)); */



/* Objects creation in ES6 */


/* let name = 'Paolo';
let age = 30;
let email = 'paolo@email.it';
 */
//es5 style sempre valido
/* const students = {
 name: name,
 age: age,
 email: email
}; */

//es6 style
/* const students = {
 name,
 age,
 email
}; */


// chiavi dinamiche 

/* const studentName = "Alessio";
const studentAge = 30;
const studentEmail = "alessio@email.it";

const ageKey = "fizz";
const student = {
    name: studentName,
    [ageKey]: studentAge,
    email: studentEmail
}

console.log(student);


console.log(student.email); */





/* Destructuring */
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// objects

/* const students = {
 firstname: 'Paolo',
 age: 30,
 email: 'paolo@email.it',
};

const {firstname, email, age} = students;
console.log(firstname);
console.log(email);
console.log(age); */


// assignment separate from declaration
/* const user = {
    name: "Martin",
    lastName: "Mcfly",
    age: 50
}

const {name, lastName, age } = user;
console.log(name, lastName, age);

let movieTitle, movieLength;
({movieTitle} = { movieTitle: "starWars", movieLength: 120 });
console.log(movieTitle, movieLength);

({movieTitle} = {movieTitle: "Ritorno al futuro"}) */


// arrays
/* const movies = ["Starwars", "Ritorno al Futuro", "Avengers"];
const [foo, , bar] = movies;

console.log(foo, bar);
 */

// assignment separate from declaration
/* let userName, userAge, rest;
[userName, userAge] = ["Fabio", 40];
console.log(userName);
console.log(userAge);

[userName, userAge, ...rest] = ["Mario", 80, "game", true]
console.log(userName);
console.log(userAge);
console.log(rest); */


/* forEach loop */
// gattini

/* const cats = [
 {name: 'Jerry', color: 'Gray'},
 {name: 'Felix', color: 'Black and White'},
 {name: 'Garfield',color: 'Orange'},
];

cats.forEach((element, indice, arrayGatti) => {
 console.log(`${element.name}'s color is ${element.color}`);
 console.log(element.name + "'s color is " + element.color);
 console.log(indice);
 console.log(arrayGatti);
}); */

/* const [obj1, obj2] = [{name: 'Jerry', color: 'Gray'},{name: 'Felix', color: 'Black and White'}]
console.log(obj1['name']);
console.log(obj2['name']); */

/* Map and Filter */

// Map usage
// Docs [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map]
// map's callback accepts 3 default parameters, the element value, the index, the original array 
// map returns an array with the results of the callback function on each iteration
/* let numbers = [1, 4, 5, 7, 8, 19];
let numbersByTwo = numbers.map((val , index) => index*2);
console.log(numbers);
console.log(numbersByTwo);

let strNumber = ["3", "5", "7"];
let toNumber = strNumber.map(Number)
console.log(strNumber);
console.log(toNumber);
 */


// Filter usage
// esempio con loop
/* let numberGreatereThanFive = []
numbers.forEach(n => {
    if(n > 5) {
        numberGreatereThanFive.push(n);
        console.log(n*3);
    }
});



// esempi con filter
const numberGreatereThan7 = numbers.filter(n => n > 7);
console.log(numberGreatereThan7);

const words = ["Star", "Sun", "Log", "Moon", "Bicycle", "Skateboard"]
const longW = words.filter(word => word.length > 5);
console.log(longW);

const longWords = words.filter(function(word){
    return word.length > 4;
});
console.log(longWords);

//let numbers = [1, 4, 5, 7, 8, 19];
let numbersByTwoFilter = numbers.filter((val) => val*2);
console.log(numbersByTwoFilter); */
// con funzione callback


/* Live Gattini */

// abbiamo dei gattini con le seguenti proprieta: name, age, color, gender

const cats = [
    {
        name: "Adam",
        age: 0.3,
        color: '#00ffff',
        gender: 'male'
    },
        {
        name: "Emily",
        age: 0.8,
        color: '#00ff00',
        gender: 'female'
    },
        {
        name: "Ibra",
        age: 1.3,
        color: '#ff6600',
        gender: 'male'
    },
        {
        name: "Briciola",
        age: 0.2,
        color: '#00ffff',
        gender: 'female'
    }
];
console.log(cats);

// selezioniamo il contenitore nella pagina
const container = document.getElementById('container');

// stampiamo in fila tutti i gattini
cats.forEach(cat => {
    const markup = `
    <div>
        <i class="fas fa-cat" style="color:${cat.color}"></i>
        ${cat.name}
    </div>
    `;
    container.insertAdjacentHTML('beforeend', markup);
    
    // option two 
  /*   container.innerHTML += `
    <div>
        <i class="fas fa-cat" style="color:${cat.color}"></i>
        ${cat.name}
    </div>
    `; */
});


// mettiamo un fiocco colorato ad ogni gattino base rosa femmine base blue maschi, il fiocco deve essere più chiaro se più giovane più scuro se più vecchio
// colori base pink = '#ff00e6, blue = '#0084ff'
// <i class="fas fa-ribbon"></i>

const pink = "#ff00e6";
const blue = "#0084ff";

// usiamo map per creare nuovo array con la nuova proprieta fiocco con a sua volta le proprietá
// color e opacify per l'intensitá del colore
const newCats = cats.map(cat => {
    const name = cat.name;
    const gender = cat.gender;
    const age = cat.age;
    const color = cat.color;
    const opacity = cat.age * 100;

    return {
        name,
        gender, 
        color,
        age,
        // option two
        // ...cat,
        ribbon : {
            color: (cat.gender === 'female') ? pink : blue,
            opacity
        }
    }
 
});
console.log(cats);
console.log(newCats);

// creiamo due array dividendo i gattini per sesso
// Inseriamoli nel rispettivo container mostrando anche il fiocco
// Inseriamo tutti i gattini in fila ordinati per sesso

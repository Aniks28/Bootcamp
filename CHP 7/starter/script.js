/* 
// Lecture: let and const

 // ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6);


// ES5
function driversLicence5(passedTest) {
    if (passedTest) {
        var firstName = 'John';
        var yearOfBirth = 1990;

    }

    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}

driversLicence5(true);

// ES6
function driversLicence6(passedTest) {
    let firstName;
    const yearOfBirth = 1990; 
    if (passedTest) {
        firstName = 'John';
        // Proof that let and const are not function-scope, but block-scope. Unlike the var option that is function-scoped.
    }

    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}

driversLicence6(true);

*/

/* // Lecture: Strings

let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;
function calcAge(year) {
    return 2020 - year;
};

// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Therefore this year, he is ' + calcAge(yearOfBirth) + ' years old.');

// ES6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Therefore today, he is ${calcAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));
console.log(n.endsWith('J'));
console.log(n.includes('oh'));
console.log(`${firstName} `.repeat(5));
*/

/* // Lecture: Arrow functions

const years = [1990, 1968, 1992, 1948];

// ES5
var ages5 = years.map(function(el){
    return 2020 - el;
});

console.log(ages5);

// ES6
let ages6 = years.map(el => 2020 -el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index+1}: ${2020-el}.`);

console.log(ages6);


ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index+1}: ${age}.`
});
console.log(ages6);
*/

/* // Lecture: Arrow functions 2

// ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        var self = this;
        document.querySelector('.green').addEventListener('click', function(){
            var str = 'This is box of ES5 has number ' + self.position + ' and it is ' + self.color;
            alert(str);
        });
    }
}
//box5.clickMe();


// ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        document.querySelector('.green').addEventListener('click', () => {
            let str = 'This is box of ES6 has number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}
//box6.clickMe();


const box62 = {
    color: 'green',
    position: 1,
    clickMe: () => {
        document.querySelector('.green').addEventListener('click', () => {
            let str = 'This is box of ES62 has number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}
box62.clickMe();


function Person(name) {
    this.name = name;
};

// ES5
Person.prototype.myFriends5 = function(friends) {
    var arr = friends.map(function(el) {
        return this.name + ' is friends with ' + el;
    }.bind(this));
    console.log(arr);
}

var friends = ['Francis', 'Istifanus', 'Eteka', 'Melody', 'Mercy'];
new Person('Aniks').myFriends5(friends);

/// ES6
Person.prototype.myFriends6 = function(friends) {
    var arr = friends.map((el) => `${this.name} is good friends with ${el}.`)
    console.log(arr);
}

new Person('Velasco').myFriends6(friends);
*/

/* // Lecture: Destructuring

// ES5
var john = ['John', 26];
var name5 = john[0];
var age5 = john[1];

// ES6
const [name6, age6] = ['Mark', 31];
console.log(age6, name6);

const obj = {
    firstName: 'Gabriel',
    lastName: 'Obi'
};

const{firstName, lastName} = obj;
console.log(firstName, lastName);

const{firstName: x, lastName: y} = obj;
console.log(`Mr ${y} ${x} shall be happy with her, Amen.`);

// ES5
function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
};

const [age, retirement] = calcAgeRetirement(1993);
console.log(age);
console.log((retirement));
*/

/* // Lecture: Arrays

const boxes = document.querySelectorAll('.box');
// This returns a node list so we'll have to transform it into an array

// ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur) {
    cur.style.backgroundColor = 'dodgerblue';
}) 

// ES6
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(curr => curr.style.backgroundColor = 'teal');

// Loops

// ES5
/*
for(var i = 0; i < boxesArr5.length; i++) {
    if(boxesArr5[i].className === 'box green') {
        continue;
    }

    boxesArr5[i].textContent = "I am on team TEAL!!!";
}
/

// ES6
for (const cur of boxesArr6) {
    if (cur.className.includes('green')) {
        continue;
    }
    cur.textContent = "I am on team TEAL!!!";
};


// ES5
var ages5 = [12, 17, 8, 21, 14, 11];
var fullAge5 = ages5.map(function(cur){
    return cur >=18;
});
console.log(fullAge5);

console.log(fullAge5.indexOf(true));

var realAge5 = function(x, y){
    var fI = x.indexOf(true);
    return y[fI];
};
console.log(realAge5(fullAge5, ages5));

// ES6
console.log(ages5.findIndex(cur => cur >= 18));
console.log(ages5.find(cur => cur >= 18));
*/

/* // Lecture: The Spread Operator

function addFourAges (a, b, c, d) {
    return a + b + c + d;
}

var sum1 = addFourAges(18, 13, 32, 17);
console.log(sum1);

// ES5
var ages = [18, 53, 32, 17];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

// ES6
const max3 = addFourAges(...ages);
console.log(max3);

const familySmith = ['John', 'Jane', 'Mark', 'Martha'];
const familyMiller = ['Mary', 'Gabriel', 'Samson', 'Serah'];
const bigFamily = [...familyMiller, 'Samuel', 'Abraham', ...familySmith];
console.log(bigFamily);


const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.color = 'teal');
*/

// Lecture: Function Parameters (Rest Parameters)

/*
/
// ES5
function isFullAge5() {
    console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);

    argsArr.forEach(function(cur) {
        console.log((2020 - cur) >= 18);
    })
}

// isFullAge5(1990, 1999, 1965);
// isFullAge5(1990, 1999, 1965, 2016, 1987);

// ES6
function isFullAge6(...years) {
    years.forEach(cur => console.log((2020 - cur) >= 18))
}

isFullAge6(1990, 2013, 1999, 2018, 1965);
// The spread operator is used in the function call, while the rest operator is used in the function declaration to exact an arbitrary number of parameters.
/

// ES5
function isFullAge5(limit) {
    console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments, 1);
    console.log(argsArr);

    argsArr.forEach(function(cur) {
        console.log((2020 - cur) >= limit);
    })
}

//isFullAge5(31, 1990, 1999, 1965);
// isFullAge5(1990, 1999, 1965, 2016, 1987);

// ES6
function isFullAge6(limit, ...years) {
    years.forEach(cur => console.log((2020 - cur) >= limit))
}

isFullAge6(18, 1990, 2013, 1999, 2018, 1965);
// The spread operator is used in the function call, while the rest operator is used in the function declaration to exact an arbitrary number of parameters.
*/

/* // Lecture: Default Parameters

// ES5
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
    lastName === undefined ? lastName = 'Smith' : lastName;
    nationality === undefined ? nationality = 'Nigerian' : nationality;
    
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
};

var john = new SmithPerson('John', 1990);

// ES6
function ElviraPerson(firstName, yearOfBirth, lastName = 'Elvira', nationality = 'South Kingdom') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
    this.age = new Date().getFullYear() - this.yearOfBirth + ' years';
};

var daermon = new ElviraPerson('Daermon', 1458);
var velasco = new ElviraPerson('Velasco', 1291, 'Pheles');
console.log(daermon);
console.log(velasco);
*/


/* // Lecture: Maps

const question = new Map();
question.set('question', 'What is the official name of the latest JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct Answer :D');
question.set(false, 'Wrong! Please try again!');

console.log(question.get('question'));
//console.log(question.size);

if(question.has(4)) {
    //question.delete(4);
    //console.log(`Yeah, it works!`);
};

//question.clear();

//question.forEach((val, key) => {console.log(`This '${val}' is set to '${key}'.`);})

for (let [key, value] of question.entries()) {
    if(typeof(key) === 'number') {
        console.log(`${key}: ${value}.`);
    }
}

const ans = parseInt(prompt('Write the correct answer'));

console.log(question.get(ans === question.get('correct')));
*/

/* // Lecture: Classes

// ES5
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear - this .yearOfBirth;
    console.log(age);
}

var gabriel5 = new Person5('Gabriel', 1991, 'Sportsman');

// ES6
class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        var age = new Date().getFullYear - this.yearOfBirth;
        console.log(age);  
    }

    static greeting() {
        console.log(`Hola Senor!`);
    }
}

const chinenye6 = new Person6('Chinenye', 1993, 'Earth Scientist');

console.log(gabriel5);
console.log(chinenye6);

Person6.greeting();
*/

/* // Lecture: Classes with subclasses

// ES5
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
};

Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function() {
    this.medals++;
    console.log(this.medals);
}
// The subclass prototype method must comme after every connection line between both function constructors

var alexAthlete5 = new Athlete5('Alex', 2000, 'Sniper', 4, 13);

alexAthlete5.calculateAge();
alexAthlete5.wonMedal();

// ES6
class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        var age = new Date().getFullYear() - this .yearOfBirth;
        console.log(age);  
    }

}

class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }
}

const ifeanyiAthlete6 = new Athlete6('Ifeanyi Mark', 1998, 'Basketballer', 4, 15);
*/

/* Coding Challenge
Parks: 
1. 3 parks
2. Tree density = number of trees/park area
3. Name of park with over 100 trees
4. Template string saying the name of the park and the 
    average tree density per square km

Streets:
1. 4 streets
2. Template string sayiing the name of the stirng as well as 
    the year it was built, and if it is either tiny, small, 
    normal, big or huge.
3. Begin initReport with summary of streets' lengths


*/ // Challenge Solution

class Structures {
    constructor (name, buildYear) {
        this.name = name;
        this.buildYear = buildYear
    }
}

class Parks extends Structures {
    constructor (name, buildYear, area, numOfTrees) {
        super (name, buildYear);
        this.area = area;
        this.numOfTrees = numOfTrees;
    }

    treeDensity() {
        const density = (this.numOfTrees / this.area).toFixed(2);
        console.log(`${this.name} has a tree density of ${density} trees per square km.`);
    }
}

class Streets extends Structures {
    constructor (name, buildYear, length, size = 3) {
        super (name, buildYear);
        this.length = length;
        this.size = size;
    }

    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name}, built in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
    }
}
const allParks = [new Parks('Phase 4 Park', 2003, 4, 87), new Parks('Federal Housing Park', 2006, 5.7, 89), new Parks('PW Park', 2000, 6.7, 116)];

const allStreets = [new Streets('NYSC Avenue', 2002, 1.1, 2), new Streets('Byazhin District', 1999, 6.1, 4), new Streets('Veterans Block', 2008, 8.5, 5), new Streets('Maroko Street', 2001, 4.4)];

function reportParks(p) {
    console.log(`------PARKS REPORT-----`);
    //Density
    p.forEach(el => {
        el.treeDensity();
    })

    // Average age
    var sum = 0;
    p.forEach(el => {
        sum += (new Date().getFullYear() - el.buildYear);
    });
    console.log(`Our ${p.length} parks have an average age of ${(sum/p.length).toFixed(2)} years.`);

    // Which has more than 100 trees
    p.forEach(el => {
        if (el.numOfTrees >= 100) {
            console.log(`${el.name} has more than 100 trees.`);
        }
    });
};

function reportStreets(s) {
    console.log(`-----STREETS REPORT-----`);
    // Total length with average size
    var sumLength = 0;
    var sumSize = 0;
    s.forEach(el => {
        sumLength += el.length;
        sumSize += el.size;
    });
    
    // Desccription
    s.forEach(el => {
        el.classifyStreet();
    });

    console.log(`Our ${s.length} streets have a total length of ${sumLength}km, with an average size of ${(sumSize / s.length).toFixed(2)}km.`);
};

reportParks(allParks);
reportStreets(allStreets);
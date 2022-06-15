//  let & const 
// use let if you want to create a variable that you would like to change.
// use const if you would like to create a variable that you do not want to change

// Example
const myName = 'Ravi';
let myName2 = 'Ravi';

// Arrow Functions
//  different syntax for writting functions.
// No more issues with the this keyword.
// when you use this in a arrow funcion it will always keep its context and not change on Runtime.
//  Example
const myFnc =() =>{
    // code in here
}

const printMyName = (name) =>{
    console.log(name);
}
printMyName('Ravi')

const printMyName2 = () =>{
    console.log('Pele')
}
printMyName2();

const printMyName3 = (name,age) =>{
    console.log(name,age);
}
printMyName3('Ronaldo', 9)


const multiply = (number) => number * 2;
console.log(multiply(2));

// Exports and Imports(Modules)
// Example
// Exports
const person = {
    name: 'John',
}
export default person
// Import
import person from './person'

// Example 2 
export const clean = () =>{
    // code 
}
export const baseData = 10;

// import - named import
import{baseData} from './utility.js'
import{clean} from './utility.js'

// Classes
// Example
class Person {
    name = 'Max'
    call = () =>{
        // code
    }
}
const myPerson = new Person()
myPerson.call()
console.log(myPerson.name);
// Example 2
class Person {
    constructor(){
        this.name = 'John';
    }
    printMyName(){
        console.log(this.name);
    }
}
const person3 = new Person();
person3.printMyName();

// Example 3 
class Human {
    constructor(){
        this.gender = 'male'
    }
    printgender(){
        console.log(this.gender);
    }
}
class Person extends Human {{
    constructor(){
        this.name = 'John';
    }
    printMyName(){
        console.log(this.name);
    }
}
const person3 = new Person();
person3.printMyName();
person3.printGender();
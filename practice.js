console.log("Hello");

// Code Structure
let a = 10;
let b = 20;
let sum = a + b;
console.log("The Sum Of the Number's is " + sum);

// Use Strict Mode
"use strict";
let x = 10;
console.log(x);

// Variables
let name = "Birundha";
let age = 20;
const pi = 3.14;
console.log(name);
console.log(age);
console.log(pi);

// Data Types

// number
let num = 10;

// string
let personName = "John";

// boolean
let student = true;

// undefined
let value;

// null
let y = null;

console.log(num);

// object
let person = {
    name: "John",
    age: 30
};

console.log(person.name);
console.log(num);
console.log(personName);

let username = "Birundha"; // string
let isage = 20; // number
let isStudent = true; // boolean
let marks = [90, 85, 70]; // array
let profile = {name: "Biru", course: "CSE"}; // object
let uniqueId = Symbol("id"); // symbol
let bigNumber = 12345678901234567890n; // bigint
let bigIntValue = 12345678901234567890n; // bigint
console.log(username);
console.log(age);
console.log(isStudent);     
console.log(marks);
console.log(profile);
console.log(uniqueId);
console.log(bigNumber);
console.log(bigIntValue);
//alert
//alert("Welcome to JavaScript!");
//prompt
//let myname = prompt("What is Your Name?");
//alert(myname);
//confirm
//let result = confirm("Do you want to proceed?");
//console.log(result);
//TypeConversion
//String-number
//Number-string
//Boolean-number
let relt =  "9"+2 +3+4;
console.log(relt);
let relt1 = 9+2+3 - 4;
console.log(relt1);
//number
let mynum = Number("123");
console.log(mynum);
//parseInt
let num1 = parseInt("123px");
console.log(num1);
//parseFloat
let num2 = parseInt("3.14");
console.log(num2);
//Boolean
let bool1 = Boolean(0);                 
console.log(bool1);
let bool2 = Boolean(1);                 
console.log(bool2);
let bool3 = Boolean("");
console.log(bool3);
let bool4 = Boolean("Hello");
console.log(bool4);
// let myage = prompt("Enter Your Age");
// let isadult = Boolean(myage>=18);
// console.log(isadult);
Number("123")
Boolean("hi")
Boolean("") //false
Boolean(0) //false
Boolean(1) //true
Boolean(-1) //true
Boolean(null) //false
Boolean(undefined) //false
console.log(Boolean("hi"));
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(-1));
console.log(Boolean(null));
console.log(Boolean(undefined));
String(true) // "true"
String(false) // "false"
String(123) // "123"
String(null) // "null"
String(undefined) // "undefined"
console.log(String(true));
console.log(String(false));
console.log(String(123));
console.log(String(null));
console.log(String(undefined));
let isname = "1";
if(isname){
    console.log("ok");
}
let iasname = "";
if(iasname){
    console.log("ok");
}
if(iasname){
    console.log("ok");
}else{
    console.log("not ok");
}
let mymarks = 85;
if(mymarks >= 90){
    console.log("Grade A");
} else if(mymarks >=50){
    console.log("Pass");
}
else{
    console.log("Grade B");
}
let atnum = 10;
if(atnum > 5){
    console.log("Greater than 5");
}else{
    console.log("Less than or equal to 5");
}
let num4 = 7;
if(num4 <= 5){
    console.log("Greater than 5");
} else {
    console.log("Less than 5");
}
let num5 = 100;
if(num5 > 14){
    console.log("Big");
}else if(num5 >= 100){
    console.log("Medium");
}else{
    console.log("Small");
}
let value2="";
if(value2){
    console.log("value is true");
}else{
    console.log("value is not true");
}
let value3 = 95;
if(value3 >= 90){
    console.log("Grade A");
}
else{
    console.log("Grade B");
}
//basic Operators (Math Operators)
let num6 = 10;
let num7 = 5;
//addition
let result3 = num6 + num7;
console.log(result3);
//subtraction
let result4 = num6 - num7 ;
console.log(result4);
// multiplication
let result5 = num6*num7;
console.log(result5);
// division
let result6 = num6/num7;
console.log(result6);
// modulus
let result7 = num6%num7;
console.log(result7);
// exponentiation
let result8 = num6 ** num7;
console.log(result8);
//increment
let a1 = 5;
a1++;
//decrement
console.log(a1);
a1--;
console.log(a1);
//comparison operators
//greater than
5>3
//less than
5<3
//greater than or equal to
5>=5
//less than or equal to
5<=5
//equality
5==5//loose equality
5===5//strict equality
let atmarks = 85;
if(atmarks >= 90){
    console.log("Grade A");
}
let num8 = 4;
if(num8 % 6== 0){
    console.log("Even");
}else{
    console.log("odd");
}
//other way
let result9 = num8 % 2 == 0 ? "Even" : "odd";
console.log(result9);
//conditional branching
//multiple conditions checking
let day = "Tuesday";
switch(day){
    case "Monday":
        console.log("Today is Monday");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    default:
        console.log("Today is not Monday or Tuesday");
}
let day1 = 2;
switch(day1){
    case 1:
        console.log("Today is monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    default:
      
    console.log("Today is not Monday Or Tuesday");
}
//logical operators
//AND
let age3 = 20;
let hasID = true;
if(age3 >= 18 && hasID){
    console.log("You can enter the club");
}
//OR
let isadmin = false;
let isadmin2 = true;
if(isadmin || isadmin2){
    console.log("You have admin access");
}
//NOT
let isloggin = false;
if(!isloggin){
    console.log("You are not Logged In");
}
//Exam pass AND
let score = 85;
let attendance = 90;
if(score >=50 && attendance >= 75){
    console.log("You Passed the Exam");
}else{
    console.log("You Failed the Exam");
}
// Login OR
let email = true;
let password = false;
if(email || password){
    console.log("Login Successful");
}else{
    console.log("Login Failed");
}
//Logout Button NOT
let islogin2 = true;
if(!islogin2){
    console.log("Show Login Button");
}else{
    console.log("Show Logout Button");
}
//Nullishing Operator
let name9 = null;
let result10 = name9 ?? "Guest";
console.log(result10);
//example for Nullishing Operator 
let username2 = null;
let displayname = username2 ?? "Anoymous";
console.log(displayname);
// example 
let marks4 = 0;
let finalmarks = marks4 ?? 50;
console.log(finalmarks);
//example
let value4 = undefined;
let atresult = value4 ?? "Default Value";
console.log(atresult);
//Loops //#i-->4
for(let i=1; i<5; i++){
    console.log("i");
}
//while loop
let j=1;
while(j<=5){
    console.log("j");
    j++;
}

//infinite loop 
// while(true){
//     console.log("This is an infinite loop");
// }

//for loop
for(let i=1; i<=5; i++){
    console.log("i");
}
//while loop
let i=5;
while(i>=1){
    console.log(i);
    i--;
}
//for loop decrement
for(let i=5; i>=1; i--){
    console.log(i);
}
//for loop increment
for(let i=1; i<=5; i++){
    console.log(i);
}
// countdown 5 less than or equal to 1
let k = 5;
while(k>0){
    console.log(k);
    k--;
}
//countdown 1 less than or equal to 5
let m = 1;
while(m<=5){
    console.log(m);
    m++;
}
//table of 5*1 to 10
let num9 = 5;
for(let i=1; i<10; i++){
    console.log(num9 * i);
}
//sum of numbers 1 to 10
let sum1 = 0;
for(let i=1;i<=10; i++){
    sum1 += i;
}
console.log(sum1);
//switch statement
let fix = 9;
switch (fix){
    case 1:
        console.log("value is 1");
        break;
        case 2:
            console.log("value is 2");
            break;
            default:
                console.log("value is not 1 or 2");
}
//example for switch statement // without break 
let day5 = 2;
switch(day5){
    case 1:
        console.log("Monday");
        
    case 2:
            console.log("Tuesday");
            
    case 3:
            console.log("Wednesday");
    case 4:
            console.log("Thursday");
    case 5:
            console.log("Friday");
    default:
                console.log("Invalid");
}
//multiple case 
let day9 = 6;
switch(day){
    case 6:
    case 7:
        console.log("Weekend");
        break;
    default:
        console.log("Weekday");
}    
//Functions //add
function add(a,b){
    console.log(a+b);
}
add(2,3);
add(4,5);
add(6,7);
//example 
function greet(){
    console.log("Hello Birundha");
}
greet();
function add(a,b){
    console.log(a+b);
}
add(5,3);
//return function
function add(a,b){
    return a+b;
}
let result0 = add(2,3);
   console.log(result0);

function test(){
    return 10;
    console.log("hi");
}
console.log(test());
 //example 
//  let name30 = "tharuni";
//  function greet(){
//     console.log("Hello " + name30);
//  }
//  greet();
 //function Expression
let isAdmin = true;
let greet3 = isAdmin
 ? function(){console.log("Admin")}
 : function(){console.log("User")};
 greet3();
 //function Expression
            // let greet = function(){
            //     console.log("Hi");
            // }
            // greet();

 // Arrow Functions
 const nam =()=>{
    console.log("harinie");
 }
 nam();

 //function In Arrow
    function add(a,b){
        return a+b;
    }
    console.log(add(2,3));

//simple add 
    const add = (a,b) => a+b;
    console.log(add(2,3));

    // One Parameter
    const square = x => x*x;
    console.log(square(4));

    //No parameter
    const sayHi = () => console.log("hi");
    sayHi();

    //one line 
    const add = (a,b) => a+b;

    //Multiple lines 

    const add = (a,b) => {
        let result = a + b;
        return result;
    }

    // one parameter()

    const square2 = x=> x*x;
    






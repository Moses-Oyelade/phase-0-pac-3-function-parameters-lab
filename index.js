//Function of a parameter
function introduction(name){
    return `Hi, my name is ${name}`;
}
console.log(introduction("Alfred"));

//Function of two paremeters
function logTwoValues(value1, value2){
    console.log(`The two values are ${value1} and ${value2}.`);
}
    logTwoValues(1939, 1967);

//Second test of function of two parameters
function introductionWithLanguage(name, language){
    return `Hi, my name is ${name} and i am learning to program in ${language}.`
}
console.log(introductionWithLanguage("Moses", "JavaScript"));

//Function that uses Optional parameter
function sayHelloTo(firstName = "User"){
    console.log(`Hello, ${firstName}!`);
}
    sayHelloTo();
    sayHelloTo("James");
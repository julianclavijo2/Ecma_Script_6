//javascript version anterior
function newFunction(name , age , country) {
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name , age , country);
}
//es6 (inicializacion variables)
function newFunction2(name='oscar' , age=32 , country = 'MX'){
 console.log(name , age , country);
}
newFunction2();
newFunction2('Ricardo' , '23' , 'CO');

//javascript version anterior 
let hello = "Hello";
let world = "World";
let phrase = hello + ' ' + world;
console.log(phrase);

//es6 (Template literals)
let phrase2 = `${hello} ${world}`;
console.log(phrase2);

//javascript version anterior 
let lorem = "Neque porro quisquam est qui dolorem ipsum quia dolor \n"
"sit amet, consectetur, adipisci velit...";
let lorem2 = `Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, 
consectetur, adipisci velit...`;
//es6 (salto de linea)
console.log(lorem);
console.log(lorem2);

//javascript version anterior 
let person = {
    name : 'oscar',
    age: 32 ,
    country : 'MX'
}
console.log(person.name , person.age);
//es6 (Desestructuración)
let { name , age } = person;
console.log(name , age );

//javascript version anterior 
let team1 = ['oscar' , 'julian' , 'ricardo'];
let team2 = ['valeria' , 'jessica' , 'camila'];

let education1 = ['david' , 'oscar' , 'julian' , 'ricardo',
'valeria' , 'jessica' , 'camila'
]
console.log(education1);
//es6 (operador de propagacion - unir arrays)
let education2 = ['david',...team1, ...team2];
console.log(education2); 

//javascript version anterior //es6 ( let:Only Scope  , var: Global)
{
    var globalVar = 'Global Var';
}
{
    let globalLet = 'Global Let';
}
console.log(globalVar);
console.log(globalLet);

//javascript version anterior
let nombre = 'oscar';
let edad = 32;
obj = {nombre:nombre , edad:edad};
//es6( creacion de objetos)
obj2 = {nombre , edad};
console.log(obj2);

//javascript version anterior

const names = [
    { name : 'Oscar' ,  age : 32 },
    { name : 'yesica' , age : 27}
]

let listNames = names.map( function (item){
    console.log(item.name);
})


//es6 (arrow Functions)

let listNames2 = names.map( item => console.log(item.name));

let listNames3 = names.map( item => console.log(item.name));

//es6 (OTROS EJEMPLOS de arrow Functions)
//pasando tres parametros a una arrow function
const listNames4 = (name , age , country) =>{
    console.log(name);
}

const listNames5 = name =>{
    console.log(name);
}
//pasando un parametro a una arrow function
const square = num => num * num; 





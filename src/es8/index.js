//es8 (convierte objetos a un array con la palabra Object)
const data = {
    frontend : 'Oscar',
    backend : 'Isabel',
    design : 'Ana'
}

const entries = Object.entries(data);
console.log(entries);

const values = Object.values(data);
console.log(values);

//es8 (Añadir string s otro string al final o al comienzo)

const string = 'hello';
console.log(string.padStart('7' , 'hi'));
console.log(string.padEnd('12' , '----------'));

//es8 async y await

 const helloWorld = () => {
    return new Promise(
        (resolve , reject) => {
        (false)
        ? setTimeout(() => resolve('Hello') , 3000)
        :
        reject(new Error('Test error'));
 })
 }

 const hello = async () =>{
    const hello = await  helloWorld();
    console.log(hello);
 }
 
 console.log(hello());

 const anotherFunction = async ()=>{
    try{
        const hello = await helloWorld();
        console.log(hello);
    }
    catch (error){
        console.log('muy mal ! '+error);
    }
 }

 anotherFunction();
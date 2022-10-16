
//es11 (dinamic imports)
const button = document.getElementById('btn-fire');

button.addEventListener('click' , async function(){
 const module = await import('./file.js');
 module.hello();
}
)
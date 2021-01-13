// Your code goes here
//event Type - Mouse Over - 
/*EVENT 1 and 2 (mouseOver and mouseOut)
when cursor goes on any of the nav list it will change the color of nav text
and when cursor goes away it set back to the black.*/
let navLink = document.querySelectorAll('.nav-link');
navLink.forEach(item => {
    item.addEventListener('mouseover', () => {
       item.style.color = 'red';
    })
 })

 navLink.forEach(item => {
     item.addEventListener('mouseout', () => {
         item.style.color = 'blue';
     })
 })

 /*EVENT 3 (dblclick)
 //make event little larger when mouse clicked twice in a short span of time*/
 let imgs = document.querySelectorAll('img');
 imgs.forEach(item => {
     item.addEventListener('dblclick', () =>{
         item.style.width = '200px';  
         item.style.height = 'auto';   
     })
 })

 /*EVENT 4 (select)
 selecting words with select event*/
/*let selection = document.querySelector('.container');
selection.addEventListener('select', (event)=>{
    const words = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    console.log(selection.textContent = `selected words are:  ${words}`);
})*/

/*EVENT 5 (focus)*/
const button = document.querySelectorAll('.btn');
// /*button.forEach(item => {
//     item.addEventListener('focus', (event) =>{
//         event.target.style.background = 'green';
//     }) 

// })*/
button.addEventListener('focus', (event) => {
    event.target.style.color = 'green';
})




 
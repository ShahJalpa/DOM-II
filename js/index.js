// Your code goes here
//event Type - Mouse Over - 
//when cursor goes on any of the nav list it will change the color of nav text
//and when cursor goes away it set back to the black.
let navLink = document.querySelectorAll('.nav-link');
navLink.forEach(item => {
    item.addEventListener('mouseover', () => {
       item.style.color = 'red';
    })
 })

 navLink.forEach(item => {
     item.addEventListener('mouseout', () => {
         item.style.color = 'black';
     })
 })

 //make event little larger when mouse clicked twice in a short span of time
 let img = document.querySelectorAll('.img-content');
 img.forEach(item => {
     item.addEventListener('dblclick', () =>{
         item.classList.toggle('large');
     })
 })



 
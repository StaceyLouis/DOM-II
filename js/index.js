// Your code goes here
let container = document.querySelector('.container');
let main = document.querySelector('.intro');
let bodyA = document.querySelector('body');
let button = document.createElement('button');
button.textContent = "Change Theme";
button.style.backgroundColor = "#f0f0f0";
button.style.padding = "1%";
container.appendChild(button);
button.addEventListener("click", () => {
    bodyA.classList.toggle('darkmode');
  
  });
  let links = document.getElementsByClassName('nav-link');
  links.addEventListener('click', (event) => event.preventDefault());
  
 

  let nav = document.querySelector('nav');

  let img = document.querySelector('.intro img');

  
  img.addEventListener("mouseover", () => {
    main.style.backgroundColor = 'red';
  });


  img.addEventListener("mouseout", () => {
    main.style.backgroundColor = 'white';
  });

  let text = document.querySelector('.footer p');
  window.addEventListener("scroll", () => {
    text.style.backgroundColor = "gray";
  });


let imgA = document.querySelector(".img-content img")
let textA = document.querySelector('.content-section .text-content');
  imgA.addEventListener("load", () => {
    textA.style.backgroundColor = "black";
    textA.style.color = "white";
    
  });


  window.addEventListener("dblclick", () => {
    document.body.remove();
  });
  window.addEventListener("resize", () => {
    alert("dont resize me");
  });

 



  let h2 = document.querySelector('h2');
  let buttonA = document.querySelector('.logo-heading');
  bodyA.addEventListener("keypress", () => {
    buttonA.style.backgroundColor="black";
  });


 
 
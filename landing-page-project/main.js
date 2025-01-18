const btn = document.querySelector(".btn");
const navbarB = document.querySelector(".navbar-h")
const icon = document.createElement("i");

icon.classList.add("fa-solid", "fa-bars");

btn.appendChild(icon);

btn.addEventListener('click' , ()=>{
  if(!navbarB.classList.contains('opened')){
    navbarB.classList.remove("closed")
    navbarB.classList.add('opened')
  }else{
    navbarB.classList.remove('opened')
    navbarB.classList.add("closed")  
  }
})



const btn = document.querySelector(".btn");
const navbarB = document.querySelector(".navbar-h")
const icon = document.createElement("i");

icon.classList.add("fa-solid", "fa-bars");

btn.appendChild(icon);

btn.addEventListener('click' , ()=>{
  if(!navbarB.classList.contains('opened')){
    navbarB.classList.remove("closed")
    navbarB.classList.add('opened')
    icon.classList.remove('fa-bars');
    icon.classList.add("fa-xmark");
  }else{
    navbarB.classList.remove('opened')
    navbarB.classList.add("closed")  
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars")
  }
})



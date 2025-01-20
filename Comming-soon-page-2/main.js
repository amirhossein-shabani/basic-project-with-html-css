const counDate = new Date("Jan 1, 2025 00:00:00").getTime();

function newYear(){
  const now = new Date().getTime();
  const  gap = counDate - now ; 

  const second = 1000 ; 
  const minute = second * 60 ; 
  const hour = minute * 60 ; 
  const day = hour * 24 ; 

  const d = Math.floor(gap / (day)) ;
  const h = Math.floor((gap % (day)) / (hour));
  const m = Math.floor((gap % (hour)) / (minute));
  const s = Math.floor((gap % (minute)) / (second));
}

setInterval(function(){
  newYear()
},1000) ; 

const nBox = document.querySelector('.n-box');
const newsletter = document.querySelector('.newsletter');
const section = document.querySelector('.sec')



nBox.addEventListener('click' , (event)=>{
  event.stopPropagation();
  newsletter.classList.toggle('active');
} )


section.addEventListener('click', (event)=>{
  if(!newsletter.contains(event.target)){
    newsletter.classList.remove('active');
  }
})

nBox.addEventListener('click' , (event)=>{
  event.stopPropagation();
})



const nBox = document.querySelector('.n-box');
const newsletter = document.querySelector('.newsletter');
const section = document.querySelector('.sec')
const closeI = document.querySelector('.close');
const dayH = document.getElementById("day");
const hourH = document.getElementById('hour');
const minuteH = document.getElementById('minute');
const secondH = document.getElementById('second');
const counDate = new Date("Jan 1, 2026 00:00:00").getTime();


// --- creat-timmer --- 


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

  dayH.innerHTML = d ;
  hourH.innerHTML = h ;
  minuteH.innerHTML = m ;
  secondH.innerHTML = s  ;

}

setInterval(function(){
  newYear()
},1000) ; 


// -----newsletter-box-controll -------- 


nBox.addEventListener('click' , (event)=>{
  event.stopPropagation();
  newsletter.classList.toggle('active');
} )


section.addEventListener('click', (event)=>{
  if(!newsletter.contains(event.target)){
    newsletter.classList.remove('active');
  }
})

closeI.addEventListener('click' , (e)=>{
  newsletter.classList.remove('active');
}) 


nBox.addEventListener('click' , (event)=>{
  event.stopPropagation();
})



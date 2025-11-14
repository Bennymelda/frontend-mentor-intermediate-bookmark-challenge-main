
/*
let button =document.querySelector('.us')
button.addEventListener('click', ()=>{
  console.log(button)
let input=document.querySelector("input")

  let inputs= input.value
  let regex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/
 let wrongFormat= !regex.test(inputs)
 if(wrongFormat){
  
  input.style.border="2px solid red"
  button.style.border="2px solid grey"
  button.style.backgroundColor="white"
  button.style.color='red'
  document.querySelector('.none').style.display='block'
  document.querySelector('.error').style.display='block'
 }else{
  input.style.border="none"
  button.style.border="none"
  button.style.backgroundColor="red"
  button.style.color='white'
  document.querySelector('.none').style.display='none'
  document.querySelector('.error').style.display='none'
 }
input.value=''
})



let icon =document.getElementById('rrow')
icon.addEventListener('click', ()=>{
 let dropdown= document.getElementById('p')
  if(icon.src.endsWith('icon-arrow.svg')){
icon.src='icon-close.svg'
dropdown.style.display="block"
  }else{
    icon.src='icon-arrow.svg'

dropdown.style.display='none'

  }

})

     
let icons =document.getElementById('are')
icons.addEventListener('click', ()=>{
 let drop= document.getElementById('pp')
  if(icons.src.endsWith('icon-arrow.svg')){
icons.src='icon-close.svg'
drop.style.display="block"
  }else{
    icons.src='icon-arrow.svg'

drop.style.display='none'

  }

})


let ico =document.getElementById('arr')
ico.addEventListener('click', ()=>{
 let down= document.getElementById('ppp')
  if(ico.src.endsWith('icon-arrow.svg')){
ico.src='icon-close.svg'
down.style.display="block"
  }else{
    ico.src='icon-arrow.svg'

down.style.display='none'

  }

})



let con =document.getElementById('row')
con.addEventListener('click', ()=>{
 let own= document.getElementById('pppp')
  if(con.src.endsWith('icon-arrow.svg')){
con.src='icon-close.svg'
own.style.display="block"
  }else{
    con.src='icon-arrow.svg'

own.style.display='none'

  }

})
 

//hamburger menu
let menu =document.querySelector('.humburger')
let link=document.querySelector('ul')
menu.addEventListener('click', ()=>{
if(menu.src.endsWith('icon-hamburger.svg')){
  menu.src='icon-close.svg'
  link.style.display='flex'
}else{
  menu.src='icon-hamburger.svg'
  link.style.display='none'
}
})
*/
let array=[{
  id:1,
  img:'illustration-features-tab-1.svg',
  name:'Bookmark in one click',
  desc:'Organize your bookmarks however you like.Our simple drag-and-drop interfaces gives you complete control over how you manage your favourites sites.'
},{
  id:2,
  img:'illustration-features-tab-2.svg',
  name:'Intelligent Search',
  desc:'our powerful search features will help you saved sites in no time at all. No need to trawl through all of your bookmarks.'
},{
  id:3,
  img:'illustration-features-tab-3.svg',
  name:'Share your bookmarks',
  desc:'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.'
}]


function indexs(index){
let total=''
  let items= array[index]
   total+= `<div class="widhs">

    <div class="widthss">
    <div class='background'></div>
   <img src=${items.img} alt="illustration image" class="imgs">
   </div> 
  </div>

  <div class="six">
  <span class="h">${items.name}</span><br><br>
   <span class="sp">${items.desc}</span>
    <br>

      <button class="buton">More info</button>
          </div>`
   document.querySelector('.five').innerHTML=total
}
indexs(0)

 let boxss= document.querySelector('.shape')
 boxss.addEventListener('click', ()=>{
indexs(0)
 })

 let boxs= document.querySelector('.shae')
 boxs.addEventListener('click', ()=>{
indexs(1)
 })


 let box= document.querySelector('.shap')
 box.addEventListener('click', ()=>{
indexs(2)
 })



let button =document.querySelector('.us')
button.addEventListener('click', ()=>{
  console.log(button)
let input=document.querySelector("input")

  let inputs= input.value
  let regex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/
 let wrongFormat= !regex.test(inputs)
 if(wrongFormat){
  
  input.style.border="2px solid red"
  button.style.border="2px solid grey"
  button.style.backgroundColor="white"
  button.style.color='red'
  document.querySelector('.none').style.display='block'
  document.querySelector('.error').style.display='block'
  document.querySelector('.error').style.marginTop='-10px'

 }else{
  input.style.border="none"
  button.style.border="none"
  button.style.backgroundColor="red"
  button.style.color='white'
  document.querySelector('.none').style.display='none'
   
  document.querySelector('.error').style.display='none'
 }
input.value=''
})


  const faqs = document.querySelectorAll('.faq');

  faqs.forEach(faq => {
    faq.querySelector('.question').addEventListener('click', () => {

      // Close all other FAQ blocks
      faqs.forEach(other => {
        if (other !== faq) {
          other.querySelector('.answer').style.display = 'none';
          other.querySelector('.arrow-down').style.display = 'inline';
          other.querySelector('.arrow-up').style.display = 'none';
        }
      });

      const answer = faq.querySelector('.answer');
      const arrowDown = faq.querySelector('.arrow-down');
      const arrowUp = faq.querySelector('.arrow-up');

      // Toggle the clicked one
      if (answer.style.display === 'block') {
        answer.style.display = 'none';
        arrowDown.style.display = 'inline';
        arrowUp.style.display = 'none';
      } else {
        answer.style.display = 'block';
        arrowDown.style.display = 'none';
        arrowUp.style.display = 'inline';
      }
    });
  });




//hamburger menu

let menu =document.querySelector('.humburger')
let link=document.querySelector('nav')
let lin =document.querySelector('.links')
menu.addEventListener('click', ()=>{
if(menu.src.endsWith('icon-hamburger.svg')){
  menu.src='icon-close.svg'

  link.style.display='flex'
  link.classList.add('show')
}else{
  menu.src='icon-hamburger.svg'
  link.style.display='none'
  lin.style.backgroundColor='transparent'
  link.classList.remove('show')
}
})

const tabs=document.querySelectorAll('.plus')
tabs.forEach(tab =>{
  tab.addEventListener('click', () =>{
    tabs.forEach(t =>
      t.classList.remove('active-tab')
    )
    tab.classList.add('active-tab')
  })
})

const currentPage = window.location.pathname.split("/").pop();
const links = document.querySelectorAll ('ul a')
links.forEach(link =>{
  const linkPage = link.getAttribute('href')
  if(linkPage === currentPage){
    link.classList.add('active')
  }
})

const featuresLink = document.getElementById('features-link');
const pricingLink = document.getElementById('pricing-link');
const contactLink = document.getElementById('contact-link');

const featuresSection = document.getElementById('features');
const pricingSection = document.getElementById('pricing');
const contactSection = document.getElementById('contact');

featuresLink.addEventListener('click', () => {
  featuresSection.scrollIntoView({ behavior: 'smooth' });
});

pricingLink.addEventListener('click', () => {
  pricingSection.scrollIntoView({ behavior: 'smooth' });
});

contactLink.addEventListener('click', () => {
  contactSection.scrollIntoView({ behavior: 'smooth' });
});

const loginBtn=document.getElementById('loginBtn')
const loggedInUser=JSON.parse(localStorage.getItem('currentUser'))

if(loggedInUser){
  loginBtn.textContent='Logout';
  loginBtn.onclick = () =>{
    localStorage.removeItem('currentUser')
    alert('logged out successfully')
    location.reload()
  }
}else{
  loginBtn.onclick =() =>{
    window.location.href='login.html'
  }
}


const menuItems=document.querySelectorAll('.menu-item')
menuItems.forEach(item=>{
  item.addEventListener('click', () =>{
    menuItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active')
  })
})

const currentUser = JSON.parse(localStorage.getItem("currentUser"));

function message(toast){
  const toas=document.getElementById('welcomeMessage')
  toas.textContent=toast
  toas.classList.add('show')
  setTimeout( ()=> {
     toas.classList.remove('show')
  }, 3000)
}

if (currentUser) {
  
    message(`Welcome, ${currentUser.name}!`);
} else {
  // If user is not logged in, send them to sign in page
  window.location.href = "login.html";
}


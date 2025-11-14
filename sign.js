

const form = document.getElementById('signupForm')
form.addEventListener('submit', function(e){
  e.preventDefault()
  const name=document.getElementById('name').value.trim()
  const username=document.getElementById('username').value.trim()
  const email=document.getElementById('email').value.trim()
  const password=document.getElementById('password').value.trim()
  const confirmPassword=document.getElementById('confirmPassword').value.trim()

  if (!name || !username || !email || !password || !confirmPassword){
    message('all field are required')
    return
  }
  const emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/
  if(!email.match(emailPattern)){
    message('enter a valid email')

    return
  }
  if(password !== confirmPassword){
    message('password mismatching')
    return
  }
  const user ={
    name,
    username,
    email,
    password
  }
  localStorage.setItem('user', JSON.stringify(user))
  form.reset()
  window.location.href="login.html"
})
let password=document.querySelector('.input')
let save=document.getElementById('password')
password.addEventListener('click', ()=>{
if(password.checked){
  save.type='text'
}else{
  save.type='password'
}
})

let passwords=document.querySelector('.inputs')
let saves=document.querySelector('.passwords')
passwords.addEventListener('click', ()=>{
if(passwords.checked){
  saves.type='text'
}else{
  saves.type='password'
}
})
function message(toast){
  const toas=document.querySelector('.toast')
  toas.textContent=toast
  toas.classList.add('show')
  setTimeout( ()=> {
     toas.classList.remove('show')
  }, 3000)
}

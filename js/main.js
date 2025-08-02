const mainHeader = document.querySelector('h1')
mainHeader.addEventListener('mouseover', () => {
    mainHeader.style.color = 'red'
})
mainHeader.addEventListener('mouseout', () => {
    mainHeader.style.color = 'blue'
})

const loginForm = document.getElementById('login-form')
loginForm.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('Попытка отправки формы!')
})

mainHeader.textContent = 'Мой первый проект на Git!'
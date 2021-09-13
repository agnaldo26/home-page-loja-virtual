const btnBuy = document.getElementsByClassName('btn-buy');
const form = document.getElementById('register-email');
const newsDeskOff = document.getElementById('news-desk-off');
const btnSubmit = document.getElementById('submit');
const inputName = document.getElementById('name')
const confirmationRegister = document.getElementById('confirmation-register')
const titleConfirmationRegister = document.getElementById('title-confirmation-register');
const btnReset = document.getElementById('btn-reset')



window.onload = ()=>{
    confirmationRegister.style.removeProperty('display');
    confirmationRegister.style.display = 'none';
    newsDeskOff.style.removeProperty('display');
    newsDeskOff.style.display = 'flex';
}

form.addEventListener('submit', (e)=>{
    titleConfirmationRegister.innerHTML = `Olá ${inputName.value}, seu e-mail foi cadastrado com sucesso!`;
    newsDeskOff.style.removeProperty('display');
    newsDeskOff.style.display = 'none';
    confirmationRegister.style.removeProperty('display');
    confirmationRegister.style.display = 'flex';
    e.preventDefault();
})

btnReset.addEventListener('click', ()=>{
    confirmationRegister.style.removeProperty('display');
    confirmationRegister.style.display = 'none';
    newsDeskOff.style.removeProperty('display');
    newsDeskOff.style.display = 'flex';
    window.location = "#register-email"
})
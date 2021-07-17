const botao = document.querySelector('.button-1');
const nome = document.querySelector('.nome');
const email = document.querySelector('.email');

function test() {
    return false;
}
botao.addEventListener('click', function() {
    const capturedName = nome.value;
    const capturedEmail = email.value;
    localStorage.setItem(capturedName, capturedEmail) 
    document.querySelector('.button-1').style.backgroundColor = '#5FF0A0';
    alert('Email cadastrado com sucesso!');
})
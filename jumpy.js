const form = document.querySelector("#form")
const usenameInput = document.querySelector("#usename")
const emailInput = document.querySelector("#email")
const phoneInput = document.querySelector("#phone")
const cpfInput = document.querySelector("#cpf")
const passwordInput = document.querySelector("#password")

var textoCampo = document.querySelectorAll(".textoCampo")
var textoGeral = document.querySelector("#textoGeral")
let check = true

form.addEventListener("submit", (Event) => {
  Event.preventDefault();
    verificar();
})
verificar = () =>{
    if(usenameInput.value.length === 0){
        textoCampo[0].innerHTML = "*Campos Obrigatórios!*"
        check = false;
    }
    if(emailInput.value.length === 0){
        textoCampo[1].innerHTML = "*Campos Obrigatórios!*"
        check = false;
    }
    if(phoneInput.value.length === 0){
        textoCampo[2].innerHTML = "*Campos Obrigatórios!*"
        check = false;
    }
    if(cpfInput.value.length === 0){
        textoCampo[3].innerHTML = "*Campos Obrigatórios!*"
        check = false;
    }
    if(passwordInput.value.length === 0){
        textoCampo[4].innerHTML = "*Campos Obrigatórios!*"
        check = false;
    }
    if(!check){
        textoGeral.innerHTML = "*Campos obrigatórios não registrados!*" 
        } else {
            textoGeral.style.color = "#0F7B0F"
            textoGeral.innerHTML = "Sucesso!"
            setTimeout(form.reset(true));
        }
    }
// VARIAVEIS

const editar = document.getElementById('editar');
const nome = document.getElementById('nome');
const imagem = document.getElementById('imagem');
let inputCriado = false;

const menu = document.getElementById('menu')
const lista = document.querySelector('ul')
//EVENTOS
menu.addEventListener('click', togglemenu)
// FUNCOES 
editar.addEventListener('click', () => {
  if (!inputCriado) {
    nome.style.display = 'none';
    const input = document.createElement('input');
    input.type = 'text';
    input.value = nome.textContent;
    input.style.border = 'none';
    input.style.textAlign = 'center';
    input.style.fontFamily ='Inter';
    input.style.fontSize = '1.5em';
    input.style.fontWeight = 'bolder';
    input.style.outline = '0';
    input.style.textDecoration = 'underline';
    input.maxLength = '10'

    nome.parentNode.insertBefore(input, nome);

    input.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();

        nome.textContent = input.value;

        input.remove();

        nome.style.display = 'block';

        inputCriado = false;
      }
    });

    inputCriado = true;
  }
});

function togglemenu(){
  if(lista.style.display === 'none'){
    lista.style.display = 'block';
  } else{
    lista.style.display = 'none';
  }
}





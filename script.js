const editar = document.getElementById('editar');
const nome = document.getElementById('nome');

editar.addEventListener('click', () => {

  nome.style.display = 'none';
  const input = document.createElement('input');
  input.type = 'text';
  input.value = nome.textContent;
  input.style.border = 'none'
  input.style.textAlign = 'center'
  input.style.fontFamily ='Inter'
  input.style.fontSize = '1.6em'

  nome.parentNode.insertBefore(input, nome);

  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();

      nome.textContent = input.value;

      input.remove();

      nome.style.display = 'block';
    }
  });
});

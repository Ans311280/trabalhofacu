document.getElementById('motivationButton').addEventListener('click', function() {
    const messageContainer = document.getElementById('messageContainer');
    const message = document.createElement('p');
    message.textContent = 'Acredite nos seus sonhos e conquiste seus objetivos!';
    messageContainer.innerHTML = ''; // Limpa qualquer mensagem anterior
    messageContainer.appendChild(message);
});
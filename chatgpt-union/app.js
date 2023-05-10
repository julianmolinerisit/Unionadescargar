const form = document.getElementById('my-form');
const modal = document.getElementById('modal');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Mostrar el modal
  modal.style.display = 'block';

  const formData = new FormData(form);

  fetch('/submit', {
    method: 'POST',
    body: formData
  })
  .then(response => response.text())
  .then(data => {
    // Ocultar el modal y mostrar la respuesta
    modal.style.display = 'none';
    window.location.href = '/historia';
  })
  .catch(error => {
    // Ocultar el modal y mostrar el error
    modal.style.display = 'none';
    alert(error.message);
  });
});

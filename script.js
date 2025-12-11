/* ---------- FORMULARIO ---------- */

const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    status.textContent = "Por favor, completa todos los campos.";
    status.style.color = "red";
    return;
  }

  status.textContent = "Enviando mensaje...";
  status.style.color = "#034f84";

  const templateParams = {
    from_name: name,
    from_email: email,
    message: message,
    title: 'Nuevo mensaje desde la web'
  };
  
  emailjs.send('service_w275uv9', 'template_2942636', templateParams)
    .then(() => {
      status.textContent = `Gracias ${name}, tu mensaje ha sido enviado correctamente.`;
      status.style.color = "green";
      form.reset();
    })
    .catch(error => {
      status.textContent = "Error al enviar el mensaje.";
      status.style.color = "red";
      console.error("EmailJS error:", error);
    });
});

/* ---------- HEADER DINÁMICO ---------- */

let lastScroll = window.scrollY;
const header = document.querySelector('.site-header');

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;

  if (currentScroll > lastScroll && currentScroll > 120) {
    header.classList.add('header-hidden');
  } else {
    header.classList.remove('header-hidden');
  }

  lastScroll = currentScroll;
});


document.getElementById("whatsapp-form").addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value;

let phone = document.getElementById("phone").value;

let service = document.getElementById("service").value;

let message = document.getElementById("message").value;

let whatsappMessage =
`Hello Sparkle Beauty,

New Appointment Booking

Name: ${name}

Phone: ${phone}

Service: ${service}

Message: ${message}`;

let url =
"https://wa.me/919921731446?text=" + encodeURIComponent(whatsappMessage);

window.open(url, "_blank");

});

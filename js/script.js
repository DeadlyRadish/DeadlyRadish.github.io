(function() {
    emailjs.init({
      publicKey: "0FJxlF6N7__4BW9j1",
    });
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('service_ddco23r', 'template_v1vrtye', this)
            .then(() => {
                console.log('SUCCESS!');
            }, (error) => {
                console.log('FAILED...', error);
            });
    });
}
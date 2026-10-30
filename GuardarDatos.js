const formulario = document.getElementById("formulario-datos");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    if (!formulario.checkValidity()) {
        formulario.reportValidity();
        return;
    }
    

});

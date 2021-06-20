function iniciar() {
    let cedula = document.getElementById('cedula').value;
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let direccion = document.getElementById('direccion').value;

    fetch('http://localhost:3000/', {
        method: 'POST',
        body: '{"hola":"HOLA"}', // The data
        headers: {
            'Content-type': 'JSON' // The type of data you're sending
        }
    });
}
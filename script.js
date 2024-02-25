document.getElementById('btnEjecutar').addEventListener('click', function() {
    const consola = document.getElementById('consola');
    const mensaje = 'Hola, esta es la consola!';
    consola.innerHTML += `${mensaje}<br>`;
    this.disabled = true;
});

document.getElementById('btnNuevo').addEventListener('click', function() {
    document.getElementById('consola').innerHTML = '';
    document.getElementById('btnEjecutar').disabled = false;
});
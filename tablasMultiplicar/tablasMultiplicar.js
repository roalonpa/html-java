
function multiplicar() {
    // obtener el numero
    let tablaElejida = document.querySelector('#tablaElejida');
    let tabla = tablaElejida.value;
    let numero = Number(tabla);

    //obtener la tabla
    let listaTabla = document.querySelector('#listaTabla');
    listaTabla.textContent = '';
    
    if (numero > 100000000000) {
        alert('please choose a number under 100.000.000.000');
        location.reload();
    } else {
        //producir y mostrar resultados
        for (var i = 1; i <= 10; i++) {
            let resultado = numero * i;
            let texto = numero + ' x ' + i + ' = ' + resultado;
            let itemLista = document.createElement('p');
            itemLista.innerText = texto;
            listaTabla.appendChild(itemLista);
        }

    tablaElejida.value = '';
    }

}
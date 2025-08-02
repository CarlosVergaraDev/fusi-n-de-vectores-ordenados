document.addEventListener('DOMContentLoaded', () => {

    // CONSTANTES Y VARIABLES GLOBALES
    const TAMANO_VECTOR = 5;
    let vector1 = [];
    let vector2 = [];

    // REFERENCIAS A ELEMENTOS DEL DOM 
    const inputNumero = document.getElementById('input-numero');
    const btnAddV1 = document.getElementById('btn-add-v1');
    const btnAddV2 = document.getElementById('btn-add-v2');
    const mensajeError = document.getElementById('mensaje-error');
    const colVector1 = document.getElementById('columna-vector-1');
    const colVector2 = document.getElementById('columna-vector-2');
    const seccionAcciones = document.getElementById('seccion-acciones');
    const btnMezclar = document.getElementById('btn-mezclar');
    const seccionResultado = document.getElementById('seccion-resultado');
    const resultadoFusion = document.getElementById('resultado-fusion');
    const btnReiniciar = document.getElementById('btn-reiniciar');

    // FUNCIONES
    function agregarNumero(vector, columnaDOM) {
        const numero = parseInt(inputNumero.value);

        if (isNaN(numero)) {
            mensajeError.textContent = "Entrada inválida. Debe ser un número.";
            return;
        }

        if (vector.length > 0 && numero <= vector[vector.length - 1]) {
            mensajeError.textContent = `Error: El número debe ser mayor que ${vector[vector.length - 1]}.`;
            return;
        }

        mensajeError.textContent = '';
        vector.push(numero);
        
        // Dibuja el vector completo de nuevo cada vez.
        dibujarVector(vector, columnaDOM);

        inputNumero.value = '';
        inputNumero.focus();
        comprobarEstadoVectores();
    }

    // Dibujamos todas las píldoras de un vector en su columna.

    function dibujarVector(vector, columnaDOM) {
        // Limpiamos la columna antes de dibujar para no duplicar.
        columnaDOM.innerHTML = ''; 
        
        vector.forEach(num => {
            const pildora = document.createElement('div');
            pildora.className = 'numero-pildora';
            pildora.textContent = num;
            columnaDOM.appendChild(pildora);
        });
    }

    // Comprobamos si los vectores están llenos y actualiza la interfaz.
    function comprobarEstadoVectores() {
        if (vector1.length === TAMANO_VECTOR) btnAddV1.disabled = true;
        if (vector2.length === TAMANO_VECTOR) btnAddV2.disabled = true;

        if (vector1.length === TAMANO_VECTOR && vector2.length === TAMANO_VECTOR) {
            seccionAcciones.classList.remove('seccion-oculta');
            btnMezclar.disabled = false;
        }
    }

    // Lógica de fusión. "Ocurre en memoria", no en el DOM.
    // Esta es la forma correcta y eficiente de resolver el algoritmo.
 
    function mezclarYMostrar() {
        let resultado = [];
        let i = 0; // Puntero para vector1
        let j = 0; // Puntero para vector2

        // Mientras haya elementos en ambos vectores, comparamos y añadimos el menor.
        while (i < vector1.length && j < vector2.length) {
            if (vector1[i] <= vector2[j]) {
                resultado.push(vector1[i]);
                i++;
            } else {
                resultado.push(vector2[j]);
                j++;
            }
        }

        // Añadimos los elementos restantes del vector que no se haya terminado.
        while (i < vector1.length) {
            resultado.push(vector1[i]);
            i++;
        }
        while (j < vector2.length) {
            resultado.push(vector2[j]);
            j++;
        }
        
        // Ahora que tenemos el resultado en un array, lo mostramos en el DOM.
        seccionResultado.classList.remove('seccion-oculta');
        dibujarVector(resultado, resultadoFusion); // Reutilizamos la función de dibujar.
        
        // Deshabilitamos botones para evitar acciones repetidas.
        btnMezclar.disabled = true;
    }

    // Reseteamos toda la aplicación a su estado inicial.
    function reiniciarApp() {
        // Limpiamos los arrays de datos.
        vector1 = [];
        vector2 = [];
        
        // Limpiamos los contenedores visuales en el DOM.
        colVector1.innerHTML = '';
        colVector2.innerHTML = '';
        resultadoFusion.innerHTML = '';
        
        // Restauramos los botones y secciones a su estado inicial.
        btnAddV1.disabled = false;
        btnAddV2.disabled = false;
        seccionAcciones.classList.add('seccion-oculta');
        seccionResultado.classList.add('seccion-oculta');
        
        // Limpiamos el input y los mensajes.
        inputNumero.value = '';
        mensajeError.textContent = '';
    }

    // ASIGNACIÓN DE EVENTOS 
    btnAddV1.addEventListener('click', () => agregarNumero(vector1, colVector1));
    btnAddV2.addEventListener('click', () => agregarNumero(vector2, colVector2));
    btnMezclar.addEventListener('click', mezclarYMostrar);
    btnReiniciar.addEventListener('click', reiniciarApp);
});
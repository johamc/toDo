document.getElementById('agregar').addEventListener('click', function(){
    const input = document.getElementById('nueva-tarea'); /* capturar el espacio del texto*/
    const text = input.value; /* capturar el texto que ingreso al cuadro*/

    if(text){
        const li = document.createElement('li'); /*creamos esta variable para crear un nuevo elemento de tipo lista */
        li.textContent = text;
        document.getElementById('lista-tareas').appendChild(li) /* y el nuevo elemento tipo lista con appendchild lo agregamos a la const li */
        input.value = ""; /*limpiar el espacio*/
    }
    
});
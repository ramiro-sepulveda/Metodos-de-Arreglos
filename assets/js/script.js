const tareas = [{ id: 1, nombre: "Crear repositorio Github", check: "" }, 
                { id: 2, nombre: "Realizar Primer Commit", check: "" }, 
                { id: 3, nombre: "Revisar pagina en busca de BUGS", check: "" }]

const btnAgregar = document.getElementById("agregar-tarea")
const cantTotal = document.getElementById("total")
const cantRealizadas = document.getElementById("realizadas")
const listaTarea = document.getElementById("tareas")
const idTarea = document.getElementById("id")
const modificadoresArreglo = document.getElementById("checks")
const inputCheck = document.querySelector(".check-realizado")
const btnBorrar = document.querySelector(".borrar")

let valorId = 4
let html = ""

function renderTareas() {
    const check = tareas.filter(ele => ele.check == 'checked')
    cantTotal.innerHTML = tareas.length
    cantRealizadas.innerHTML = check.length

    html = `<p><b>Tarea</b></p>`

    for (let tarea of tareas) {
        html += `<p>${tarea.nombre}</p>`
    };
    listaTarea.innerHTML = html
    html = ""

    for (let tarea of tareas) {
        html += `<div>
             <input type="checkbox" ${tarea.check} class="check-realizado" id="check${tarea.id}" onclick="
             if (document.getElementById('check${tarea.id}').checked) {
                const index = tareas.findIndex((ele) => ele.id=='${tarea.id}');
                tareas.splice(index,1,{id:${tarea.id}, nombre: '${tarea.nombre}', check: 'checked' });
             } else {
                const index = tareas.findIndex((ele) => ele.id=='${tarea.id}');
                tareas.splice(index,1,{id:${tarea.id}, nombre: '${tarea.nombre}', check: '' });
             };
             renderTareas()
             "

             >
             <i class="fa-sharp fa-solid fa-xmark text-danger borrar" onclick="
                const index = tareas.findIndex((ele) => ele.id=='${tarea.id}');
                tareas.splice(index,1);
                renderTareas()"
             ></i>
             </div>`
    };
    modificadoresArreglo.innerHTML = html

    html = `<p><b>ID</b></p>`

    for (let tarea of tareas) {
        html += `<p>${tarea.id}</p>`
    };
    idTarea.innerHTML = html
    html = ""
}

renderTareas()

btnAgregar.addEventListener("click", () => {
    let inputTarea = document.getElementById("input-tarea").value
    tareas.push({ id: valorId, nombre: inputTarea, check: "" });
    inputTarea = "";
    valorId += 1;
    renderTareas()

})



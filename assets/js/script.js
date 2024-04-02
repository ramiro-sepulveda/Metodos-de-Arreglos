const tareas = [
  { id: 1, nombre: "Crear repositorio Github", check: "checked" },
  { id: 2, nombre: "Realizar Primer Commit", check: "checked" },
  { id: 3, nombre: "Revisar pagina en busca de BUGS", check: "checked" },
];

let check = tareas.filter((ele) => ele.check == "checked");

const btnAgregar = document.getElementById("agregar-tarea");
const cantTotal = document.getElementById("total");
const cantRealizadas = document.getElementById("realizadas");
const tablaTareas = document.getElementById("tabla");
const marcarTodo = document.getElementById("todo-check");
const borrarTodo = document.getElementById("todo-borrar");

let valorId = 4;
let html = "";

function renderTareas() {
  check = tareas.filter((ele) => ele.check == "checked");
  cantTotal.innerHTML = tareas.length;
  cantRealizadas.innerHTML = check.length;

  for (let tarea of tareas) {
    html += `<tr>
                <td>${tarea.id}</td>

                <td style="text-align: start">${tarea.nombre}</td>

                <td><input type="checkbox" ${tarea.check} class="check-realizado" id="check${tarea.id}" onclick="
                if (document.getElementById('check${tarea.id}').checked) {
                   const index = tareas.findIndex((ele) => ele.id=='${tarea.id}');
                   tareas.splice(index,1,{id:${tarea.id}, nombre: '${tarea.nombre}', check: 'checked' });
                } else {
                   const index = tareas.findIndex((ele) => ele.id=='${tarea.id}');
                   tareas.splice(index,1,{id:${tarea.id}, nombre: '${tarea.nombre}', check: '' });
                };
                renderTareas()"></td>

                <td><i class="fa-sharp fa-solid fa-xmark text-danger borrar" onclick="
                const index = tareas.findIndex((ele) => ele.id=='${tarea.id}');
                tareas.splice(index,1);
                renderTareas()"></i></td>

             </tr>`;
  }

  tablaTareas.innerHTML = html;

  html = "";
}

renderTareas();

btnAgregar.addEventListener("click", () => {
  let inputTarea = document.getElementById("input-tarea").value;
  if (inputTarea == "") {
    alert("Favor ingresar Tarea");
  } else {
    tareas.push({ id: valorId, nombre: inputTarea, check: "" });
    inputTarea = "";
    valorId += 1;
  }
  renderTareas();
});

marcarTodo.addEventListener("click", () => {
  tareas.forEach((tarea) => {
    if (tareas.length == check.length) {
      tarea.check = "";
    } else {
      tarea.check = "checked";
    }
  });
  renderTareas();
});

borrarTodo.addEventListener("click", () => {
  tareas.length = 0;
  renderTareas();
});

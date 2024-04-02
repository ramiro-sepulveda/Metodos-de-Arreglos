const tareas = [
  { id: 1, nombre: "Crear repositorio Github", check: "" },
  { id: 2, nombre: "Realizar Primer Commit", check: "" },
  { id: 3, nombre: "Revisar pagina en busca de BUGS", check: "" },
];

const btnAgregar = document.getElementById("agregar-tarea");
const cantTotal = document.getElementById("total");
const cantRealizadas = document.getElementById("realizadas");
const tablaTareas = document.getElementById("tabla");

let valorId = 4;
let html = "";

function renderTareas() {
  const check = tareas.filter((ele) => ele.check == "checked");
  cantTotal.innerHTML = tareas.length;
  cantRealizadas.innerHTML = check.length;

  html = `  <thead>
                <th style="max-width: 10%;">ID</th>
                <th style="width: 70%;">Tarea</th>
                <td style="max-width: 10%;"></td>
                <td style="max-width: 10%;"></td>
            </thead>`;

  for (let tarea of tareas) {
    html += `<tr>
                <td>${tarea.id}</td>

                <td>${tarea.nombre}</td>

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
  tareas.push({ id: valorId, nombre: inputTarea, check: "" });
  inputTarea = "";
  valorId += 1;
  renderTareas();
});

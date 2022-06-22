import React, { useState, useEffect } from "react";
import TaskForm from "./TaskForm";
import '../styles/TodoList.css';
import Task from './Task'


function TodoList() {
	
	const [tareas, setTareas] = useState([]);
	useEffect(() =>{
		if (localStorage.getItem("localTasks")){
			const storedList = JSON.parse(localStorage.getItem("localTasks"))
			setTareas(storedList);
		}
	},[])
	const agregarTarea = tarea => {
		console.log(tarea)
		if(tarea.text.trim()){ /* Verifica que la cadena no está vacía */
			tarea.text = tarea.text.trim(); /* Quita los espacios innecesarios */
			const tareasActualizadas = [tarea, ...tareas]; /* Generamos un array con todas las
			tareas anteriores, pero en primer lugar, la nueva tarea */
			setTareas(tareasActualizadas); /* Actualizamos el estado */
			localStorage.setItem("localTasks", JSON.stringify(tareasActualizadas))
		
		}
	}
	const EliminarTarea = id => {
		/* De nuestro estado actual (tareas), filtramos el id al hacer click,
		lo que devolverá un array de aquellas tareas cuyo id sea distinto al que hemos pulsado,
		esto hace que NO nos devuelva el array de la tarea que hemos pulsado, al usar 
		setTareas con este nuevo valor, estamos eliminando la tarea. */
		const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
		setTareas(tareasActualizadas);
		localStorage.setItem("localTasks", JSON.stringify(tareasActualizadas))
	}
	const CompletarTarea = id => {
		const tareasActualizadas = tareas.map(tarea => {
			if(tarea.id === id){
				tarea.complete = !tarea.complete;
			}
			return tarea;
		});
		setTareas(tareasActualizadas);
	}
	return (
		/*Las etiquetas vacías se llaman fragmentos, que nos permitirá poder 
		escribir la estructura sin crear un div adicional*/
		<> 
			<TaskForm 
				onSubmit={agregarTarea}
			/>
			<div className="task-todolist-wrapper">
				{
					tareas.map((tarea) => 
						<Task 
							key={tarea.id} /* Key es algo interno de react, y no lopasa como prop */
							id={tarea.id}
							text={tarea.text}
							complete={tarea.complete}
							completeTask={CompletarTarea}
							removeTask={EliminarTarea}
						/>
					)
				}
			</div>

		</>
	)
}
export default TodoList
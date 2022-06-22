import React from "react";
import '../styles/Task.css'
import { AiOutlineCloseCircle } from "react-icons/ai";
/* completeTak y removeTask serán funciones, por otro lado
id será el identificador de cada tarea, y complete será un boleano para identificar
que clase usar como contenedor */
function Tarea({ text, complete, id, completeTask, removeTask }) {
	return (
		<div className={complete ? "task-container complete" : "task-container"}>
			<div 
				className="task-text"
				onClick={() => completeTask(id)}
				>
				{text}
			</div>
			<div 
				className="task-icon-wrapper"
				onClick={() => removeTask(id)}
				>
				<AiOutlineCloseCircle className="task-icon"/>
			</div>
		</div>
	)
}

export default Tarea
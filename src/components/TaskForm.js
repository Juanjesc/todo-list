import React, { useState } from "react";
import '../styles/TaskForm.css'
import { v4 as uuidv4 } from 'uuid'; /*Para generar ID de forma dinámica*/

function TaskForm(props) {
	const [input, setInput] = useState('');
	const inputOnchangeHandler = evento =>{
		setInput(evento.target.value)
	}
	const buttonOnsubmitHandler = evento =>{
		evento.preventDefault();
		console.log('enviando formu')
		const tareaNueva = {

			id: uuidv4(),
			text: input,
			complete: false

		}
		props.onSubmit(tareaNueva)
		setInput('')
	}
	
	return (
		<form 
		className="taskForm-wrapper"
		onSubmit={buttonOnsubmitHandler}
		>
			<input 
				type="text" 
				className="task-input"
				placeholder="¿Algo que hacer?"
				name="text"
				value={input}
				onChange={inputOnchangeHandler}

			/>
			<button 
				className="task-button"
			>
				Añadir tarea
			</button>
		</form>
	)
}

export default TaskForm
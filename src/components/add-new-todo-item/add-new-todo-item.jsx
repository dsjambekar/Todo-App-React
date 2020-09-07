import React, { useState } from "react";
import "./add-new-todo-item.css";
const AddNewTodoItem = (props) => {
	const [newItem, setNewItem] = useState("");

	return (
		<div className="todo-new">
			<input
				className="textbox"
				placeholder="enter item here"
				value={newItem}
				onChange={(event) => setNewItem(event.target.value)}
			/>
			<button
				onClick={() => {
					props.addItem(newItem);
					setNewItem("");
				}}
			>
				Add
			</button>
			<button
				onClick={() => {
					props.clearList();
					setNewItem("");
				}}
			>
				Clear
			</button>
		</div>
	);
};

export default AddNewTodoItem;

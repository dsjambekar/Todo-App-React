import React, { useState } from "react";
import "./todo-item.css";

const TodoItem = (props) => {
	const [isEdit, setIsEdit] = useState(false);
	const [newItem, setNewItem] = useState(props.todoItem);

	return (
		<div className="todo-item">
			{!isEdit && (
				<div className="todo-display">
					<div className="item-label">{props.todoItem}</div>
					<button onClick={() => setIsEdit(true)}>Edit</button>
					<button onClick={() => props.delete()}>Delete</button>
				</div>
			)}

			{isEdit && (
				<div className="todo-edit">
					<input
						// placeholder={props.todoItem}
						value={newItem}
						onChange={(event) => setNewItem(event.target.value)}
					/>
					<button
						onClick={() => {
							setIsEdit(false);
							props.edit(newItem);
						}}
					>
						Save
					</button>
					<button
						onClick={() => {
							setIsEdit(false);
						}}
					>
						Cancel
					</button>
				</div>
			)}
		</div>
	);
};

export default TodoItem;

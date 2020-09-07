import React, { useState } from "react";
import "./todo-list.css";
import TodoItem from "./todo-item/todo-item";

const TodoList = (props) => {
	const [todoList, setTodoList] = useState(props.list);

	React.useEffect(() => {
		setTodoList(props.list);
	}, [props.list]);

	return (
		<div className="todo-list">
			{todoList.map((item, index) => (
				<TodoItem
					todoItem={item}
					edit={(item) => props.edit(index, item)}
					delete={() => props.delete(index)}
				/>
			))}
		</div>
	);
};

export default TodoList;

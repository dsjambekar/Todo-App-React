import React, { useState } from "react";

import "./App.css";
import AddNewTodoItem from "./components/add-new-todo-item/add-new-todo-item";
import TodoList from "./components/todo-list/todo-list";

function App() {
	const [todoList, setTodoList] = useState([
		"Brush your teeth",
		"Have breakfast",
		"Have lunch",
	]);

	const addNewTodoItem = (item) => {
		setTodoList([...todoList, item]);
		console.log(todoList);
	};

	const clearList = () => {
		setTodoList([]);
	};

	const editItem = (index, item) => {
		let newArr = [...todoList];
		newArr[index] = item;
		setTodoList(newArr);
	};

	const deleteItem = (index) => {
		console.log("app", index);
		let newArr = [...todoList];
		newArr.splice(index, 1);
		setTodoList(newArr);
	};

	return (
		<div className="container">
			<h2>To Do App</h2>
			<AddNewTodoItem addItem={addNewTodoItem} clearList={clearList} />
			<TodoList list={todoList} edit={editItem} delete={deleteItem} />
		</div>
	);
}

export default App;

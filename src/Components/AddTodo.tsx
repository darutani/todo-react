import type { AddTodoProps } from "@/types/todo";
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

export default function AddTodo({ addTodo }: AddTodoProps) {
	const [title, setTitle] = useState("");
	const handleAddTitle = (e: ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value);
	};
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (title.trim()) {
			addTodo(title);
			setTitle("");
		}
	};

	return (
		<div className="p-6">
			<form className="flex mb-4" onSubmit={handleSubmit}>
				<input
					type="text"
					className="flex-grow mr-2 p-2 border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500"
					onChange={handleAddTitle}
					value={title}
				/>
				<button
					type="submit"
					className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
				>
					追加
				</button>
			</form>
		</div>
	);
}

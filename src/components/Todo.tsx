import React, { useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";
import underline from "../assets/underline.svg";
import { IoIosAddCircle } from "react-icons/io";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>("");

  const addTodo = () => {
    if (input.trim() === "") {
      toast.error("To-Do cannot be empty!");
      return;
    }
    const newTodo: Todo = {
      id: Date.now(),
      text: input,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInput("");
    toast.success("To-Do Added!");
  };

  const toggleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    toast.error("To-Do Deleted!");
  };

  return (
    <div className="min-h-screen px-[20px] flex flex-col items-center justify-center bg-gray-100">
      <Toaster />
      <h1 className="text-3xl font-bold mb-6 tracking-tighter">to-do list</h1>
      <img src={underline} className="w-[150px] mt-[-25px] mb-5" alt="" />
      <div className="w-full max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
        <div className="flex mb-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full p-2 border border-gray-400 rounded-md mr-3 focus:outline-slate-700"
            placeholder="Enter yor todo here."
          />
          <button
            onClick={addTodo}
            className="bg-blue-500 text-white p-2 rounded-md flex items-center font-semibold  hover:bg-blue-600"
          >
            <IoIosAddCircle className="mr-2" /> Add
          </button>
        </div>

        <ul className="space-y-4">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between p-2 border-b border-gray-200"
            >
              <div
                className={`flex items-center ${
                  todo.completed ? "line-through text-gray-500" : ""
                }`}
              >
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleComplete(todo.id)}
                  className="mr-5 w-[19px] h-[19px]"
                />
                <span>{todo.text}</span>
              </div>
              <button onClick={() => deleteTodo(todo.id)}>
                <FiTrash2 className="text-gray-500 duration-200 hover:text-red-600 text-xl" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;

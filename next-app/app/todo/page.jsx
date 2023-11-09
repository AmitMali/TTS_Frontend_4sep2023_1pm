"use client";
import React, { useState } from "react";

const page = () => {
  return (
    <div className="container mx-auto">
      <p className="p-4 mb-12 text-xl font-black uppercase ">Todo app</p>
      <TodoForm />
    </div>
  );
};

const TodoItem = (props) => {
  console.log(props);
  const { title } = props.tododata;
  return (
    <div className=" flex gap-4 shadow-sm p-4">
      <p>{title}</p>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
};

const TodoForm = () => {
  const [todo, setTodo] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    const todoItem = event.target.todo.value;
    const todoData = { title: todoItem };
    setTodo([...todo, todoData]);
  };
  console.log(todo);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-4">
            <label
              htmlFor="todo"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Add Todo
            </label>
            <div className="mt-2">
              <div className="flex  shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="text"
                  name="todo"
                  id="todo"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="type here..."
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-4 bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </div>
      </form>
      <div>
        {todo.map((item, index) => {
          return <TodoItem key={index} tododata={item} />;
        })}
      </div>
    </>
  );
};

export default page;

import React, { useEffect, useState } from "react";
import { TiEdit } from "react-icons/ti";
import { MdDelete } from "react-icons/md";

const ToDoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newInput, setNewInput] = useState("");

  const handleChange = (e) => {
    setNewInput(e.target.value);
  };

  const handleSubmit = () => {
    if (!newInput || newInput.trim()=="") {
      alert("Please Enter Task...");
      return
    };
    const updatedTodos = [...todos, newInput];
    setTodos(updatedTodos);
    localStorage.setItem("todoss", JSON.stringify(updatedTodos));
    alert('Your Task Added Succesfully.')
    setNewInput("");
  };

  const handleUpdateBtn = (indx) => {
    const updatedTask = prompt("update your todo", todos[indx]);

    if (updatedTask) {
      const updateTodo = todos.map((todo, index) =>
        index === indx ? [updatedTask] : todo
      );

      setTodos(updateTodo);
      localStorage.setItem("todoss", JSON.stringify(updateTodo));
    }
  };

  const handleDeletebtn = (indx) => {
    const updateTodoList = todos.filter((_, i) => i !== indx);
    setTodos(updateTodoList);
    localStorage.setItem("todoss", JSON.stringify(updateTodoList));
  };
  useEffect(() => {
    const todosList = localStorage.getItem("todoss");
    if (todosList) {
      setTodos(JSON.parse(todosList));
    }
  }, []);

  return (
    <div className=" mt-6">
      <div className="  p-4">
        <div className="flex justify-center gap-4  bg-amber-200 w-full p-4 rounded-md">
          <input
            value={newInput}
            onChange={handleChange}
            className="w-92 bg-gray-300 p-2 outline-none rounded-md"
            type="text"
            name="todos"
            placeholder="Enter Your todos here"
          />
          <button
            onClick={handleSubmit}
            className="w-20 text-center font-bold bg-black text-white rounded-lg hover:bg-gray-800"
          >
            ADD
          </button>
        </div>
        <div className="flex justify-center  mt-5 rounded-md">
          <div className="md:flex justify-between gap-5 bg-sky-200 w-full p-3 rounded-md md:h-[63vh]">
            <div className="md:w-[50%] overflow-y-auto hide-scrollbar ">
              <h1 className="py-4 font-bold">Your Todoss</h1>
              {todos  ? (
                todos.map((todo, indx) => (
                  <div
                    key={indx}
                    className="flex gap-1 bg-sky-300 p-2 rounded-lg justify-between mb-2"
                  >
                    <div className="flex gap-2 items-center">
                      <input type="checkbox" name="" id="" />
                      <p>{todo}</p>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => handleUpdateBtn(indx)}>
                        <TiEdit />
                      </button>
                      <button onClick={() => handleDeletebtn(indx)}>
                        <MdDelete />
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex gap-2 items-center">
                  <p> please add your todos/tasks</p>
                </div>
              )}
            </div>
            <div className=" md:w-[50%] bg-blue-200 mt-5 px-6">
              <h2  className="font-bold text-2xl">Note</h2>
              <ul style={{ listStyleType: 'disc' }}>
                <li>Tasks are saved locally and persist across browser refreshes.</li>
                <li>You can update any task by clicking the edit icon ✏️.</li>
                <li>Tasks can be deleted instantly using the trash icon 🗑️.</li>
                <li>All tasks are displayed in a scrollable list with hidden scrollbar.</li>
                <li>Checkboxes are available for marking tasks, though they don’t affect state yet.</li>
                <li>Input field clears automatically after adding a new task.</li>
              </ul>
           </div>
          </div>
        </div>             
      </div>
    </div>
  );
};

export default ToDoApp;

import React, { useState } from "react";
import { TiEdit } from "react-icons/ti";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleUpdateBtn = async (task, index) => {
    const { value: updateTasks } = await Swal.fire({
      title: "Update your task",
      input: "text",
      inputLabel: "Edit Todo",
      inputValue: task,
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value || value.trim() === "") {
          return "You need to write something!";
        }
      },
    });

    if (updateTasks) {
      const updateTodo = tasks.map((task, i) =>
        i === index ? [updateTasks] : task
      );

      setTasks(updateTodo);
      localStorage.setItem("tasks", JSON.stringify(updateTodo));
    }
  };

  const handleDelete = (task, index) => {
    Swal.fire({
      title: "Are you sure?",
      text: task,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedTask = tasks.filter((_, i) => i !== index);
        setTasks(updatedTask);
        localStorage.setItem("tasks", JSON.stringify(updatedTask));

        Swal.fire({
          title: "Deleted!",
          text: "Your task has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const handleSubmit = () => {
    if (!newTask || newTask.trim()=="") {
      Swal.fire({
        icon: "error",
        text: "Please Enter Your Task....",
      });
      return
    }

    const updateTasks = [...tasks, newTask];
    setTasks(updateTasks);
    localStorage.setItem("tasks", JSON.stringify(updateTasks));
    Swal.fire({
      icon: "success",
      title: "Your Task has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
    setNewTask("");
  };

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  return (
    <>
      <div className="md:w-[40%]  mx-auto p-4 bg-blue-400 text-center flex items-center gap-3 mb-5 rounded-md">
        <input
          value={newTask}
          onChange={handleChange}
          className="outline-none bg-white w-100 p-2 rounded-sm"
          type="text"
          name="newTask"
          id=""
        />

        <button
          onClick={handleSubmit}
          className="bg-black font-bold text-xl text-white  px-4 py-1.5 rounded-md hover:bg-gray-700"
        >
          ADD
        </button>
      </div>

      <div className="bg-blue-500 p-3 md:w-[40%] mx-auto min-h-[80vh] rounded-md">
        <h1 className="font-bold text-xl text-black border-b-1 p-1 border-gray-100 mb-2">Your Task - </h1>

        {tasks ? (
          tasks.map((task, indx) => (
            <div
              key={indx}
              className="flex items-center justify-between bg-blue-300 p-2 rounded-md mb-2"
            >
              <div className="flex  gap-3">
                <input type="checkbox" />
                <p className="text-xl">{task}</p>
              </div>
              <div className="flex gap-2 items-center text-2xl">
                <TiEdit onClick={() => handleUpdateBtn(task, indx)} />
                <MdDelete onClick={() => handleDelete(task, indx)} />
              </div>
            </div>
          ))
        ) : (
          <div className="flex items-center justify-between bg-blue-300 p-1 rounded-md"></div>
        )}
      </div>
    </>
  );
};

export default Todo;

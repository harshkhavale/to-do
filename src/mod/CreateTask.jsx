import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTask } from "../redux/taskSlice";
import task_gif from "../assets/tasks.gif";
function CreateTask({ modalControl, isOpen }) {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim() !== "") {
      dispatch(addTask({ id: uuidv4(), text: task }));
      setTask("");
      modalControl();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <div
      className={`fixed inset-0 ${
        isOpen ? "" : "hidden"
      } flex items-center justify-center z-50`}
    >
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-white p-4 rounded-lg z-20 shadow-lg">
        <h2 className="text-lg font-semibold mb-2">Add New Task</h2>
        <div className="flex items-center gap-2">
          <div>

          <input
            type="text"
            placeholder="Enter task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyPress={handleKeyPress}
            className="w-full bg-gray-200 outline-none font-bold text-sm border rounded px-2 py-1 mb-2"
          />
          <div className="flex justify-end">
            <button
              onClick={modalControl}
              className="mr-2 bg-gray-200 rounded-xl font-bold hover:bg-gray-300 py-1 px-4"
            >
              Cancel
            </button>
            <button
              onClick={handleAddTask}
              className="bg-green-500 rounded-xl font-bold hover:bg-green-600 text-white py-1 px-4 "
            >
              Add Task
            </button>
          </div>
          </div>
          <div>
            <img src={task_gif} className=" h-24" alt="gif-img" />
          </div>

        </div>
      </div>
    </div>
  );
}

export default CreateTask;

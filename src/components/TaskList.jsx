import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../redux/taskSlice';
import { IoMdCheckmarkCircle } from "react-icons/io";
import { LiaUndoAltSolid } from "react-icons/lia";
import { MdDeleteOutline } from "react-icons/md";

function TaskList() {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const handleToggleTask = (id) => {
    dispatch(toggleTask(id));
  };

  return (
    <div className="task-list my-8">
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={`flex items-center justify-between rounded-xl border-2 p-2 ${task.completed ? 'bg-gray-200' : ''}`}>
            <p className={`font-bold ${task.completed ? 'line-through' : ''}`}>{task.text}</p>
            <div>
              <button className='bg-green-400 rounded-xl p-2 font-bold text-white mr-2' onClick={() => handleToggleTask(task.id)}>
                {task.completed ? <LiaUndoAltSolid/> : <IoMdCheckmarkCircle/>}
              </button>
              <button className='bg-red-400 rounded-xl p-2 font-bold text-white' onClick={() => handleDeleteTask(task.id)}><MdDeleteOutline/></button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;

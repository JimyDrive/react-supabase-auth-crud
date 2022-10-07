import { useTasks } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask, updateTask } = useTasks();

  const handleDelete = () => deleteTask(task.id);
  const handleToggleDone = () => updateTask(task.id, { done: !task.done });

  return (
    <div className="card card-body mb-2">
      <h3 className="h5">

        {`${task.id}. ${task.name}`}
      </h3>
      <p>{task.done ? "✔️" : "❌"}</p>
      <div className="ms-auto">
        <button onClick={() => handleDelete()} className="btn btn-danger btn-sm me-1">Delete</button>
        <button onClick={() => handleToggleDone()} className="btn btn-secondary btn-sm">Done</button>
      </div>
    </div>
  );
}

export default TaskCard;

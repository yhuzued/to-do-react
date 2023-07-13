import PropTypes from "prop-types";

TodoList.propTypes = {
  todo: PropTypes.object.isRequired,
  setTodo: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
  setTasks: PropTypes.func.isRequired,
};

function TodoList({ tasks, setTasks }) {
  function deleteTodo(e) {
    const target = e.target.parentNode.getAttribute("id");
    const newList = tasks.filter((t) => t.id !== target);
    setTasks(newList);
  }

  function taskCompleted(e) {
    const target = e.target.parentNode.getAttribute("id");
    const newList = tasks.map((t) => {
      if (t.id === target) {
        t.completed = !t.completed;
      }
      return t;
    });
    setTasks(newList);
  }

  const list = tasks.map((t) => {
    return (
      <li
        key={t.id}
        id={t.id}
        className="flex justify-between gap-1 mx-3 my-2 align-center bg-gray-50 hover:bg-gray-100 items-center p-3"
      >
        <input
          type="checkbox"
          id={t.id + "-checkbox"}
          className="w-6 h-6 peer"
          onChange={taskCompleted}
          checked={t.completed}
        />
        <label
          htmlFor={t.id + "-checkbox"}
          className="w-full p-1 text-lg peer-checked:line-through peer-checked:text-slate-400"
        >
          {t.task}
        </label>
        <button
          className="bg-red-500 px-2 py-1 rounded-sm text-gray-50 hover:bg-red-700"
          onClick={deleteTodo}
        >
          Close
        </button>
      </li>
    );
  });

  return (
    <>
      <ul>{list}</ul>
    </>
  );
}

export default TodoList;

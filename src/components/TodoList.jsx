import PropTypes from "prop-types";

TodoList.propTypes = {
  tasks: PropTypes.array.isRequired,
  todo: PropTypes.object.isRequired,
};

function TodoList({ tasks, todo }) {
  function deleteTodo() {
    console.log(todo);
  }

  const list = tasks.map((t) => {
    return (
      <li
        key={t.id}
        className="flex justify-between gap-1 mx-3 my-2 align-center bg-gray-50 hover:bg-gray-100 items-center p-3"
      >
        <input
          type="checkbox"
          id={t.id + "checkbox"}
          className="w-6 h-6 peer"
        />
        <label
          htmlFor={t.id + "checkbox"}
          className="w-full p-1 text-lg peer-checked:line-through peer-checked:text-slate-400"
        >
          {t.task}
        </label>
        <button
          className="bg-red-500 px-2 py-1 rounded-sm text-gray-50"
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

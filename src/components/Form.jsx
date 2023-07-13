import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

Form.propTypes = {
  todo: PropTypes.object.isRequired,
  setTodo: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
  setTasks: PropTypes.func.isRequired,
};

export default function Form({ todo, setTodo, tasks, setTasks }) {
  function handleInput(e) {
    const updateToDo = e.target.value;
    setTodo({ id: uuidv4(), task: updateToDo, completed: false });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (e.target.children[1].value === "") {
      return;
    }

    setTasks([...tasks, todo]);
    e.target.children[1].value = "";
  }

  return (
    <form
      action="/"
      method="post"
      className="mb-2 flex flex-col gap-2"
      onSubmit={handleSubmit}
    >
      <label htmlFor="todo">New Todo</label>
      <input
        type="text"
        name="todo"
        id="todo"
        className="border-2 border-slate-300 pb-1 focus:border-slate-500 outline-none w-full p-1"
        onChange={handleInput}
        autoFocus
      />
      <button
        type="submit"
        className="bg-cyan-700 text-sm rounded-sm px-5 py-2 text-gray-50 hover:bg-cyan-900 w-full"
      >
        Create
      </button>
    </form>
  );
}

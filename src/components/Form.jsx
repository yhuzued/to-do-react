export default function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.firstElementChild.value);
    e.target.reset();
  }

  return (
    <form action="/" method="post" className="mb-2" onSubmit={handleSubmit}>
      <input
        type="text"
        name="todo"
        id="todo"
        className="border-2 border-blue-300 focus:border-blue-500 outline-none w-full p-1"
        autoFocus
      />
      <button
        type="submit"
        className="bg-cyan-500 px-5 py-1 text-gray-50 hover:bg-cyan-600 w-full"
      >
        Submit
      </button>
    </form>
  );
}

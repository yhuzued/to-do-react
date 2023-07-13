import Form from "./components/Form";
import { useEffect, useState } from "react";
import Title from "./components/Title";
import TodoList from "./components/TodoList";

function App() {
  const [todo, setTodo] = useState({});
  const [tasks, setTasks] = useState(() => {
    const storage = localStorage.getItem("TODO");
    const initialValue = JSON.parse(storage);
    return initialValue || [];
  });

  useEffect(() => {
    localStorage.setItem("TODO", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <section className="flex justify-center">
      <main className="bg-white w-full md:w-1/2 lg:w-1/2 m-5 p-5 rounded-sm drop-shadow-md">
        <Form todo={todo} setTodo={setTodo} tasks={tasks} setTasks={setTasks} />
        <Title />
        <TodoList tasks={tasks} setTasks={setTasks} />
      </main>
    </section>
  );
}

export default App;

import Form from "./components/Form";
import { useEffect, useState } from "react";
import Title from "./components/Title";
import TodoList from "./components/TodoList";
import EmptyTask from "./components/EmptyTask";

function App() {
  const [todo, setTodo] = useState({});
  const [tasks, setTasks] = useState(() => {
    const storage = localStorage.getItem("TODO");
    const initialValue = JSON.parse(storage);
    return initialValue || [];
  });

  const emptyTask = () => {
    if (tasks.length === 0) {
      return <EmptyTask />;
    }
  };

  useEffect(() => {
    localStorage.setItem("TODO", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <section className="flex justify-center">
      <main className="bg-white w-4/5 md:w-2/4 lg:w-1/3 m-5 p-5 rounded-sm drop-shadow-md">
        <Form todo={todo} setTodo={setTodo} tasks={tasks} setTasks={setTasks} />
        <Title />
        {emptyTask()}
        <TodoList tasks={tasks} setTasks={setTasks} />
      </main>
    </section>
  );
}

export default App;

import Form from "./components/Form";
import { useState } from "react";
import Title from "./components/Title";
import TodoList from "./components/TodoList";

function App() {
  const [todo, setTodo] = useState({});
  const [tasks, setTasks] = useState([]);

  return (
    <section className="flex justify-center">
      <main className="bg-white w-full md:w-1/2 lg:w-1/2 m-5 p-5 rounded-sm drop-shadow-md">
        <Form todo={todo} setTodo={setTodo} tasks={tasks} setTasks={setTasks} />
        <Title />
        <TodoList tasks={tasks} todo={todo} setTodo={setTodo} />
      </main>
    </section>
  );
}

export default App;

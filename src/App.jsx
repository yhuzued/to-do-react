import Overview from "./components/Overview";

function App() {
  return (
    <section className="flex justify-center">
      <main className="bg-white w-full md:w-1/2 lg:w-1/2 m-5 p-5 rounded-sm drop-shadow-md">
        <AppTitle />
        <Overview />
      </main>
    </section>
  );
}

function AppTitle() {
  return <h1 className="text-2xl text-center">TO-DO</h1>;
}

export default App;

import Main from "./core/home.component";

function App() {
  return (
    <>
      <div className="relative flex flex-col min-h-screen bg-[#809AEC]">
        <header className="w-full py-8 flex flex-row justify-between px-12 text-white">
          <h1 className="text-2xl font-bold font-title">The English Crab</h1>
          <nav className="flex space-x-8 text-lg">
            <button className="mt-6 px-6 py-3 bg-white text-[#809AEC] font-bold rounded-lg shadow-md hover:shadow-lg hover:bg-gray-100">
              Inicio
            </button>
            <button className="mt-6 px-6 py-3 bg-white text-[#809AEC] font-bold rounded-lg shadow-md hover:shadow-lg hover:bg-gray-100">
              Cursos
            </button>
            <button className="mt-6 px-6 py-3 bg-white text-[#809AEC] font-bold rounded-lg shadow-md hover:shadow-lg hover:bg-gray-100">
              Unirse
            </button>
            <button className="mt-6 px-6 py-3 bg-white text-[#809AEC] font-bold rounded-lg shadow-md hover:shadow-lg hover:bg-gray-100">
              Entrar
            </button>
          </nav>
        </header>

        <main className="relative flex-grow">
          <Main />
        </main>

        <footer className="w-full text-center py-6 bg-blue-700 text-white">
          <p>Made by a Squid</p>
        </footer>
      </div>
    </>
  );
}

export default App;

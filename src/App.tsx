import Courses from "./core/courses/courses.component";
import Home from "./core/home/home.component";
import MidSection from "./core/mid-section/mid-section.component";
import Button from "./feature/button.component";
import "./App.sass";

function App() {
  return (
    <div className="w-full p-0 m-0 h-full bg-black flex items-center justify-center">
      <h1 className="text-white">Proximamente</h1>
    </div>
  );

  return (
    <div className="crab-background relative flex flex-col">
      <header className="sticky top-0 z-50 w-full py-8 flex flex-row justify-center items-center">
        <div className="flex flex-row justify-between items-center w-3/4">
          <h1 className="text-white text-4xl font-bold font-title">
            The English Crab
          </h1>
          <nav className="flex space-x-8">
            <Button label="Cursos" />
            <Button variant="outlined" label="Contacto" />
          </nav>
        </div>
      </header>

      <main className="flex flex-col">
        <section className="h-[60vh]">
          <Home />
        </section>

        <section className="h-[40vh]">
          <MidSection />
        </section>

        <section className="h-[80vh]">
          <Courses />
        </section>
      </main>

      <footer className="w-full text-center py-6 bg-blue-700 text-white">
        <p>Made by a Squid</p>
      </footer>
    </div>
  );
}

export default App;

import Courses from "./core/courses/courses.component";
import Home from "./core/home/home.component";
import MidSection from "./core/mid-section/mid-section.component";
import Button from "./feature/button.component";
import "./App.sass"

function App() {
  return (
    <div className="crab-background relative flex flex-col">
      <header className="sticky top-0 z-50 w-full py-8 flex flex-row justify-between items-center px-12">
        <h1 className="text-white text-4xl font-bold font-title">The English Crab</h1>
        <nav className="flex space-x-8">
          <Button  label="Cursos" />
          <Button variant="outlined" label="Contacto" />
        </nav>
      </header>

      <main className="flex flex-col">
        <section className="h-[60vh]">
          <Home />
        </section>

        <section className="h-[35vh]">
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

import { FC } from "react";
import "./home.component.sass";
import Button from "../../feature/button.component";

const Home: FC = () => (
  <div className="h-full text-white flex flex-row justify-evenly items-center">
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-2">
        <h1 className="text-6xl font-bold font-title">The English Crab</h1>
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-title font-bold text-2xl">
          Clases online, cultura pop en inglés y herramientas para potenciar tu
          fluidez.
        </p>
        <p className="font-title font-bold text-xl pl-8">
          Participa en cursos divertidos y avanza a tu ritmo.
        </p>
        <div className="">
          <Button label="Explorar cursos"></Button>
        </div>
      </div>
    </div>
    <div>
      <img src="icon.png" />
    </div>
  </div>
);

export default Home;

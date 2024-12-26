import { FC } from "react";
import "./home.component.sass";
import Button from "../../feature/button.component";

const Home: FC = () => (
  <div className="h-full text-white flex flex-row justify-evenly items-center">
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-2">
        <span className="text-6xl font-impact font-bold">
          Cursos de inglés online
        </span>
        <span className="text-6xl font-impact font-bold">
          ¡Potencia tu inglés al{" "}
          <span className="text-6xl font-impact font-bold text-[#FF7959]">máximo!</span>
        </span>
        <span className="text-4xl py-4 font-impact font-bold">
          Aprende inglés de forma divertida haciendo amigos
        </span>
      </div>
      <div className="flex flex-row gap-4">
        <Button label="Exploremos cursos"></Button>
        <Button variant="outlined" label="Entremos en contacto"></Button>
      </div>
    </div>
    <div>
      <img src="crab-normal.png" className="max-h-80 drop-shadow-md" />
    </div>
  </div>
);

export default Home;

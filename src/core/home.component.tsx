import { FC } from "react";
import "./home.component.sass";

const Home: FC = () => (
  <section>
    <div className="shore-layer layer1"></div>
    <div className="shore-layer layer2"></div>
    <div className="shore-layer layer3"></div>
    <img
      src="icon.png"
      alt="Icono de The English Crab"
      className="absolute z-50 top-1/2 left-3/4 transform -translate-x-1/8 -translate-y-3/4 size-72"
    />
  </section>
);

export default Home;

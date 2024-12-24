import { FC } from "react";
import "./mid-section.component.sass";
import Feature from "../../feature/feature.component";

const MidSection: FC = () => (
  <section className="bg-lavender-pink h-full">
    <Feature
      label="Cursos Interactivos"
      description="Materiales dinámicos para aprender inglés de forma práctica"
      icon="icon.png"
      color="#FFD700"
    />
    <Feature
      label="Clubes de Conversación"
      description="Mejora tu fluidez con actividades grupales"
      icon="icon.png"
      color="#FF69B4"
    />
    <Feature
      label="Retroalimentación Personalizada"
      description="Comentarios claros para mejorar tu nivel rápidamente"
      icon="icon.png"
      color="#FF6347"
    />
  </section>
);

export default MidSection;

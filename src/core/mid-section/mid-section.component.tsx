import { FC } from "react";
import "./mid-section.component.sass";
import Feature from "../../feature/feature.component";

const MidSection: FC = () => (
  <section className="pink-background">
    <Feature
      label="Cursos Interactivos"
      description="Materiales dinámicos para aprender inglés de forma práctica"
      icon="laptop.png"
      color="#FFD700"
    />
    <Feature
      label="Clubes de Conversación"
      description="Practica inglés en grupos para mejorar fluidez y confianza"
      icon="discman.png"
      color="#FF69B4"
    />
    <Feature
      label="Retroalimentación Personalizada"
      description="Comentarios claros para mejorar tu nivel rápidamente"
      icon="studying.png"
      color="#FF6347"
    />
  </section>
);

export default MidSection;

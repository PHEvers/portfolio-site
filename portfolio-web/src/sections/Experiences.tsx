import { useEffect, useState } from "react";
import { initialExperiences } from "../data/experiences";
import type { Experience } from "../data/experiences";
import "../styles/experiences.css";

export function Experiences() {
  /* Guarda a experiência atualmente selecionada */
  const [selectedExperience, setSelectedExperience] =
    useState<Experience | null>(null);

  /* Fecha o modal ao pressionar a tecla Esc */
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedExperience(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    /* Remove o evento quando o componente é desmontado */
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <section className="experiences-container" id="experiencias">
      <h2 className="experiences-title">Minha Jornada</h2>

      {/* Grid com os cards das experiências */}
      <div className="experiences-grid">
        {initialExperiences.map((item) => (
          <button
            key={item.id}
            className="experience-card"
            onClick={() => setSelectedExperience(item)}
          >
            {/* Cabeçalho do card */}
            <div className="card-header">
              <span className={`tag ${item.type}`}>
                {item.type === "profissional"
                  ? "Profissional"
                  : "Acadêmico"}
              </span>

              <span className="period">{item.period}</span>
            </div>

            {/* Informações resumidas */}
            <h3 className="card-title">{item.title}</h3>

            <h4 className="card-subtitle">{item.subtitle}</h4>

            <p className="card-description">{item.description}</p>

            {/* Indica que o card pode ser aberto */}
            <span className="card-action">
              Ver detalhes →
            </span>
          </button>
        ))}
      </div>

      {/* ========================================
          MODAL DA EXPERIÊNCIA
          ======================================== */}

      {selectedExperience && (
        <div
          className="experience-modal-overlay"
          onClick={() => setSelectedExperience(null)}
        >
          <div
            className="experience-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="experience-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Botão para fechar o modal */}
            <button
              className="modal-close"
              onClick={() => setSelectedExperience(null)}
              aria-label="Fechar detalhes"
            >
              ×
            </button>

            {/* ========================================
                CABEÇALHO
                ======================================== */}

            <div className="modal-header">
              <span className={`tag ${selectedExperience.type}`}>
                {selectedExperience.type === "profissional"
                  ? "Profissional"
                  : "Acadêmico"}
              </span>

              <span className="period">
                {selectedExperience.period}
              </span>
            </div>

            {/* ========================================
                TÍTULO E SUBTÍTULO
                ======================================== */}

            <h3
              id="experience-modal-title"
              className="modal-title"
            >
              {selectedExperience.title}
            </h3>

            <h4 className="modal-subtitle">
              {selectedExperience.subtitle}
            </h4>

            {/* ========================================
                SOBRE A EXPERIÊNCIA
                ======================================== */}

            <div className="modal-section">
              <h4>Sobre esta experiência</h4>

              <p className="modal-details">
                {selectedExperience.details}
              </p>
            </div>

            {/* ========================================
                PRINCIPAIS ATIVIDADES
                ======================================== */}

            {selectedExperience.activities &&
              selectedExperience.activities.length > 0 && (
                <div className="modal-section">
                  <h4>Principais atividades</h4>

                  <ul className="activities-list">
                    {selectedExperience.activities.map((activity) => (
                      <li key={activity}>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            {/* ========================================
                TECNOLOGIAS
                ======================================== */}

            <div className="modal-technologies">
              <h4>Tecnologias e competências</h4>

              <div className="technology-tags">
                {selectedExperience.technologies.map(
                  (technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
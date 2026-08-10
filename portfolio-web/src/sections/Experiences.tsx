import { initialExperiences } from "../data/experiences";
import "../styles/experiences.css";


export function Experiences() {
  return (
    <section className="experiences-container" id="experiencias">
      <h2 className="experiences-title">Minha Jornada</h2>
      
      <div className="experiences-grid">
        {initialExperiences.map((item) => (
          <div key={item.id} className="experience-card">
            <div className="card-header">
              <span className={`tag ${item.type}`}>
                {item.type === "profissional" ? "Profissional" : "Acadêmico"}
              </span>
              <span className="period">{item.period}</span>
            </div>
            
            <h3 className="card-title">{item.title}</h3>
            <h4 className="card-subtitle">{item.subtitle}</h4>
            <p className="card-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
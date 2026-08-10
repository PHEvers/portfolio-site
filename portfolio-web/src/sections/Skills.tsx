import { skillsData } from "../data/skills";
import "../styles/skills.css";

export function Skills() {
  return (
    <section className="skills-container" id="skills">
      <h2 className="skills-title">Tecnologias e Habilidades</h2>
      
      <div className="skills-grid">
        {skillsData.map((category, index) => (
          <div key={index} className="skills-card">
            <h3>{category.title}</h3>
            <ul>
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
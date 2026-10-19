import "../styles/projects.css";

const technologies = [
  "AWS",
  "Terraform",
  "GitHub Actions",
  "OIDC",
  "React",
  "Python",
];

export function Projects() {
  return (
    <section
      className="projects-container"
      id="projetos"
      aria-labelledby="projects-title"
    >
      <h2 className="projects-title" id="projects-title">
        Projeto em destaque
      </h2>

      <article className="project-card">
        <div className="project-card-header">
          <div>
            <p className="project-eyebrow">Cloud e DevOps</p>
            <h3 className="project-name">SimulaCloud</h3>
          </div>

          <a
            className="project-link"
            href="https://github.com/PHEvers/SimulaCloud"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver repositório <span aria-hidden="true">↗</span>
          </a>
        </div>

        <p className="project-description">
          Plataforma de simulados para praticar questões da certificação AWS
          Cloud Practitioner. O projeto combina uma aplicação web com uma API
          serverless e infraestrutura definida como código.
        </p>

        <div className="project-architecture">
          <p>
            <strong>Aplicação:</strong> React no frontend; API Gateway, Lambda
            em Python e DynamoDB no backend.
          </p>
          <p>
            <strong>Entrega e infraestrutura:</strong> Terraform e GitHub
            Actions para validar a infraestrutura e publicar o frontend na AWS
            com autenticação OIDC.
          </p>
        </div>

        <ul className="project-technologies" aria-label="Tecnologias do projeto">
          {technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </article>
    </section>
  );
}

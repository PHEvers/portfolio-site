export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Hard Skills",
    skills: [
      "Linux / Bash Script",
      "Docker",
      "Git & GitHub",
      "PostgreSQL",
      "Análise de Logs",
      "Troubleshooting"
    ]
  },
  {
    title: "Soft Skills",
    skills: [
      "Resolução de Problemas",
      "Comunicação Clara",
      "Trabalho em Equipe",
      "Pensamento Analítico",
      "Aprendizado Contínuo",
      "Adaptabilidade"
    ]
  }
];
export interface Experience {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  description: string;
  type: "profissional" | "academico";
}

export const initialExperiences: Experience[] = [
  {
    id: "1",
    title: "Linx",
    subtitle: "Analista de Suporte / Atuação atual",
    period: "Atual",
    description: "Atuação em suporte técnico, diagnóstico de problemas e automação de rotinas.",
    type: "profissional",
  },
  {
    id: "2",
    title: "Curso +Dev2Blu",
    subtitle: "DevOps",
    period: "2026",
    description: "Especialização focada em práticas de integração e entrega contínua, infraestrutura e automação.",
    type: "academico",
  },
  {
    id: "3",
    title: "Serasa Experian",
    subtitle: "Experiência Profissional",
    period: "Ago/2023 - Fev/2024 (7 meses)",
    description: "Atuação na área de tecnologia e suporte a sistemas.",
    type: "profissional",
  },
  {
    id: "4",
    title: "Curso +Dev2Blu",
    subtitle: "DevOps",
    period: "2022",
    description: "Formação inicial em fundamentos de DevOps e desenvolvimento de software.",
    type: "academico",
  },
];
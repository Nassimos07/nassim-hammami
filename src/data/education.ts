export interface Education {
  institution: string;
  detail: string;
  period: string;
  description: string;
}

export const education: Education[] = [
  {
    institution: 'University of Manitoba, Canada',
    detail: 'Research Internship',
    period: '2023',
    description:
      'Developed machine-learning models for position, state, and identification sensing of UAV systems, contributing to the “Unified System Architecture for Communication and Sensing Networks: Application in UAV Systems” research project.',
  },
  {
    institution: 'École Polytechnique de Tunisie',
    detail: 'Engineer’s Degree (M.Sc.-equivalent)',
    period: '2020 – 2023',
    description:
      'Selective national engineering program at one of Tunisia’s top engineering schools, with rigorous training in mathematics, algorithms, and applied computing. Graduated with highest honors.',
  },
  {
    institution: 'Preparatory Institute',
    detail: 'Advanced Mathematics & Physics',
    period: '2017 – 2020',
    description:
      'Two-year intensive program in advanced mathematics and physics. Ranked 7th of 900 nationally and 1st at the institute in the national engineering entrance exam.',
  },
];

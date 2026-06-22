export interface SkillGroup {
  category: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Core',
    items: ['Machine Learning', 'Deep Learning', 'Computer Vision'],
  },
  {
    category: 'Frameworks',
    items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'OpenCV', 'CUDA'],
  },
  {
    category: 'Languages & Data',
    items: ['Python', 'SQL', 'Pandas', 'NumPy'],
  },
  {
    category: 'MLOps & Cloud',
    items: ['Docker', 'AWS (ECS / EC2 / S3)', 'DVC', 'Git', 'CI/CD', 'Linux', 'MLflow'],
  },
];

export interface Language {
  name: string;
  level: string;
}

export const languages: Language[] = [
  { name: 'English', level: 'Fluent' },
  { name: 'French', level: 'Fluent' },
  { name: 'Arabic', level: 'Native' },
];

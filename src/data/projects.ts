export interface Project {
  name: string;
  context: string;
  blurb: string;
  description: string;
  tags: string[];
  domain: string;
  link?: { label: string; href: string };
  featured?: boolean;
}

export const projects: Project[] = [
  {
    name: 'Emgenisys',
    context: 'USA',
    domain: 'Medical / AgriTech',
    blurb:
      'Deep-learning system for bovine embryo grade, stage, sex, and pregnancy prediction from 30-second clips.',
    description:
      'Led the ML effort on an AI bovine-embryo assessment platform. Drove embryo detection and tracking to 99% across full-length videos and shipped Grade, Stage, Sex, and Pregnancy prediction models approved for production through deep model-evaluation analytics.',
    tags: ['Python', 'PyTorch', 'Detection', 'Tracking', 'MLflow', 'Fine-Tuning', 'CI/CD'],
    featured: true,
  },
  {
    name: 'CalibrX',
    context: 'calibrx.io',
    domain: 'Computer Vision Platform',
    blurb: 'End-to-end platform for online camera calibration and image undistortion.',
    description:
      'Designed and built a full platform for online camera calibration and image undistortion — from the computer-vision core through a FastAPI service, containerized and deployed on AWS.',
    tags: ['Python', 'OpenCV', 'FastAPI', 'Docker', 'AWS'],
    link: { label: 'calibrx.io', href: 'https://calibrx.io' },
    featured: true,
  },
  {
    name: 'CrackFinder',
    context: 'Switzerland',
    domain: 'Sports Analytics',
    blurb:
      'Computer-vision system for automated equestrian performance analysis and prediction.',
    description:
      'Built a computer-vision pipeline for automated equestrian performance analysis and prediction, combining segmentation (SAM3), motion recognition, and 3D vision to extract performance signals from video.',
    tags: ['Python', 'PyTorch', 'SAM3', 'Motion Recognition', '3D Vision'],
    featured: true,
  },
  {
    name: 'BovEye',
    context: 'USA',
    domain: 'AgriTech',
    blurb:
      'Multispectral cattle-detection system tuned for small objects and complex backgrounds.',
    description:
      'Developed a multispectral cattle-detection system tuned for small objects and cluttered backgrounds, benchmarking YOLOv11 and RF-DETR with rigorous COCO-style evaluation.',
    tags: ['YOLOv11', 'RF-DETR', 'Multispectral', 'pycocotools', 'PyTorch'],
    featured: true,
  },
];

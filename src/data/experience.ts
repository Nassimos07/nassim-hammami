export interface Experience {
  role: string;
  company: string;
  location: string;
  type: string;
  start: string;
  end: string;
  current?: boolean;
  highlights: string[];
  meta?: string[];
}

export const experiences: Experience[] = [
  {
    role: 'Machine Learning Lead',
    company: 'Sparrow Computing',
    location: 'Nebraska, USA',
    type: 'Full-Time · Remote',
    start: 'Apr 2025',
    end: 'Jun 2026',
    current: true,
    highlights: [
      'Earned the lead role on Emgenisys (AI bovine-embryo assessment), driving embryo detection and tracking to 99% across full-length videos.',
      'Improved the Grade, Stage, Sex, and Pregnancy prediction models and approved them for production through deep model-evaluation analytics.',
      'Designed and owned end-to-end ML pipelines — data, training, evaluation, and deployment — across additional client projects.',
      'Led client progress reviews, presenting new results and aligning on challenges and solutions.',
    ],
  },
  {
    role: 'Machine Learning Engineer',
    company: 'Upwork Inc',
    location: 'Carthage, Tunisia',
    type: 'Full-Time · Remote',
    start: 'Mar 2023',
    end: 'Apr 2025',
    meta: ['100% Job Success', 'Top Rated Plus', '$40K+ earned', '90+ jobs'],
    highlights: [
      'Delivered 80+ ML/CV projects across medical imaging, agriculture, sports, and finance.',
      'Built models for image segmentation, object detection (YOLO), and stereo vision.',
      'Developed time-series forecasters (LSTM, BiLSTM, Transformers) for financial markets.',
    ],
  },
  {
    role: 'Computer Vision Engineer',
    company: 'Vistasy Clinic',
    location: 'Tunis, Tunisia',
    type: 'Internship · On-site',
    start: 'Jun 2022',
    end: 'Feb 2023',
    highlights: [
      'Built a MediaPipe face- and ROI-segmentation pipeline to isolate facial skin regions for analysis.',
      'Trained a deep-learning model to classify skin into five types: Normal, Dry, Sensitive, Oily, and Combination.',
    ],
  },
];

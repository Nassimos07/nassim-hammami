// ─────────────────────────────────────────────────────────────────────────────
// PROFILE — central source of truth for your identity & contact links.
// Edit values here; every component reads from this file.
// ⚠️  Verify the LinkedIn and Upwork URLs below — they are best guesses.
// ─────────────────────────────────────────────────────────────────────────────

export interface SocialLink {
  label: string;
  href: string;
  handle: string;
  icon: 'github' | 'linkedin' | 'upwork' | 'mail';
}

export interface Stat {
  value: string;
  label: string;
}

export const profile = {
  name: 'Nassim Hammami',
  shortName: 'Nassim',
  initials: 'NH',
  role: 'Machine Learning & Computer Vision Engineer',
  // Rotating words used by the animated hero subtitle.
  rotatingRoles: [
    'production AI systems',
    'computer-vision pipelines',
    'deep-learning models',
    'MLOps & deployment',
  ],
  location: 'Remote · Tunisia',
  availability: 'Open to new opportunities',
  email: 'nassimhammemiwork@gmail.com',
  resumeFile: 'resume.pdf', // lives in /public

  tagline:
    'I design, build, and ship production AI systems for real-world use — from model design and evaluation to reliable deployment.',

  about: [
    'Machine Learning and Computer Vision Engineer with 4+ years designing, building, and shipping production AI systems for real-world use. Most recently Machine Learning Lead at Sparrow Computing, owning client projects end-to-end — from model design and evaluation to reliable deployment.',
    'Top Rated Plus on Upwork with 80+ delivered projects across medical imaging, agriculture, sports, and finance. I care about rigorous evaluation, clean pipelines, and models that actually hold up in production.',
  ],

  stats: [
    { value: '4+', label: 'Years in production ML' },
    { value: '80+', label: 'Projects delivered' },
    { value: '99%', label: 'Embryo detection accuracy' },
    { value: 'Top Rated Plus', label: 'Upwork status' },
  ] satisfies Stat[],

  socials: [
    {
      label: 'GitHub',
      href: 'https://github.com/Nassimos07',
      handle: 'Nassimos07',
      icon: 'github',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/nassim-hammami-771015217',
      handle: 'Nassim Hammami',
      icon: 'linkedin',
    },
    {
      label: 'Upwork',
      href: 'https://www.upwork.com/freelancers/~013cf1e92a2b62e552',
      handle: 'Nassim Hammami',
      icon: 'upwork',
    },
    {
      label: 'Email',
      href: 'mailto:nassimhammemiwork@gmail.com',
      handle: 'nassimhammemiwork@gmail.com',
      icon: 'mail',
    },
  ] satisfies SocialLink[],

  // Used for <meta> description / Open Graph / structured data.
  seoDescription:
    'Nassim Hammami — Machine Learning & Computer Vision Engineer with 4+ years shipping production AI systems across medical imaging, agriculture, sports, and finance.',
} as const;

export type Profile = typeof profile;

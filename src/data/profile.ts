import { Education, Experience, Service, SkillGroup } from '../types';

// First professional role (Sumato Solutions); drives the "years" stat.
const CAREER_START = new Date(2023, 0, 1);

export const yearsOfExperience = Math.floor(
  (Date.now() - CAREER_START.getTime()) / (365.25 * 24 * 60 * 60 * 1000)
);

export const profile = {
  name: 'Muhammad Adnan',
  shortName: 'Adnan',
  role: 'Senior Full Stack Developer',
  location: 'Lahore, Pakistan',
  photo: '/images/mypic.jpeg',
  // Keep this path stable so previously shared links serve the latest resume.
  resume: '/pdf/Adnan Moeen.pdf',
  resumeFileName: 'Muhammad Adnan - Full Stack Developer.pdf',
  email: 'adnanmoeen183@gmail.com',
  phone: '+92 305 4433058',
  whatsapp: 'https://wa.me/923054433058',
  linkedin: 'https://www.linkedin.com/in/adnan-mobdev/',
  github: 'https://github.com/adnan-geekybugs',
  summary: `For the last ${yearsOfExperience}+ years I've been writing NestJS and PostgreSQL services on AWS, Flutter apps for Android and iOS, and the React screens that sit on top. Most of it is for logistics and tracking companies: live maps, load bidding, payments, and the APIs that hold it together.`,
  timeZone: 'Asia/Karachi',
  languages: ['English', 'Urdu', 'Punjabi', 'Arabic'],
  stores: ['App Store', 'Google Play', 'Huawei AppGallery'],
};

export const services: Service[] = [
  {
    id: 'backend',
    title: 'Backend',
    description:
      'APIs and services in NestJS and PostgreSQL. I design the schema, handle auth and permissions, wire up payment webhooks, and deploy it to AWS myself.',
    points: [
      'REST APIs, auth, JWT and RBAC',
      'Payment and order webhooks',
      'Redis, queues and cron jobs',
      'AWS: ECS/Fargate, RDS, S3, CloudFront',
    ],
    stack: ['Node.js', 'NestJS', 'TypeScript', 'PostgreSQL', 'Prisma'],
  },
  {
    id: 'mobile',
    title: 'Mobile',
    description:
      'Flutter apps for Android and iOS. Lots of maps, live location and geofencing, plus payments and push. I take them all the way through store review.',
    points: [
      'Real-time GPS tracking and geofencing',
      'Stripe, PayPal, Razorpay and more',
      'Push notifications and in-app chat',
      'App Store, Google Play and AppGallery releases',
    ],
    stack: ['Flutter', 'Dart', 'Bloc', 'GetX', 'Firebase'],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    description:
      'Web interfaces in React and TypeScript, built from Figma and connected to the same APIs the apps use. This site is one of them.',
    points: [
      'Responsive, pixel-perfect UI from Figma',
      'Reusable component systems',
      'API integration and state handling',
      'Performance and accessibility',
    ],
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
  },
];

export const experience: Experience[] = [
  {
    company: 'Geekybugs',
    role: 'Senior Full Stack Developer',
    start: 'Jul 2024',
    end: 'Present',
    summary:
      'Build and run backend systems and mobile apps end to end with NestJS, Node.js, TypeScript, PostgreSQL, Prisma and Flutter.',
    highlights: [
      'Design REST APIs, database schemas and auth: JWT and sessions, RBAC, permissions and secure API workflows.',
      'Integrate Razorpay, Stripe, Shiprocket, Firebase, Google Maps and Traccar, including webhook-based payment and order processing.',
      'Build reliable services with PostgreSQL, Prisma, Redis, background and cron jobs, and API optimisation.',
      'Deploy and operate staging and production on AWS: RDS, S3, CloudFront, ECS/Fargate and Elastic Beanstalk.',
      'Ship cross-platform Flutter apps with Bloc/GetX, real-time tracking, maps, push notifications and reusable UI.',
    ],
  },
  {
    company: 'TieCodes',
    role: 'Flutter Developer',
    start: 'Aug 2023',
    end: 'Jun 2024',
    summary:
      'Built and maintained production Flutter apps for GPS tracking, fleet management and location-based services on Android and iOS.',
    highlights: [
      'Built vehicle-tracking features with Google Maps, geofencing, route tracking, navigation and real-time location updates.',
      'Integrated REST APIs, Firebase, payment gateways, push notifications and third-party SDKs.',
      'Structured apps with Bloc, GetX and Provider around reusable, maintainable components.',
      'Improved performance, API handling, load times and battery usage, and fixed platform-specific Android and iOS issues.',
    ],
  },
  {
    company: 'Sumato Solutions',
    role: 'Mobile Apps Developer',
    start: 'Jan 2023',
    end: 'Jul 2023',
    summary: 'Built cross-platform Flutter apps from Figma designs into responsive, pixel-perfect interfaces.',
    highlights: [
      'Developed reusable widgets, dynamic forms, lists and navigation flows.',
      'Integrated REST APIs and third-party services, and handled local storage and app state.',
    ],
  },
];

export const education: Education[] = [
  {
    degree: 'Bachelor of Information Technology',
    school: 'Punjab University, Lahore',
    period: '2018 – 2022',
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Backend',
    items: ['Node.js', 'NestJS', 'TypeScript', 'REST APIs', 'Swagger / OpenAPI', 'Webhooks', 'Cron & background jobs'],
  },
  {
    title: 'Database',
    items: ['PostgreSQL', 'Prisma ORM', 'SQL', 'Schema design', 'Migrations', 'Redis'],
  },
  {
    title: 'Auth & security',
    items: ['JWT', 'Access / refresh tokens', 'Sessions', 'RBAC & permissions', 'Rate limiting'],
  },
  {
    title: 'Mobile',
    items: ['Flutter', 'Dart', 'Bloc', 'GetX', 'Provider', 'Riverpod', 'Android & iOS'],
  },
  {
    title: 'Frontend',
    items: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Responsive UI', 'Reusable components'],
  },
  {
    title: 'Maps & real-time',
    items: ['Google Maps', 'GPS & geofencing', 'Traccar API', 'WebSockets', 'Firebase / FCM', 'Push notifications'],
  },
  {
    title: 'Payments',
    items: ['Stripe', 'Razorpay', 'PayPal', 'GPay', 'Apple Pay', 'RevenueCat', 'Payment webhooks'],
  },
  {
    title: 'Cloud & infrastructure',
    items: ['AWS', 'ECS / Fargate', 'RDS', 'S3', 'CloudFront', 'Elastic Beanstalk', 'Docker', 'Firebase'],
  },
  {
    title: 'Tools & delivery',
    items: ['Git', 'GitHub / GitLab', 'Postman', 'CI/CD', 'Testing & debugging', 'App Store, Play & AppGallery releases'],
  },
];

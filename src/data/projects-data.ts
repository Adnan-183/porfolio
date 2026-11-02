import { BackendWork, Project, ProjectDomain } from '../types';

export const projectDomains: ProjectDomain[] = [
  'Logistics & Mobility',
  'GPS & Tracking',
  'Commerce & Services',
  'Social & Media',
];

export const projectData: Project[] = [
  {
    id: 'zigu',
    title: 'Zigu',
    description:
      'Logistics platform for smaller transporters. Drivers get load notifications, manage trips and upload photos from each stop while shippers follow them live. Includes an in-app tutorial, employment history and health-insurance options.',
    domain: 'Logistics & Mobility',
    tech: ['Flutter', 'GetX', 'Live tracking', 'Firebase', 'PEACH', 'OZOW'],
    thumbnail: '/svg/zigu.svg',
    status: 'Published',
    metric: '100+ downloads · also on AppGallery',
    featured: true,
    links: {
      googlePlay: 'https://play.google.com/store/apps/details?id=com.tiecodes.zigu_v2',
      appStore: 'https://apps.apple.com/us/app/zigu/id6747668641',
    },
    features: ['Trip tracking', 'Self & company loads', 'Stop photo uploads', 'Health insurance'],
  },
  {
    id: 'taxi2cardiff',
    title: 'Taxi2Cardiff',
    description:
      'Ride-hailing app with separate customer and driver experiences: ride requests, live trip navigation, in-app chat and PayPal payments.',
    domain: 'Logistics & Mobility',
    tech: ['Flutter', 'Bloc', 'Live tracking', 'Firebase', 'PayPal'],
    thumbnail: '/png/taxi2Cardiff.png',
    status: 'Published',
    metric: '1,000+ downloads',
    featured: true,
    links: {
      googlePlay: 'https://play.google.com/store/apps/details?id=com.taxi2cardiff.taxi2cardiff',
      appStore: 'https://apps.apple.com/us/app/taxi2cardiff/id1546997921',
    },
    features: ['Ride booking', 'Driver dashboard', 'Trip navigation', 'In-app chat'],
  },
  {
    id: 'sheen-magazine',
    title: 'Sheen Magazine',
    description:
      'Digital magazine with subscriptions, downloadable issues for offline reading and interactive content.',
    domain: 'Social & Media',
    tech: ['Flutter', 'GetX', 'RevenueCat', 'Offline downloads'],
    thumbnail: '/png/sheen.png',
    status: 'Published',
    metric: '1,000+ downloads',
    featured: true,
    links: {
      googlePlay: 'https://play.google.com/store/apps/details?id=com.magazine.sheen',
      appStore: 'https://apps.apple.com/us/app/sheen-magazine/id1623812336',
    },
    features: ['Digital issues', 'Offline reading', 'Subscriptions'],
  },
  {
    id: 'bridge-expedite',
    title: 'Bridge Expedite',
    description:
      'Driver-first logistics app: sign-up with vehicle and bank details, admin approval, bid / counter-bid on loads, live trip management and in-app navigation.',
    domain: 'Logistics & Mobility',
    tech: ['Flutter', 'GetX', 'Live tracking', 'Push notifications'],
    thumbnail: '/png/bridge_expedite.png',
    status: 'Published',
    featured: true,
    links: {
      googlePlay: 'https://play.google.com/store/apps/details?id=tiecodes.com.bridge_expedite',
      appStore: 'https://apps.apple.com/us/app/bridge-expedite/id6744370374',
    },
    features: ['Bid / counter-bid', 'Admin approval', 'Job tracking', 'Navigation'],
  },
  {
    id: 'utrack',
    title: 'Utrack',
    description:
      'Multi-device GPS tracking for fleets: live locations, geofences, real-time alerts, device settings and PayPal subscription plans.',
    domain: 'GPS & Tracking',
    tech: ['Flutter', 'GetX', 'Geofencing', 'Live tracking', 'PayPal'],
    thumbnail: '/svg/utrack.svg',
    status: 'Published',
    featured: true,
    links: {
      googlePlay: 'https://play.google.com/store/apps/details?id=com.tiecodes.u_track',
    },
    features: ['Multi-device', 'Geofence alerts', 'Subscriptions'],
  },
  {
    id: 'dawgpound',
    title: 'Dawg Pound',
    description:
      'Team and match management: owners create teams, add members, schedule matches and talk in group chat, with Stripe payments.',
    domain: 'Social & Media',
    tech: ['Flutter', 'Bloc', 'Firebase', 'Stripe'],
    thumbnail: '/png/dawgpound.png',
    status: 'Published',
    featured: true,
    links: {
      appStore: 'https://apps.apple.com/us/app/dawg-pound/id6746443775',
    },
    features: ['Team creation', 'Match scheduling', 'Group chat'],
  },
  {
    id: 'jewels-airport',
    title: 'Jewels Airport Transfer',
    description:
      'Airport-transfer platform where drivers register, bid on jobs and chat with customers in-app.',
    domain: 'Logistics & Mobility',
    tech: ['Flutter', 'GetX', 'In-app chat'],
    thumbnail: '/png/jewelslogo.png',
    status: 'Published',
    links: {
      googlePlay: 'https://play.google.com/store/apps/details?id=com.tiecodes.jat',
      appStore: 'https://apps.apple.com/pk/app/jewels-airport-transfer/id6747810384',
    },
  },
  {
    id: 'closeby-jobs',
    title: 'Close By Jobs',
    description:
      'Location-based job app that uses geofence alerts to confirm work is done on site and on time.',
    domain: 'GPS & Tracking',
    tech: ['Flutter', 'GetX', 'Geofencing', 'Firebase'],
    thumbnail: '/png/closeByJob.jpeg',
    status: 'Published',
    links: {
      googlePlay: 'https://play.google.com/store/apps/details?id=com.tiecodes.rent_ready_homes',
      appStore: 'https://apps.apple.com/us/app/close-by-jobs/id6502640202',
    },
  },
  {
    id: 'cleany-user',
    title: 'Cleany',
    description:
      'On-demand cleaning: book vetted cleaners, manage bookings, pay with Stripe and leave reviews.',
    domain: 'Commerce & Services',
    tech: ['Flutter', 'GetX', 'Stripe'],
    thumbnail: '/png/cleany.png',
    status: 'Published',
    links: {
      googlePlay: 'https://play.google.com/store/apps/details?id=com.cleany.user',
      appStore: 'https://apps.apple.com/us/app/book-cleany/id6448805647',
    },
  },
  {
    id: 'cleany-professional',
    title: 'Cleany Cleaner',
    description:
      'Companion app for cleaners to manage jobs, schedules, earnings and client messages.',
    domain: 'Commerce & Services',
    tech: ['Flutter', 'GetX', 'Stripe'],
    thumbnail: '/png/cleany.png',
    status: 'Published',
    links: {
      googlePlay: 'https://play.google.com/store/apps/details?id=com.cleany.cleaner',
      appStore: 'https://apps.apple.com/us/app/cleany-cleaner/id6448806557',
    },
  },
  {
    id: 'golftraxx',
    title: 'GolfTraxx',
    description:
      'GPS golf companion with real-time distance to the green, scorekeeping and course management on Google Maps.',
    domain: 'GPS & Tracking',
    tech: ['Flutter', 'Google Maps SDK', 'GPS'],
    links: {},
  },
  {
    id: 'progps',
    title: 'ProGps',
    description:
      'Vehicle tracking with live locations, geofences, real-time alerts, device management and subscription plans.',
    domain: 'GPS & Tracking',
    tech: ['Flutter', 'Geofencing', 'Live tracking', 'Subscriptions'],
    links: {},
  },
  {
    id: 'courier-broker',
    title: 'Courier Broker',
    description:
      'Courier marketplace: drivers get approved, filter loads, place bids, chat with shippers and complete trips on delivery.',
    domain: 'Logistics & Mobility',
    tech: ['Flutter', 'Bidding', 'In-app chat'],
    links: {},
  },
  {
    id: 'food-delivery',
    title: 'Food Delivery Suite',
    description:
      'Three connected apps for restaurants, drivers and customers: menus, ordering, order management and live delivery tracking.',
    domain: 'Commerce & Services',
    tech: ['Flutter', 'Live tracking', 'Multi-app'],
    links: {},
  },
  {
    id: 'rentpe',
    title: 'RentPe',
    description:
      'Property rental platform connecting landlords and tenants with search filters, virtual tours and secure payments.',
    domain: 'Commerce & Services',
    tech: ['Flutter', 'Bloc'],
    thumbnail: '/png/rentpe.png',
    status: 'In Development',
    links: {},
  },
  {
    id: 'yuunri',
    title: 'Yuunri',
    description:
      'eCommerce app with product catalogue, secure checkout and real-time order tracking.',
    domain: 'Commerce & Services',
    tech: ['Flutter', 'Bloc'],
    thumbnail: '/png/yuunri.png',
    status: 'In Development',
    links: {},
  },
  {
    id: 'nowby',
    title: 'NowBy',
    description:
      'Location-based social network with radius-scoped posts, comments, tagging, replies and alerts when contacts join nearby.',
    domain: 'Social & Media',
    tech: ['Flutter', 'GetX', 'Maps'],
    thumbnail: '/png/nowBy.jpg',
    status: 'Unreleased',
    links: {},
  },
  {
    id: 'nutritech',
    title: 'NutriTech',
    description:
      'Business operations app for creating deals, assigning tasks and following field representatives in real time.',
    domain: 'Commerce & Services',
    tech: ['Flutter', 'GetX'],
    thumbnail: '/png/nutriTech.png',
    status: 'Unreleased',
    links: {},
  },
  {
    id: 'msn-png',
    title: 'MSN-PNG',
    description:
      'Event management and ticketing: organisers create and promote events and sell QR-code tickets.',
    domain: 'Commerce & Services',
    tech: ['Flutter', 'GetX', 'QR tickets', 'Payments'],
    thumbnail: '/png/mspng.png',
    status: 'Unreleased',
    links: {},
  },
  {
    id: 'yabiso-car',
    title: 'Ya Biso Car',
    description:
      'Ride-booking app for riders and drivers with real-time tracking, route display and trip history.',
    domain: 'Logistics & Mobility',
    tech: ['Flutter', 'GetX', 'Live tracking'],
    thumbnail: '/png/eagles_car.png',
    status: 'Unreleased',
    links: {},
  },
];

export const publishedCount = projectData.filter((p) => p.status === 'Published').length;

// Backend work at Geekybugs, described from the resume. Client names are left out.
export const backendWork: BackendWork[] = [
  {
    id: 'payments-orders',
    title: 'Payments & order processing',
    description:
      'Payment and order flows where the payment provider confirms by webhook and the order is handed on for shipping.',
    highlights: [
      'Razorpay and Stripe payments verified through webhooks',
      'Orders pushed to Shiprocket for fulfilment',
      'Background and cron jobs backed by Redis',
    ],
    stack: ['NestJS', 'PostgreSQL', 'Prisma', 'Redis', 'Razorpay', 'Stripe', 'Shiprocket'],
  },
  {
    id: 'auth-access',
    title: 'Auth, roles & permissions',
    description:
      'Authentication and access control for the APIs behind the apps.',
    highlights: [
      'JWT access and refresh tokens, plus session management',
      'Role-based access control with fine-grained permissions',
      'Rate limiting and secure API workflows',
    ],
    stack: ['NestJS', 'TypeScript', 'PostgreSQL', 'Prisma', 'JWT'],
  },
  {
    id: 'tracking-api',
    title: 'Live tracking & maps API',
    description:
      'The server side of the GPS and fleet apps: device data from Traccar and Google Maps, served to the Flutter apps.',
    highlights: [
      'Traccar API integration for GPS devices',
      'Google Maps services for locations and routes',
      'Firebase push notifications for alerts and updates',
    ],
    stack: ['Node.js', 'NestJS', 'Traccar', 'Google Maps', 'Firebase / FCM'],
  },
  {
    id: 'aws-infra',
    title: 'AWS deployment & operations',
    description:
      'Running the services in staging and production, and keeping them fast and reliable.',
    highlights: [
      'Containers on ECS/Fargate and apps on Elastic Beanstalk',
      'RDS PostgreSQL, S3 storage and CloudFront delivery',
      'API and query optimisation, production troubleshooting',
    ],
    stack: ['AWS', 'ECS / Fargate', 'Elastic Beanstalk', 'RDS', 'S3', 'CloudFront', 'Docker'],
  },
];

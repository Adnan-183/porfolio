import { Project } from '../types';

export const projectData: Project[] = [


{
  title: 'RentPe',
  tech: 'Flutter (Bloc-State Management)',
  description: "Property rental platform connecting landlords and tenants with advanced search filters, virtual tours, and secure payment processing.",
  googlePlayLink: '',
  thumbnail: '/png/rentpe.png'
},
{
  title: 'Yuunri',
  tech: 'Flutter (Bloc-State Management)',
  description: "A modern eCommerce app offering a seamless shopping experience with secure payments, real-time order tracking, and a wide range of products at your fingertips.",
  googlePlayLink: '',
  thumbnail: '/png/yuunri.png'
},
{
  title: 'DawgPound',
  tech: 'Flutter (Bloc-State Management)',
  description: "Dawgpound is an app where team owners can create and manage teams, add members, schedule matches, and stay connected through a built-in group chat.",
  googlePlayLink: 'In Development',
  thumbnail: '/png/dawgpound.png'
},
{
  title: 'SwipeLover - The Dating App',
  tech: 'Flutter (Bloc-State Management)',
  description: "SwipeLover is a social app for meeting new people through chatting, random match-based chats, and live streaming. With a focus on privacy and simplicity, it offers a fun, safe space to build real connections in real time.",
  googlePlayLink: 'https://play.google.com/store/apps/details?id=com.swipelover.app',
  thumbnail: '/svg/swipe.svg'
},


];

export const skills = {
  mobile: ['Flutter', 'Bloc State Management', 'Getx State Management', 'Provider State Management', 'Firebase (Authentication, Database, Cloud Messaging, Crashlytics, Analytics etc)', "RESTful APIs", 'One-Signal' , 'Agora SDK', 'Web-Socket Integration',  "Real-time Location Tracking ", "Marker Animation & Polylines" , "Google Maps SDK", "Geofence", "Tutorials", "Payment Integration (PayPal, Stripe, OZOW, PEACH, Kwik)", "Deep & Dynamic Linking", ],
  backend: ['NestJS', 'TypeScript', 'PostgreSQL', 'RESTful APIs'],
  others: ['Git/GitHub', 'CI/CD', 'Agile Methodology', " Unit, Widget, and Integration Testing using Flutter’s built-in tools", "Profiling and Debugging", 'App Store Deployment & Management', 'Play Store Deployment & Management']
};

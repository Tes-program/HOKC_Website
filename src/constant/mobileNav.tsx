import aboutIcon from '../assets/about_icon.png';
import homeIcon from '../assets/home_icon.png';
import eventIcon from '../assets/event_icon.png';
import deptIcon from '../assets/dept_icon.png';

interface MobileNavData {
  title: string;
  path: string;
  icon: string;
}

export const mobileNavData: MobileNavData[] = [
  {
    title: 'Home',
    path: '/',
    icon: homeIcon,
  },
  {
    title: 'About',
    path: '/about',
    icon: aboutIcon,
  },
  {
    title: 'Event',
    path: '/event',
    icon: eventIcon,
  },
  {
    title: 'Depts',
    path: '/department',
    icon: deptIcon,
  },
];

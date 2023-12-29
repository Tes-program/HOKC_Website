import ebisuewa from '../assets/ebisuewa.png';
import elizabeth from '../assets/elizabeth.png';
import funke from '../assets/funke.png';
import james from '../assets/james.png';
import john from '../assets/john.png';
import mobolane from '../assets/mobolane.png';
import seun from '../assets/seun.png';

type Pastor = {
  id: number;
  name: string;
  image: string;
  position: string;
  alt: string;
};

export const pastors: Pastor[] = [
  {
    id: 1,
    name: 'Pastor John Sotunsa',
    image: john,
    position: 'Senior Pastor',
    alt: 'Pastor John Sotunsa',
  },
  {
    id: 2,
    name: 'Prof Mobolane Sotunsa',
    image: mobolane,
    position: 'Prayer Band, Sabbath School',
    alt: 'Prof Mobolane Sotunsa',
  },
  {
    id: 3,
    name: 'Pastor Seun Grillo',
    image: seun,
    position: 'Discipleship & Ushering',
    alt: 'Pastor Seun Grillo',
  },
  {
    id: 4,
    name: 'Dr Seun Ebisuewa',
    image: ebisuewa,
    position: 'Academic Matters & ICT',
    alt: 'Dr Seun Ebisuewa',
  },
  {
    id: 5,
    name: 'Dr Funke Ebisuewa',
    image: funke,
    position: 'Welfare Dept. Coordinator',
    alt: 'Dr Funke Ebisuewa',
  },
  {
    id: 6,
    name: 'Dr Elizabeth Grillo',
    image: elizabeth,
    position: 'Health Dept. Coordinator',
    alt: 'Dr Elizabeth Grillo',
  },
  {
    id: 7,
    name: 'Pastor James Onele',
    image: james,
    position: 'Media & Chaplaincy',
    alt: 'Pastor James Onele',
  },
];

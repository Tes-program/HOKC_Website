import slide1 from '../assets/slide1.png';
import slide2 from '../assets/slide2.png';
import slide3 from '../assets/slide3.png';
import slide4 from '../assets/slide4.png';
import slide5 from '../assets/slide5.png';
import image_overlay from '../assets/image_overlay.png';

type Slide = {
  id: number;
  image: string;
  alt: string;
  title: string;
  subtitle: string;
  description: string;
  overlay: string;
};

export const slides: Slide[] = [
  {
    id: 1,
    image: slide1,
    alt: 'HOKC_img',
    title: 'Heirs of the Kingdom',
    subtitle: "God's Happy Family",
    description: 'Hey, Jesus loves you!',
    overlay: image_overlay,
  },
  {
    id: 2,
    image: slide2,
    alt: 'HOKC_choir_img',
    title: 'Heirs of the Kingdom',
    subtitle: "God's Happy Family",
    description: 'Hey, Jesus loves you!',
    overlay: image_overlay,
  },
  {
    id: 3,
    image: slide3,
    alt: 'HOKC_member_img',
    title: 'Heirs of the Kingdom',
    subtitle: "God's Happy Family",
    description: 'Hey, Jesus loves you!',
    overlay: image_overlay,
  },
  {
    id: 4,
    image: slide4,
    alt: 'HOKC_member_img',
    title: 'Heirs of the Kingdom',
    subtitle: "God's Happy Family",
    description: 'Hey, Jesus loves you!',
    overlay: image_overlay,
  },
  {
    id: 5,
    image: slide5,
    alt: 'HOKC_member_img',
    title: 'Heirs of the Kingdom',
    subtitle: "God's Happy Family",
    description: 'Hey, Jesus loves you!',
    overlay: image_overlay,
  },
];

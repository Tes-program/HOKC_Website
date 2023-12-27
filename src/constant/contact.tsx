import home from '../assets/home.png';
import mail from '../assets/mail.png';

type Contact = {
  id: number;
  name: string;
  image: string;
  handle: string;
  link: string;
};

export const contacts: Contact[] = [
  {
    id: 1,
    name: 'Visit Us',
    image: home,
    handle: '@Hokc BUTH 600 Seater',
    link: 'https://maps.app.goo.gl/abeAyMLPknEK2Cep9',
  },
  {
    id: 2,
    name: 'Youtube',
    image:
      'https://res.cloudinary.com/dstmstsbe/image/upload/v1703710982/Group_56_1_tgg05x.png',
    handle: '@Hokc BUTH',
    link: 'https://www.youtube.com/@hokcheirsofthekingdomchape7469',
  },
  {
    id: 3,
    name: 'Instagram',
    image:
      'https://res.cloudinary.com/dstmstsbe/image/upload/v1703711097/Group_57_1_rxaf65.png',
    handle: '@Hokc BUTH',
    link: 'https://www.instagram.com/hokcbu/?hl=fr',
  },
  {
    id: 4,
    name: 'Twitter',
    image:
      'https://res.cloudinary.com/dstmstsbe/image/upload/v1703711157/Group_67_1_ztbvga.png',
    handle: 'hokcbabcock',
    link: 'https://twitter.com/hokcbabcock',
  },
  {
    id: 5,
    name: 'GMail',
    image: mail,
    handle: 'info@hokc.bu',
    link: 'mailto:',
  },
];

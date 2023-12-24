import drama from '../assets/drama.png';
import music from '../assets/hokc_music.png';
import prayerBand from '../assets/prayer_band.png';
import protocolTeam from '../assets/protocol_team.png';
import usheringTeam from '../assets/ushering.png';
import sound from '../assets/sound_department.png';
import sabbath from '../assets/sabbath_school.png';

type DepartmentProps = {
  id: number;
  image: string;
  department: string;
  alt: string;
};

export const departments: DepartmentProps[] = [
  {
    id: 1,
    image: music,
    department: 'HOKC Music Ministers',
    alt: 'hokc_music',
  },
  {
    id: 2,
    image: sabbath,
    department: 'HOKC Sabbath School',
    alt: 'sabbath_school',
  },
  {
    id: 3,
    image: sound,
    department: 'HOKC Sound Department',
    alt: 'sound_department',
  },
  {
    id: 4,
    image: drama,
    department: 'HOKC Drama Department',
    alt: 'drama',
  },
  {
    id: 5,
    image: usheringTeam,
    department: 'Ushering Team',
    alt: 'usher_team',
  },
  {
    id: 6,
    image: prayerBand,
    department: 'HOKC Prayer Band',
    alt: 'prayer_band',
  },
  {
    id: 7,
    image: protocolTeam,
    department: 'HOKC Protocol Team',
    alt: 'protocol_team',
  },
];

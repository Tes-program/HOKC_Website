/* eslint-disable @typescript-eslint/no-unsafe-call */
import axios from 'axios';
import { getDay } from 'date-fns';
import { ApiResponse } from './responseInterface';

// const API: string = 'https://bible-api.com/?random=verse';

// const API: string = "https://bible-api.com/john%203:16"

export const bibleVerses = [
  `PSA.73.26`,
  `DEU.29.18`,
  `PRO.19.17`,
  `MAT.1.12`,
  `PSA.23.1`,
  `PRO.3.5`,
  `ISA.40.31`,
  `MAT.6.33`,
  `JOH.14.6`,
  `ROM.8.28`,
  `PHI.4.13`,
  `COL.3.2`,
  `1TH.5.16-18`,
  `HEB.11.1`,
  `JAM.1.22`,
  `1PE.5.7`,
  `1JO.4.16`,
  `REV.21.4`,
  `GEN.1.1`,
  `EXO.14.14`,
  `LEV.19.18`,
  `NUM.6.24-26`,
  `DEU.31.6`,
  `JOS.1.9`,
  `PSA.119.105`,
  `PRO.16.3`,
  `ISA.41.10`,
  `JER.29.11`,
  `MAT.11.28`,
  `MAR.10.27`,
  `LUK.6.31`,
  `JOH.3.16`,
  `ACT.1.8`,
  `ROM.12.2`,
  `1CO.10.13`,
  `2CO.5.17`,
  `EPH.2.8-9`,
  `PHI.4.6-7`,
  `COL.3.23`,
  `1TH.4.16-17`,
  `1TI.6.6`,
  `HEB.12.1-2`,
  `JAM.4.7`,
  `1PE.2.9`,
  `1JO.1.9`,
  `REV.3.20`,
  `LUK.2.13`,
  `ISA.9.6`,
  `ISA.7.14`,
  `PSA.100.2`,
  `1CH.16.10`,
];

const verseIndex = new Date().getDate();
const verseID = bibleVerses[verseIndex];

// eslint-disable-next-line react-refresh/only-export-components
const API: string = `https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-02/verses/${verseID}?content-type=json`;

const API_KEY: string = 'c573e0c290fd4aa502b3c22aa120f501';

// type BibleProp = {
//   text: string;
//   reference: string;
// };

export const getTodayDate = () => {
  const today = new Date();
  const day = getDay(today);
  const daylist = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const todayDate = daylist[day];
  return todayDate;
};

// Get bible verse of the day
export const getBibleVerse = async () => {
  try {
    const response = await axios.get(API, {
      headers: {
        'api-key': API_KEY,
      },
    });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const data: ApiResponse = response.data;
    // Get the text and reference from the data
    const reference: string = data.data.reference;
    const text: string = data.data.content[0].items
      .filter((item: { type: string }) => item.type === 'text')
      .map((item: { text: string }) => item.text)
      .join('');
    text.trim();
    text.replace(/\s+/g, ' ');
    return { text, reference };
  } catch (error) {
    console.log(error);
  }
};

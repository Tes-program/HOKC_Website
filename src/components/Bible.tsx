/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { getBibleVerse, getTodayDate } from '../constant/bible';
import { useState, useEffect, useMemo, useCallback } from 'react';
import { endOfDay, differenceInMilliseconds } from 'date-fns';

export const Bible: React.FC = () => {
  const [bibleText, setBibleText] = useState('');
  const [bibleReference, setBibleReference] = useState('');
  const [day, setDay] = useState('');

  // Store the text, reference and day in local storage
  useEffect(() => {
    localStorage.setItem('text', bibleText);
    localStorage.setItem('reference', bibleReference);
    localStorage.setItem('day', day);
  }, [bibleText, bibleReference, day]);

  const fetchBibleVerse = async () => {
    try {
      const data = await getBibleVerse();
      if (data) {
        const reference: string = data.reference;
        const text: string = data.text;
        setBibleText(text);
        setBibleReference(reference);
        setDay(getTodayDate());
      } else {
        return null;
      }
    } catch (error) {
      return error;
    }
  };

  const checkLocalStorage = useCallback(async () => {
    const text = localStorage.getItem('text');
    const reference = localStorage.getItem('reference');
    const day = localStorage.getItem('day');
    const today = getTodayDate();
    if (day === today) {
      setBibleText(text!);
      setBibleReference(reference!);
    } else {
      await fetchBibleVerse();
    }
  }, [setBibleText, setBibleReference]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    checkLocalStorage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const timeLeft = useMemo(() => {
    const end = endOfDay(new Date());
    const now = new Date().getTime();
    return differenceInMilliseconds(end, now);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(async () => {
      try {
        await checkLocalStorage();
      } catch (error) {
        console.log(error);
      }
    }, timeLeft);
    return () => {
      clearTimeout(timeout);
    };
  }, [timeLeft, checkLocalStorage]);

  return (
    <div className="flex flex-col p-16 w-full h-full">
      <h1 className="uppercase font-Rubik-Bold font-extrabold text-2xl">
        {day} :
      </h1>
      <p className="md:px-24 font-Rubik-Bold font-extrabold text-xl">
        {bibleText}
      </p>
      <p className="md:px-24 font-Rubik-Bold font-extrabold text-xl">
        {bibleReference}
      </p>
    </div>
  );
};

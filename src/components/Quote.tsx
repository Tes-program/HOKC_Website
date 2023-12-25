/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { quotes } from '../constant/quotes';
import { useState, useEffect } from 'react';

export const Quote: React.FC = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      setQuote(randomQuote.quote);
      setAuthor(randomQuote.author);
    }, 10000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="bg-abstract-background w-full h-full">
      {/* The div to contain the quote and display a new one every 20 secs */}
      <div className="flex flex-col justify-center items-center h-[60vh] p-4">
        <h1 className="font-Rubik-Bold font-extrabold text-3xl pt-4 pb-2">
          Words of Wisdom
        </h1>
        <div className="text-center md:px-32 lg:px-40 md:text-[20px] font-Rubik-Light font-light text-xl">
          "{quote}"
        </div>
        <div className="text-center font-Rubik-Light font-light text-xl">
          - {author}
        </div>
      </div>
    </div>
  );
};

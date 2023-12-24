import { useState, useEffect, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import { slides } from '../constant/image.tsx';

export const Slider: React.FC = () => {
  const direction = useRef('normal');
  const [secondSlideIndex, setSecondSlideIndex] = useState(0);
  const [firstSlideIndex, setFirstSlideIndex] = useState(slides.length - 1);
  const [paused, setPaused] = useState(false);

  const currentSlides = [slides[firstSlideIndex], slides[secondSlideIndex]];

  const nextSlide = () => {
    direction.current = 'normal';
    const nextSlideIndex =
      secondSlideIndex === slides.length - 1 ? 0 : secondSlideIndex + 1;
    setFirstSlideIndex(secondSlideIndex);
    setSecondSlideIndex(nextSlideIndex);
  };

  const previousSlide = () => {
    direction.current = 'reverse';
    const nextSlideIndex =
      secondSlideIndex === 0 ? slides.length - 1 : secondSlideIndex - 1;
    setFirstSlideIndex(secondSlideIndex);
    setSecondSlideIndex(nextSlideIndex);
  };

  const swipeHanlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => previousSlide(),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        direction.current = 'normal';
        nextSlide();
      }
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div
      className="flex max-[375px]:h-[100vh] h-[80vh] md:h-[60vh] lg:h-[95vh] min-[1100px]:h-[140vh] max-[374px]:h-[90vh] justify-center items-center overflow-hidden relative"
      {...swipeHanlers}
    >
      {!!currentSlides.length &&
        currentSlides.map((slide) => (
          <div
            className="absolute h-full w-full"
            key={slide.id}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="">
              <img
                className="w-full absolute h-full object-cover"
                src={slide.image}
                alt={slide.alt}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-3xl lg:text-6xl text-white font-Rubik-Bold font-extrabold">
                    {slide.title}
                  </h1>
                  <h2 className="text-sm lg:text-lg text-white font-Rubik-Regular py-2">
                    {slide.subtitle}
                  </h2>
                  <button className="text-white text-xs lg:text-base font-Rubik-Regular border rounded-3xl p-3 w-[200px]">
                    {slide.description}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

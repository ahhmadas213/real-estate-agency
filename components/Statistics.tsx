'use client'

import React, { useState, useEffect } from 'react';

interface StatisticItem {
  title: string;
  number: string;
}

interface StatisticItemProps {
  title: string;
  number: string;
  delay: number;
}

const statisticData: StatisticItem[] = [
  { title: "الاجارات", number: "200+" },
  { title: "المتخصصون", number: "13+" },
  { title: "النمو السنوي", number: "78%" },
  { title: "العقارات", number: "300+" },
];

// Custom Hook to Count Up
const useCountUp = (end: number, duration: number, delay: number = 0): number => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let start = 0;
      const increment = end / (duration * 60); // Approximate steps (duration in seconds)
      const interval = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(interval);
          setValue(end);
        } else {
          setValue(Math.ceil(start));
        }
      }, 1000 / 60); // 60 FPS

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [end, duration, delay]);

  return value;
};

// Single Statistic Component
const StatisticItem: React.FC<StatisticItemProps> = ({ title, number, delay }) => {
  const numericValue = parseInt(number, 10);
  const suffix = number.replace(/[0-9]/g, '').trim();
  const animatedValue = useCountUp(numericValue, 1.5, delay); // 1 second duration with delay

  return (
    <div className="text-center p-4">
      <h3 className="text-2xl md:text-5xl font-bold">
        {animatedValue}
        <span className="text-blue-400">{suffix}</span>
      </h3>
      <p className="text-gray-400 mt-2">{title}</p>
    </div>
  );
};

const Statistics: React.FC = () => {
  return (
    <div className="bg-primary">
      <div className="container mx-auto">
        <div className="flex items-center justify-between flex-wrap text-white p-8">
          {statisticData.map((item, index) => (
            <StatisticItem
              key={index}
              title={item.title}
              number={item.number}
              delay={index * 200} // 200ms delay between each animation
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
import React from 'react';
import DealsTimer from './DealsTimer';
import { useState, useEffect } from 'react';

const DealsTimerSectioin = () => {
  const value = 2 * 24 * 60 * 60 + 6 * 60 * 60 + 5 * 60 + 30;
  const [secondsLeft, setSecondsLeft] = useState(value);

  useEffect(() => {
    if (secondsLeft <= 0) return;

    const interval = setInterval(() => {
      setSecondsLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [secondsLeft]);

  const days = Math.floor(secondsLeft / (24 * 60 * 60));
  const hours = Math.floor((secondsLeft % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((secondsLeft % (60 * 60)) / 60);
  const seconds = secondsLeft % 60;

  const timerData = [
    { id: 1, value: days < 10 ? '0' + days : days, label: 'Days' },
    { id: 2, value: hours < 10 ? '0' + hours : hours, label: 'Hours' },
    { id: 3, value: minutes < 10 ? '0' + minutes : minutes, label: 'Min' },
    { id: 4, value: seconds < 10 ? '0' + seconds : seconds, label: 'Sec' },
  ];

  return (
    <div className="">
      <div className="row gap-4">
        {timerData.map(data => (
          <DealsTimer key={data.id} time={data.value} info={data.label}></DealsTimer>
        ))}
      </div>
    </div>
  );
};

export default DealsTimerSectioin;

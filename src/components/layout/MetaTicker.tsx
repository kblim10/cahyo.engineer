import { useEffect, useState } from 'react';
import { personalInfo } from '../../data';

function formatTime(date: Date) {
  return date.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZone: 'Asia/Jakarta',
  });
}

export function MetaTicker() {
  const [time, setTime] = useState(() => formatTime(new Date()));

  useEffect(() => {
    const id = setInterval(() => setTime(formatTime(new Date())), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="meta-ticker" aria-hidden="true">
      <div className="meta-ticker-inner container">
        <span className="meta-ticker-item">{personalInfo.location.toUpperCase()}</span>
        <span className="meta-ticker-sep">·</span>
        <span className="meta-ticker-item meta-ticker-time">{time} WIB</span>
        <span className="meta-ticker-sep">·</span>
        <span className="meta-ticker-item">{personalInfo.availability}</span>
      </div>
    </div>
  );
}

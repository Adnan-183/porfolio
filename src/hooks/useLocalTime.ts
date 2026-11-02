import { useEffect, useState } from 'react';

const format = (timeZone: string) =>
  new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone }).format(new Date());

/** Current HH:MM in the given time zone, refreshed every 15 seconds. */
export const useLocalTime = (timeZone: string) => {
  const [time, setTime] = useState(() => format(timeZone));

  useEffect(() => {
    const id = setInterval(() => setTime(format(timeZone)), 15_000);
    return () => clearInterval(id);
  }, [timeZone]);

  return time;
};

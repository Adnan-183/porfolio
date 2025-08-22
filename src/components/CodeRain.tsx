import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface CodeChar {
  id: number;
  char: string;
  x: number;
  delay: number;
  duration: number;
}

const CodeRain = () => {
  const [codeChars, setCodeChars] = useState<CodeChar[]>([]);

  useEffect(() => {
    const chars = ['0', '1', '{', '}', '<', '>', '/', '=', ';', '(', ')', '[', ']', '+', '-', '*'];
    const newChars: CodeChar[] = [];

    for (let i = 0; i < 30; i++) {
      newChars.push({
        id: i,
        char: chars[Math.floor(Math.random() * chars.length)],
        x: Math.random() * 100,
        delay: Math.random() * 5,
        duration: Math.random() * 10 + 15,
      });
    }

    setCodeChars(newChars);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-10 dark:opacity-20">
      {codeChars.map((char) => (
        <motion.div
          key={char.id}
          className="absolute text-primary-500 font-mono text-sm"
          style={{
            left: `${char.x}%`,
            top: '-10%',
          }}
          animate={{
            y: ['0vh', '110vh'],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: char.duration,
            delay: char.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {char.char}
        </motion.div>
      ))}
    </div>
  );
};

export default CodeRain;
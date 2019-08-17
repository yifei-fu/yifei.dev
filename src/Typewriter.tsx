import React, {useEffect, useState} from 'react';

interface Frame {
  display: string;
  delay: number;
}

const generateFrames = (lines: string[]) => {
  const frames: Frame[] = [];
  lines.forEach((line) => {
    const prefixes: string[] = [];
    for (let i = 0; i < line.length; i++) {
      prefixes.push(line.slice(0, i));
    }
    prefixes.forEach((prefix) => frames.push({display: prefix, delay: 60}));
    frames.push({display: line, delay: 1500});
    prefixes.reverse().forEach((prefix) => frames.push({display: prefix, delay: 15}));
    frames.push({display: ' ', delay: 250});
  });
  return frames;
};

const LINES: string[] = [
  'Software Development Engineer',
  'Full-stack Web Developer',
  'Student at UCLA',
  'SDE Intern at TripAdvisor',
];

const frames = generateFrames(LINES);

const Typewriter: React.FC = () => {
  const [frameIndex, setFrameIndex] = useState<number>(0);
  useEffect(() => {
    setTimeout(() => {
      setFrameIndex((frameIndex + 1) % frames.length);
    }, frames[frameIndex].delay);
  });
  return <>{frames[frameIndex].display}</>;
};

export default Typewriter;

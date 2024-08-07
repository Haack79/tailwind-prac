'use client';

import { useRef } from 'react';

const ScrollToSection = () => {
  const sectionsRefs = useRef<(HTMLDivElement | null)[]>([]);

  const data = [
    { label: 'first card', style: { backgroundColor: 'red', width: '100%', height: '600px' } },
    { label: 'second card', style: { backgroundColor: 'blue', width: '100%', height: '600px' } },
    { label: 'third card', style: { backgroundColor: 'green', width: '100%', height: '600px' } },
    { label: 'fourth card', style: { backgroundColor: 'yellow', width: '100%', height: '600px' } },
    { label: 'fifth card', style: { backgroundColor: 'purple', width: '100%', height: '600px' } },
    { label: 'sixth card', style: { backgroundColor: 'orange', width: '100%', height: '600px' } }
  ];

  const handleScrollToSection = (index: number) => {
    const element = sectionsRefs.current[index];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <h1>Scroll to a particular section</h1>
      {data.map((_, i) => (
        <button key={i} onClick={() => handleScrollToSection(i)}>Go to {i + 1}</button>
      ))}
      {data.map((dataItem, index) => (
        <div key={index} ref={(el) => {sectionsRefs.current[index] = el}} style={dataItem.style}>
          <h3>{dataItem.label}</h3>
        </div>
      ))}
    </div>
  );
};

export default ScrollToSection;

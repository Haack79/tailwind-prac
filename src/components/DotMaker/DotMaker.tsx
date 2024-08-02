'use client';
import React, { useState } from 'react';

const App = () => {
const [circles, setCircles] = useState<{ x: number; y: number; }[]>([]);

const addCircle = (event: React.MouseEvent<HTMLDivElement>) => {
    const { offsetX, offsetY } = event.nativeEvent;
    console.log(offsetX, offsetY);
    const circleExists = circles.some((circle) => {
        return offsetX > circle.x - 16 && offsetX < circle.x + 16 && offsetY > circle.y - 16 && offsetY < circle.y + 16;
    });
//offsetX - offsetY > 16 || offsetY - offsetX > 16
    if (!circleExists) {
        setCircles([...circles, { x: offsetX, y: offsetY}]);
    }
};
const onCircleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
}
const removeLastCircle = () => {
    setCircles(circles.slice(0, -1));
};

const removeAllCircles = () => {
    setCircles([]);
};
    console.log(circles);
  return (
    <div className="flex flex-col items-center mt-4">
      <div
        className="relative w-96 h-96 border border-gray-300 bg-gray-100"
        onClick={addCircle}
      >
        <h1 className="absolute top-0 left-0 right-0 p-2 bg-white text-gray-500 text-center"> Click to add a circle </h1>
        {circles.map((circle, index) => (
          <div
            onClick={onCircleClick}
            key={index}
            className="absolute w-8 h-8 bg-red-500 rounded-full"
            style={{
              left: circle.x - 16, // Adjust for circle size
              top: circle.y - 16,  // Adjust for circle size
            }}
          />
        ))}
      </div>
      <button
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={removeLastCircle}
      >
        Remove Last Circle
      </button>
      <button
        className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
        onClick={removeAllCircles}
      >
        Remove All Circles
      </button>
    </div>
  );
};

export default App;

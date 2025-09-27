import React from 'react';

interface ArrayVisualizerProps {
  array: number[];
  comparing: number[];
  swapping: number[];
  sorted: number[];
  pivot: number;
}

export const ArrayVisualizer: React.FC<ArrayVisualizerProps> = ({
  array,
  comparing,
  swapping,
  sorted,
  pivot
}) => {
  const maxValue = Math.max(...array);

  const getBarColor = (index: number) => {
    if (sorted.includes(index)) return 'bg-green-500';
    if (index === pivot) return 'bg-purple-500';
    if (swapping.includes(index)) return 'bg-red-500';
    if (comparing.includes(index)) return 'bg-yellow-500';
    return 'bg-blue-500';
  };

  const getBarHeight = (value: number) => {
    return `${(value / maxValue) * 100}%`;
  };

  return (
    <div className="h-96 flex items-end justify-center bg-gray-50 rounded-lg p-4">
      <div className="flex items-end justify-center w-full h-full gap-1">
        {array.map((value, index) => (
          <div
            key={index}
            className={`relative transition-all duration-200 ease-in-out ${getBarColor(index)} rounded-t-sm`}
            style={{
              height: getBarHeight(value),
              width: `${Math.max(800 / array.length - 2, 2)}px`,
              minWidth: '2px',
              maxWidth: '20px'
            }}
          >
            {array.length <= 20 && (
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-mono text-gray-600">
                {value}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
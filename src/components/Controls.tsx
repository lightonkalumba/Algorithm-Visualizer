import React from 'react';
import { Shuffle } from 'lucide-react';

interface ControlsProps {
  arraySize: number;
  onArraySizeChange: (size: number) => void;
  speed: number;
  onSpeedChange: (speed: number) => void;
  onGenerateArray: () => void;
}

export const Controls: React.FC<ControlsProps> = ({
  arraySize,
  onArraySizeChange,
  speed,
  onSpeedChange,
  onGenerateArray
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Controls
      </h3>
      
      <div className="space-y-6">
        {/* Array Size */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Array Size: {arraySize}
          </label>
          <input
            type="range"
            min="10"
            max="100"
            value={arraySize}
            onChange={(e) => onArraySizeChange(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>10</span>
            <span>100</span>
          </div>
        </div>

        {/* Speed */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Animation Speed: {speed}%
          </label>
          <input
            type="range"
            min="1"
            max="100"
            value={speed}
            onChange={(e) => onSpeedChange(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>Slow</span>
            <span>Fast</span>
          </div>
        </div>

        {/* Generate New Array Button */}
        <button
          onClick={onGenerateArray}
          className="w-full flex items-center justify-center px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
        >
          <Shuffle className="w-4 h-4 mr-2" />
          Generate New Array
        </button>
      </div>
    </div>
  );
};
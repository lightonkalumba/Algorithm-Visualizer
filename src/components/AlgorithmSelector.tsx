import React from 'react';
import { SortingAlgorithm } from '../types/sorting';

interface AlgorithmSelectorProps {
  selectedAlgorithm: string;
  onAlgorithmChange: (algorithm: string) => void;
  algorithms: Record<string, SortingAlgorithm>;
}

export const AlgorithmSelector: React.FC<AlgorithmSelectorProps> = ({
  selectedAlgorithm,
  onAlgorithmChange,
  algorithms
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Select Algorithm
      </h3>
      <div className="space-y-2">
        {Object.entries(algorithms).map(([key, algorithm]) => (
          <button
            key={key}
            onClick={() => onAlgorithmChange(key)}
            className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
              selectedAlgorithm === key
                ? 'bg-blue-100 text-blue-900 border-2 border-blue-300'
                : 'bg-gray-50 text-gray-700 border-2 border-transparent hover:bg-gray-100'
            }`}
          >
            <div className="font-medium">{algorithm.name}</div>
            <div className="text-sm text-gray-500 mt-1">
              Time: {algorithm.timeComplexity.average}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
import React from 'react';

interface AlgorithmInfoProps {
  name: string;
  description: string;
  timeComplexity: {
    best: string;
    average: string;
    worst: string;
  };
  spaceComplexity: string;
}

export const AlgorithmInfo: React.FC<AlgorithmInfoProps> = ({
  name,
  description,
  timeComplexity,
  spaceComplexity
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Algorithm Info
      </h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-medium text-gray-900 mb-2">{name}</h4>
          <p className="text-sm text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>

        <div>
          <h4 className="font-medium text-gray-900 mb-2">Time Complexity</h4>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Best:</span>
              <code className="bg-gray-100 px-2 py-1 rounded text-gray-800">
                {timeComplexity.best}
              </code>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Average:</span>
              <code className="bg-gray-100 px-2 py-1 rounded text-gray-800">
                {timeComplexity.average}
              </code>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Worst:</span>
              <code className="bg-gray-100 px-2 py-1 rounded text-gray-800">
                {timeComplexity.worst}
              </code>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-medium text-gray-900 mb-2">Space Complexity</h4>
          <code className="bg-gray-100 px-2 py-1 rounded text-gray-800 text-sm">
            {spaceComplexity}
          </code>
        </div>
      </div>
    </div>
  );
};
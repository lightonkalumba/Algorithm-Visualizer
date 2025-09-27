import React, { useState, useEffect, useCallback } from 'react';
import { Play, Pause, RotateCcw, Shuffle } from 'lucide-react';
import { AlgorithmSelector } from './components/AlgorithmSelector';
import { Controls } from './components/Controls';
import { ArrayVisualizer } from './components/ArrayVisualizer';
import { AlgorithmInfo } from './components/AlgorithmInfo';
import { sortingAlgorithms } from './algorithms/sortingAlgorithms';
import { SortingState } from './types/sorting';

function App() {
  const [array, setArray] = useState<number[]>([]);
  const [arraySize, setArraySize] = useState(50);
  const [speed, setSpeed] = useState(100);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('bubbleSort');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState<SortingState[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  // Generate random array
  const generateRandomArray = useCallback(() => {
    const newArray = Array.from({ length: arraySize }, () => 
      Math.floor(Math.random() * 400) + 10
    );
    setArray(newArray);
    setCurrentStep(0);
    setSteps([]);
    setIsComplete(false);
    setIsPlaying(false);
  }, [arraySize]);

  // Initialize array on mount and size change
  useEffect(() => {
    generateRandomArray();
  }, [generateRandomArray]);

  // Generate steps for selected algorithm
  const generateSteps = useCallback(() => {
    const algorithm = sortingAlgorithms[selectedAlgorithm];
    if (algorithm && array.length > 0) {
      const newSteps = algorithm.execute([...array]);
      setSteps(newSteps);
      setCurrentStep(0);
      setIsComplete(false);
    }
  }, [selectedAlgorithm, array]);

  // Generate steps when algorithm or array changes
  useEffect(() => {
    if (array.length > 0) {
      generateSteps();
    }
  }, [generateSteps]);

  // Animation loop
  useEffect(() => {
    if (!isPlaying || currentStep >= steps.length - 1) {
      if (currentStep >= steps.length - 1 && steps.length > 0) {
        setIsComplete(true);
      }
      setIsPlaying(false);
      return;
    }

    const timeout = setTimeout(() => {
      setCurrentStep(prev => prev + 1);
    }, 1000 - speed * 9);

    return () => clearTimeout(timeout);
  }, [isPlaying, currentStep, steps.length, speed]);

  const handlePlay = () => {
    if (currentStep >= steps.length - 1) {
      setCurrentStep(0);
      setIsComplete(false);
    }
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setCurrentStep(0);
    setIsPlaying(false);
    setIsComplete(false);
  };

  const currentState = steps[currentStep] || {
    array: [...array],
    comparing: [],
    swapping: [],
    sorted: [],
    pivot: -1
  };

  const algorithm = sortingAlgorithms[selectedAlgorithm];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Algorithm Visualizer
              </h1>
              <p className="text-gray-600 text-sm mt-1">
                Interactive sorting algorithm demonstrations
              </p>
            </div>
            <div className="mt-4 sm:mt-0 flex items-center space-x-3">
              <button
                onClick={generateRandomArray}
                className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
              >
                <Shuffle className="w-4 h-4 mr-2" />
                New Array
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Controls Panel */}
          <div className="lg:col-span-1 space-y-6">
            <AlgorithmSelector
              selectedAlgorithm={selectedAlgorithm}
              onAlgorithmChange={setSelectedAlgorithm}
              algorithms={sortingAlgorithms}
            />
            
            <Controls
              arraySize={arraySize}
              onArraySizeChange={setArraySize}
              speed={speed}
              onSpeedChange={setSpeed}
              onGenerateArray={generateRandomArray}
            />

            {algorithm && (
              <AlgorithmInfo
                name={algorithm.name}
                description={algorithm.description}
                timeComplexity={algorithm.timeComplexity}
                spaceComplexity={algorithm.spaceComplexity}
              />
            )}
          </div>

          {/* Visualization Area */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg p-6">
              {/* Play Controls */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <button
                    onClick={handlePlay}
                    disabled={steps.length === 0}
                    className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors font-medium"
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5 mr-2" />
                    ) : (
                      <Play className="w-5 h-5 mr-2" />
                    )}
                    {isPlaying ? 'Pause' : 'Play'}
                  </button>
                  
                  <button
                    onClick={handleReset}
                    className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
                  >
                    <RotateCcw className="w-5 h-5 mr-2" />
                    Reset
                  </button>
                </div>

                <div className="text-sm text-gray-600">
                  Step: {currentStep} / {Math.max(steps.length - 1, 0)}
                  {isComplete && (
                    <span className="ml-3 px-3 py-1 bg-green-100 text-green-800 rounded-full font-medium">
                      Complete!
                    </span>
                  )}
                </div>
              </div>

              {/* Array Visualization */}
              <ArrayVisualizer
                array={currentState.array}
                comparing={currentState.comparing}
                swapping={currentState.swapping}
                sorted={currentState.sorted}
                pivot={currentState.pivot}
              />

              {/* Legend */}
              <div className="flex flex-wrap items-center justify-center mt-6 gap-6 text-sm">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-blue-500 rounded mr-2"></div>
                  <span>Default</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-yellow-500 rounded mr-2"></div>
                  <span>Comparing</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-red-500 rounded mr-2"></div>
                  <span>Swapping</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded mr-2"></div>
                  <span>Sorted</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-purple-500 rounded mr-2"></div>
                  <span>Pivot</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
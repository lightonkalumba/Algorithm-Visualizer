export interface SortingState {
  array: number[];
  comparing: number[];
  swapping: number[];
  sorted: number[];
  pivot: number;
}

export interface SortingAlgorithm {
  name: string;
  description: string;
  timeComplexity: {
    best: string;
    average: string;
    worst: string;
  };
  spaceComplexity: string;
  execute: (array: number[]) => SortingState[];
}
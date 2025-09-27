import { SortingState, SortingAlgorithm } from '../types/sorting';

// Bubble Sort Implementation
const bubbleSort = (arr: number[]): SortingState[] => {
  const states: SortingState[] = [];
  const array = [...arr];
  const n = array.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      // Comparing
      states.push({
        array: [...array],
        comparing: [j, j + 1],
        swapping: [],
        sorted: Array.from({ length: i }, (_, idx) => n - 1 - idx),
        pivot: -1
      });

      if (array[j] > array[j + 1]) {
        // Swapping
        states.push({
          array: [...array],
          comparing: [],
          swapping: [j, j + 1],
          sorted: Array.from({ length: i }, (_, idx) => n - 1 - idx),
          pivot: -1
        });

        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }

  // Final sorted state
  states.push({
    array: [...array],
    comparing: [],
    swapping: [],
    sorted: Array.from({ length: n }, (_, i) => i),
    pivot: -1
  });

  return states;
};

// Selection Sort Implementation
const selectionSort = (arr: number[]): SortingState[] => {
  const states: SortingState[] = [];
  const array = [...arr];
  const n = array.length;

  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;

    for (let j = i + 1; j < n; j++) {
      states.push({
        array: [...array],
        comparing: [minIdx, j],
        swapping: [],
        sorted: Array.from({ length: i }, (_, idx) => idx),
        pivot: -1
      });

      if (array[j] < array[minIdx]) {
        minIdx = j;
      }
    }

    if (minIdx !== i) {
      states.push({
        array: [...array],
        comparing: [],
        swapping: [i, minIdx],
        sorted: Array.from({ length: i }, (_, idx) => idx),
        pivot: -1
      });

      [array[i], array[minIdx]] = [array[minIdx], array[i]];
    }
  }

  states.push({
    array: [...array],
    comparing: [],
    swapping: [],
    sorted: Array.from({ length: n }, (_, i) => i),
    pivot: -1
  });

  return states;
};

// Insertion Sort Implementation
const insertionSort = (arr: number[]): SortingState[] => {
  const states: SortingState[] = [];
  const array = [...arr];
  const n = array.length;

  for (let i = 1; i < n; i++) {
    const key = array[i];
    let j = i - 1;

    states.push({
      array: [...array],
      comparing: [i],
      swapping: [],
      sorted: Array.from({ length: i }, (_, idx) => idx),
      pivot: i
    });

    while (j >= 0 && array[j] > key) {
      states.push({
        array: [...array],
        comparing: [j, j + 1],
        swapping: [],
        sorted: Array.from({ length: i }, (_, idx) => idx),
        pivot: i
      });

      array[j + 1] = array[j];
      
      states.push({
        array: [...array],
        comparing: [],
        swapping: [j, j + 1],
        sorted: Array.from({ length: i }, (_, idx) => idx),
        pivot: i
      });

      j--;
    }
    
    array[j + 1] = key;
  }

  states.push({
    array: [...array],
    comparing: [],
    swapping: [],
    sorted: Array.from({ length: n }, (_, i) => i),
    pivot: -1
  });

  return states;
};

// Quick Sort Implementation
const quickSort = (arr: number[]): SortingState[] => {
  const states: SortingState[] = [];
  const array = [...arr];

  const quickSortHelper = (low: number, high: number, sortedIndices: Set<number>) => {
    if (low < high) {
      const pivotIndex = partition(low, high, sortedIndices);
      const newSorted = new Set([...sortedIndices, pivotIndex]);
      
      quickSortHelper(low, pivotIndex - 1, newSorted);
      quickSortHelper(pivotIndex + 1, high, newSorted);
    }
  };

  const partition = (low: number, high: number, sortedIndices: Set<number>): number => {
    const pivot = array[high];
    let i = low - 1;

    states.push({
      array: [...array],
      comparing: [],
      swapping: [],
      sorted: Array.from(sortedIndices),
      pivot: high
    });

    for (let j = low; j < high; j++) {
      states.push({
        array: [...array],
        comparing: [j, high],
        swapping: [],
        sorted: Array.from(sortedIndices),
        pivot: high
      });

      if (array[j] <= pivot) {
        i++;
        if (i !== j) {
          states.push({
            array: [...array],
            comparing: [],
            swapping: [i, j],
            sorted: Array.from(sortedIndices),
            pivot: high
          });

          [array[i], array[j]] = [array[j], array[i]];
        }
      }
    }

    states.push({
      array: [...array],
      comparing: [],
      swapping: [i + 1, high],
      sorted: Array.from(sortedIndices),
      pivot: high
    });

    [array[i + 1], array[high]] = [array[high], array[i + 1]];
    return i + 1;
  };

  quickSortHelper(0, array.length - 1, new Set());

  states.push({
    array: [...array],
    comparing: [],
    swapping: [],
    sorted: Array.from({ length: array.length }, (_, i) => i),
    pivot: -1
  });

  return states;
};

// Merge Sort Implementation
const mergeSort = (arr: number[]): SortingState[] => {
  const states: SortingState[] = [];
  const array = [...arr];

  const mergeSortHelper = (left: number, right: number) => {
    if (left < right) {
      const mid = Math.floor((left + right) / 2);
      
      mergeSortHelper(left, mid);
      mergeSortHelper(mid + 1, right);
      merge(left, mid, right);
    }
  };

  const merge = (left: number, mid: number, right: number) => {
    const leftArray = array.slice(left, mid + 1);
    const rightArray = array.slice(mid + 1, right + 1);
    
    let i = 0, j = 0, k = left;

    while (i < leftArray.length && j < rightArray.length) {
      states.push({
        array: [...array],
        comparing: [left + i, mid + 1 + j],
        swapping: [],
        sorted: [],
        pivot: -1
      });

      if (leftArray[i] <= rightArray[j]) {
        array[k] = leftArray[i];
        i++;
      } else {
        array[k] = rightArray[j];
        j++;
      }
      
      states.push({
        array: [...array],
        comparing: [],
        swapping: [k],
        sorted: [],
        pivot: -1
      });

      k++;
    }

    while (i < leftArray.length) {
      array[k] = leftArray[i];
      states.push({
        array: [...array],
        comparing: [],
        swapping: [k],
        sorted: [],
        pivot: -1
      });
      i++;
      k++;
    }

    while (j < rightArray.length) {
      array[k] = rightArray[j];
      states.push({
        array: [...array],
        comparing: [],
        swapping: [k],
        sorted: [],
        pivot: -1
      });
      j++;
      k++;
    }
  };

  mergeSortHelper(0, array.length - 1);

  states.push({
    array: [...array],
    comparing: [],
    swapping: [],
    sorted: Array.from({ length: array.length }, (_, i) => i),
    pivot: -1
  });

  return states;
};

export const sortingAlgorithms: Record<string, SortingAlgorithm> = {
  bubbleSort: {
    name: 'Bubble Sort',
    description: 'A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.',
    timeComplexity: {
      best: 'O(n)',
      average: 'O(n²)',
      worst: 'O(n²)'
    },
    spaceComplexity: 'O(1)',
    execute: bubbleSort
  },
  selectionSort: {
    name: 'Selection Sort',
    description: 'An in-place comparison sorting algorithm that divides the list into sorted and unsorted regions, repeatedly selecting the smallest element from the unsorted region.',
    timeComplexity: {
      best: 'O(n²)',
      average: 'O(n²)',
      worst: 'O(n²)'
    },
    spaceComplexity: 'O(1)',
    execute: selectionSort
  },
  insertionSort: {
    name: 'Insertion Sort',
    description: 'A simple sorting algorithm that builds the final sorted array one item at a time, inserting each element into its correct position.',
    timeComplexity: {
      best: 'O(n)',
      average: 'O(n²)',
      worst: 'O(n²)'
    },
    spaceComplexity: 'O(1)',
    execute: insertionSort
  },
  quickSort: {
    name: 'Quick Sort',
    description: 'An efficient divide-and-conquer algorithm that works by selecting a pivot element and partitioning the array around it.',
    timeComplexity: {
      best: 'O(n log n)',
      average: 'O(n log n)',
      worst: 'O(n²)'
    },
    spaceComplexity: 'O(log n)',
    execute: quickSort
  },
  mergeSort: {
    name: 'Merge Sort',
    description: 'A stable divide-and-conquer algorithm that divides the array into halves, sorts them separately, and then merges them back together.',
    timeComplexity: {
      best: 'O(n log n)',
      average: 'O(n log n)',
      worst: 'O(n log n)'
    },
    spaceComplexity: 'O(n)',
    execute: mergeSort
  }
};
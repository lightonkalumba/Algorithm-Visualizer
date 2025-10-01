# Algorithm Visualizer

An interactive web application that visualizes popular sorting algorithms through beautiful animations. Perfect for students and educators to understand how different sorting algorithms work step by step.

![Algorithm Visualizer](https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop)

## 🚀 Features

- **Multiple Sorting Algorithms**: Bubble Sort, Selection Sort, Insertion Sort, Quick Sort, and Merge Sort
- **Interactive Controls**: Adjust array size, animation speed, and generate new random arrays
- **Real-time Visualization**: Color-coded bars showing comparisons, swaps, sorted elements, and pivot points
- **Algorithm Information**: Detailed time and space complexity analysis for each algorithm
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Step-by-step Animation**: Watch algorithms execute with customizable speed controls

## 🎯 Live Demo

Visit the live application: [Algorithm Visualizer](https://your-demo-url.com)

## 🛠️ Technologies Used

- **React 18** - Modern UI library with hooks
- **TypeScript** - Type-safe JavaScript for better development experience
- **Tailwind CSS** - Utility-first CSS framework for beautiful styling
- **Vite** - Fast build tool and development server
- **Lucide React** - Beautiful, customizable icons

## 🎨 Supported Algorithms

### 1. Bubble Sort
- **Time Complexity**: O(n²) average and worst case, O(n) best case
- **Space Complexity**: O(1)
- **Description**: Compares adjacent elements and swaps them if they're in wrong order.

### 2. Selection Sort
- **Time Complexity**: O(n²) for all cases
- **Space Complexity**: O(1)
- **Description**: Finds the minimum element and places it at the beginning

### 3. Insertion Sort
- **Time Complexity**: O(n²) average and worst case, O(n) best case
- **Space Complexity**: O(1)
- **Description**: Builds sorted array one item at a time by inserting elements in correct position

### 4. Quick Sort
- **Time Complexity**: O(n log n) average case, O(n²) worst case
- **Space Complexity**: O(log n)
- **Description**: Divide-and-conquer algorithm using pivot partitioning

### 5. Merge Sort
- **Time Complexity**: O(n log n) for all cases
- **Space Complexity**: O(n)
- **Description**: Stable divide-and-conquer algorithm that merges sorted subarrays

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/lightonkalumba/algorithm-visualizer.git
   cd algorithm-visualizer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the application

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🎮 How to Use

1. **Select an Algorithm**: Choose from the available sorting algorithms in the left panel
2. **Adjust Settings**: 
   - Set array size (10-100 elements)
   - Control animation speed (1-100%)
   - Generate new random arrays
3. **Start Visualization**: Click the Play button to watch the algorithm in action
4. **Control Playback**: Use Play/Pause and Reset buttons to control the animation
5. **Learn**: Read the algorithm information panel to understand time/space complexity

## 🎨 Color Coding

- **Blue**: Default/unsorted elements
- **Yellow**: Elements being compared
- **Red**: Elements being swapped
- **Green**: Sorted elements
- **Purple**: Pivot element (for Quick Sort)

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── AlgorithmSelector.tsx
│   ├── AlgorithmInfo.tsx
│   ├── ArrayVisualizer.tsx
│   └── Controls.tsx
├── algorithms/          # Sorting algorithm implementations
│   └── sortingAlgorithms.ts
├── types/              # TypeScript type definitions
│   └── sorting.ts
├── App.tsx             # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles
```

## 🤝 Contributing

Contributions are welcome! Here are some ways you can contribute:

1. **Add New Algorithms**: Implement additional sorting algorithms like Heap Sort, Radix Sort, etc.
2. **Improve Visualizations**: Enhance the visual representation or add new features
3. **Fix Bugs**: Report and fix any issues you find
4. **Documentation**: Improve documentation and add code comments

### Steps to Contribute

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-algorithm`
3. Make your changes and commit them: `git commit -m 'Add heap sort algorithm'`
4. Push to the branch: `git push origin feature/new-algorithm`
5. Submit a pull request

## 📚 Educational Value

This project is designed to help students and developers:

- **Understand Algorithm Behavior**: See how different algorithms approach the same problem
- **Compare Performance**: Visualize the difference between O(n²) and O(n log n) algorithms
- **Learn Big O Notation**: Practical examples of time and space complexity
- **Interactive Learning**: Hands-on experience with algorithm visualization

## 📱 Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by various algorithm visualization tools and educational resources
- Icons provided by [Lucide React](https://lucide.dev/)
- Stock images from [Pexels](https://pexels.com)

## 👨‍💻 Author

**lightonkalumba**
- GitHub: [@lightonkalumba](https://github.com/lightonkalumba)

---

⭐ Star this repository if you found it helpful! It helps others discover this educational tool.

## 🔮 Future Enhancements

- [ ] Add more sorting algorithms (Heap Sort, Radix Sort, Shell Sort)
- [ ] Implement searching algorithms (Binary Search, Linear Search)
- [ ] Add graph algorithms (BFS, DFS, Dijkstra)
- [ ] Include algorithm complexity analysis charts
- [ ] Add audio feedback for better accessibility
- [ ] Implement custom array input functionality
- [ ] Add algorithm racing mode to compare performance

Feel free to contribute to any of these features!

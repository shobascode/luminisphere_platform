# Math Animations Platform

An interactive platform for exploring mathematical concepts through beautiful animations and visualizations.

## Features

- **Interactive Math Animations**: Visualize complex mathematical concepts with smooth, interactive animations
- **Topic-Based Navigation**: Browse animations by mathematical topics (Calculus, Geometry, Trigonometry, Algebra)
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Mathematical Rendering**: Uses MathJax for beautiful mathematical formula rendering
- **GitHub Pages Ready**: Optimized for deployment on GitHub Pages

## Live Demo

Visit the live platform at: [Your Custom Domain Here]

## Mathematical Topics Covered

### Calculus
- Derivative visualization
- Limit concepts
- Integration animations

### Geometry
- Circle properties
- Geometric transformations
- Area and perimeter calculations

### Trigonometry
- Sine wave formation
- Unit circle relationships
- Trigonometric identities

### Algebra
- Function transformations
- Equation solving
- Linear relationships

## Technology Stack

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with flexbox and grid
- **JavaScript**: Interactive animations and user interface
- **Canvas API**: High-performance 2D graphics rendering
- **MathJax**: Mathematical notation rendering
- **GitHub Pages**: Static site hosting

## Getting Started

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/math-animations-platform.git
   cd math-animations-platform
   ```

2. Open `index.html` in your web browser or serve with a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   ```

3. Navigate to `http://localhost:8000` to view the platform

### Deployment to GitHub Pages

1. Push your code to a GitHub repository
2. Go to repository Settings → Pages
3. Select "Deploy from a branch" and choose "main" branch
4. Your site will be available at `https://yourusername.github.io/repository-name`

## Project Structure

```
math-animations-platform/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── README.md           # Project documentation
└── .gitignore         # Git ignore file
```

## Adding New Animations

To add a new mathematical animation:

1. **HTML**: Add a new animation card in the animations section
2. **CSS**: Style the animation preview area
3. **JavaScript**: Implement the animation logic using Canvas API
4. **Math**: Include relevant mathematical formulas using MathJax

Example animation structure:
```javascript
function initializeNewAnimation() {
    const canvas = document.querySelector('#new-animation canvas');
    const ctx = canvas.getContext('2d');
    // Animation implementation here
}
```

## Customization

### Colors and Styling
- Primary colors can be changed in the CSS custom properties
- Animation timing and easing can be adjusted in the JavaScript files

### Mathematical Content
- Add new formulas by including MathJax notation in HTML
- Extend animations by modifying the Canvas drawing functions

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-animation`)
3. Commit your changes (`git commit -am 'Add new animation'`)
4. Push to the branch (`git push origin feature/new-animation`)
5. Create a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or suggestions, please open an issue on GitHub.

---

Made with ❤️ for mathematics education

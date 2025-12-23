# Appscrip Fashion Store - Product Listing Page (PLP)
## 📋 Project Overview
A fully responsive Product Listing Page (PLP) built with React.js and pure CSS, designed to match the provided Figma specifications. This e-commerce interface includes product filtering, sorting, and search functionality with a clean, modern design.

## 🎯 Live Demo
View Live Site on Netlify

## 🏗️ Tech Stack
- Frontend Framework: React.js 18.2.0
- Styling: Pure CSS (No UI libraries)
- API Integration: FakeStore API for product data
- Icons: SVG icons (No external icon libraries)
- Deployment: Netlify
- Version Control: Git & GitHub

## ✨ Features
### ✅ Design Implementation
- Pixel-perfect implementation matching Figma design
- Modern UI with gradient accents and smooth animations
- Consistent color scheme and typography

### ✅ Responsive Design
- Mobile-first approach
- Breakpoints: 480px (Mobile), 768px (Tablet), 1024px (Desktop)
- Adaptive layouts for all screen sizes

### ✅ Product Features
- Dynamic product listing from FakeStore API
- Product cards with images, ratings, prices, and descriptions
- Hover effects and quick actions (wishlist, quick view)
- Discount badges and price comparisons

### ✅ Filtering & Sorting
- Category filtering (Electronics, Jewelery, Clothing)
- Price range slider (0-1000)
- Size filtering (S, M, L, XL, XXL)
- Color filtering with visual color dots
- Rating filtering (4+ stars, 3+ stars, etc.)
- Sort by: Featured, Price (low-high), Price (high-low), Rating

### ✅ SEO Optimization
- Semantic HTML5 tags
- Proper H1 and H2 hierarchy
- Schema.org markup for products
- SEO-friendly image names and alt text
- Meta descriptions and Open Graph tags

### ✅ Accessibility
- ARIA labels for interactive elements
- Keyboard navigation support
- Screen reader friendly
- Proper contrast ratios
- Focus management

### ✅ Performance
- Minimal dependencies (No Bootstrap, Material-UI, etc.)
- Optimized images and lazy loading
- Efficient React component structure
- Minimal DOM size

## 📁 Project Structure

```
Appscrip-task-candidate-name/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Header.css
│   │   ├── Filters.js
│   │   ├── Filters.css
│   │   ├── ProductGrid.js
│   │   ├── ProductGrid.css
│   │   ├── ProductCard.js
│   │   ├── ProductCard.css
|   |   ├── ShortDropdown.js
│   │   ├── Footer.js
│   │   └── Footer.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
├── README.md
└── .gitignore
```
🚀 Installation & Setup
Prerequisites
Node.js (v14 or higher)

npm or yarn

Git

Local Development
Clone the repository

bash
git clone https://github.com/yourusername/Appscrip-task-candidate-name.git
cd Appscrip-task-candidate-name
Install dependencies

bash
npm install
# or
yarn install
Start development server

bash
npm start
# or
yarn start
Open in browser
Navigate to http://localhost:3000

Available Scripts
npm start - Runs the app in development mode

npm run build - Builds the app for production

npm test - Launches the test runner

npm run eject - Ejects from Create React App

🎨 Design Specifications
Color Palette
Primary: #667eea (Purple Blue)

Secondary: #764ba2 (Purple)

Background: #f8f9fa

Text: #333333, #666666

Borders: #e5e7eb

Typography
Font Family: Inter (Google Fonts)

Headings: 600-800 weight

Body: 300-400 weight

Breakpoints
Mobile: 375px - 480px

Tablet: 768px - 1024px

Desktop: 1024px+

🔧 API Integration
The project uses the FakeStore API for product data with enhanced properties:

Original API data enhanced with:

Random sizes (S, M, L, XL)

Random colors (Red, Blue, Black, White, Green)

Ratings and review counts

Discount percentages (0-40%)

📱 Responsive Behavior
Mobile (≤ 480px)
Single column product grid

Collapsed hamburger menu

Stacked filter sidebar

Simplified search interface

Tablet (≤ 768px)
Two-column product grid

Expanded filters in sidebar

Visible search bar

Adjusted spacing

Desktop (≤ 1024px)
Three-column product grid

Persistent sidebar filters

Full navigation menu

Complete feature set

🏆 Best Practices Implemented
Code Quality
Clean component structure

Consistent naming conventions

Minimal dependencies

Efficient state management

Error handling for API calls

Performance
Optimized re-renders with React hooks

Lazy image loading

Minimal bundle size

Efficient CSS (no !important usage)

SEO
Semantic HTML structure

Schema.org JSON-LD markup

Proper heading hierarchy (H1, H2, H3)

Image optimization with alt text

Meta descriptions and titles

Accessibility
ARIA labels for interactive elements

Keyboard navigation support

Focus indicators

Screen reader compatibility

Color contrast compliance

📊 SEO Implementation Details
Meta Tags
html
<title>Appscrip Fashion Store | Product Listing Page</title>
<meta name="description" content="Shop the latest trends in fashion at Appscrip...">
<meta name="keywords" content="fashion, clothing, accessories, shopping, ecommerce">
Schema Markup
CollectionPage schema for product listing

Product schema for individual items

ItemList for product collections

Image Optimization
Descriptive file names

Alt text for all images

Responsive image sizing

Lazy loading implementation

🚀 Deployment
Netlify Deployment
Build the project: npm run build

Drag build folder to Netlify

Configure custom domain (optional)

Enable HTTPS

Build Optimization
Minified CSS and JavaScript

Optimized images

Gzip compression

Cache headers

📝 Evaluation Criteria Met
✅ Code Structure
Modular component architecture

Separation of concerns

Reusable utility functions

Organized file structure

✅ Naming Convention
PascalCase for components

camelCase for variables/functions

kebab-case for CSS classes

Descriptive naming throughout

✅ Minimum Dependencies
No external UI libraries

Only essential npm packages

Custom CSS for all styling

✅ Screen Size Fit
Mobile-first responsive design

Fluid layouts

Touch-friendly interfaces

Cross-browser compatibility

✅ Minimal DOM Size
Efficient component rendering

Virtual DOM optimization

Minimal wrapper divs

Clean HTML output

🔮 Future Enhancements
Potential improvements for production:

Server-side rendering (Next.js)

Shopping cart functionality

User authentication

Product reviews system

Advanced search with autocomplete

Wishlist persistence

Analytics integration

PWA capabilities

🤝 Contributing
Fork the repository

Create a feature branch (git checkout -b feature/AmazingFeature)

Commit changes (git commit -m 'Add AmazingFeature')

Push to branch (git push origin feature/AmazingFeature)

Open a Pull Request

📄 License
This project is created for evaluation purposes as part of the Appscrip assignment.

🙏 Acknowledgements
FakeStore API for product data

Figma for design reference

Netlify for hosting

React for the framework

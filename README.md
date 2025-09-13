# 🚀 Futuristic Portfolio Website

A stunning, dark-mode glassmorphism portfolio website for Full-Stack Developers built with React, TypeScript, and TailwindCSS.

![Portfolio Preview](https://via.placeholder.com/1200x600/0f172a/60a5fa?text=Futuristic+Portfolio)

## ✨ Features

### 🎨 Design & UX
- **Dark Mode Glassmorphism** - Modern glass morphism effects with neon accents
- **Responsive Design** - Perfect on desktop, tablet, and mobile
- **Smooth Animations** - Typing animations, hover effects, and scroll transitions
- **Interactive Elements** - Micro-interactions and animated skill bars
- **Accessibility** - Keyboard navigation, ARIA labels, and semantic HTML

### 📱 Sections
- **Hero Landing** - Animated typing effect with rotating tech keywords
- **About Me** - Professional bio and quick facts
- **Skills Matrix** - Animated skill bars organized by categories
- **Projects Showcase** - 5+ projects with filtering and detailed cards
- **Achievements** - Coding platform stats and certifications
- **Resume Viewer** - In-browser PDF viewer modal with download option
- **Contact Form** - Functional contact form with validation

### 🛠️ Technical Features
- **Modern Stack** - React 18, TypeScript, TailwindCSS
- **Component Architecture** - Modular, reusable components
- **Performance Optimized** - Lazy loading, efficient animations
- **SEO Ready** - Meta tags, structured data, semantic HTML
- **Mobile First** - Responsive design with touch-friendly interactions

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Modern web browser

### Installation & Setup

```bash
# Clone the repository
git clone <your-git-url>
cd portfolio-website

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server will start at `http://localhost:8080`

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Hero.tsx         # Landing section with typing animation
│   ├── Navbar.tsx       # Navigation with smooth scrolling
│   ├── About.tsx        # About me section
│   ├── Skills.tsx       # Skills matrix with animated bars
│   ├── Projects.tsx     # Projects showcase with filtering
│   ├── Achievements.tsx # Certifications and coding stats
│   ├── Resume.tsx       # Resume viewer and download
│   ├── Contact.tsx      # Contact form
│   ├── Footer.tsx       # Footer with social links
│   └── ui/              # shadcn/ui components
├── pages/
│   ├── Index.tsx        # Main portfolio page
│   └── NotFound.tsx     # 404 page
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
└── index.css           # Global styles and design system
```

## 🎨 Design System

### Color Palette
- **Primary**: Cyan (`#60A5FA`) - Main brand color
- **Accent**: Purple (`#A855F7`) - Secondary highlights  
- **Background**: Dark Navy (`#0F172A`) - Main background
- **Glass Effects**: Semi-transparent overlays with backdrop blur

### Typography
- **Headings**: JetBrains Mono (geometric, tech-inspired)
- **Body**: Inter (clean, readable)

### Components
All components use the design system tokens defined in `index.css`:
- Glass morphism effects (`.glass`, `.glass-card`)
- Neon glows and animations (`.neon-glow`, `.btn-neon`)
- Animated skill bars (`.skill-bar`, `.skill-fill`)
- Smooth transitions and micro-interactions

## 📝 Customization Guide

### 1. Personal Information
Update content in each component:

**Hero Component** (`src/components/Hero.tsx`):
```tsx
// Update name, skills, and bio
const skills = ['Your Skill 1', 'Your Skill 2', ...];
```

**Contact Component** (`src/components/Contact.tsx`):
```tsx
// Update contact information
const contactInfo = [
  { icon: Mail, label: 'Email', value: 'your.email@domain.com' },
  // ... other contact details
];
```

### 2. Projects
Update the projects array in `src/components/Projects.tsx`:
```tsx
const projects = [
  {
    title: 'Your Project Name',
    description: 'Project description...',
    technologies: ['React', 'Node.js', ...],
    github: 'https://github.com/yourusername/project',
    demo: 'https://your-project-demo.com',
    // ... other project details
  }
];
```

### 3. Skills & Technologies
Modify skill categories in `src/components/Skills.tsx`:
```tsx
const skillCategories = [
  {
    title: 'Your Category',
    skills: [
      { name: 'Technology Name', level: 90 },
      // ... other skills
    ],
  }
];
```

### 4. Resume Content
Update resume data in `src/components/Resume.tsx`:
```tsx
const resumeData = {
  contact: { /* your contact info */ },
  experience: [ /* your work experience */ ],
  // ... other resume sections
};
```

### 5. Color Scheme
Customize colors in `src/index.css`:
```css
:root {
  --primary: 187 100% 65%;     /* Your primary color (HSL) */
  --accent: 270 100% 80%;      /* Your accent color (HSL) */
  --neon-cyan: 187 100% 65%;   /* Neon effects color */
  /* ... other color tokens */
}
```

## 📱 Resume Integration

### PDF Resume Setup
1. **Add PDF File**: Place your resume PDF in the `public/` folder as `resume.pdf`
2. **Update Download Links**: Links in Hero and Resume components will automatically work
3. **PDF Viewer**: The modal shows HTML version for better UX and SEO

### Resume Viewer Options
- **View Resume**: Opens modal with structured HTML version
- **Download Resume**: Direct PDF download
- **SEO Friendly**: HTML version is crawlable by search engines

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checker
```

## 🌐 Deployment

### Recommended Platforms
1. **Vercel** (Recommended)
   ```bash
   npm i -g vercel
   vercel --prod
   ```

2. **Netlify**
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `dist`

3. **GitHub Pages**
   ```bash
   npm run build
   # Deploy dist/ folder to gh-pages branch
   ```

## 🛡️ Performance & SEO

### Built-in Optimizations
- ✅ Semantic HTML structure
- ✅ Meta tags and Open Graph
- ✅ Responsive images with lazy loading
- ✅ Efficient animations and transitions
- ✅ Minimal bundle size with tree shaking
- ✅ Accessibility features (ARIA labels, keyboard navigation)

### Performance Tips
- Images are optimized for web
- Components are lazy-loaded where appropriate
- CSS is purged of unused styles in production
- Modern browser features with graceful fallbacks

## 🎯 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Found a bug or want to contribute? 
1. Fork the repository
2. Create your feature branch
3. Commit your changes  
4. Push to the branch
5. Open a Pull Request

## 📧 Support

Need help customizing your portfolio? Reach out:
- Email: alex.rodriguez@email.com
- LinkedIn: [linkedin.com/in/alexrodriguez](https://linkedin.com/in/alexrodriguez)
- GitHub: [github.com/alexrodriguez](https://github.com/alexrodriguez)

---

**Built with ❤️ using React, TypeScript & TailwindCSS**

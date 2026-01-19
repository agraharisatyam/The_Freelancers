# FreelancePro - Professional Freelancing Company Website

A stunning, modern, and fully responsive website for a professional freelancing company built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

### Core Features
- **Stunning Hero Section** - Full-screen parallax hero with animated particles
- **Interactive Portfolio** - Filterable grid with lightbox modals
- **Service Showcase** - Tabbed service details with pricing packages
- **Team Profiles** - Interactive team bios with hover effects
- **Blog/Resources** - Article listings with featured posts
- **Contact Form** - Advanced form with conditional logic
- **Quote Calculator** - Interactive project cost estimator
- **Dark Mode** - Full dark mode support with smooth transitions
- **Smooth Scrolling** - Enhanced scroll experience with Lenis
- **Custom 404 Page** - Engaging error page

### Design Features
- **Modern UI/UX** - Professional design with navy blue, gold, and white color scheme
- **Animations** - Smooth animations powered by Framer Motion
- **Responsive Design** - Mobile-first, fully responsive across all devices
- **Trust Badges** - Visual trust signals throughout the site
- **Micro-interactions** - Engaging hover effects and transitions

### Technical Features
- **SEO Optimized** - Meta tags, sitemap, robots.txt, and schema markup ready
- **Performance** - Optimized for Core Web Vitals
- **TypeScript** - Full type safety
- **Accessibility** - WCAG 2.1 compliant structure

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, GSAP
- **Smooth Scroll**: Lenis
- **Icons**: Lucide React, React Icons
- **Fonts**: Montserrat, Playfair Display (Google Fonts)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd freelancing-company-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
├── app/
│   ├── about/          # About page
│   ├── blog/           # Blog page
│   ├── contact/        # Contact page
│   ├── portfolio/      # Portfolio page
│   ├── services/       # Services page
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   ├── globals.css     # Global styles
│   ├── not-found.tsx   # 404 page
│   ├── sitemap.ts      # Sitemap generation
│   └── robots.ts       # Robots.txt
├── components/
│   ├── about/          # About page components
│   ├── blog/           # Blog components
│   ├── contact/        # Contact components
│   ├── home/           # Home page components
│   ├── layout/         # Layout components (Navbar, Footer)
│   ├── portfolio/      # Portfolio components
│   ├── providers/      # Context providers
│   └── services/       # Services components
├── hooks/              # Custom React hooks
└── public/             # Static assets
```

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to customize the color palette:
- Navy: `#001F3F`
- Gold: `#FFD700`

### Content
- Update service details in `components/services/ServicesDetail.tsx`
- Modify portfolio items in `components/portfolio/PortfolioGrid.tsx`
- Edit team members in `components/about/TeamBios.tsx`
- Update blog posts in `components/blog/BlogGrid.tsx`

### SEO
- Update metadata in each page's `metadata` export
- Modify `app/sitemap.ts` with your actual domain
- Update `app/robots.ts` with your sitemap URL

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy automatically

### Other Platforms
The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

For questions or support, please contact: hello@freelancepro.com

---

Built with ❤️ using Next.js 15 and modern web technologies.

---
Last updated: 2025


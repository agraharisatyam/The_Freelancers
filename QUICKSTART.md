# Quick Start Guide

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to `http://localhost:3000`

## Project Structure Overview

- **`app/`** - Next.js 15 App Router pages
- **`components/`** - React components organized by feature
- **`hooks/`** - Custom React hooks
- **`public/`** - Static assets

## Key Features to Customize

### 1. Branding
- Update company name in `components/layout/Navbar.tsx` and `components/layout/Footer.tsx`
- Change colors in `tailwind.config.ts`
- Update logo (add to `public/` and reference in components)

### 2. Content
- **Services**: Edit `components/services/ServicesDetail.tsx`
- **Portfolio**: Update `components/portfolio/PortfolioGrid.tsx`
- **Team**: Modify `components/about/TeamBios.tsx`
- **Blog**: Edit `components/blog/BlogGrid.tsx`

### 3. Contact Information
- Update contact details in `components/contact/ContactInfo.tsx`
- Configure form submission in `components/contact/ContactForm.tsx`

### 4. SEO
- Update metadata in each page file
- Modify `app/sitemap.ts` with your domain
- Update `app/robots.ts` with your sitemap URL
- Edit schema markup in `components/layout/SchemaMarkup.tsx`

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import in Vercel
3. Deploy automatically

### Build for Production
```bash
npm run build
npm run start
```

## Environment Variables

Create a `.env.local` file for any environment-specific variables:
```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## Next Steps

1. Replace placeholder images with your own
2. Update all text content
3. Configure analytics (Google Analytics, etc.)
4. Set up form submission backend
5. Add your actual logo and favicon
6. Test on multiple devices
7. Run Lighthouse audit for performance

## Support

For issues or questions, refer to the main README.md or contact support.


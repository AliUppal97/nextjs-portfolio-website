# Portfolio Website

A modern, production-ready portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features comprehensive SEO optimization, performance monitoring, and a complete testing suite.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS v4
- **Responsive Design**: Mobile-first approach with dark/light theme support
- **SEO Optimized**: Complete metadata, structured data, and sitemap generation
- **Performance Focused**: Core Web Vitals monitoring, image optimization, and caching
- **Accessibility**: WCAG compliant with screen reader support and keyboard navigation
- **Testing**: Comprehensive unit tests, E2E tests, and Storybook documentation
- **Data-Driven**: JSON-based content management for projects and resume
- **Contact System**: Serverless contact form with spam protection
- **Analytics**: Vercel Analytics and Speed Insights integration

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

## 🛠️ Installation

1. **Clone the repository:**
   \`\`\`bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   \`\`\`

2. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

3. **Set up environment variables:**
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`
   
   Edit \`.env.local\` with your configuration:
   \`\`\`env
   # Required
   CONTACT_EMAIL=your-email@example.com
   NEXT_PUBLIC_SITE_URL=https://yourdomain.com
   
   # Optional
   EMAIL_PROVIDER=console # or 'sendgrid', 'resend'
   SENDGRID_API_KEY=your_sendgrid_key
   RESEND_API_KEY=your_resend_key
   NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
   \`\`\`

4. **Run the development server:**
   \`\`\`bash
   npm run dev
   \`\`\`

5. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

## 📁 Project Structure

\`\`\`
├── app/                    # Next.js app directory
│   ├── api/               # API routes (contact, sitemap, robots)
│   ├── projects/          # Project pages
│   ├── resume/            # Resume page
│   ├── contact/           # Contact page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── hero.tsx          # Hero section
│   ├── navbar.tsx        # Navigation
│   ├── footer.tsx        # Footer
│   ├── project-card.tsx  # Project cards
│   ├── contact-form.tsx  # Contact form
│   └── ...               # Other components
├── data/                 # JSON data files
│   ├── projects.json     # Project data
│   └── resume.json       # Resume data
├── lib/                  # Utility functions
│   ├── utils.ts          # General utilities
│   ├── theme-provider.tsx # Theme management
│   └── email-service.ts  # Email abstraction
├── public/               # Static assets
│   ├── images/           # Images
│   ├── icons/            # Favicons
│   └── resume.pdf        # Resume PDF
├── stories/              # Storybook stories
├── tests/                # Test files
│   ├── components/       # Component tests
│   └── e2e/             # End-to-end tests
├── .storybook/           # Storybook configuration
└── docs/                 # Additional documentation
\`\`\`

## 🎨 Customization

### Adding a New Project

1. **Add project data to \`data/projects.json\`:**
   \`\`\`json
   {
     "id": "unique-id",
     "title": "Project Title",
     "slug": "project-slug",
     "coverImage": "/images/project-cover.jpg",
     "role": "Your Role",
     "duration": "Project Duration",
     "teamSize": 4,
     "stack": ["React", "TypeScript", "Next.js"],
     "summary": "Brief project description",
     "challenge": "What problem did you solve?",
     "approach": "How did you approach it?",
     "solution": "What was your solution?",
     "results": {
       "metric1": {
         "label": "Performance Improvement",
         "value": "40%",
         "description": "Detailed description"
       }
     },
     "links": {
       "live": "https://project-url.com",
       "repo": "https://github.com/user/repo"
     },
     "testimonials": [
       {
         "name": "Client Name",
         "quote": "Great work!"
       }
     ],
     "media": [
       {
         "type": "image",
         "src": "/images/project-screenshot.jpg",
         "caption": "Screenshot description"
       }
     ]
   }
   \`\`\`

2. **The project will automatically appear on the projects page and generate a case study page at \`/projects/project-slug\`.**

### Updating Personal Information

1. **Edit \`data/resume.json\` to update:**
   - Personal information
   - Work experience
   - Education
   - Skills
   - Certifications

2. **Update social links in:**
   - \`components/hero.tsx\`
   - \`components/footer.tsx\`
   - \`components/seo.tsx\`

### Changing Theme Colors

1. **Update CSS variables in \`app/globals.css\`:**
   \`\`\`css
   :root {
     --primary: oklch(0.205 0 0);
     --secondary: oklch(0.97 0 0);
     /* ... other colors */
   }
   
   .dark {
     --primary: oklch(0.985 0 0);
     --secondary: oklch(0.269 0 0);
     /* ... other colors */
   }
   \`\`\`

2. **Colors automatically apply throughout the application via Tailwind CSS.**

## 🧪 Testing

### Unit Tests
\`\`\`bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm test -- --coverage
\`\`\`

### End-to-End Tests
\`\`\`bash
# Run E2E tests
npm run test:e2e

# Run E2E tests in UI mode
npm run test:e2e -- --ui
\`\`\`

### Storybook
\`\`\`bash
# Start Storybook
npm run storybook

# Build Storybook
npm run build-storybook
\`\`\`

## 📊 Performance

### Performance Goals
- **Lighthouse Performance Score**: ≥90
- **First Contentful Paint (FCP)**: <1.5s
- **Largest Contentful Paint (LCP)**: <2.5s
- **Cumulative Layout Shift (CLS)**: <0.1
- **First Input Delay (FID)**: <100ms

### Performance Features
- **Image Optimization**: WebP/AVIF formats with proper sizing
- **Font Optimization**: Preloaded fonts with font-display: swap
- **Code Splitting**: Automatic route-based splitting
- **Caching**: Aggressive caching for static assets
- **Compression**: Gzip/Brotli compression enabled

### Monitoring
- **Vercel Analytics**: User behavior and performance metrics
- **Speed Insights**: Core Web Vitals monitoring
- **Custom Monitoring**: Performance budget checking

## 🔍 SEO Features

### Metadata
- **Dynamic meta tags** for each page
- **Open Graph** and **Twitter Card** support
- **Structured data** (JSON-LD) for rich snippets

### Structured Data Types
- **Person Schema**: Professional information
- **Website Schema**: Site information
- **Portfolio Schema**: Project collection
- **Breadcrumb Schema**: Navigation structure

### Search Engine Optimization
- **Automatic sitemap** generation
- **Robots.txt** configuration
- **Canonical URLs** for all pages
- **Semantic HTML** structure

## 🚀 Deployment

### Vercel (Recommended)

1. **Push your code to GitHub**

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Configure environment variables
   - Deploy

3. **Environment Variables in Vercel:**
   \`\`\`
   CONTACT_EMAIL=your-email@example.com
   NEXT_PUBLIC_SITE_URL=https://yourdomain.com
   EMAIL_PROVIDER=sendgrid
   SENDGRID_API_KEY=your_sendgrid_key
   \`\`\`

### Other Platforms

#### Netlify
\`\`\`bash
npm run build
# Deploy the .next folder
\`\`\`

#### Self-Hosted
\`\`\`bash
npm run build
npm start
\`\`\`

## 🔧 Configuration

### Email Service Setup

#### SendGrid
1. Create a SendGrid account
2. Generate an API key
3. Set environment variables:
   \`\`\`env
   EMAIL_PROVIDER=sendgrid
   SENDGRID_API_KEY=your_api_key
   \`\`\`

#### Resend
1. Create a Resend account
2. Generate an API key
3. Set environment variables:
   \`\`\`env
   EMAIL_PROVIDER=resend
   RESEND_API_KEY=your_api_key
   \`\`\`

### Analytics Setup

#### Vercel Analytics
- Automatically enabled when deployed to Vercel
- No additional configuration required

#### Google Analytics
1. Create a Google Analytics property
2. Set environment variable:
   \`\`\`env
   NEXT_PUBLIC_ANALYTICS_ID=GA_MEASUREMENT_ID
   \`\`\`

## 🛡️ Security

### Security Headers
- **Content Security Policy (CSP)**
- **X-Frame-Options**: DENY
- **X-Content-Type-Options**: nosniff
- **Referrer-Policy**: origin-when-cross-origin
- **Strict-Transport-Security**: HSTS enabled

### Contact Form Security
- **Rate limiting**: 5 submissions per hour per IP
- **Spam detection**: Keyword filtering
- **Honeypot protection**: Hidden form fields
- **Input validation**: Server-side validation with Zod

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**: \`git checkout -b feature/amazing-feature\`
3. **Make your changes**
4. **Add tests** for new features
5. **Run the test suite**: \`npm test\`
6. **Commit your changes**: \`git commit -m 'Add amazing feature'\`
7. **Push to the branch**: \`git push origin feature/amazing-feature\`
8. **Open a Pull Request**

### Development Guidelines
- Follow TypeScript best practices
- Write tests for new components
- Update Storybook stories for UI changes
- Ensure accessibility compliance
- Maintain performance standards

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js** - React framework
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Component library
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Vercel** - Deployment platform

## 📞 Support

If you have any questions or need help with setup:

1. **Check the documentation** in the \`docs/\` folder
2. **Review existing issues** on GitHub
3. **Create a new issue** with detailed information
4. **Contact**: muzair21st@gmail.com

---

**Built with ❤️ by Muhammad Uzair**
\`\`\`

For more detailed documentation, see the \`docs/\` folder.

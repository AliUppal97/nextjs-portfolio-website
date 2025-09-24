# Customization Guide

This guide covers how to customize your portfolio website to match your personal brand and requirements.

## Personal Information

### Basic Information
Edit `data/resume.json` to update your personal details:

\`\`\`json
{
  "personal": {
    "name": "Your Name",
    "title": "Your Professional Title",
    "email": "your.email@example.com",
    "phone": "+1 (555) 123-4567",
    "location": "Your City, State",
    "website": "https://yourwebsite.com",
    "linkedin": "https://linkedin.com/in/yourprofile",
    "github": "https://github.com/yourusername",
    "summary": "Your professional summary..."
  }
}
\`\`\`

### Social Links
Update social links in multiple components:

1. **Hero Section** (`components/hero.tsx`):
\`\`\`tsx
const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/yourusername",
    icon: Github,
  },
  // ... other links
]
\`\`\`

2. **Footer** (`components/footer.tsx`):
\`\`\`tsx
const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/yourusername",
    icon: Github,
  },
  // ... other links
]
\`\`\`

3. **SEO Schema** (`components/seo.tsx`):
\`\`\`tsx
sameAs: [
  "https://linkedin.com/in/yourprofile",
  "https://github.com/yourusername",
  "https://twitter.com/yourhandle",
]
\`\`\`

## Projects

### Adding a New Project

1. **Add to `data/projects.json`**:
\`\`\`json
{
  "id": "unique-project-id",
  "title": "Project Title",
  "slug": "project-url-slug",
  "coverImage": "/images/project-cover.jpg",
  "role": "Your Role",
  "duration": "Project Duration",
  "teamSize": 4,
  "stack": ["React", "TypeScript", "Next.js"],
  "summary": "Brief project description for cards and previews",
  "challenge": "What problem did this project solve?",
  "approach": "How did you approach solving it?",
  "solution": "What was your final solution?",
  "results": {
    "performance": {
      "label": "Performance Improvement",
      "value": "40%",
      "description": "Detailed description of the improvement"
    },
    "users": {
      "label": "User Growth",
      "value": "10K+",
      "description": "Monthly active users achieved"
    }
  },
  "links": {
    "live": "https://project-url.com",
    "repo": "https://github.com/user/repo"
  },
  "testimonials": [
    {
      "name": "Client Name, Title",
      "quote": "Testimonial about your work on this project"
    }
  ],
  "media": [
    {
      "type": "image",
      "src": "/images/project-screenshot-1.jpg",
      "caption": "Description of what this image shows"
    }
  ]
}
\`\`\`

2. **Add project images** to the `public/images/` directory

3. **The project will automatically**:
   - Appear on the projects index page
   - Generate a detailed case study page at `/projects/project-slug`
   - Be included in the sitemap
   - Have proper SEO metadata

### Project Image Guidelines

- **Cover Image**: 600x400px, showcases the project
- **Screenshots**: Various sizes, show key features
- **Use descriptive filenames**: `ecommerce-homepage.jpg`
- **Optimize images**: Use WebP format when possible
- **Alt text**: Provided via the `caption` field

## Styling and Theming

### Color Scheme

Edit `app/globals.css` to customize colors:

\`\`\`css
:root {
  /* Primary brand color */
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  
  /* Secondary colors */
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  
  /* Accent colors */
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  
  /* Custom portfolio colors */
  --success: oklch(0.6 0.15 142);
  --danger: oklch(0.577 0.245 27.325);
}

.dark {
  /* Dark mode overrides */
  --primary: oklch(0.985 0 0);
  --primary-foreground: oklch(0.205 0 0);
  /* ... other dark mode colors */
}
\`\`\`

### Typography

The project uses Geist Sans and Geist Mono fonts. To change fonts:

1. **Update `app/layout.tsx`**:
\`\`\`tsx
import { Inter, JetBrains_Mono } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })
\`\`\`

2. **Update `app/globals.css`**:
\`\`\`css
@theme inline {
  --font-sans: var(--font-inter);
  --font-mono: var(--font-jetbrains);
}
\`\`\`

### Component Styling

All components use Tailwind CSS classes. Key patterns:

- **Spacing**: Use the Tailwind spacing scale (`p-4`, `mx-2`, `py-6`)
- **Colors**: Use semantic color classes (`bg-primary`, `text-muted-foreground`)
- **Responsive**: Use responsive prefixes (`md:grid-cols-2`, `lg:text-xl`)

## Content Customization

### Hero Section

Edit `components/hero.tsx`:

\`\`\`tsx
// Update the main heading
<h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
  Your Custom Headline Here
</h1>

// Update the description
<p className="mt-6 text-xl leading-8">
  Your professional description and value proposition...
</p>
\`\`\`

### Navigation

Edit `components/navbar.tsx`:

\`\`\`tsx
const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" }, // Add new pages
  { name: "Blog", href: "/blog" },   // Add new pages
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
]
\`\`\`

### Footer

Edit `components/footer.tsx`:

\`\`\`tsx
// Update the description
<p className="mt-2 text-sm leading-6 text-muted-foreground">
  Your custom footer description here.
</p>

// Update footer links
const footerLinks = [
  {
    title: "Navigation",
    links: [
      { name: "Home", href: "/" },
      { name: "Projects", href: "/projects" },
      // ... add your links
    ],
  },
]
\`\`\`

## SEO Customization

### Meta Information

Edit `components/seo.tsx`:

\`\`\`tsx
export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Your Name",
    jobTitle: "Your Job Title",
    url: "https://yourwebsite.com",
    // ... update all fields
  }
}
\`\`\`

### Default Metadata

Edit `app/layout.tsx`:

\`\`\`tsx
export const metadata: Metadata = {
  title: {
    default: "Your Name - Your Title",
    template: "%s | Your Name",
  },
  description: "Your professional description...",
  keywords: [
    "Your Skills",
    "Your Specialties",
    "Your Location",
  ],
  // ... other metadata
}
\`\`\`

## Adding New Pages

### 1. Create the Page Component

Create `app/about/page.tsx`:

\`\`\`tsx
import { AppLayout } from "@/components/app-layout"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about my background and experience",
}

export default function AboutPage() {
  return (
    <AppLayout>
      <div className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-4xl font-bold">About Me</h1>
          {/* Your content here */}
        </div>
      </div>
    </AppLayout>
  )
}
\`\`\`

### 2. Add to Navigation

Update `components/navbar.tsx` to include the new page.

### 3. Update Sitemap

The sitemap will automatically include the new page if it follows the standard structure.

## Contact Form Customization

### Form Fields

Edit `components/contact-form.tsx` to add/remove fields:

\`\`\`tsx
// Add a new field
<div className="space-y-2">
  <Label htmlFor="company">Company</Label>
  <Input
    id="company"
    name="company"
    type="text"
    value={formData.company}
    onChange={handleChange}
    placeholder="Your company"
  />
</div>
\`\`\`

### Validation

Update the validation schema in `app/api/contact/route.ts`:

\`\`\`tsx
const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  company: z.string().optional(), // New field
  subject: z.string().min(5).max(200),
  message: z.string().min(10).max(2000),
})
\`\`\`

### Email Template

Update the email template in `app/api/contact/route.ts`:

\`\`\`tsx
const emailData = {
  // ... other fields
  html: `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${validatedData.name}</p>
    <p><strong>Email:</strong> ${validatedData.email}</p>
    <p><strong>Company:</strong> ${validatedData.company}</p>
    <p><strong>Subject:</strong> ${validatedData.subject}</p>
    <p><strong>Message:</strong></p>
    <p>${validatedData.message.replace(/\n/g, "<br>")}</p>
  `,
}
\`\`\`

## Performance Customization

### Image Optimization

Configure image domains in `next.config.mjs`:

\`\`\`js
images: {
  domains: ['your-image-domain.com'],
  formats: ['image/webp', 'image/avif'],
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'your-cdn.com',
    },
  ],
},
\`\`\`

### Bundle Optimization

Add package imports to optimize in `next.config.mjs`:

\`\`\`js
experimental: {
  optimizePackageImports: [
    'lucide-react',
    'framer-motion',
    'your-heavy-package',
  ],
},
\`\`\`

## Analytics Customization

### Custom Events

Add custom analytics events:

\`\`\`tsx
// In your components
import { track } from '@vercel/analytics'

const handleProjectClick = (projectId: string) => {
  track('project_viewed', { project_id: projectId })
  // ... rest of your logic
}
\`\`\`

### Custom Metrics

Add custom performance metrics in `lib/performance.ts`:

\`\`\`tsx
export function trackCustomMetric(name: string, value: number) {
  if (typeof window !== 'undefined' && 'performance' in window) {
    performance.mark(`custom-${name}`, { detail: value })
  }
}
\`\`\`

## Testing Customization

### Component Tests

Add tests for your custom components in `tests/components/`:

\`\`\`tsx
import { render, screen } from '@testing-library/react'
import { YourComponent } from '@/components/your-component'

describe('YourComponent', () => {
  it('renders correctly', () => {
    render(<YourComponent />)
    expect(screen.getByText('Expected Text')).toBeInTheDocument()
  })
})
\`\`\`

### E2E Tests

Add E2E tests for new pages in `tests/e2e/`:

\`\`\`tsx
import { test, expect } from '@playwright/test'

test.describe('About Page', () => {
  test('should load about page', async ({ page }) => {
    await page.goto('/about')
    await expect(page.getByRole('heading', { name: /about me/i })).toBeVisible()
  })
})
\`\`\`

## Storybook Customization

### Component Stories

Add stories for your components in `stories/`:

\`\`\`tsx
import type { Meta, StoryObj } from '@storybook/react'
import { YourComponent } from '@/components/your-component'

const meta: Meta<typeof YourComponent> = {
  title: 'Components/YourComponent',
  component: YourComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    // Your component props
  },
}
\`\`\`

This customization guide should help you tailor the portfolio to your specific needs. For more advanced customizations, refer to the Next.js, Tailwind CSS, and component library documentation.

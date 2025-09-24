# Deployment Guide

This guide covers deploying your portfolio website to various platforms.

## Vercel (Recommended)

Vercel provides the best experience for Next.js applications with automatic deployments, edge functions, and analytics.

### Prerequisites
- GitHub account
- Vercel account
- Repository pushed to GitHub

### Steps

1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository

2. **Configure Build Settings**
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

3. **Environment Variables**
   \`\`\`
   CONTACT_EMAIL=your-email@example.com
   NEXT_PUBLIC_SITE_URL=https://yourdomain.com
   EMAIL_PROVIDER=sendgrid
   SENDGRID_API_KEY=your_sendgrid_key
   \`\`\`

4. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy your site
   - Automatic deployments on every push to main branch

### Custom Domain

1. **Add Domain in Vercel Dashboard**
   - Go to Project Settings > Domains
   - Add your custom domain

2. **Configure DNS**
   - Add CNAME record pointing to `cname.vercel-dns.com`
   - Or use Vercel nameservers for full DNS management

### Performance Optimization

Vercel automatically provides:
- Global CDN
- Image optimization
- Edge functions
- Automatic compression
- HTTP/2 and HTTP/3 support

## Netlify

### Prerequisites
- Netlify account
- Repository on GitHub/GitLab/Bitbucket

### Steps

1. **Connect Repository**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your repository

2. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`

3. **Environment Variables**
   \`\`\`
   CONTACT_EMAIL=your-email@example.com
   NEXT_PUBLIC_SITE_URL=https://yourdomain.netlify.app
   EMAIL_PROVIDER=sendgrid
   SENDGRID_API_KEY=your_sendgrid_key
   \`\`\`

4. **Deploy**
   - Click "Deploy site"
   - Automatic deployments on every push

### Netlify-Specific Configuration

Create `netlify.toml`:
\`\`\`toml
[build]
  command = "npm run build"
  publish = ".next"

[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/:splat"
  status = 200

[build.environment]
  NODE_VERSION = "18"
\`\`\`

## Railway

### Prerequisites
- Railway account
- GitHub repository

### Steps

1. **Create New Project**
   - Go to [railway.app](https://railway.app)
   - Click "New Project"
   - Deploy from GitHub repo

2. **Configure**
   - Railway auto-detects Next.js
   - Set environment variables in dashboard

3. **Custom Domain**
   - Go to project settings
   - Add custom domain
   - Configure DNS CNAME

## Self-Hosted (VPS/Dedicated Server)

### Prerequisites
- Server with Node.js 18+
- Domain name
- SSL certificate (Let's Encrypt recommended)

### Steps

1. **Server Setup**
   \`\`\`bash
   # Update system
   sudo apt update && sudo apt upgrade -y
   
   # Install Node.js
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   
   # Install PM2 for process management
   sudo npm install -g pm2
   \`\`\`

2. **Deploy Application**
   \`\`\`bash
   # Clone repository
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   
   # Install dependencies
   npm install
   
   # Build application
   npm run build
   
   # Start with PM2
   pm2 start npm --name "portfolio" -- start
   pm2 save
   pm2 startup
   \`\`\`

3. **Nginx Configuration**
   \`\`\`nginx
   server {
       listen 80;
       server_name yourdomain.com;
       return 301 https://$server_name$request_uri;
   }
   
   server {
       listen 443 ssl http2;
       server_name yourdomain.com;
       
       ssl_certificate /path/to/certificate.crt;
       ssl_certificate_key /path/to/private.key;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
           proxy_cache_bypass $http_upgrade;
       }
   }
   \`\`\`

4. **SSL Certificate (Let's Encrypt)**
   \`\`\`bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d yourdomain.com
   \`\`\`

## Docker Deployment

### Dockerfile
\`\`\`dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
\`\`\`

### Docker Compose
\`\`\`yaml
version: '3.8'
services:
  portfolio:
    build: .
    ports:
      - "3000:3000"
    environment:
      - CONTACT_EMAIL=your-email@example.com
      - NEXT_PUBLIC_SITE_URL=https://yourdomain.com
      - EMAIL_PROVIDER=sendgrid
      - SENDGRID_API_KEY=your_sendgrid_key
    restart: unless-stopped
\`\`\`

## Environment Variables

### Required Variables
\`\`\`env
CONTACT_EMAIL=your-email@example.com
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
\`\`\`

### Optional Variables
\`\`\`env
# Email Service
EMAIL_PROVIDER=console # or 'sendgrid', 'resend'
SENDGRID_API_KEY=your_sendgrid_key
RESEND_API_KEY=your_resend_key

# Analytics
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id

# Security (for production)
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=https://yourdomain.com
\`\`\`

## Post-Deployment Checklist

### Performance
- [ ] Lighthouse score ≥90
- [ ] Core Web Vitals passing
- [ ] Images optimized and loading properly
- [ ] Fonts loading correctly

### SEO
- [ ] Sitemap accessible at `/sitemap.xml`
- [ ] Robots.txt accessible at `/robots.txt`
- [ ] Meta tags rendering correctly
- [ ] Structured data valid (test with Google's Rich Results Test)

### Functionality
- [ ] Contact form working
- [ ] Email notifications received
- [ ] Theme toggle working
- [ ] Navigation working on all devices
- [ ] All project pages loading

### Security
- [ ] HTTPS enabled
- [ ] Security headers configured
- [ ] Contact form spam protection active
- [ ] No sensitive data exposed

### Analytics
- [ ] Analytics tracking working
- [ ] Speed Insights collecting data
- [ ] Error tracking configured

## Troubleshooting

### Build Errors
\`\`\`bash
# Clear Next.js cache
rm -rf .next

# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Check for TypeScript errors
npm run type-check
\`\`\`

### Runtime Errors
\`\`\`bash
# Check logs
pm2 logs portfolio

# Restart application
pm2 restart portfolio

# Check environment variables
pm2 env portfolio
\`\`\`

### Performance Issues
- Enable compression in your web server
- Configure proper caching headers
- Optimize images and fonts
- Use a CDN for static assets

For more help, check the main README or create an issue on GitHub.

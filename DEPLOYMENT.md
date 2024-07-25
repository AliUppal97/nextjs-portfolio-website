# Production Deployment Guide

## 🚀 Vercel Deployment Checklist

### 1. Environment Variables Setup

Add these environment variables in your Vercel dashboard:

#### Required Variables:
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
CONTACT_EMAIL=muzair21st@gmail.com
EMAIL_PROVIDER=resend
RESEND_API_KEY=your_resend_api_key_here
```

#### Optional Variables:
```env
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
```

### 2. Email Service Setup

#### Option A: Resend (Recommended)
1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Add to Vercel environment variables:
   ```
   EMAIL_PROVIDER=resend
   RESEND_API_KEY=your_api_key
   ```

#### Option B: SendGrid
1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Get your API key
3. Add to Vercel environment variables:
   ```
   EMAIL_PROVIDER=sendgrid
   SENDGRID_API_KEY=your_api_key
   ```

### 3. Domain Configuration

#### Custom Domain (Optional):
1. Go to Vercel Dashboard → Project → Settings → Domains
2. Add your custom domain
3. Update `NEXT_PUBLIC_SITE_URL` to your custom domain

### 4. Performance Optimization

The following optimizations are already configured:

- ✅ **Image Optimization**: WebP/AVIF formats with responsive sizing
- ✅ **Bundle Optimization**: Package imports optimization
- ✅ **Caching**: Aggressive caching for static assets
- ✅ **Compression**: Gzip/Brotli compression
- ✅ **Security Headers**: Complete security header configuration

### 5. SEO Configuration

- ✅ **Sitemap**: Auto-generated at `/sitemap.xml`
- ✅ **Robots.txt**: Auto-generated at `/robots.txt`
- ✅ **Meta Tags**: Dynamic meta tags for all pages
- ✅ **Structured Data**: JSON-LD schema markup
- ✅ **Open Graph**: Social media sharing optimization

### 6. Monitoring & Analytics

- ✅ **Vercel Analytics**: Automatically enabled
- ✅ **Speed Insights**: Core Web Vitals monitoring
- ✅ **Error Tracking**: Built-in error boundaries

## 🔧 Pre-Deployment Checklist

- [ ] All environment variables configured
- [ ] Email service API key added
- [ ] Custom domain configured (if applicable)
- [ ] Contact form tested
- [ ] All pages accessible
- [ ] Images loading correctly
- [ ] SEO metadata verified

## 🚀 Deployment Steps

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "feat: production-ready deployment configuration"
   git push origin main
   ```

2. **Vercel Auto-Deploy**:
   - Vercel will automatically detect changes
   - Build will start automatically
   - Deployment will complete in ~2-3 minutes

3. **Verify Deployment**:
   - Check all pages load correctly
   - Test contact form functionality
   - Verify email notifications work
   - Check performance metrics

## 📊 Post-Deployment Verification

### Performance Checks:
- [ ] Lighthouse score > 90
- [ ] Core Web Vitals in green
- [ ] Images optimized and loading fast
- [ ] No console errors

### Functionality Checks:
- [ ] Contact form sends emails
- [ ] All navigation links work
- [ ] Project pages load correctly
- [ ] Resume download works
- [ ] Theme toggle functions

### SEO Checks:
- [ ] Sitemap accessible at `/sitemap.xml`
- [ ] Robots.txt accessible at `/robots.txt`
- [ ] Meta tags present on all pages
- [ ] Open Graph tags working
- [ ] Structured data valid

## 🛠️ Troubleshooting

### Common Issues:

1. **Build Failures**:
   - Check TypeScript errors: `npm run type-check`
   - Check ESLint errors: `npm run lint`
   - Verify all imports are correct

2. **Email Not Working**:
   - Verify API key is correct
   - Check environment variables in Vercel
   - Test with console provider first

3. **Images Not Loading**:
   - Check image paths are correct
   - Verify images are in `/public` folder
   - Check Next.js image configuration

4. **SEO Issues**:
   - Verify `NEXT_PUBLIC_SITE_URL` is correct
   - Check sitemap generation
   - Validate structured data

## 📈 Performance Monitoring

After deployment, monitor:
- **Vercel Analytics**: User behavior and performance
- **Speed Insights**: Core Web Vitals tracking
- **Error Logs**: Check Vercel function logs
- **Uptime**: Monitor site availability

## 🔄 Updates & Maintenance

### Regular Updates:
- Update dependencies monthly
- Monitor performance metrics
- Check for security updates
- Review analytics data

### Content Updates:
- Update projects in `data/projects.json`
- Update resume in `data/resume.json`
- Refresh images as needed
- Update contact information

---

**Your portfolio is now production-ready! 🎉**

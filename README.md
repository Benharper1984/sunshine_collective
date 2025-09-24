# The Sunshine Collective Website

A beautiful, responsive website for The Sunshine Collective, featuring a stunning gradient-based design using your custom color palette and seasonal theming.

## 🌈 Color Palette

This website uses your provided PNG color palette:
- **Light**: `#f9fafd` - Clean, fresh backgrounds
- **Warm Neutral**: `#8c756a` - Natural, earthy text and accents  
- **Cyan**: `#1ac8db` - Vibrant primary accent
- **Blue**: `#0292b7` - Deep water-inspired secondary
- **Light Cyan**: `#99dfec` - Soft, sky-like highlights
- **Forest**: `#217650` - Rich, natural green

## ✨ Features

### Design & Visual
- **Seasonal Theming**: Automatically changes color scheme based on current season
- **Beautiful Gradients**: Multiple gradient combinations using your color palette
- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Smooth Animations**: Fade-ins, hover effects, and micro-interactions
- **Modern Typography**: Inter + Crimson Text font pairing

### Functionality
- **Interactive Navigation**: Smooth scrolling, mobile hamburger menu
- **Testimonials Carousel**: Auto-playing with manual controls and touch support
- **Gallery Filtering**: Category-based filtering with smooth animations
- **Image Lightbox**: Full-screen image viewer with keyboard navigation
- **Form Validation**: Real-time validation with helpful error messages
- **Newsletter Integration**: Ready for Google Sheets integration
- **Contact Forms**: Advanced form with progress tracking and enhancements

### Pages
1. **Home** (`index.html`) - Hero, services preview, testimonials, newsletter signup
2. **Services** (`services.html`) - Detailed service descriptions and packages
3. **About** (`about.html`) - Mission, team bio, permaculture philosophy
4. **Gallery** (`gallery.html`) - Project showcases with filtering
5. **Contact** (`contact.html`) - Contact form, booking, consultation options

## 🚀 Getting Started

### Local Development
1. Clone or download the project files
2. Open `index.html` in your browser to view the website
3. For development, use a local server (like VS Code's Live Server extension)

### File Structure
```
the_sunshine_collective/
├── index.html                 # Home page
├── services.html             # Services page  
├── about.html               # About page
├── gallery.html             # Gallery page
├── contact.html             # Contact page
└── assets/
    ├── css/
    │   ├── main.css         # Global styles and color system
    │   ├── home.css         # Home page specific styles
    │   ├── services.css     # Services page styles
    │   ├── about.css        # About page styles
    │   ├── gallery.css      # Gallery page styles
    │   └── contact.css      # Contact page styles
    ├── js/
    │   ├── main.js          # Global JavaScript functionality
    │   ├── home.js          # Home page interactions
    │   ├── gallery.js       # Gallery filtering and lightbox
    │   └── contact.js       # Contact form handling
    ├── images/              # Place your photos here
    └── fonts/               # Custom fonts (if needed)
```

## 🎨 Customization

### Adding Your Photos
1. Place your photos in the `assets/images/` folder
2. Update the gallery items in `gallery.html`:
   ```html
   <div class="gallery-item" data-category="gardens">
       <img src="assets/images/your-photo.jpg" alt="Description">
       <!-- ... -->
   </div>
   ```

### Seasonal Themes
The website automatically switches themes based on the current date:
- **Spring** (March-May): Nature-focused gradients
- **Summer** (June-August): Bright cyan and blue
- **Autumn** (September-November): Warm earthy tones  
- **Winter** (December-February): Cool ocean gradients

### Color System
All colors are defined as CSS custom properties in `main.css`:
```css
:root {
  --color-light: #f9fafd;
  --color-warm-neutral: #8c756a;
  --color-cyan: #1ac8db;
  /* ... more colors */
  --gradient-primary: linear-gradient(135deg, var(--color-cyan) 0%, var(--color-blue) 100%);
  /* ... more gradients */
}
```

## 🔧 Integration Setup

### Google Sheets Newsletter
To connect the newsletter signup to Google Sheets:
1. Create a Google Apps Script web app
2. Update the `submitToGoogleSheets()` function in `main.js`
3. Replace the placeholder URL with your Apps Script endpoint

### Contact Form Backend
The contact form currently shows success/error messages. To make it functional:
1. Set up a backend service (Node.js, PHP, etc.) or use a service like Formspree
2. Update the `submitContactForm()` function in `contact.js`
3. Configure your email service integration

### Calendar Integration
For consultation booking:
1. Set up Calendly, Acuity, or similar booking service
2. Update the booking URLs in `contact.js`
3. Or integrate with Google Calendar API for custom booking

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 481px - 768px  
- **Desktop**: 769px - 1024px
- **Large Desktop**: > 1024px

## 🌟 Performance Optimizations

- **Lazy Loading**: Images load only when needed
- **Debounced Events**: Scroll and resize events are optimized
- **Compressed Images**: Optimize your photos before uploading
- **Minification**: Consider minifying CSS/JS for production

## 🎯 SEO Ready

- Semantic HTML structure
- Meta descriptions and titles
- Alt text for images
- Structured data ready
- Mobile-friendly design

## 🧪 Browser Support

- Chrome (latest)
- Firefox (latest)  
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📝 Content Areas to Update

1. **Replace placeholder text** with your actual content
2. **Add real testimonials** in the home page carousel
3. **Update Kelly's bio and photo** in the about section
4. **Add your actual photos** to the gallery
5. **Update contact information** (email, phone, social links)
6. **Customize service descriptions** and pricing
7. **Add your actual service area** in contact page

## 🚀 Going Live

1. **Choose a hosting provider** (Netlify, Vercel, GitHub Pages, or traditional hosting)
2. **Set up your domain name**
3. **Configure SSL certificate** (usually automatic with modern hosts)
4. **Set up analytics** (Google Analytics, etc.)
5. **Test all forms and functionality**
6. **Submit to search engines**

## 💡 Future Enhancements

- Blog section for permaculture tips
- Client portal for project updates
- Online course integration  
- E-commerce for workshops
- Advanced booking system
- Multi-language support

## 🆘 Support

This implementation provides a solid foundation for your website. The code is well-documented and modular, making it easy to extend and customize as your business grows.

---

*Built with love for regenerative living and sustainable design* 🌱
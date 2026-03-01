# SolarSquare - Solar Energy Website

A comprehensive, professional solar energy company website built with Next.js 16, Firebase, and Tailwind CSS.

## 🌟 Features

### Pages Included
- **Home** - Hero section, solutions showcase, testimonials, FAQ preview, and news
- **About Us** - Company mission, values, team, and achievements
- **Solar Solutions** - Overview of 3 solution types (Homes, Housing Society, Commercial) with detail pages
- **Services** - 6 core services with features and process
- **Portfolio** - 6 completed project case studies with detailed results
- **Blog** - 6 sample blog posts with full content and related posts
- **FAQ** - 12 comprehensive FAQs organized by tabs (General, Maintenance, Economics)
- **Contact** - Contact form, business info, and embedded map

### Technology Stack
- **Framework**: Next.js 16 with App Router
- **Database**: Firebase Firestore
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Form Handling**: React Hook Form + Zod
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/pnpm
- Firebase project (create one at [firebase.google.com](https://firebase.google.com))

### 1. Installation

Clone the repository and install dependencies:

```bash
pnpm install
# or
npm install
```

### 2. Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Create a new project
3. Create a Firestore database
4. In Project Settings, copy your Firebase configuration

### 3. Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

Fill in your Firebase credentials:

```
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### 4. Run Development Server

```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

## 📁 Project Structure

```
app/
├── layout.tsx              # Root layout with navigation & footer
├── page.tsx                # Home page
├── about/page.tsx          # About Us page
├── solar-solutions/        # Solar Solutions section
│   ├── page.tsx            # Solutions overview
│   └── [category]/page.tsx # Individual solution details
├── services/page.tsx       # Services page
├── portfolio/              # Portfolio section
│   ├── page.tsx            # Portfolio overview
│   └── [slug]/page.tsx     # Project case studies
├── blog/                   # Blog section
│   ├── page.tsx            # Blog listing
│   └── [slug]/page.tsx     # Individual blog posts
├── faq/page.tsx            # FAQ page
├── contact/page.tsx        # Contact page
└── globals.css             # Global styles

components/
├── Navigation.tsx          # Top navigation bar
├── Footer.tsx              # Footer with links
├── HeroSection.tsx         # Homepage hero
├── SolutionsShowcase.tsx   # Solutions grid
├── TestimonialsSection.tsx # Customer testimonials
├── FAQSection.tsx          # Homepage FAQ preview
└── NewsSection.tsx         # Blog preview

lib/
├── firebase.ts             # Firebase configuration
├── constants.ts            # Site colors, navigation items
└── utils.ts                # Helper utilities

public/
├── images/                 # Image assets
└── logos/                  # Brand logos
```

## 🎨 Customization

### Colors
Edit `lib/constants.ts` to change the color scheme:

```typescript
export const COLORS = {
  primary: '#1e40af',      // Primary blue
  gold: '#fbbf24',         // Gold accents
  darkBlue: '#0c2340',     // Dark blue for footer
  lightBlue: '#f0f9ff',    // Light background
  // ...
};
```

### Site Information
Update `lib/constants.ts` and `app/layout.tsx` with your company information:

```typescript
export const SITE_CONFIG = {
  name: 'Your Company Name',
  description: 'Your company description',
  url: 'https://yoursite.com',
  // ...
};
```

### Navigation Items
Modify navigation in `lib/constants.ts`:

```typescript
export const NAV_ITEMS = [
  { label: 'Your Item', href: '/your-path' },
  // ...
];
```

## 🔗 Firebase Integration

### Firestore Collections Setup

When ready to use real data, create these collections in Firebase:

```
blog_posts/
├── id: string
├── title: string
├── slug: string
├── content: string
├── excerpt: string
├── author: string
├── category: string
├── created_at: timestamp
└── published: boolean

testimonials/
├── id: string
├── customer_name: string
├── company: string
├── content: string
├── rating: number
└── created_at: timestamp

portfolio_items/
├── id: string
├── title: string
├── slug: string
├── description: string
├── capacity: string
├── location: string
├── savings: string
├── category: string
├── created_at: timestamp
└── image_url: string

services/
├── id: string
├── title: string
├── description: string
├── features: array
└── icon: string

faqs/
├── id: string
├── question: string
├── answer: string
├── category: string
└── order: number

contact_submissions/
├── id: string
├── name: string
├── email: string
├── phone: string
├── subject: string
├── message: string
└── created_at: timestamp
```

## 📱 Responsive Design

The site is fully responsive and optimized for:
- Mobile (320px and up)
- Tablet (768px and up)
- Desktop (1024px and up)

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Add environment variables in Vercel project settings
4. Deploy with one click

### Deploy to Other Platforms

The site can be deployed to any Node.js hosting:
- Netlify
- Railway
- Render
- AWS Amplify
- Google Cloud Run

## 📝 Content Management

Currently, content is hardcoded in components. To add dynamic content:

1. Create Firebase collections as outlined above
2. Update components to fetch from Firebase using `@react-three/fiber` or Firestore SDK
3. Implement admin dashboard for content management

## 🔒 Security

- Environment variables are kept secure
- Firebase Security Rules should be configured for production
- Implement authentication for admin features

## 📄 License

This project is ready for commercial use.

## 🤝 Support

For questions or issues:
- Email: hello@solarsquare.in
- Phone: +91 8888 999 999

## 🎯 Next Steps

1. ✅ Install dependencies
2. ✅ Configure Firebase
3. ✅ Set environment variables
4. ✅ Customize content and colors
5. ✅ Add your images and logos
6. ✅ Deploy to production

---

**Made with ❤️ for the solar energy revolution**

# SolarSquare Setup Guide

Complete step-by-step instructions to get your solar website up and running.

## Prerequisites

- Node.js 18 or higher
- npm or pnpm package manager
- A Firebase account (free tier is sufficient to start)

## Step 1: Clone & Install

```bash
# Install dependencies
pnpm install
# or
npm install
```

## Step 2: Create Firebase Project

1. Visit [Firebase Console](https://console.firebase.google.com)
2. Click "Add project" and enter your project name
3. Accept the terms and create the project
4. Wait for Firebase to set up your project

## Step 3: Set Up Firestore

1. In Firebase Console, go to "Build" → "Firestore Database"
2. Click "Create database"
3. Choose "Start in test mode" (you can change to production later)
4. Select your preferred region
5. Click "Enable"

## Step 4: Get Firebase Credentials

1. Click on the "Project Settings" (gear icon) in the top left
2. Go to the "General" tab
3. Scroll down to "Your apps" section
4. Click on the web icon `</>`
5. Copy the Firebase configuration

Your credentials will look like this:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-123",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123def456"
};
```

## Step 5: Configure Environment Variables

1. In your project root, create `.env.local` file
2. Copy the content from `.env.example`:

```bash
cp .env.example .env.local
```

3. Fill in your Firebase credentials:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

## Step 6: Start Development Server

```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

You should see the beautiful SolarSquare website!

## Step 7: Customize Content

### Update Site Information

Edit `lib/constants.ts`:

```typescript
export const SITE_CONFIG = {
  name: 'Your Solar Company',
  description: 'Your company tagline',
  url: 'https://yoursite.com',
  // Add your social media links
};
```

### Update Colors

Edit the `COLORS` object in `lib/constants.ts`:

```typescript
export const COLORS = {
  primary: '#1e40af',      // Change primary color
  gold: '#fbbf24',         // Change accent color
  darkBlue: '#0c2340',
  lightBlue: '#f0f9ff',
  gray: '#6b7280',
  white: '#ffffff',
};
```

### Update Solutions

Modify the `SOLUTIONS` array in `lib/constants.ts`:

```typescript
export const SOLUTIONS = [
  {
    id: 'homes',
    title: 'Residential Solar',
    description: 'For individual homes',
    image: '/images/solutions/homes.jpg',
  },
  // Add your solutions
];
```

## Step 8: Add Your Content

### Blog Posts

The blog posts are currently hardcoded in `/app/blog/[slug]/page.tsx`. To add new posts:

1. Create a new entry in the `blogPosts` object with a unique slug
2. Add title, author, date, content
3. The page will automatically be available at `/blog/your-slug`

### Portfolio Projects

Portfolio projects are in `/app/portfolio/[slug]/page.tsx`. Similar process:

1. Add project data to the `projectData` object
2. Each project needs: title, location, capacity, savings, details, results
3. Page available at `/portfolio/your-slug`

### Team Members

Update team in `/app/about/page.tsx`:

```typescript
{ name: 'Your Name', role: 'Your Role', emoji: '👨‍💼' }
```

## Step 9: Add Images & Assets

Create these directories and add your assets:

```
public/
├── images/
│   ├── hero-bg.jpg      # Homepage hero background
│   ├── solutions/       # Solution category images
│   └── portfolio/       # Portfolio project images
└── logos/               # Brand logos
```

## Step 10: Set Up Firebase Collections (Optional)

For dynamic content from Firebase, create these collections:

1. In Firestore, create a collection called `blog_posts`
2. Add sample documents with fields: title, slug, content, author, date
3. Update your components to fetch from Firebase

Example code:

```typescript
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';

const posts = await getDocs(collection(db, 'blog_posts'));
```

## Step 11: Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project" and import your GitHub repository
4. Add environment variables in project settings
5. Click "Deploy"

Your site will be live in seconds!

## Important Notes

### Environment Variables

- `NEXT_PUBLIC_` prefix means these are public and visible in browser
- These are safe to expose (they have security restrictions on Firebase)
- Keep your actual Firebase keys safe

### Firebase Security Rules

For production, set up proper Firestore Security Rules:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow public read access to published content
    match /blog_posts/{document=**} {
      allow read;
    }
    // Allow anyone to submit contact forms
    match /contact_submissions/{document=**} {
      allow create;
    }
    // Restrict other collections
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

## Customization Ideas

- [ ] Add your company logo
- [ ] Update color scheme to match your brand
- [ ] Add your team member photos
- [ ] Update testimonials with real customer reviews
- [ ] Add your actual portfolio projects
- [ ] Write original blog content
- [ ] Set up contact form to send emails (integrate with SendGrid/Mailgun)
- [ ] Add live chat support
- [ ] Implement user accounts and project tracking
- [ ] Add financing calculator

## Troubleshooting

### Firebase Connection Issues

- Check environment variables are correct
- Ensure `.env.local` file exists
- Verify Firebase project is active
- Check Network tab in browser DevTools

### Styling Issues

- Clear `.next` folder and rebuild
- Check that Tailwind CSS is properly installed
- Verify `globals.css` is imported in layout

### Build Errors

```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

## Next Steps

1. ✅ Complete this setup
2. Customize content and colors
3. Add your images and branding
4. Test all pages and forms
5. Deploy to production
6. Monitor analytics

## Support

- Firebase Documentation: https://firebase.google.com/docs
- Next.js Documentation: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs

---

**You're all set! Your solar website is ready to launch.** 🚀

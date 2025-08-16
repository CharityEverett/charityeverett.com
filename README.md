# Charity Everett Art Portfolio

A beautiful, responsive portfolio website for artist Charity Everett, showcasing her kintsugi-inspired artwork and philosophy.

## Features

- Responsive design with elegant typography using Cinzel font
- Hero section with background image
- About section with artist biography
- Contact form with email functionality
- Modern, minimalist aesthetic

## Contact Form Setup

The contact form is configured to send emails to `charityeverett23@gmail.com` using Supabase Edge Functions and the Resend email service.

### Email Service Configuration

To enable email functionality, you need to:

1. **Set up Resend Account:**
   - Go to [Resend.com](https://resend.com) and create an account
   - Verify your domain or use their sandbox domain for testing
   - Get your API key from the dashboard

2. **Configure Environment Variables:**
   - In your Supabase project, go to Settings > Edge Functions
   - Add the environment variable: `RESEND_API_KEY` with your Resend API key

3. **Domain Configuration:**
   - Update the `from` email address in the edge function to match your verified domain
   - For testing, you can use `onboarding@resend.dev`

### Local Development

For local development with Supabase:

```bash
# Install Supabase CLI (if not already installed)
npm install -g supabase

# Start local Supabase
supabase start

# Deploy edge functions locally
supabase functions deploy send-contact-email --local
```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Technologies Used

- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- Supabase Edge Functions for serverless email handling
- Resend for email delivery
- Lucide React for icons

## Project Structure

```
src/
├── App.tsx          # Main application component
├── main.tsx         # Application entry point
└── index.css        # Global styles

supabase/
└── functions/
    └── send-contact-email/
        └── index.ts  # Email sending edge function
```

## Deployment

The site is deployed on Netlify. The contact form requires Supabase Edge Functions to be deployed and configured with the proper environment variables for email functionality.
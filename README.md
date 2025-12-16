# Discover Morocco Trip

A modern, responsive travel website for booking tours and experiences in Morocco.

## Features

- 🏜️ Curated collection of Morocco tours and experiences
- 📱 Fully responsive design for all devices
- 🎨 Beautiful teal and gold color scheme
- ⚡ Built with React, TypeScript, and Vite
- 🎯 Tailwind CSS for styling
- 🧩 shadcn/ui components

## Tech Stack

- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui (Radix UI)
- **Routing:** React Router DOM
- **State Management:** TanStack Query

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, or bun

### Installation

```bash
# Install dependencies
npm install
# or
bun install

# Start development server
npm run dev
# or
bun dev
```

The site will be available at `http://localhost:8080`

### Build for Production

```bash
npm run build
# or
bun run build
```

## Project Structure

```
discover-morocco-trip/
├── public/           # Static assets
├── src/
│   ├── components/   # Reusable components
│   │   └── ui/       # shadcn/ui components
│   ├── data/         # Tour data
│   ├── hooks/        # Custom React hooks
│   ├── lib/          # Utility functions
│   ├── pages/        # Page components
│   ├── App.tsx       # Main app component
│   └── main.tsx      # Entry point
├── index.html        # HTML template
└── package.json      # Dependencies
```

## Pages

- **Home** (`/`) - Landing page with featured tours
- **Tours** (`/tours`) - Browse all available tours
- **Tour Detail** (`/tours/:id`) - Individual tour details
- **Contact** (`/contact`) - Contact form and information

## Customization

### Colors

Edit the CSS variables in `src/index.css` to change the color scheme:

- Primary: Teal (#0d9488)
- Accent: Golden (#d4a853)
- Secondary: Warm beige (#d4a574)

### Tours Data

Add or modify tours in `src/data/tours.ts`

## Deployment

This site is configured for deployment on:

- **Netlify** - `netlify.toml` included
- **Vercel** - `vercel.json` included

## License

This project is for demonstration purposes.

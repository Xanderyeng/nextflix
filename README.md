# Cinereel App

A modern, responsive web application for browsing movies and TV shows, built with Next.js 14, React, and Tailwind CSS.

![Screenshot 1](screenshot1.png){: style="width: 100%"}

![Screenshot 2](dark.png){: style="width: 50%"}

![Screenshot 3](light.png){: style="width: 50%"}

## Features

- Browse popular movies and TV shows
- Server-side rendering for improved performance and SEO
- Google tag manager and analytics inclusion.
- View detailed information about movies and TV shows
- Responsive design with mobile-friendly navigation
- Animated UI elements using Framer Motion

## Getting Started

### Prerequisites

- Node.js 14.x or later
- npm or yarn
- Typescript
- Shadcn
- Tailwind CSS
- Framer-Motion
- Google Cloud Account ( Google Tag Manager & Google Analytics )

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/Xanderyeng/cinereel.git
   cd cinereel
   ```

2. Install dependencies:
   ```
   bun install
   ```
   or
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

4. Set up environment variables:
   Create a `.env.local` file in the root directory and add your API keys:
   ```
   TMDB_API_KEY=your_tmdb_api_key
   ```
   Remember to create an account on Google cloud console and obtain a google tag manager ID.
   ```

5. Run the development server:
   ```
   bun run dev
   ```
   or
   ```
   yarn dev
   ```
   or
   ```
   npm dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## Deployment

This app can be easily deployed to Vercel or any other Next.js-compatible hosting platform.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

export type Project = {
  id: string
  title: string
  name: string
  description: string
  isAlive: boolean
  status: 'live' | 'wip' | 'archived' | 'running'
  stack: string[]
  url?: string
  detail: string
  // ── detalle extendido ──
  highlights?: string[]        // bullets de puntos fuertes
  challenges?: string[]        // problemas que resolviste
  screenshots?: string[]       // urls de imágenes cuando las tengas
  role?: string                // "solo project" / "lead dev" / etc
  year?: string                // "2024" / "2024 — present"
  repo?: string                // url github si es público
}

export const projects: Project[] = [
  {
    id: 'gimtest',
    title: 'GIM_TEST',
    name: 'GimTest',
    description: 'Full gym management SaaS — exercises, routines, students, schedules, automated sessions.',
    isAlive: true,
    status: 'live',
    stack: ['next.js', 'fastapi', 'supabase', 'postgresql', 'shadcn/ui', 'tanstack table'],
    url: 'https://gim-project.vercel.app',
    detail: 'Real-world SaaS app. Handles exercises (reps & timed), routines, student management. Supabase auth with protected routes, RLS',
    year: '2024 — present',
    role: 'solo project',
    repo: 'https://github.com/ignacio-vivar/gim-project',
    highlights: [
      'APScheduler for automatic session status transitions',
      'Row-Level Security with SECURITY DEFINER functions',
      'Supabase updates for user roles',
      'TanStack Table for complex data views',
      'Custom schedule template with per-day start times',
      'Components to solve, exercises management and routines, with time-line of scheduled sessions'
    ],
    challenges: [
      'Supabase Auth integration',
      'Docker port reservation conflicts on WSL2',
      'ARRAY(Time) columns with SQLAlchemy ORM',
      'Optimization of loading times for components'
    ],
    screenshots: [
      'https://images.dog.ceo/breeds/shiba/shiba-1.jpg',
      'https://images.dog.ceo/breeds/shiba/shiba-2.jpg',
    ]
  },
  {
    id: 'cdf-vivar',
    title: 'ASTRO / MDX',
    name: 'CDF Vivar',
    description: 'Astro-powered content platform. MDX + Google Drive file integration. Built with agentic coding.',
    isAlive: true,
    status: 'live',
    stack: ['astro', 'mdx', 'google drive', 'vercel', 'antigravity'],
    url: 'https://cdf-vivar.vercel.app',
    detail: 'Material preview & download site built in Astro. Uses MDX for content and links files stored in Google Drive. First project using Antigravity for agentic AI-assisted development.',
    highlights: ['fast and usefull webpage for students', 'easy implemntation of new content', 'powerfull MDX format to use markdown and components'],
    challenges: ['manual instalation of dependencies, agents have trouble with dependencies managment']
  },
  {
    id: 'cdf-cnc',
    title: 'CNC / FILE HUB',
    name: 'CDF — CNC Platform',
    description: 'File preview & download portal for CNC machining content. Figma-designed, React + FastAPI.',
    isAlive: true,
    status: 'live',
    stack: ['react', 'fastapi', 'figma'],
    detail: 'Educational CNC resource platform. Pre-designed in Figma before dev. File serving via FastAPI backend — fast to ship, not ideal for CDN scaling. Real constraint, real lesson.',
  },
  {
    id: 'nutrition-bot',
    title: 'BOT / VPS',
    name: 'Nutrition Bot',
    description: 'Telegram bot with FatSecret API integration. VPS-hosted, personal Telegram ID auth gate.',
    isAlive: true,
    status: 'running',
    stack: ['python', 'telegram bot api', 'fatsecret api', 'vps'],
    detail: 'Personal Telegram bot for nutrition tracking. Access-controlled via Telegram user ID. Deployed on a VPS for 24/7 uptime — no cloud functions, no complexity.',
  },
  {
    id: 'docs-mobile',
    title: 'DOCS / MOBILE',
    name: 'Docs Mobile',
    description: 'Document management app, mobile-first. Custom FastAPI auth, never reached production.',
    isAlive: false,
    status: 'wip',
    stack: ['react', 'fastapi', 'jwt auth', 'mobile-first'],
    detail: 'Mobile-first document management. Manual JWT auth with FastAPI — no OAuth library, custom token handling. Functional but never deployed. Shows iteration process and early auth patterns.',
  },
  {
    id: 'proposite',
    title: 'TANSTACK / AUTH',
    name: 'Proposite',
    description: 'First TanStack Table implementation. Manual FastAPI auth. Built to get unstuck — shipped anyway.',
    isAlive: false,
    status: 'archived',
    stack: ['react', 'tanstack table', 'fastapi', 'manual auth'],
    detail: 'Built to learn, not to ship. First hands-on use of TanStack Table. The patterns carried forward to GimTest.',
  },
]

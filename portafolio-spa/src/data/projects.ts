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
  summary?: string
  role?: string                // "solo project" / "lead dev" / etc
  year?: string                // "2024" / "2024 — present"
  repos?: { label: string; url: string }[]
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
    // repos: [{ label: 'frontend', url: 'https://github.com/ignacio-vivar/gim-project' }],
    highlights: [
      'APScheduler for automatic session status transitions',
      'Row-Level Security with SECURITY DEFINER functions',
      'Supabase updates for user roles',
      'TanStack Table for complex data views',
      'Custom schedule template with per-day start times',
      'Dedicated components for exercise management and routines, with a timeline of scheduled sessions'
    ],
    challenges: [
      'Supabase Auth integration',
      'Docker port reservation conflicts on WSL2',
      'ARRAY(Time) columns with SQLAlchemy ORM',
      'Optimizing component loading times'
    ],
    screenshots: [
      'https://drive.google.com/file/d/1LlMEAIInYxud6ESAXX4yFsyPVdSoBECO/preview',
      'https://drive.google.com/file/d/1EXrGmHB1ue-hrELFQLHO2xdCcukM6eI7/preview',
      'https://drive.google.com/file/d/11ySNnTVSeGRuxN5EEPV7xEmY-vCXd1Dx/preview',
      'https://drive.google.com/file/d/1CQhe7gkKnp2dpJe7xr5GSX0gx_m8KkV5/preview',
      'https://drive.google.com/file/d/1yCluvUhoHcU6DKpMFuuQKB_NEEM-wVPH/preview',
      'https://drive.google.com/file/d/1oHswz9W8yAlO00ndhrmeJxRL7EpG_M40/preview'

    ],
    summary: `In this project I built a SPA with multiple tabs to cover the product's needs. Since the customer is a native Spanish speaker, the frontend is only available in Spanish.
The app is composed of three elements: a FastAPI backend, Supabase for the database and authentication, and a Next.js frontend. 
There are tabs to view student routines, backed by a global context that retains recently viewed ones. Another tab shows student schedules and their status. A routine editor allows creating or editing routines. 
Finally, there are tabs for student and exercise management. The whole process is documented in Obsidian and Excalidraw. As a bonus, the app lets the trainer configure a set of custom variables.
The app is not finished, but has a stable version in active use. It is also my current main focus.`,
  },
  {
    id: 'cdf-vivar',
    title: 'ASTRO / MDX',
    name: 'CDF Vivar',
    description: 'Astro-powered content platform. MDX + Google Drive file integration. Built with agentic coding.',
    isAlive: true,
    status: 'live',
    repos: [{ label: 'repo', url: 'https://github.com/ignacio-vivar/vibe_astro_blog' }],
    stack: ['astro', 'mdx', 'google drive', 'vercel', 'antigravity'],
    url: 'https://cdf-vivar.vercel.app',
    detail: 'Material preview & download site built in Astro. Uses MDX for content and links files stored in Google Drive. First project using Antigravity for agentic AI-assisted development.',
    highlights: ['Fast and useful page for students', 'Easy addition of new content', 'Powerful MDX format — Markdown with embedded components'],
    challenges: ['Manual installation of dependencies — agents struggle with dependency management'],
    summary: `This was an agentic build where I chose Astro to create a fast, easy-to-update blog for sharing course materials across my subjects as a teacher. 
I used MDX to combine regular Markdown with embedded components. 
The site is public and requires no login — it was designed as an alternative to the Moodle campus, which had a cumbersome login and a difficult student enrollment process.`,
    screenshots: ['https://drive.google.com/file/d/1elWYqCcJ36D3WhalyHzeHIUmUtCzEsFF/preview',
      'https://drive.google.com/file/d/1HoG1XyaqI5bwKls93t0FIoQ63SENikDC/preview']
  },
  {
    id: 'cdf-cnc',
    title: 'CNC / FILE HUB',
    name: 'CDF — CNC Platform',
    description: 'File preview & download portal for CNC machining content. Figma-designed, React + FastAPI.',
    isAlive: true,
    status: 'live',
    repos: [{ label: 'frontend', url: 'https://github.com/ignacio-vivar/FrontCNC' }, { label: 'backend', url: 'https://github.com/ignacio-vivar/BackCNC' }],
    stack: ['react', 'fastapi', 'figma'],
    url: 'https://cncwebpage.netlify.app/',
    detail: 'Educational CNC resource platform. Pre-designed in Figma before dev. File serving via FastAPI backend — fast to ship, not ideal for CDN scaling. Real constraint, real lesson.',
    summary: `This was the first project I built in React. 
I used browser-based AI assistance, but a significant portion of the work was done by hand, which made development considerably slower. 
The goal was to give students easy access to all available course materials in one place. As you could see if you watch the backend repo, this project has a clear design mistake: 
I stored the files directly on the backend server instead of using a dedicated file hosting service.`,
    screenshots: ['https://drive.google.com/file/d/1Hw373RNZ-B73ykq4iibmBbo_-bv4iH0O/preview']
  },
  {
    id: 'nutrition-bot',
    title: 'BOT / VPS',
    name: 'Nutrition Bot',
    description: 'Telegram bot with FatSecret API integration. VPS-hosted, personal Telegram ID auth gate.',
    isAlive: true,
    status: 'running',
    repos: [{ label: 'repo', url: 'https://github.com/ignacio-vivar/bot_telegram' }],
    stack: ['python', 'telegram bot api', 'fatsecret api', 'fastapi', 'vps'],
    detail: 'Personal Telegram bot for nutrition tracking. Access-controlled via Telegram user ID. Deployed on a VPS for 24/7 uptime — no cloud functions, no complexity.',
    highlights: ['Usage of VPS', 'Bot only functional for myself'],
    challenges: ['Retrieve all meals information into a json file', '3 steps authentication token for users in FatSecret API'],
    summary: `I discovered that the FatSecret API exposes free endpoints, so I decided to build a Telegram bot to reduce the time I spend logging calories and food intake.
I read the FatSecret API docs and used Postman to understand how to obtain tokens. Then I tested the endpoints — some had restrictions, but I found useful ones for searching foods.
I used the fuzzy library to match similar search terms, and FastAPI to keep the server running. For access control, I restricted the bot to my own Telegram ID.
One key constraint: FatSecret API requires a static IP, so I solved that by renting a VPS on Contabo. 
Another key finding was that it was straightforward to write scripts to retrieve the identifiers for different types of meals.`,
    screenshots: ['https://drive.google.com/file/d/1IkkKd0yicJDvlkKWsiWP3cGuxyoYsvqb/preview']
  },

  {
    id: 'docs-mobile',
    title: 'DOCS / MOBILE',
    name: 'Docs Mobile',
    description: 'Document management app, mobile-first. Custom FastAPI auth, never reached production.',
    isAlive: false,
    status: 'archived',
    stack: ['react', 'fastapi', 'jwt auth', 'mobile-first', 'shadcn', 'notion'],
    detail: 'Mobile-first document management. Manual JWT auth with FastAPI — no OAuth library, custom token handling. Functional but never deployed.',
    summary: `This project was commissioned by a group of doctors.
I teamed up with a developer friend, but we eventually stopped working on it because we couldn't find a sustainable balance between the time we were investing and the effort required 
to maintain a large-scale app — plus the hosting costs. The project was private, and aimed to solve scheduling and workflow difficulties for medical staff.
In this process we refactored many components and tried to follow best practices — which had two sides: it made components, hooks, and structure more reusable across projects, 
but it consumed a lot of time and the app never got close to the original vision.`,
    highlights: ['Selection of shadcn to UI framework'],
    challenges: ['Understanding the code of my teammate and his business logic'],

    screenshots: ['https://drive.google.com/file/d/1Cy8xBYiVTPccKU4TTbQzkMaHCLs1ga7d/preview']
  },
  {
    id: 'proposite',
    title: 'TANSTACK / AUTH',
    name: 'Proposite',
    description: 'First TanStack Table implementation. Manual FastAPI auth. Built to get unstuck — shipped anyway.',
    isAlive: false,
    status: 'archived',
    repos: [{ label: 'frontend-student', url: 'https://github.com/ignacio-vivar/proposite-project-student-frontend' },
    { label: 'frontend-teacher', url: 'https://github.com/ignacio-vivar/proposite-project-admin-frontend' },
    { label: 'backend', url: 'https://github.com/ignacio-vivar/backend_proposite_project' }],
    stack: ['react', 'tanstack table', 'fastapi', 'manual auth'],
    detail: 'Built to learn, not to ship. First hands-on use of TanStack Table. The patterns carried forward to GimTest.',
    highlights: ['Learn to use React TanStack Table'],
    challenges: ['Optimization of hooks and requests to update data in tables'],
    summary: `In this project I learned how to use TanStack Table, which proved very useful.
The app was functional but I have to admit it had serious performance issues in the teacher dashboard.
I designed it with a dual-view approach — one for teachers, one for students — with the goal of delivering grade feedback digitally.
The turning point was that students were no longer allowed to use their phones in class, so I decided to archive the project.
The solution was designed in a hard-coded way, built specifically around my own subjects. It could be refactored for broader use, but at the time that wasn't the goal.
It had a desktop view for teachers and a mobile view for students.`,
    screenshots: ['https://drive.google.com/file/d/1BsZ22H-gjimYjxBZg7TwG0p3Cm9M0Ukw/preview',
      'https://drive.google.com/file/d/19elWunU6P_QX2KvptjAltN86RezlovBg/preview',
      'https://drive.google.com/file/d/1RTJaCvfQdVbVg18gPmyt0I_Lm0pQwaWe/preview',
      'https://drive.google.com/file/d/1Hbn2ZLOzhO_OdNBb1C5dPi7VQI0_yBsJ/preview',
      'https://drive.google.com/file/d/16b03ffVcy41viJCbDK6G02ljTBbzgKhi/preview']

  },
]

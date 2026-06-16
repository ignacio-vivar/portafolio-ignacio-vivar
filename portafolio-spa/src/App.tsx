import { ProjectCard } from "./components/ProjectCard"
import { projects } from "./data/projects"
import { useState } from "react"
import { SlidePanel } from "./components/SlidePanel"

function App() {
  const [active, setActive] = useState<typeof projects[0] | null>(null)
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex items-center justify-between px-10 py-3 border-b border-[var(--border)]">
        <span className="mono text-sm text-[var(--g)]">&gt; nacho.dev</span>
        <nav className="flex gap-6">
          <a href="#projects" className="mono text-xs text-[var(--text-muted)] hover:text-[var(--g)] transition-colors">projects</a>
          <a href="#contact" className="mono text-xs text-[var(--text-muted)] hover:text-[var(--g)] transition-colors">contact</a>
        </nav>
      </header>

      <div>
        <div className="px-10 py-7">
          <p className="font-mono text-xs text-[var(--g)] tracking-widest uppercase mb-3 opacity-80">
            &gt; portfolio — full-stack developer - with focus in frontend & Electronic Engineer
          </p>
          <h1 className="mb-3">
            Nacho<span className="text-[var(--g)]">.</span>
          </h1>
          <p className="font-mono text-sm text-[var(--text-muted)] mb-4">
            <span className="text-[var(--text)]">FastAPI · Next.js · PostgreSQL · Vite React · Docker · Supabase</span>
            {' '}— building solutions for specific needs.
          </p>

          <div className="flex flex-wrap gap-2">
            {['spanish-native', 'english-B1', 'argentinian'].map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>

        </div>
      </div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-5 px-6 lg:px-10 py-2">
        {projects.map(p => (
          <ProjectCard key={p.id} project={p} onDetail={() => setActive(p)} />
        ))}
      </div>
      <footer className="flex items-center justify-between px-10 py-4 border-t border-[var(--border)] mt-auto">
        <span className="mono text-xs text-[var(--text-muted)]">~/nacho — full-stack developer</span>
        <div id="contact" className="flex gap-4">
          <a href="https://github.com/ignacio-vivar" className="mono text-xs text-[var(--g)] opacity-70 hover:opacity-100 transition-opacity">github</a>
          <a href="mailto:ignacio.vivar.cruz@gmail.com" className="mono text-xs text-[var(--g)] opacity-70 hover:opacity-100 transition-opacity">email</a>
        </div>
      </footer>
      <SlidePanel
        project={active}
        onClose={() => setActive(null)}
      />
    </div>
  )
}

export default App

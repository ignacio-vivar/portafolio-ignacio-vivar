import { useState } from 'react'
import type { Project } from '../data/projects'

const statusStyles: Record<Project['status'], string> = {
  live: 'bg-[rgba(57,211,83,0.15)]  text-[var(--g)]            border border-[var(--border)]',
  wip: 'bg-[rgba(239,148,29,0.12)] text-[var(--accent-orange)] border border-[rgba(239,148,29,0.25)]',
  archived: 'bg-[rgba(107,122,107,0.2)] text-[var(--text-muted)]   border border-[rgba(107,122,107,0.3)]',
  running: 'bg-[rgba(57,138,211,0.12)] text-[var(--accent-blue)]  border border-[rgba(57,138,211,0.25)]',
}

type Props = {
  project: Project
  onDetail?: () => void
  children?: React.ReactNode
}

export function ProjectCard({ project, children, onDetail }: Props) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      className="h-[380px] sm:h-[340px] lg:h-[350px] cursor-pointer"
      style={{ perspective: '1000px' }}
      onClick={() => setFlipped(f => !f)}
    >
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 rounded-lg border border-[var(--border)] bg-[var(--bg2)] flex flex-col overflow-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="h-[140px] flex items-center justify-center relative flex-shrink-0 bg-[var(--bg3)]">
            <span className="font-mono text-xs tracking-widest text-[var(--g)] z-10">
              {project.title}
            </span>

            <span className={`absolute top-2.5 right-2.5 font-mono text-[9px] tracking-widest uppercase px-1.5 py-0.5 rounded-sm ${statusStyles[project.status]}`}>
              {project.status}
            </span>
          </div>
          <div className="flex flex-col justify-between flex-1 p-4">
            <div>
              <p className="text-[var(--text)] font-sans text-sm font-semibold mb-1">{project.name}</p>
              <p className="font-mono text-[11px] text-[var(--text-muted)] leading-relaxed">{project.description}</p>
            </div>
            <p className="font-mono text-[10px] text-[var(--g)] opacity-60 tracking-widest mt-2">[ flip for details ]</p>
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 rounded-lg border border-[var(--border)] bg-[var(--bg3)] flex flex-col gap-3 p-5"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <p className="font-sans text-sm font-semibold text-[var(--g)]">{project.name}</p>
          <div className='flex flex-row gap-2 py-2 justify-around '>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                onClick={e => e.stopPropagation()}
                className="font-mono text-[14px] border border-[var(--border)] bg-[rgba(57,138,211,0.4)] !text-[rgba(57,240,240,1)]  px-3 py-1.5 rounded text-center tracking-wide hover:bg-[rgba(57,138,211,0.7)] transition-colors"
              >
                url-page
              </a>
            )}
            <button
              onClick={e => {
                e.stopPropagation()  // evita que flipee la card
                onDetail?.()
              }}
              className="font-mono text-[14px] text-[var(--g)] cursor-pointer border border-[var(--border)] bg-[var(--g-glow)] px-3 py-1.5 rounded text-center tracking-wide hover:bg-[var(--g-glow-strong)] transition-colors"
            >
              details
            </button>
          </div>
          {children ?? (
            <p className="font-mono text-[11px] text-[var(--text-dim)] leading-relaxed flex-1">
              {project.detail}
            </p>
          )}


          <p className="font-mono text-[9px] text-[var(--text-muted)] text-right tracking-widest">click to flip back ↺</p>
        </div>
      </div>
    </div>
  )
}

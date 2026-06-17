import { useEffect, useState } from 'react'
import type { Project } from '../data/projects'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel.tsx'

function IframeSlide({ src }: { src: string }) {
  const [loaded, setLoaded] = useState(false)
  return (
    <div className="relative w-full h-full">
      {!loaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[var(--bg3)] gap-2">
          <div className="w-5 h-5 border-2 border-[var(--g)] border-t-transparent rounded-full animate-spin" />
          <span className="font-mono text-[20px] text-[var(--g)] opacity-60 tracking-widest">loading preview...</span>
        </div>
      )}
      <iframe
        src={src}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full pointer-events-none transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  )
}


type Props = {
  project: Project | null
  onClose: () => void
  children?: React.ReactNode
}

export function SlidePanel({ project, onClose, children }: Props) {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>()

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  // Reinitialize Embla after the panel slide-in animation completes (300ms)
  // so it computes scroll bounds with the correct dimensions.
  useEffect(() => {
    if (!project || !carouselApi) return
    const t = setTimeout(() => carouselApi.reInit(), 320)
    return () => clearTimeout(t)
  }, [project, carouselApi])

  return (
    <>
      {/* overlay */}
      <div
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ${project ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[95vw] lg:w-[85vw] bg-[var(--bg2)] border-l border-[var(--border)] z-50 flex flex-col transition-transform duration-300 ease-in-out ${project ? 'translate-x-0' : 'translate-x-full'}`}
      >


        {/* header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border)]">
          <div>
            <p className="font-mono text-[10px] text-[var(--g)] tracking-widest uppercase opacity-70">
              {project?.status}
            </p>
            <h3 className="text-[var(--text)] mt-0.5">{project?.name}</h3>
          </div>
          <button
            onClick={onClose}
            className="font-mono text-xs text-[var(--text-muted)] hover:text-[var(--g)] transition-colors border border-[var(--border)] px-3 py-1.5 rounded"
          >
            ✕ close
          </button>
        </div>

        {/* content */}
        <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-6">

          {/* descripción */}
          <p className="font-mono text-sm text-[var(--text-dim)] leading-relaxed">
            {project?.detail}
          </p>

          {/* stack */}
          <div>
            <p className="font-mono text-[10px] text-[var(--g)] tracking-widest uppercase opacity-70 mb-2">stack</p>
            <div className="flex flex-wrap gap-2">
              {project?.stack.map(s => (
                <span key={s} className="tag">{s}</span>
              ))}
            </div>
          </div>

          {/* children — screenshots, secciones custom, etc */}
          {children && (
            <div className="flex flex-col gap-4">
              <p className="font-mono text-[10px] text-[var(--g)] tracking-widest uppercase opacity-70">details</p>
              {children}
            </div>
          )}

          {/* link */}

          {/* año y rol */}
          {(project?.year || project?.role) && (
            <div className="flex gap-6">
              {project?.year && (
                <div>
                  <p className="font-mono text-[10px] text-[var(--g)] tracking-widest uppercase opacity-70 mb-1">year</p>
                  <p className="font-mono text-xs text-[var(--text)]">{project.year}</p>
                </div>
              )}
              {project?.role && (
                <div>
                  <p className="font-mono text-[10px] text-[var(--g)] tracking-widest uppercase opacity-70 mb-1">role</p>
                  <p className="font-mono text-xs text-[var(--text)]">{project.role}</p>
                </div>
              )}
            </div>
          )}
          {project?.repos && project.repos.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.repos.map(({ label, url }) => (
                <button
                  key={url}
                  onClick={e => {
                    e.stopPropagation()
                    window.open(url, '_blank')
                  }}
                  className="font-mono text-sm text-[var(--g)] hover:text-[var(--g-dim)] transition-colors tracking-wide cursor-pointer border border-[var(--border)] px-3 py-1.5 rounded"
                >
                  ↗ {label}
                </button>
              ))}
            </div>
          )}
          {/* highlights */}
          {project?.highlights && (
            <div>
              <p className="font-mono text-[var(--g)] tracking-widest uppercase opacity-70 mb-2">highlights</p>
              <ul className="flex flex-col gap-1.5">
                {project.highlights.map(h => (
                  <li key={h} className="font-mono text-[var(--text-dim)] flex gap-2">
                    <span className="text-[var(--g)] opacity-60">✔️</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* challenges */}
          {project?.challenges && (
            <div>
              <p className="font-mono  text-[var(--g)] tracking-widest uppercase opacity-70 mb-2">challenges</p>
              <ul className="flex flex-col gap-1.5">
                {project.challenges.map(c => (
                  <li key={c} className="font-mono text-[var(--text-dim)] flex gap-2">
                    <span className="text-[var(--accent-orange)] opacity-60">🦾</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project?.summary && (
            <div>
              <p className="font-mono text-[10px] text-[var(--g)] tracking-widest uppercase opacity-70 mb-2">summary</p>
              <p className="font-italic">{project.summary}</p>
            </div>
          )}
          {project?.screenshots && project.screenshots.length > 0 && (
            <div>
              <p className="font-mono text-[10px] text-[var(--g)] tracking-widest uppercase opacity-70 mb-2">screenshots</p>
              <Carousel className="w-full" setApi={setCarouselApi}>
                <div className="relative px-8">
                  <CarouselContent>
                    {project.screenshots.map((src, i) => (
                      <CarouselItem key={i}>
                        <div className="w-full h-[768px] overflow-hidden rounded-lg border border-[var(--border)]">
                          <IframeSlide src={src} />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-0 bg-[var(--bg3)] border-[var(--border)] text-[var(--g)] hover:bg-[var(--bg4)] hover:text-[var(--g)]" />
                  <CarouselNext className="right-0 bg-[var(--bg3)] border-[var(--border)] text-[var(--g)] hover:bg-[var(--bg4)] hover:text-[var(--g)]" />
                </div>
              </Carousel>
            </div>
          )}


          {project?.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[14px] border border-[var(--border)] bg-[rgba(57,138,211,0.4)] !text-[rgba(57,240,240,1)]  px-3 py-1.5 rounded text-center tracking-wide hover:bg-[rgba(57,138,211,0.7)] transition-colors"
            >
              url-page
            </a>
          )}
        </div>
      </div >
    </>
  )
}

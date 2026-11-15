'use client'

const TECH_ITEMS = [
  'Python',
  'TensorFlow',
  'PyTorch',
  'Keras',
  'scikit-learn',
  'LangChain',
  'OpenAI API',
  'Pandas',
  'NumPy',
  'FastAPI',
  'Streamlit',
  'Git',
  'Jupyter',
  'HuggingFace',
  'Pinecone',
  'PostgreSQL',
  'Docker',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
]

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: string[]
  reverse?: boolean
}) {
  // Duplicate items to create seamless loop
  const doubled = [...items, ...items]

  return (
    <div className="relative overflow-hidden">
      {/* Left fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-[#111827] to-transparent" />
      {/* Right fade */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-[#111827] to-transparent" />

      <div
        className={`flex gap-4 py-2 w-max ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        }`}
        style={{
          animationPlayState: 'var(--marquee-play, running)',
        }}
      >
        {doubled.map((item, idx) => (
          <span
            key={idx}
            className="
              inline-flex items-center gap-2 px-4 py-2 rounded-full
              bg-white/5 border border-white/10
              text-sm text-[#94A3B8] whitespace-nowrap
              hover:bg-blue-500/10 hover:border-blue-400/30 hover:text-[#F8FAFC]
              transition-colors duration-200 cursor-default
            "
          >
            {/* Accent dot */}
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] flex-shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Marquee() {
  return (
    <>
      {/* Inject reduced-motion CSS variable + keyframes */}
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 35s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee,
          .animate-marquee-reverse {
            animation-play-state: paused;
          }
        }
      `}</style>

      <section
        aria-label="Technologies"
        className="
          relative bg-[#111827]
          border-t border-b border-white/[0.06]
          py-6 overflow-hidden
        "
      >
        <div className="flex flex-col gap-4">
          <MarqueeRow items={TECH_ITEMS} />
          <MarqueeRow items={[...TECH_ITEMS].reverse()} reverse />
        </div>
      </section>
    </>
  )
}

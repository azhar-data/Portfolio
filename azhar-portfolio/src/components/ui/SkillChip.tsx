'use client'

import { useState } from 'react'

interface SkillChipProps {
  name: string
  tooltip?: string
}

export default function SkillChip({ name, tooltip }: SkillChipProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <div className="relative inline-flex">
      <span
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`
          inline-flex items-center px-3 py-1 rounded-full text-sm cursor-default select-none
          border transition-all duration-200
          ${hovered
            ? 'bg-blue-500/10 border-blue-400/30 text-[#F8FAFC]'
            : 'bg-white/5 border-white/10 text-[#94A3B8]'
          }
        `}
      >
        {name}
      </span>

      {tooltip && hovered && (
        <div
          className="
            absolute bottom-full left-1/2 -translate-x-1/2 mb-2
            z-50 pointer-events-none whitespace-nowrap
            px-2 py-1 rounded-lg text-xs
            bg-[#111827] border border-white/10 text-[#F8FAFC]
            shadow-lg
          "
        >
          {tooltip}
          {/* Arrow */}
          <span
            className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#111827]"
          />
        </div>
      )}
    </div>
  )
}

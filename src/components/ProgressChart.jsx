import React from 'react'

const ProgressChart = () => {
  return (
    <div className="md:col-span-8 bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-headline-md text-headline-md text-on-surface">Progress Toward Graduation Target</h3>
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-primary mt-1"></span>
          <span className="font-label-md text-xs text-on-surface-variant">Actual</span>
          <span className="w-3 h-3 rounded-full bg-secondary mt-1 ml-2"></span>
          <span className="font-label-md text-xs text-on-surface-variant">Target</span>
        </div>
      </div>
      <div
        className="bg-cover bg-center w-full h-48 rounded border border-surface-variant"
        data-alt="A clean, minimalist data visualization chart showing an upward trending line graph. The chart uses a deep emerald green line for actual progress and a dotted subtle gold line for the target. The background is pure white with faint light grey grid lines. The aesthetic is corporate modernist, precise, and serene, fitting an academic dashboard. Soft, high-key lighting."
        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDycwyHY8wSt2A_s7Jkpd7ewKedw7Ys3TKYzrZvAVwkyeaVKiznoZiYo7WWIu1vHS-ekuQwwN44nfhhe2LoP1MYZ7F06Vtmb7HUCXkvqftTsbAaTJXZIGiFDoCRBB4b7hTrcZ6EVYiRfGk4M6QsBRSodPM3-JVT32TbcUYoHIDCR20Zg9rMHEKSeqF7qaV1t-uA4DSRl_78w-xa-7cF8yOUy5Kah3fuLk9PjjFIO4_ASNe7UF4QvG81')" }}
      ></div>
    </div>
  )
}

export default ProgressChart

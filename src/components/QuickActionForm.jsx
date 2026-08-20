import React from 'react'

const QuickActionForm = () => {
  return (
    <div className="md:col-span-8 bg-surface-container-lowest rounded-xl p-6 border border-outline-variant shadow-[0px_10px_15px_-3px_rgba(6,78,59,0.05)] relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-primary-container"></div>
      <h3 className="font-headline-md text-headline-md text-on-surface mb-6">New Entry</h3>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-label-md text-label-md text-on-surface mb-1" htmlFor="student">Student Name</label>
            <select className="w-full bg-surface border border-outline-variant rounded-lg p-3 text-on-surface focus:border-primary focus:ring-2 focus:ring-secondary-container/50 transition-all font-body-md text-body-md" id="student">
              <option>Select a student...</option>
              <option>Ahmad Fulan</option>
              <option>Fatima Zahra</option>
              <option>Umar bin Khattab</option>
            </select>
          </div>
          <div>
            <label className="block font-label-md text-label-md text-on-surface mb-1" htmlFor="surah">Surah / Ayat</label>
            <input className="w-full bg-surface border border-outline-variant rounded-lg p-3 text-on-surface focus:border-primary focus:ring-2 focus:ring-secondary-container/50 transition-all font-body-md text-body-md" id="surah" placeholder="e.g., Al-Baqarah: 1-5" type="text" />
          </div>
        </div>
        <div>
          <label className="block font-label-md text-label-md text-on-surface mb-2">Quality Rating</label>
          <div className="flex flex-wrap gap-2">
            <label className="cursor-pointer">
              <input className="peer sr-only" name="quality" type="radio" />
              <div className="px-4 py-2 rounded-full border border-outline-variant text-on-surface-variant font-label-md text-label-md peer-checked:badge-sangat-lancar peer-checked:border-transparent transition-colors">
                Sangat Lancar
              </div>
            </label>
            <label className="cursor-pointer">
              <input className="peer sr-only" name="quality" type="radio" />
              <div className="px-4 py-2 rounded-full border border-outline-variant text-on-surface-variant font-label-md text-label-md peer-checked:badge-lancar peer-checked:border-transparent transition-colors">
                Lancar
              </div>
            </label>
            <label className="cursor-pointer">
              <input className="peer sr-only" name="quality" type="radio" />
              <div className="px-4 py-2 rounded-full border border-outline-variant text-on-surface-variant font-label-md text-label-md peer-checked:badge-perlu-murajaah peer-checked:border-transparent transition-colors">
                Perlu Muraja&apos;ah
              </div>
            </label>
          </div>
        </div>
        <div>
          <label className="block font-label-md text-label-md text-on-surface mb-1" htmlFor="notes">Teacher Notes (Optional)</label>
          <textarea className="w-full bg-surface border border-outline-variant rounded-lg p-3 text-on-surface focus:border-primary focus:ring-2 focus:ring-secondary-container/50 transition-all font-body-md text-body-md" id="notes" placeholder="Add specific feedback on tajweed or fluency..." rows="2"></textarea>
        </div>
        <div className="flex justify-end pt-2">
          <button className="bg-primary text-on-primary font-label-md text-label-md py-3 px-6 rounded-lg hover:bg-primary-container transition-colors shadow-sm" type="submit">
            Submit Entry
          </button>
        </div>
      </form>
    </div>
  )
}

export default QuickActionForm

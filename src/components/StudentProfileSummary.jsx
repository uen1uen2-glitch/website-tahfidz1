import React from 'react'

const StudentProfileSummary = () => {
  return (
    <div className="md:col-span-4 bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm border-t-2 border-t-secondary-container relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-surface-container-low rounded-bl-full -mr-16 -mt-16 opacity-50"></div>
      <div className="flex items-center gap-4 mb-6 relative z-10">
        <img
          className="w-16 h-16 rounded-full object-cover border-2 border-primary-container"
          data-alt="A high-quality, professional studio portrait of a young male student in a neat white uniform and peci (Islamic cap). The lighting is soft and bright, casting gentle shadows to create a modern, serene, and academic mood. The background is a clean, minimal light grey workspace to maintain focus on the student. Corporate modernism aesthetic."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDfVNX_xT-Wv88M-6VAbBJaAKo-1HvrewOhQdkiZZhkEFeN90e82VQvLdM0blCP2UQIwhJPmcsDFmj24WYZNxklfnVjFh7pHHgnwsaKlQ_r3nEMtGi_uTKJ1hW58fmz-Q9-k7M--_nCuHStgDjPSsa47FgLZNftoPA6rSXEVStIcfCxoibi2I-Z1JD5-N07ct6KfMzwAZ3B7mvaQl9AY5U0Gc2ZJc3tsB9QeWQ6h39O7d1NQsjWMme"
        />
        <div>
          <h3 className="font-headline-md text-headline-md text-on-surface">Ahmad Zaki</h3>
          <p className="font-body-md text-body-md text-on-surface-variant">Class 5B - Ali bin Abi Thalib</p>
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex justify-between items-center border-b border-surface-variant pb-2">
          <span className="font-label-md text-label-md text-on-surface-variant">Wali Kelas</span>
          <span className="font-body-md text-body-md text-on-surface">Ust. Luqman Hakim</span>
        </div>
        <div className="flex justify-between items-center border-b border-surface-variant pb-2">
          <span className="font-label-md text-label-md text-on-surface-variant">Target Hafalan</span>
          <span className="font-body-md text-body-md text-on-surface">5 Juz</span>
        </div>
        <div className="flex justify-between items-center pb-2">
          <span className="font-label-md text-label-md text-on-surface-variant">Status</span>
          <span className="px-2 py-1 bg-[#e6f4ea] text-[#137333] rounded-full font-label-md text-xs">On Track</span>
        </div>
      </div>
    </div>
  )
}

export default StudentProfileSummary

import React from 'react'

const HeroSection = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          className="object-cover w-full h-full opacity-40"
          data-alt="A serene, high-quality photograph of an Islamic school campus courtyard at sunrise. The architecture features modern minimalist lines blended with subtle traditional geometric motifs in deep emerald and gold accents. The lighting is soft and golden, casting long, peaceful shadows. The mood is calm, focused, and academic, embodying the 'Serene Modernist' aesthetic with high-quality whitespace and structure."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBMYqOj8kzLMXoCxg4V1MqXec8FNoeTtOkB7FeiKsH8KXQIC8Fk1C8796SDtjV5CgVghAQDWWVqD878ZHqLWUvUHAMEDWBth5CZ3Lcrt4sMomtiU_BMcVWYvabAh6MLbkwkTkVU6agWfQ15mp9ObpMmXgMS3Oz2nxAVyFFNQ2nv9Aca3roM9CxtLShlx6KAk_ryRrgyVW5Oui-oR63_zMtL91xNlLseh2KhV7PBt46PTWcYO6gjRqz"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface/80 to-surface"></div>
      </div>
      <div className="relative z-10 text-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <span className="font-label-md text-label-md text-primary-container uppercase tracking-widest mb-4 block">
          Welcome to
        </span>
        <h1 className="font-headline-xl text-headline-xl text-primary mb-6">
          Nurul Qur'an Islamic School
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
          Nurturing a generation of Hafidz and future leaders through a holistic blend of profound Islamic scholarship and contemporary academic excellence.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-primary text-on-primary font-label-md text-label-md px-8 py-4 rounded-full font-semibold hover:bg-on-primary-fixed-variant transition-colors shadow-[0px_10px_15px_-3px_rgba(6,78,59,0.05)] w-full sm:w-auto">
            PPDB Online 2024
          </button>
          <button className="border border-outline text-primary font-label-md text-label-md px-8 py-4 rounded-full font-semibold hover:bg-surface-container-low transition-colors w-full sm:w-auto flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-[20px]">play_circle</span>
            Virtual Tour
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

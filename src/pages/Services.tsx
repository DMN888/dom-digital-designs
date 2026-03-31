export default function Services() {
  return (
    <main className="pt-24 pb-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">Services.</h1>
          <p className="text-xl text-[#a1a1aa] max-w-2xl font-light">
            Comprehensive digital solutions tailored to elevate your brand and drive results.
          </p>
        </div>

        <section className="w-full bg-[#0a0a0a] border-y border-[#333] text-white py-20 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Block 1 */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="border-l-2 border-[#FFCE10] pl-6 py-2">
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 uppercase">Web Design</h3>
                <p className="text-xl text-[#a1a1aa] leading-relaxed font-light mb-6">
                  I design clean, modern interfaces that your users will actually love.
                </p>
                <p className="text-[#a1a1aa] leading-relaxed">
                  Every project starts with a deep understanding of your brand and audience. I focus on creating intuitive user experiences (UX) and striking user interfaces (UI) that not only look beautiful but also guide visitors seamlessly toward your goals. From wireframes to high-fidelity prototypes, I ensure every detail is pixel-perfect.
                </p>
              </div>
            </div>
            
            {/* Divider for mobile */}
            <div className="hidden lg:block lg:col-span-2 relative">
               <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#333] -translate-x-1/2"></div>
            </div>
            <div className="block lg:hidden w-full h-px bg-[#333]"></div>

            {/* Block 2 */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="border-l-2 border-[#FFCE10] pl-6 py-2">
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 uppercase">WordPress Development</h3>
                <p className="text-xl text-[#a1a1aa] leading-relaxed font-light mb-6">
                  I build high-quality, lightning-fast websites that convert.
                </p>
                <p className="text-[#a1a1aa] leading-relaxed">
                  Using modern development practices, I transform designs into fully functional, responsive WordPress websites. I prioritize clean code, fast loading speeds, and robust security. Whether you need a custom theme, plugin integration, or an e-commerce setup, I deliver scalable solutions that are easy for you to manage.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

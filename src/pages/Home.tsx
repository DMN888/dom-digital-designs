import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="pt-24 pb-32">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto px-6 mb-40">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
          {/* Left Column: Text */}
          <div className="flex flex-col justify-center items-start">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-8">
              Hi, I'm Dom. Freelance Graphic Designer.
            </h1>
            <p className="text-xl md:text-2xl text-[#a1a1aa] leading-relaxed mb-12 font-light">
              Passion for visual storytelling and creating impactful designs.
            </p>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 bg-[#FFCE10] text-[#0a0a0a] px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(255,206,16,0.5)]"
            >
              See my work <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Right Column: Image */}
          <div className="relative group w-full max-w-md mx-auto lg:max-w-none">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-[#333] transition-all duration-500 group-hover:border-[#FFCE10]/50 group-hover:shadow-[0_0_40px_-10px_rgba(255,206,16,0.3)]">
              <img
                src="https://i.imgur.com/S907PNL.png"
                alt="Dom - Web Designer"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale contrast-125 brightness-90 transition-all duration-500 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100"
              />
            </div>
            {/* Decorative glow behind the image on hover */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#FFCE10]/0 via-[#FFCE10]/5 to-[#FFCE10]/0 rounded-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"></div>
          </div>
        </section>
      </div>

      {/* Featured Work Section */}
      <div className="max-w-5xl mx-auto px-6 mb-40">
        <section>
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl font-semibold tracking-tight">Featured Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="group border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl p-5 transition-all duration-300 hover:bg-white/10 hover:border-white/20 flex flex-col h-full overflow-hidden">
              <div className="aspect-square w-full overflow-hidden rounded-xl mb-6 bg-[#141414]">
                <img 
                  src="https://i.imgur.com/sXBEDnW.png" 
                  alt="Aqua 67 Shopify" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-medium text-[#FFCE10] border border-[#FFCE10]/30 rounded-full bg-[#FFCE10]/5">
                  E-Commerce
                </span>
              </div>
              <h3 className="text-xl font-bold mb-6 text-white group-hover:text-[#FFCE10] transition-colors">Aqua 67 Shopify</h3>
              <Link to="/work/aqua-67" className="inline-flex items-center gap-2 text-sm font-medium text-[#a1a1aa] group-hover:text-[#FFCE10] transition-colors mt-auto">
                View project <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="group border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl p-5 transition-all duration-300 hover:bg-white/10 hover:border-white/20 flex flex-col h-full overflow-hidden">
              <div className="aspect-square w-full overflow-hidden rounded-xl mb-6 bg-[#141414]">
                <img 
                  src="https://i.imgur.com/SAuLi0o.png" 
                  alt="Tea x Tops Logo" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-medium text-[#FFCE10] border border-[#FFCE10]/30 rounded-full bg-[#FFCE10]/5">
                  Logo Design
                </span>
              </div>
              <h3 className="text-xl font-bold mb-6 text-white group-hover:text-[#FFCE10] transition-colors">Tea x Tops Logo</h3>
              <Link to="/work/tea-x-tops-logo" className="inline-flex items-center gap-2 text-sm font-medium text-[#a1a1aa] group-hover:text-[#FFCE10] transition-colors mt-auto">
                View project <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 3 */}
            <div className="group border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl p-5 transition-all duration-300 hover:bg-white/10 hover:border-white/20 flex flex-col h-full overflow-hidden">
              <div className="aspect-square w-full overflow-hidden rounded-xl mb-6 bg-[#141414]">
                <img 
                  src="https://i.imgur.com/MRRMRxy.png" 
                  alt="J&T Riders Uniform" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-medium text-[#FFCE10] border border-[#FFCE10]/30 rounded-full bg-[#FFCE10]/5">
                  Apparel Design
                </span>
              </div>
              <h3 className="text-xl font-bold mb-6 text-white group-hover:text-[#FFCE10] transition-colors">J&T Riders Uniform</h3>
              <Link to="/work/jnt-riders-uniform" className="inline-flex items-center gap-2 text-sm font-medium text-[#a1a1aa] group-hover:text-[#FFCE10] transition-colors mt-auto">
                View project <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            {/* Card 4 */}
            <div className="group border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl p-5 transition-all duration-300 hover:bg-white/10 hover:border-white/20 flex flex-col h-full overflow-hidden">
              <div className="aspect-square w-full overflow-hidden rounded-xl mb-6 bg-[#141414]">
                <img 
                  src="https://i.imgur.com/cjJLjl5.jpg" 
                  alt="KOG Logo" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-medium text-[#FFCE10] border border-[#FFCE10]/30 rounded-full bg-[#FFCE10]/5">
                  Logo Design
                </span>
              </div>
              <h3 className="text-xl font-bold mb-6 text-white group-hover:text-[#FFCE10] transition-colors">KOG Logo</h3>
              <Link to="/work/kog-logo" className="inline-flex items-center gap-2 text-sm font-medium text-[#a1a1aa] group-hover:text-[#FFCE10] transition-colors mt-auto">
                View project <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 5 */}
            <div className="group border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl p-5 transition-all duration-300 hover:bg-white/10 hover:border-white/20 flex flex-col h-full overflow-hidden">
              <div className="aspect-square w-full overflow-hidden rounded-xl mb-6 bg-[#141414]">
                <img 
                  src="https://i.imgur.com/7nHT772.png" 
                  alt="Whitehorse Active" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-medium text-[#FFCE10] border border-[#FFCE10]/30 rounded-full bg-[#FFCE10]/5">
                  Photo Retouching
                </span>
              </div>
              <h3 className="text-xl font-bold mb-6 text-white group-hover:text-[#FFCE10] transition-colors">Whitehorse Active</h3>
              <Link to="/work/whitehorse-active" className="inline-flex items-center gap-2 text-sm font-medium text-[#a1a1aa] group-hover:text-[#FFCE10] transition-colors mt-auto">
                View project <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 6 */}
            <div className="group border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl p-5 transition-all duration-300 hover:bg-white/10 hover:border-white/20 flex flex-col h-full overflow-hidden">
              <div className="aspect-square w-full overflow-hidden rounded-xl mb-6 bg-[#141414]">
                <img 
                  src="https://i.imgur.com/1qEAnK2.png" 
                  alt="Rayjuve Shopify" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-medium text-[#FFCE10] border border-[#FFCE10]/30 rounded-full bg-[#FFCE10]/5">
                  E-Commerce
                </span>
              </div>
              <h3 className="text-xl font-bold mb-6 text-white group-hover:text-[#FFCE10] transition-colors">Rayjuve Shopify</h3>
              <Link to="/work/rayjuve-shopify" className="inline-flex items-center gap-2 text-sm font-medium text-[#a1a1aa] group-hover:text-[#FFCE10] transition-colors mt-auto">
                View project <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 border border-[#333] hover:border-[#FFCE10] text-white hover:text-[#FFCE10] px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
            >
              View all projects <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>

      {/* Expertise Section */}
      <section className="w-full bg-[#0a0a0a] border-y border-[#333] text-white py-32 mb-40">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-semibold tracking-tight mb-16">Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {/* Block 1 */}
            <div className="flex flex-col justify-start">
              <div className="border-l-2 border-[#FFCE10] pl-6 py-2">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 uppercase">Advanced Image Editing</h3>
                <p className="text-lg text-[#a1a1aa] leading-relaxed font-light mb-4">
                  High-level photo manipulation and editing to bring creative visions to life with precision.
                </p>
                <p className="text-sm text-[#71717a] font-medium uppercase tracking-wider leading-relaxed">
                  Photo Manipulation & Compositing • High-End Retouching & Cleanup • Color Correction • AI-Assisted Generation
                </p>
              </div>
            </div>

            {/* Block 2 */}
            <div className="flex flex-col justify-start">
              <div className="border-l-2 border-[#FFCE10] pl-6 py-2">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 uppercase">Digital Ads & Video</h3>
                <p className="text-lg text-[#a1a1aa] leading-relaxed font-light mb-4">
                  Creating scroll-stopping video content and persuasive graphics for social media and advertising.
                </p>
                <p className="text-sm text-[#71717a] font-medium uppercase tracking-wider leading-relaxed">
                  Video Editing • Reels & Short-Form Content • Social Media Ad Creatives • YouTube Thumbnails
                </p>
              </div>
            </div>

            {/* Block 3 */}
            <div className="flex flex-col justify-start">
              <div className="border-l-2 border-[#FFCE10] pl-6 py-2">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 uppercase">Branding & Merch</h3>
                <p className="text-lg text-[#a1a1aa] leading-relaxed font-light mb-4">
                  Crafting cohesive brand identities for both digital platforms and physical products.
                </p>
                <p className="text-sm text-[#71717a] font-medium uppercase tracking-wider leading-relaxed">
                  Logo Creation & Guidelines • Apparel & Graphic Tees • Product Packaging & Mockups • Print Materials
                </p>
              </div>
            </div>

            {/* Block 4 */}
            <div className="flex flex-col justify-start">
              <div className="border-l-2 border-[#FFCE10] pl-6 py-2">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 uppercase">Web Layouts & UI</h3>
                <p className="text-lg text-[#a1a1aa] leading-relaxed font-light mb-4">
                  Translating visual assets into clean, functional, and user-friendly website layouts.
                </p>
                <p className="text-sm text-[#71717a] font-medium uppercase tracking-wider leading-relaxed">
                  WordPress & Elementor • Shopify Storefronts • Google Sites • UI/UX Design Layouts
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

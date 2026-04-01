import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function AntukinGraphicTees() {
  return (
    <main className="pt-6 pb-32">
      <div className="max-w-5xl mx-auto px-6">
        <Link to="/work" className="inline-flex items-center gap-2 text-sm font-medium text-[#a1a1aa] hover:text-[#FFCE10] transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Work
        </Link>
        
        <div className="mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium text-[#FFCE10] border border-[#FFCE10]/30 rounded-full bg-[#FFCE10]/5 mb-6">
            Apparel Design
          </span>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">Antukin Graphic Tees</h1>
          <p className="text-xl text-[#a1a1aa] max-w-2xl font-light">
            Graphic Tees Design For Antukin Clothing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="aspect-square w-full overflow-hidden rounded-2xl border border-[#333]">
            <img 
              src="https://i.imgur.com/AjmUnlF.png" 
              alt="Gallery Image 1" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="aspect-square w-full overflow-hidden rounded-2xl border border-[#333]">
            <img 
              src="https://i.imgur.com/VqdGQuK.png" 
              alt="Gallery Image 2" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="aspect-square w-full overflow-hidden rounded-2xl border border-[#333]">
            <img 
              src="https://i.imgur.com/WS6WABY.jpg" 
              alt="Gallery Image 3" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8 text-[#a1a1aa] leading-relaxed">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Project Overview</h3>
              <p className="mb-8">With an innate flair for visual storytelling, I create designs that seamlessly merge artistic aesthetics with the unique narratives of my clients. From quirky illustrations to bold typographic statements, each graphic tee design is meticulously crafted to reflect personality, spark conversations, and resonate with the wearer. I thrive on translating ideas into wearable art, ensuring that every shirt becomes a statement piece that goes beyond fashion, conveying a message or emotion. Let's collaborate to infuse your wardrobe with creativity, turning ordinary tees into personalized, eye-catching expressions of style and identity.</p>
              
              <h3 className="text-2xl font-bold text-white mb-4 mt-12">Graphic Design</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="aspect-square w-full overflow-hidden rounded-2xl border border-[#333]">
                  <img src="https://i.imgur.com/AjmUnlF.png" alt="Graphic Design 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="aspect-square w-full overflow-hidden rounded-2xl border border-[#333]">
                  <img src="https://i.imgur.com/VqdGQuK.png" alt="Graphic Design 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="aspect-square w-full overflow-hidden rounded-2xl border border-[#333]">
                  <img src="https://i.imgur.com/WS6WABY.jpg" alt="Graphic Design 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 mt-12">Mockups</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="aspect-square w-full overflow-hidden rounded-2xl border border-[#333]">
                  <img src="https://i.imgur.com/5v27pLD.jpg" alt="Mockup 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="aspect-square w-full overflow-hidden rounded-2xl border border-[#333]">
                  <img src="https://i.imgur.com/Y0rVnhD.jpg" alt="Mockup 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="aspect-square w-full overflow-hidden rounded-2xl border border-[#333]">
                  <img src="https://i.imgur.com/9k4ctzY.jpg" alt="Mockup 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8 sticky top-32 h-fit">
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
              <h4 className="text-sm font-medium text-white uppercase tracking-wider mb-4">Project Details</h4>
              <ul className="space-y-4 text-sm text-[#a1a1aa]">
                <li>
                  <strong className="block text-white mb-1">Role</strong>
                  Graphic Designer
                </li>
                <li>
                  <strong className="block text-white mb-1">Tools</strong>
                  Adobe Photoshop
                </li>
              </ul>
            </div>
          </div>
        </div>

        
      </div>
    </main>
  );
}

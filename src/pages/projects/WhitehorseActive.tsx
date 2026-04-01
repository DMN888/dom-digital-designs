import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function WhitehorseActive() {
  return (
    <main className="pt-6 pb-32">
      <div className="max-w-5xl mx-auto px-6">
        <Link to="/work" className="inline-flex items-center gap-2 text-sm font-medium text-[#a1a1aa] hover:text-[#FFCE10] transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Work
        </Link>
        
        <div className="mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium text-[#FFCE10] border border-[#FFCE10]/30 rounded-full bg-[#FFCE10]/5 mb-6">
            Photo Retouching
          </span>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">Whitehorse Active Post Production</h1>
          <p className="text-xl text-[#a1a1aa] max-w-2xl font-light">
            Fashion Retouching for Whitehorse Active
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="aspect-square w-full overflow-hidden rounded-2xl border border-[#333]">
            <img 
              src="https://i.imgur.com/aT9TT2g.png" 
              alt="Gallery Image 1" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="aspect-square w-full overflow-hidden rounded-2xl border border-[#333]">
            <img 
              src="https://i.imgur.com/7nHT772.png" 
              alt="Gallery Image 2" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="aspect-square w-full overflow-hidden rounded-2xl border border-[#333]">
            <img 
              src="https://i.imgur.com/pLJK6V7.png" 
              alt="Gallery Image 3" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8 text-[#a1a1aa] leading-relaxed">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Project Overview</h3>
              <p className="mb-8">In collaboration with Whitehorse Active, a dynamic and innovative fashion brand. As a graphic designer, I am tasked with translating the brand's identity into captivating visuals that resonate with its audience. By seamlessly integrating design elements into the photography, we aim to create a cohesive and immersive experience that showcases White Horse Active's commitment to style, quality, and authenticity. From conceptualizing visual themes to refining the final images, this project aims to redefine the brand's visual language and establish a powerful and memorable presence in the competitive fashion landscape.</p>
              
              <div className="grid grid-cols-1 gap-6">
                <div className="aspect-[3/1] w-full overflow-hidden rounded-2xl border border-[#333]">
                  <img src="https://i.imgur.com/Lp7TaoZ.png" alt="Whitehorse Active 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="aspect-[3/1] w-full overflow-hidden rounded-2xl border border-[#333]">
                  <img src="https://i.imgur.com/0NcM6KF.png" alt="Whitehorse Active 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="aspect-[3/1] w-full overflow-hidden rounded-2xl border border-[#333]">
                  <img src="https://i.imgur.com/RIHzqjm.png" alt="Whitehorse Active 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="aspect-[3/1] w-full overflow-hidden rounded-2xl border border-[#333]">
                  <img src="https://i.imgur.com/hldUDWm.png" alt="Whitehorse Active 4" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="aspect-[3/1] w-full overflow-hidden rounded-2xl border border-[#333]">
                  <img src="https://i.imgur.com/qLZUM1N.jpg" alt="Whitehorse Active 5" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="aspect-[3/1] w-full overflow-hidden rounded-2xl border border-[#333]">
                  <img src="https://i.imgur.com/tiEHeUn.png" alt="Whitehorse Active 6" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="aspect-[3/1] w-full overflow-hidden rounded-2xl border border-[#333]">
                  <img src="https://i.imgur.com/vTa6qw0.png" alt="Whitehorse Active 7" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="aspect-[3/1] w-full overflow-hidden rounded-2xl border border-[#333]">
                  <img src="https://i.imgur.com/lakTgQZ.png" alt="Whitehorse Active 8" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="aspect-[3/1] w-full overflow-hidden rounded-2xl border border-[#333]">
                  <img src="https://i.imgur.com/9YJWglb.png" alt="Whitehorse Active 9" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
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

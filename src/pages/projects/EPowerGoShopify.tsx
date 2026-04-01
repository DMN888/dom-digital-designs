import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function EPowerGoShopify() {
  return (
    <main className="pt-6 pb-32">
      <div className="max-w-5xl mx-auto px-6">
        <Link to="/work" className="inline-flex items-center gap-2 text-sm font-medium text-[#a1a1aa] hover:text-[#FFCE10] transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Work
        </Link>
        
        <div className="mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium text-[#FFCE10] border border-[#FFCE10]/30 rounded-full bg-[#FFCE10]/5 mb-6">
            E-Commerce
          </span>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">ePowerGo Shopify</h1>
          <p className="text-xl text-[#a1a1aa] max-w-2xl font-light">
            Graphic Design & Content Creation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="aspect-square w-full overflow-hidden rounded-2xl border border-[#333]">
            <img 
              src="https://i.imgur.com/lBUGq2B.png" 
              alt="Gallery Image 1" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="aspect-square w-full overflow-hidden rounded-2xl border border-[#333]">
            <img 
              src="https://i.imgur.com/cnywHTM.jpg" 
              alt="Gallery Image 2" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="aspect-square w-full overflow-hidden rounded-2xl border border-[#333]">
            <img 
              src="https://i.imgur.com/Jdk3Nsf.png" 
              alt="Gallery Image 3" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8 text-[#a1a1aa] leading-relaxed">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Project Overview</h3>
              <p className="mb-8">During my time as a graphic designer at ePowerGo, I wore multiple hats, contributing both visually and textually to their brand. I crafted engaging visuals for their online presence, including article thumbnails, category images, and product listing images. Additionally, I wrote content for their articles, designed landing pages, and managed their email marketing efforts using Klaviyo. This involved creating, scheduling, and managing email campaigns, as well as crafting email flowcharts to ensure smooth communication with their audience. By combining my visual and content creation skills, I helped ePowerGo connect with customers and showcase their innovative smart home products.</p>
              
              <h3 className="text-2xl font-bold text-white mb-4 mt-12">Email Campaign</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="aspect-square w-full overflow-hidden rounded-2xl border border-[#333]">
                  <img src="https://i.imgur.com/cnywHTM.jpg" alt="Email Campaign 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="aspect-square w-full overflow-hidden rounded-2xl border border-[#333]">
                  <img src="https://i.imgur.com/tazsjGi.png" alt="Email Campaign 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="aspect-square w-full overflow-hidden rounded-2xl border border-[#333]">
                  <img src="https://i.imgur.com/Jdk3Nsf.png" alt="Email Campaign 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 mt-12">Article Thumbnail</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl border border-[#333]">
                  <img src="https://i.imgur.com/FVViB2m.png" alt="Article Thumbnail 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl border border-[#333]">
                  <img src="https://i.imgur.com/HxwpJep.png" alt="Article Thumbnail 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl border border-[#333]">
                  <img src="https://i.imgur.com/7ROJ5XP.png" alt="Article Thumbnail 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl border border-[#333]">
                  <img src="https://i.imgur.com/Bauscc6.png" alt="Article Thumbnail 4" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
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

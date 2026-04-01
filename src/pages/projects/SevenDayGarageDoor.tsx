import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function SevenDayGarageDoor() {
  return (
    <main className="pt-6 pb-32">
      <div className="max-w-5xl mx-auto px-6">
        <Link to="/work" className="inline-flex items-center gap-2 text-sm font-medium text-[#a1a1aa] hover:text-[#FFCE10] transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Work
        </Link>
        
        <div className="mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium text-[#FFCE10] border border-[#FFCE10]/30 rounded-full bg-[#FFCE10]/5 mb-6">
            Branding
          </span>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">7 Day Garage Door Branding</h1>
          <p className="text-xl text-[#a1a1aa] max-w-2xl font-light">
            Car Wrap Mockup
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="aspect-square w-full overflow-hidden rounded-2xl border border-[#333]">
            <img 
              src="https://i.imgur.com/A7qXGJI.png" 
              alt="Gallery Image 1" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="aspect-square w-full overflow-hidden rounded-2xl border border-[#333]">
            <img 
              src="https://i.imgur.com/E5V9UO4.jpg" 
              alt="Gallery Image 2" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="aspect-square w-full overflow-hidden rounded-2xl border border-[#333]">
            <img 
              src="https://i.imgur.com/RcR3Bpa.png" 
              alt="Gallery Image 3" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8 text-[#a1a1aa] leading-relaxed">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Project Overview</h3>
              <p className="mb-8">Inspired by the vision and identity of my client, this mockup seamlessly integrates bold graphics, vibrant colors, and dynamic elements, transforming any vehicle into a moving work of art. With meticulous attention to detail, I have crafted a design that not only aligns with the brand's aesthetic but also enhances its visibility and impact. Whether cruising through city streets or parked at events, this car wrap mockup serves as a powerful tool for brand promotion, ensuring that the essence of the brand is communicated vividly and memorably. Let's hit the road together and turn your brand into a mobile masterpiece.</p>
              
              <h3 className="text-2xl font-bold text-white mb-4 mt-12">Logo Design</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="aspect-square w-full overflow-hidden rounded-2xl border border-[#333]">
                  <img src="https://i.imgur.com/A7qXGJI.png" alt="Logo Design 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="aspect-square w-full overflow-hidden rounded-2xl border border-[#333]">
                  <img src="https://i.imgur.com/ychuJ29.png" alt="Logo Design 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="aspect-square w-full overflow-hidden rounded-2xl border border-[#333]">
                  <img src="https://i.imgur.com/ZA9tlIg.png" alt="Logo Design 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="aspect-square w-full overflow-hidden rounded-2xl border border-[#333]">
                  <img src="https://i.imgur.com/VtAyHms.png" alt="Logo Design 4" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="aspect-square w-full overflow-hidden rounded-2xl border border-[#333]">
                  <img src="https://i.imgur.com/Sgs51k5.png" alt="Logo Design 5" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="aspect-square w-full overflow-hidden rounded-2xl border border-[#333]">
                  <img src="https://i.imgur.com/HbOxjvE.png" alt="Logo Design 6" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 mt-12">Mockups</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="aspect-square w-full overflow-hidden rounded-2xl border border-[#333]">
                  <img src="https://i.imgur.com/RcR3Bpa.png" alt="Mockup 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="aspect-square w-full overflow-hidden rounded-2xl border border-[#333]">
                  <img src="https://i.imgur.com/zMvJaW9.jpg" alt="Mockup 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="aspect-square w-full overflow-hidden rounded-2xl border border-[#333]">
                  <img src="https://i.imgur.com/4bVhMao.jpg" alt="Mockup 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="aspect-square w-full overflow-hidden rounded-2xl border border-[#333]">
                  <img src="https://i.imgur.com/MW698pa.jpg" alt="Mockup 4" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="aspect-square w-full overflow-hidden rounded-2xl border border-[#333]">
                  <img src="https://i.imgur.com/E5V9UO4.jpg" alt="Mockup 5" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="aspect-square w-full overflow-hidden rounded-2xl border border-[#333]">
                  <img src="https://i.imgur.com/67E6wTV.png" alt="Mockup 6" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 mt-12">Brand Kit Presentation</h3>
              <div className="grid grid-cols-1 gap-6">
                <div className="aspect-[3/1] w-full overflow-hidden rounded-2xl border border-[#333]">
                  <img src="https://i.imgur.com/N1U3fMo.png" alt="Brand Kit Presentation" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
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
                  Adobe Photoshop, Canva
                </li>
              </ul>
            </div>
          </div>
        </div>

        
      </div>
    </main>
  );
}

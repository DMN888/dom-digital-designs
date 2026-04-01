import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function BowserBeanCarWrap() {
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
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">Bowser Bean Car Wrap</h1>
          <p className="text-xl text-[#a1a1aa] max-w-2xl font-light">
            Car Wrap Mockup
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="aspect-square w-full overflow-hidden rounded-2xl border border-[#333]">
            <img 
              src="https://i.imgur.com/F70CzCk.png" 
              alt="Gallery Image 1" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="aspect-square w-full overflow-hidden rounded-2xl border border-[#333]">
            <img 
              src="https://i.imgur.com/OICvlb0.png" 
              alt="Gallery Image 2" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="aspect-square w-full overflow-hidden rounded-2xl border border-[#333]">
            <img 
              src="https://i.imgur.com/gqIpTKO.png" 
              alt="Gallery Image 3" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8 text-[#a1a1aa] leading-relaxed">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Project Overview</h3>
              <p>Inspired by the vision and identity of my client, this mockup seamlessly integrates bold graphics, vibrant colors, and dynamic elements, transforming any vehicle into a moving work of art. With meticulous attention to detail, I have crafted a design that not only aligns with the brand's aesthetic but also enhances its visibility and impact. Whether cruising through city streets or parked at events, this car wrap mockup serves as a powerful tool for brand promotion, ensuring that the essence of the brand is communicated vividly and memorably. Let's hit the road together and turn your brand into a mobile masterpiece.</p>
              <p className="mt-6 text-sm"><strong className="text-white">Tools Used:</strong> Adobe Photoshop</p>
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

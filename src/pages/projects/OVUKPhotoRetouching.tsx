import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function OVUKPhotoRetouching() {
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
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">OVUK Photo Retouching</h1>
          <p className="text-xl text-[#a1a1aa] max-w-2xl font-light">
            OVUK Office Modernization
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="aspect-square w-full overflow-hidden rounded-2xl border border-[#333]">
            <img 
              src="https://i.imgur.com/eXl6nZA.png" 
              alt="Gallery Image 1" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="aspect-square w-full overflow-hidden rounded-2xl border border-[#333]">
            <img 
              src="https://i.imgur.com/VsJc2kF.png" 
              alt="Gallery Image 2" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="aspect-square w-full overflow-hidden rounded-2xl border border-[#333]">
            <img 
              src="https://i.imgur.com/KQ68v5G.png" 
              alt="Gallery Image 3" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8 text-[#a1a1aa] leading-relaxed">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Project Overview</h3>
              <p className="mb-8">This project involved modernizing the visual environment of the OVUK office through photo enhancement. I utilized various editing techniques, such as color adjustments, retouching, and removal of unwanted elements like wiring. Additionally, I employed a strategic cleaning process to visually highlight key areas within the office. To achieve a modern aesthetic, I converted the images to a black and white theme and incorporated virtual LED lights at the corner junctions of walls and ceilings. This comprehensive visual makeover aimed to create a more contemporary and visually appealing workspace for the OVUK team.</p>
              
              <h3 className="text-2xl font-bold text-white mb-4 mt-12">Photo Retouching</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="aspect-[3/2] w-full overflow-hidden rounded-2xl border border-[#333]">
                  <img src="https://i.imgur.com/X38GKIA.png" alt="Photo Retouching 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="aspect-[3/2] w-full overflow-hidden rounded-2xl border border-[#333]">
                  <img src="https://i.imgur.com/YIrJ33V.png" alt="Photo Retouching 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="aspect-[3/2] w-full overflow-hidden rounded-2xl border border-[#333]">
                  <img src="https://i.imgur.com/aXOUZtU.png" alt="Photo Retouching 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="aspect-[3/2] w-full overflow-hidden rounded-2xl border border-[#333]">
                  <img src="https://i.imgur.com/gffkNk1.png" alt="Photo Retouching 4" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="aspect-[3/2] w-full overflow-hidden rounded-2xl border border-[#333]">
                  <img src="https://i.imgur.com/ERzhUxV.png" alt="Photo Retouching 5" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="aspect-[3/2] w-full overflow-hidden rounded-2xl border border-[#333]">
                  <img src="https://i.imgur.com/duJ1xZl.png" alt="Photo Retouching 6" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
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

import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function RayjuveShopify() {
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
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">Rayjuve Shopify</h1>
          <p className="text-xl text-[#a1a1aa] max-w-2xl font-light">
            Graphic Design for Rayjuve E-Commerce
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="aspect-square w-full overflow-hidden rounded-2xl border border-[#333]">
            <img 
              src="https://i.imgur.com/1qEAnK2.png" 
              alt="Gallery Image 1" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="aspect-square w-full overflow-hidden rounded-2xl border border-[#333]">
            <img 
              src="https://i.imgur.com/akm3Ora.jpg" 
              alt="Gallery Image 2" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="aspect-square w-full overflow-hidden rounded-2xl border border-[#333]">
            <img 
              src="https://i.imgur.com/fdllkKg.png" 
              alt="Gallery Image 3" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8 text-[#a1a1aa] leading-relaxed">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Project Overview</h3>
              <p className="mb-8">As a graphic designer at Rayjuve, I contribute visually to the brand's mission of providing high-quality red light therapy products. I design various visual elements for the website, including the homepage banner, logo, and favicon. Additionally, I create lifestyle images, mockups for product presentations, and product listings. To further enhance the website's content, I write and design thumbnails for articles and landing pages. Through these visual and textual contributions, I help establish a cohesive and informative online presence for Rayjuve.</p>
              
              <h3 className="text-2xl font-bold text-white mb-4 mt-12">Homepage Banner</h3>
              <div className="grid grid-cols-1 gap-6">
                <div className="aspect-[3/1] w-full overflow-hidden rounded-2xl border border-[#333]">
                  <img src="https://i.imgur.com/N0c9yLG.png" alt="Homepage Banner 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="aspect-[3/1] w-full overflow-hidden rounded-2xl border border-[#333]">
                  <img src="https://i.imgur.com/Q495Gdh.png" alt="Homepage Banner 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="aspect-[3/1] w-full overflow-hidden rounded-2xl border border-[#333]">
                  <img src="https://i.imgur.com/8XKd1iy.png" alt="Homepage Banner 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="aspect-[3/1] w-full overflow-hidden rounded-2xl border border-[#333]">
                  <img src="https://i.imgur.com/GBoRr88.png" alt="Homepage Banner 4" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="aspect-[3/1] w-full overflow-hidden rounded-2xl border border-[#333]">
                  <img src="https://i.imgur.com/f7kJlYe.png" alt="Homepage Banner 5" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 mt-12">Logo Design</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="aspect-square w-full overflow-hidden rounded-2xl border border-[#333]">
                  <img src="https://i.imgur.com/24EohQ4.png" alt="Logo Design 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="aspect-square w-full overflow-hidden rounded-2xl border border-[#333]">
                  <img src="https://i.imgur.com/dAAtawO.png" alt="Logo Design 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="aspect-square w-full overflow-hidden rounded-2xl border border-[#333]">
                  <img src="https://i.imgur.com/akm3Ora.jpg" alt="Logo Design 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 mt-12">Article Thumbnail</h3>
              <div className="grid grid-cols-1 gap-6">
                <div className="aspect-[9/5] w-full overflow-hidden rounded-2xl border border-[#333]">
                  <img src="https://i.imgur.com/eNcrOX8.png" alt="Article Thumbnail 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="aspect-[9/5] w-full overflow-hidden rounded-2xl border border-[#333]">
                  <img src="https://i.imgur.com/yKX9LdO.png" alt="Article Thumbnail 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="aspect-[9/5] w-full overflow-hidden rounded-2xl border border-[#333]">
                  <img src="https://i.imgur.com/578nBUa.png" alt="Article Thumbnail 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 mt-12">Lifestyle Mockup</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="aspect-[3/2] w-full overflow-hidden rounded-2xl border border-[#333]">
                  <img src="https://i.imgur.com/AtZmhAh.png" alt="Lifestyle Mockup 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="aspect-[3/2] w-full overflow-hidden rounded-2xl border border-[#333]">
                  <img src="https://i.imgur.com/NYIHXkm.png" alt="Lifestyle Mockup 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="aspect-[3/2] w-full overflow-hidden rounded-2xl border border-[#333]">
                  <img src="https://i.imgur.com/4NdmUTS.png" alt="Lifestyle Mockup 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="aspect-[3/2] w-full overflow-hidden rounded-2xl border border-[#333]">
                  <img src="https://i.imgur.com/Qol9NBU.png" alt="Lifestyle Mockup 4" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 mt-12">Product Listing</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="aspect-[5/3] w-full overflow-hidden rounded-2xl border border-[#333]">
                  <img src="https://i.imgur.com/JnUiA7i.png" alt="Product Listing 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="aspect-[5/3] w-full overflow-hidden rounded-2xl border border-[#333]">
                  <img src="https://i.imgur.com/gvtgFfP.png" alt="Product Listing 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="aspect-[5/3] w-full overflow-hidden rounded-2xl border border-[#333]">
                  <img src="https://i.imgur.com/kHAeMQo.png" alt="Product Listing 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="aspect-[5/3] w-full overflow-hidden rounded-2xl border border-[#333]">
                  <img src="https://i.imgur.com/0nqPI0z.png" alt="Product Listing 4" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="aspect-[5/3] w-full overflow-hidden rounded-2xl border border-[#333]">
                  <img src="https://i.imgur.com/NOqZtei.png" alt="Product Listing 5" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="aspect-[5/3] w-full overflow-hidden rounded-2xl border border-[#333]">
                  <img src="https://i.imgur.com/UMfVtRu.png" alt="Product Listing 6" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="aspect-[5/3] w-full overflow-hidden rounded-2xl border border-[#333]">
                  <img src="https://i.imgur.com/UMfVtRu.png" alt="Product Listing 7" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="aspect-[5/3] w-full overflow-hidden rounded-2xl border border-[#333]">
                  <img src="https://i.imgur.com/UMfVtRu.png" alt="Product Listing 8" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
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

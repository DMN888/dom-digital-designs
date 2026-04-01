import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Work() {
  return (
    <main className="pt-24 pb-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">My Work.</h1>
          <p className="text-xl text-[#a1a1aa] max-w-2xl font-light">
            A collection of my recent projects, case studies, and design explorations.
          </p>
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

          {/* Card 7 */}
          <div className="group border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl p-5 transition-all duration-300 hover:bg-white/10 hover:border-white/20 flex flex-col h-full overflow-hidden">
            <div className="aspect-square w-full overflow-hidden rounded-xl mb-6 bg-[#141414]">
              <img 
                src="https://i.imgur.com/RcR3Bpa.png" 
                alt="7 Day Garage Door Branding" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-xs font-medium text-[#FFCE10] border border-[#FFCE10]/30 rounded-full bg-[#FFCE10]/5">
                Branding
              </span>
            </div>
            <h3 className="text-xl font-bold mb-6 text-white group-hover:text-[#FFCE10] transition-colors">7 Day Garage Door Branding</h3>
            <Link to="/work/seven-day-garage-door" className="inline-flex items-center gap-2 text-sm font-medium text-[#a1a1aa] group-hover:text-[#FFCE10] transition-colors mt-auto">
              View project <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Card 8 */}
          <div className="group border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl p-5 transition-all duration-300 hover:bg-white/10 hover:border-white/20 flex flex-col h-full overflow-hidden">
            <div className="aspect-square w-full overflow-hidden rounded-xl mb-6 bg-[#141414]">
              <img 
                src="https://i.imgur.com/lBUGq2B.png" 
                alt="ePowerGo Shopify" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-xs font-medium text-[#FFCE10] border border-[#FFCE10]/30 rounded-full bg-[#FFCE10]/5">
                E-Commerce
              </span>
            </div>
            <h3 className="text-xl font-bold mb-6 text-white group-hover:text-[#FFCE10] transition-colors">ePowerGo Shopify</h3>
            <Link to="/work/epowergo-shopify" className="inline-flex items-center gap-2 text-sm font-medium text-[#a1a1aa] group-hover:text-[#FFCE10] transition-colors mt-auto">
              View project <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Card 9 */}
          <div className="group border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl p-5 transition-all duration-300 hover:bg-white/10 hover:border-white/20 flex flex-col h-full overflow-hidden">
            <div className="aspect-square w-full overflow-hidden rounded-xl mb-6 bg-[#141414]">
              <img 
                src="https://i.imgur.com/4bbXgC9.png" 
                alt="Infrared Fire Shopify" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-xs font-medium text-[#FFCE10] border border-[#FFCE10]/30 rounded-full bg-[#FFCE10]/5">
                E-Commerce
              </span>
            </div>
            <h3 className="text-xl font-bold mb-6 text-white group-hover:text-[#FFCE10] transition-colors">Infrared Fire Shopify</h3>
            <Link to="/work/infrared-fire-shopify" className="inline-flex items-center gap-2 text-sm font-medium text-[#a1a1aa] group-hover:text-[#FFCE10] transition-colors mt-auto">
              View project <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Card 10 */}
          <div className="group border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl p-5 transition-all duration-300 hover:bg-white/10 hover:border-white/20 flex flex-col h-full overflow-hidden">
            <div className="aspect-square w-full overflow-hidden rounded-xl mb-6 bg-[#141414]">
              <img 
                src="https://i.imgur.com/KQ68v5G.png" 
                alt="OVUK Photo Retouching" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-xs font-medium text-[#FFCE10] border border-[#FFCE10]/30 rounded-full bg-[#FFCE10]/5">
                Photo Retouching
              </span>
            </div>
            <h3 className="text-xl font-bold mb-6 text-white group-hover:text-[#FFCE10] transition-colors">OVUK Photo Retouching</h3>
            <Link to="/work/ovuk-photo-retouching" className="inline-flex items-center gap-2 text-sm font-medium text-[#a1a1aa] group-hover:text-[#FFCE10] transition-colors mt-auto">
              View project <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Card 11 */}
          <div className="group border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl p-5 transition-all duration-300 hover:bg-white/10 hover:border-white/20 flex flex-col h-full overflow-hidden">
            <div className="aspect-square w-full overflow-hidden rounded-xl mb-6 bg-[#141414]">
              <img 
                src="https://i.imgur.com/AjmUnlF.png" 
                alt="Antukin Graphic Tees" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-xs font-medium text-[#FFCE10] border border-[#FFCE10]/30 rounded-full bg-[#FFCE10]/5">
                Apparel Design
              </span>
            </div>
            <h3 className="text-xl font-bold mb-6 text-white group-hover:text-[#FFCE10] transition-colors">Antukin Graphic Tees</h3>
            <Link to="/work/antukin-graphic-tees" className="inline-flex items-center gap-2 text-sm font-medium text-[#a1a1aa] group-hover:text-[#FFCE10] transition-colors mt-auto">
              View project <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Card 12 */}
          <div className="group border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl p-5 transition-all duration-300 hover:bg-white/10 hover:border-white/20 flex flex-col h-full overflow-hidden">
            <div className="aspect-square w-full overflow-hidden rounded-xl mb-6 bg-[#141414]">
              <img 
                src="https://i.imgur.com/n3OIJe9.png" 
                alt="The Balloon Workshop Listing" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-xs font-medium text-[#FFCE10] border border-[#FFCE10]/30 rounded-full bg-[#FFCE10]/5">
                E-Commerce
              </span>
            </div>
            <h3 className="text-xl font-bold mb-6 text-white group-hover:text-[#FFCE10] transition-colors">The Balloon Workshop Listing</h3>
            <Link to="/work/the-balloon-workshop" className="inline-flex items-center gap-2 text-sm font-medium text-[#a1a1aa] group-hover:text-[#FFCE10] transition-colors mt-auto">
              View project <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Card 13 */}
          <div className="group border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl p-5 transition-all duration-300 hover:bg-white/10 hover:border-white/20 flex flex-col h-full overflow-hidden">
            <div className="aspect-square w-full overflow-hidden rounded-xl mb-6 bg-[#141414]">
              <img 
                src="https://i.imgur.com/DhnUrcT.jpg" 
                alt="Paragon Ads" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-xs font-medium text-[#FFCE10] border border-[#FFCE10]/30 rounded-full bg-[#FFCE10]/5">
                Social Media
              </span>
            </div>
            <h3 className="text-xl font-bold mb-6 text-white group-hover:text-[#FFCE10] transition-colors">Paragon Ads</h3>
            <Link to="/work/paragon-ads" className="inline-flex items-center gap-2 text-sm font-medium text-[#a1a1aa] group-hover:text-[#FFCE10] transition-colors mt-auto">
              View project <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Card 14 */}
          <div className="group border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl p-5 transition-all duration-300 hover:bg-white/10 hover:border-white/20 flex flex-col h-full overflow-hidden">
            <div className="aspect-square w-full overflow-hidden rounded-xl mb-6 bg-[#141414]">
              <img 
                src="https://i.imgur.com/wbMDNCx.png" 
                alt="MyPetPoncho Print Product" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-xs font-medium text-[#FFCE10] border border-[#FFCE10]/30 rounded-full bg-[#FFCE10]/5">
                Print Design
              </span>
            </div>
            <h3 className="text-xl font-bold mb-6 text-white group-hover:text-[#FFCE10] transition-colors">MyPetPoncho Print Product</h3>
            <Link to="/work/mypetponcho" className="inline-flex items-center gap-2 text-sm font-medium text-[#a1a1aa] group-hover:text-[#FFCE10] transition-colors mt-auto">
              View project <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Card 15 */}
          <div className="group border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl p-5 transition-all duration-300 hover:bg-white/10 hover:border-white/20 flex flex-col h-full overflow-hidden">
            <div className="aspect-square w-full overflow-hidden rounded-xl mb-6 bg-[#141414]">
              <img 
                src="https://i.imgur.com/62LQVbo.png" 
                alt="Sleepyhead Logo" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-xs font-medium text-[#FFCE10] border border-[#FFCE10]/30 rounded-full bg-[#FFCE10]/5">
                Logo Design
              </span>
            </div>
            <h3 className="text-xl font-bold mb-6 text-white group-hover:text-[#FFCE10] transition-colors">Sleepyhead Logo</h3>
            <Link to="/work/sleepyhead-logo" className="inline-flex items-center gap-2 text-sm font-medium text-[#a1a1aa] group-hover:text-[#FFCE10] transition-colors mt-auto">
              View project <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Card 16 */}
          <div className="group border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl p-5 transition-all duration-300 hover:bg-white/10 hover:border-white/20 flex flex-col h-full overflow-hidden">
            <div className="aspect-square w-full overflow-hidden rounded-xl mb-6 bg-[#141414]">
              <img 
                src="https://i.imgur.com/JI3XI1K.png" 
                alt="Zulay Kitchen" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-xs font-medium text-[#FFCE10] border border-[#FFCE10]/30 rounded-full bg-[#FFCE10]/5">
                Packaging Design
              </span>
            </div>
            <h3 className="text-xl font-bold mb-6 text-white group-hover:text-[#FFCE10] transition-colors">Zulay Kitchen</h3>
            <Link to="/work/zulay-kitchen" className="inline-flex items-center gap-2 text-sm font-medium text-[#a1a1aa] group-hover:text-[#FFCE10] transition-colors mt-auto">
              View project <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Card 17 */}
          <div className="group border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl p-5 transition-all duration-300 hover:bg-white/10 hover:border-white/20 flex flex-col h-full overflow-hidden">
            <div className="aspect-square w-full overflow-hidden rounded-xl mb-6 bg-[#141414]">
              <img 
                src="https://i.imgur.com/gqIpTKO.png" 
                alt="Bowser Bean Car Wrap" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-xs font-medium text-[#FFCE10] border border-[#FFCE10]/30 rounded-full bg-[#FFCE10]/5">
                Branding
              </span>
            </div>
            <h3 className="text-xl font-bold mb-6 text-white group-hover:text-[#FFCE10] transition-colors">Bowser Bean Car Wrap</h3>
            <Link to="/work/bowser-bean-car-wrap" className="inline-flex items-center gap-2 text-sm font-medium text-[#a1a1aa] group-hover:text-[#FFCE10] transition-colors mt-auto">
              View project <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

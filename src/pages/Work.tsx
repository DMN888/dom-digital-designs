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
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=600&auto=format&fit=crop" 
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
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop" 
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
                src="https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=600&auto=format&fit=crop" 
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
                src="https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=600&auto=format&fit=crop" 
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
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop" 
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
                src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=600&auto=format&fit=crop" 
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
                src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=600&auto=format&fit=crop" 
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
                src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=600&auto=format&fit=crop" 
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
                src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=600&auto=format&fit=crop" 
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
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop" 
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
                src="https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=600&auto=format&fit=crop" 
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
                src="https://images.unsplash.com/photo-1530103862676-de8892b07439?q=80&w=600&auto=format&fit=crop" 
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
                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&auto=format&fit=crop" 
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
                src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=600&auto=format&fit=crop" 
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
                src="https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=600&auto=format&fit=crop" 
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
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=600&auto=format&fit=crop" 
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
                src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=600&auto=format&fit=crop" 
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

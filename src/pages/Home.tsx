import { ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";
import projectsData from "../data/projects.json";
import servicesData from "../data/services.json";
import { useLightbox } from "../contexts/LightboxContext";

export default function Home() {
  const { openLightbox } = useLightbox();

  return (
    <main className="pt-24 pb-32">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto px-6 mb-40">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
          {/* Left Column: Text */}
          <div className="flex flex-col justify-center items-start">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-8">
              Hi, I'm Dom. Professional Graphic Designer.
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
                src="https://res.cloudinary.com/dz3j2wsi1/image/upload/q_auto/f_auto/v1775668299/dominic-portrait_zeimu6.png"
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
            {projectsData.slice(0, 6).map((project) => (
              <div key={project.id} className="group border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl p-5 transition-all duration-300 hover:bg-white/10 hover:border-white/20 flex flex-col h-full overflow-hidden">
                <div 
                  className="aspect-square w-full overflow-hidden rounded-xl mb-6 bg-[#141414] relative cursor-pointer group/image"
                  onClick={() => {
                    if (project.mainGallery && project.mainGallery.length > 0) {
                      openLightbox(project.mainGallery, 0);
                    }
                  }}
                >
                  <img 
                    src={project.mainGallery && project.mainGallery.length > 0 ? project.mainGallery[0] : ''} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/image:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover/image:opacity-100 duration-300">
                    <div className="bg-[#FFCE10] text-[#0a0a0a] p-3 rounded-full transform translate-y-4 group-hover/image:translate-y-0 transition-all duration-300">
                      <Search className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.category.split('; ').map((cat, idx) => {
                    if (!cat) return null;
                    const slug = cat.toLowerCase().replace(/ /g, '-');
                    return (
                      <Link
                        key={idx}
                        to={`/services/${slug}`}
                        className="inline-block px-3 py-1 text-xs font-medium text-[#FFCE10] border border-[#FFCE10]/30 rounded-full bg-[#FFCE10]/5 hover:bg-[#FFCE10] hover:text-[#0a0a0a] transition-colors"
                      >
                        {cat}
                      </Link>
                    );
                  })}
                </div>
                {/* Bottom Content Group (Forces alignment to the bottom) */}
                <div className="mt-auto flex flex-col items-start">
                  <h3 className="text-xl font-bold mb-6 text-white group-hover:text-[#FFCE10] transition-colors">
                    {project.title}
                  </h3>
                  <Link to={`/project/${project.id}`} className="inline-flex items-center gap-2 text-sm font-medium text-[#a1a1aa] group-hover:text-[#FFCE10] transition-colors">
                    View project <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.slice(0, 6).map((service) => (
              <Link 
                key={service.id}
                to={`/services/${service.id}`}
                className="group block p-8 rounded-3xl bg-[#141414] border border-[#333] hover:border-[#FFCE10]/50 transition-all duration-300 relative overflow-hidden"
              >
                <h3 className="text-2xl font-bold tracking-tight mb-4 group-hover:text-[#FFCE10] transition-colors">{service.name}</h3>
                <p className="text-base text-[#a1a1aa] leading-relaxed font-light mb-8">
                  {service.description}
                </p>
                <div className="flex items-center text-sm font-medium tracking-wider uppercase text-[#FFCE10]">
                  View Details 
                  <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 border border-[#333] hover:border-[#FFCE10] text-white hover:text-[#FFCE10] px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
            >
              All Services Offered <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

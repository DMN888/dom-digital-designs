import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import projectsData from "../data/projects.json";

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
          {projectsData.map((project) => (
            <div key={project.id} className="group border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl p-5 transition-all duration-300 hover:bg-white/10 hover:border-white/20 flex flex-col h-full overflow-hidden">
              <div className="aspect-square w-full overflow-hidden rounded-xl mb-6 bg-[#141414]">
                <img 
                  src={project.mainGallery && project.mainGallery.length > 0 ? project.mainGallery[0] : ''} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
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
              <h3 className="text-xl font-bold mb-6 text-white group-hover:text-[#FFCE10] transition-colors">{project.title}</h3>
              <Link to={`/project/${project.id}`} className="inline-flex items-center gap-2 text-sm font-medium text-[#a1a1aa] group-hover:text-[#FFCE10] transition-colors mt-auto">
                View project <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

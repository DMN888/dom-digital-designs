import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, Search } from 'lucide-react';
import services from '../data/services.json';
import projects from '../data/projects.json';
import { useLightbox } from '../contexts/LightboxContext';

export default function ServiceDetail() {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const service = services.find(s => s.id === serviceSlug);
  const { openLightbox } = useLightbox();

  if (!service) {
    return (
      <div className="pt-24 pb-16 px-6 max-w-7xl mx-auto min-h-screen">
        <h1 className="text-4xl font-bold mb-4">Service not found</h1>
        <Link to="/services" className="text-gray-400 hover:text-[#FFCE10] transition-colors">
          &larr; Back to Services
        </Link>
      </div>
    );
  }

  // Find all projects that have sections mapped to this service
  const matchedSections: Array<{
    project: any;
    section: any;
  }> = [];

  projects.forEach((project) => {
    if (project.extraSections) {
      project.extraSections.forEach((section: any) => {
        if (section.services && section.services.includes(service.name)) {
          matchedSections.push({ project, section });
        }
      });
    }
  });

  return (
    <div className="pt-24 pb-16 px-6 max-w-7xl mx-auto min-h-screen">
      <Link to="/services" className="inline-flex items-center text-sm text-gray-400 hover:text-[#FFCE10] transition-colors mb-8">
        <ChevronLeft className="w-4 h-4 mr-1" /> All Services
      </Link>

      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">{service.name}</h1>
        <p className="text-xl text-gray-400 max-w-3xl">
          {service.description}
        </p>
      </div>

      {matchedSections.length === 0 ? (
        <p className="text-gray-400">No projects currently listed for this service.</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative">
          <div className="lg:col-span-3 space-y-24">
            {matchedSections.map(({ project, section }, idx) => {
              const sectionId = `${project.id}-${idx}`;
              return (
                <div key={sectionId} id={sectionId} className="border-t border-[#333] pt-12 scroll-mt-24">
                  <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                    <div>
                      <h3 className="text-3xl font-bold">{project.title} - {section.title}</h3>
                      {section.description && (
                        <p className="text-gray-400 mt-2 text-lg">{section.description}</p>
                      )}
                    </div>
                    <Link
                      to={`/project/${project.id}`}
                      className="inline-flex items-center px-6 py-3 rounded-full border border-[#333] text-white hover:border-[#FFCE10] hover:text-[#FFCE10] font-medium transition-all duration-300 whitespace-nowrap"
                    >
                      View this Project
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>

                  {/* Media rendering (copied layout logic from ProjectTemplate) */}
                  <div className="w-full">
                    {section.images && section.images.length > 0 && (
                      <div className={`grid grid-cols-1 ${
                        section.columns === 3 ? 'md:grid-cols-3' :
                        section.columns === 2 ? 'md:grid-cols-2' : 
                        section.columns === 1 ? 'md:grid-cols-1' :
                        section.images.length > 1 ? 'md:grid-cols-3' : ''
                      } gap-6`}>
                        {section.images.map((img: string, imgIdx: number) => (
                          <div 
                            key={imgIdx} 
                            className={`w-full overflow-hidden rounded-2xl border border-[#333] cursor-pointer group/image relative ${
                              section.aspectRatio ? section.aspectRatio :
                              section.columns ? 'aspect-square' :
                              section.images.length > 1 ? 'aspect-square' : 'aspect-[25/10]'
                            }`}
                            onClick={() => openLightbox(section.images, imgIdx)}
                          >
                            <img src={img} alt={`${section.title} ${imgIdx + 1}`} className="w-full h-full object-cover group-hover/image:scale-105 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover/image:opacity-100 duration-300">
                              <div className="bg-[#FFCE10] text-[#0a0a0a] p-3 rounded-full transform translate-y-4 group-hover/image:translate-y-0 transition-all duration-300">
                                <Search className="w-5 h-5" />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {section.videos && section.videos.length > 0 && (
                      <div className={`grid grid-cols-1 ${
                        section.columns === 3 ? 'md:grid-cols-3' :
                        section.columns === 2 ? 'md:grid-cols-2' : 
                        section.columns === 1 ? 'md:grid-cols-1' :
                        section.videos.length > 2 ? 'md:grid-cols-3' : 
                        section.videos.length === 2 ? 'md:grid-cols-2' : ''
                      } gap-6 mt-6`}>
                        {section.videos.map((vid: string, vidIdx: number) => (
                          <div key={vidIdx} className="w-full overflow-hidden rounded-2xl border border-[#333] bg-[#141414]">
                            <video 
                              src={vid} 
                              controls 
                              playsInline 
                              muted 
                              loop 
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    )}

                    {section.pdf && (
                      <div className="mt-6">
                        <div className="w-full overflow-hidden rounded-2xl border border-[#333] aspect-[16/9] bg-[#141414] mb-4">
                          <iframe src={`${section.pdf}#toolbar=0`} className="w-full h-full" title={section.title} />
                        </div>
                        <div className="flex justify-end">
                          <a href={section.pdf} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-[#FFCE10] hover:text-white transition-colors">
                            Open PDF in new tab <ArrowRight className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sticky Table of Contents Sidebar */}
          <div className="hidden lg:block lg:col-span-1 self-start sticky top-28">
            <div className="space-y-8 h-fit">
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
                <h4 className="text-sm font-medium text-white uppercase tracking-wider mb-4">Table of Contents</h4>
                <ul className="space-y-3 text-sm text-[#a1a1aa] max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                  {matchedSections.map(({ project, section }, idx) => {
                    const sectionId = `${project.id}-${idx}`;
                    return (
                      <li key={sectionId}>
                        <a 
                          href={`#${sectionId}`}
                          className="block hover:text-[#FFCE10] transition-colors line-clamp-2 leading-relaxed"
                          onClick={(e) => {
                            e.preventDefault();
                            const doc = document.getElementById(sectionId);
                            if (doc) doc.scrollIntoView({ behavior: 'smooth' });
                          }}
                        >
                          {project.title} - {section.title}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft } from 'lucide-react';
import services from '../data/services.json';
import projects from '../data/projects.json';

export default function ServiceDetail() {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const service = services.find(s => s.id === serviceSlug);

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
        <div className="space-y-24">
          {matchedSections.map(({ project, section }, idx) => (
            <div key={`${project.id}-${idx}`} className="border-t border-[#333] pt-12">
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
                      <div key={imgIdx} className={`w-full overflow-hidden rounded-2xl border border-[#333] ${
                        section.aspectRatio ? section.aspectRatio :
                        section.columns ? 'aspect-square' :
                        section.images.length > 1 ? 'aspect-square' : 'aspect-[25/10]'
                      }`}>
                        <img src={img} alt={`${section.title} ${imgIdx + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
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
          ))}
        </div>
      )}
    </div>
  );
}

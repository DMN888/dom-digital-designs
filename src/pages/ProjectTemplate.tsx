import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import projectsData from "../data/projects.json";

export default function ProjectTemplate() {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  return (
    <main className="pt-6 pb-32">
      <div className="max-w-5xl mx-auto px-6">
        <Link to="/work" className="inline-flex items-center gap-2 text-sm font-medium text-[#a1a1aa] hover:text-[#FFCE10] transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Work
        </Link>
        
        <div className="mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium text-[#FFCE10] border border-[#FFCE10]/30 rounded-full bg-[#FFCE10]/5 mb-6">
            {project.category}
          </span>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">{project.title}</h1>
          <p className="text-xl text-[#a1a1aa] max-w-2xl font-light">
            {project.description}
          </p>
        </div>

        {project.mainGallery && project.mainGallery.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {project.mainGallery.map((img, idx) => (
              <div key={idx} className="aspect-square w-full overflow-hidden rounded-2xl border border-[#333]">
                <img 
                  src={img} 
                  alt={`Gallery Image ${idx + 1}`} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8 text-[#a1a1aa] leading-relaxed">
            {project.extraSections && project.extraSections.map((section, idx) => (
              <div key={idx}>
                <h3 className="text-2xl font-bold text-white mb-4">{section.title}</h3>
                <p className="mb-6">{section.description}</p>
                {section.images && section.images.length > 0 && (
                  <div className={`grid grid-cols-1 ${section.images.length > 1 ? 'md:grid-cols-3' : ''} gap-6`}>
                    {section.images.map((img, imgIdx) => (
                      <div key={imgIdx} className={`w-full overflow-hidden rounded-2xl border border-[#333] ${section.images.length > 1 ? 'aspect-square' : 'aspect-[25/10]'}`}>
                        <img src={img} alt={`${section.title} ${imgIdx + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                      </div>
                    ))}
                  </div>
                )}
                {/* @ts-ignore - dynamic property */}
                {section.pdf && (
                  <div className="mt-6">
                    <div className="w-full overflow-hidden rounded-2xl border border-[#333] aspect-[16/9] bg-[#141414] mb-4">
                      {/* @ts-ignore */}
                      <iframe src={`https://docs.google.com/viewer?url=${encodeURIComponent(section.pdf)}&embedded=true`} className="w-full h-full" title={section.title} />
                    </div>
                    <div className="flex justify-end">
                      {/* @ts-ignore */}
                      <a href={section.pdf} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-[#FFCE10] hover:text-white transition-colors">
                        Open PDF in new tab <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="space-y-8 sticky top-32 h-fit">
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
              <h4 className="text-sm font-medium text-white uppercase tracking-wider mb-4">Project Details</h4>
              <ul className="space-y-4 text-sm text-[#a1a1aa]">
                {project.details.role && (
                  <li>
                    <strong className="block text-white mb-1">Role</strong>
                    {project.details.role}
                  </li>
                )}
                {project.details.timeline && (
                  <li>
                    <strong className="block text-white mb-1">Timeline</strong>
                    {project.details.timeline}
                  </li>
                )}
                {project.details.tools && (
                  <li>
                    <strong className="block text-white mb-1">Tools</strong>
                    {project.details.tools}
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

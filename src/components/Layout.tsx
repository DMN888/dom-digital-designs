import { Link, Outlet } from "react-router-dom";
import { Linkedin, Mail, Briefcase, ArrowRight } from "lucide-react";

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#FFCE10] selection:text-[#0a0a0a] flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#0a0a0a]/80 border-b border-[#333]">
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link
            to="/"
            className="text-lg font-bold tracking-tight transition-colors duration-300 hover:text-[#FFCE10]"
          >
            Dom Digital Design
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#a1a1aa]">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <Link to="/work" className="hover:text-white transition-colors">Work</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      <div className="flex-grow">
        <Outlet />
      </div>

      {/* Global CTA Section */}
      <section className="bg-[#FFCE10] text-[#0a0a0a] py-24 px-6 text-center mt-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">Let's build something amazing.</h2>
          <p className="text-xl mb-10 font-medium">
            I'm currently available for freelance projects and collaborations. If you have a project in mind, let's talk.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#0a0a0a] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Start a conversation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="border-t border-[#333] bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[#a1a1aa] text-sm">
            © {new Date().getFullYear()} Dom Digital Design | Think Less, Create More.
          </p>
          <div className="flex items-center gap-6 text-[#a1a1aa]">
            <a href="mailto:dominictomlod@gmail.com" className="hover:text-[#FFCE10] transition-colors" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://upwork.com/freelancers/johndominictomlod" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFCE10] transition-colors" aria-label="Upwork">
              <Briefcase className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/john-dominic-tomlod/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFCE10] transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

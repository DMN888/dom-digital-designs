import { ArrowRight, Mail, MapPin, Briefcase, CheckCircle2 } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      await fetch("https://formsubmit.co/ajax/dominictomlod@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="pt-24 pb-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">Let's Talk.</h1>
          <p className="text-xl text-[#a1a1aa] max-w-2xl font-light">
            I'm currently available for freelance projects and collaborations. If you have a project in mind, let's build something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-[#a1a1aa]">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#FFCE10]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-[#52525b] uppercase tracking-wider font-medium mb-1">Email</p>
                    <a href="mailto:dominictomlod@gmail.com" className="text-white hover:text-[#FFCE10] transition-colors">dominictomlod@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-[#a1a1aa]">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#FFCE10]">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-[#52525b] uppercase tracking-wider font-medium mb-1">Upwork</p>
                    <a href="https://www.upwork.com/freelancers/johndominictomlod" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FFCE10] transition-colors">View Profile</a>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-[#a1a1aa]">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#FFCE10]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-[#52525b] uppercase tracking-wider font-medium mb-1">Location</p>
                    <p className="text-white">Philippines</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 md:p-10">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center text-center h-full space-y-6 py-8">
                <div className="w-16 h-16 rounded-full bg-[#FFCE10]/20 flex items-center justify-center text-[#FFCE10] mb-2">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-white">Thank You!</h3>
                <p className="text-[#a1a1aa] text-lg max-w-sm">
                  I've received your message and will get back to you as soon as possible. Looking forward to connecting!
                </p>
                <Link 
                  to="/"
                  className="mt-4 inline-flex items-center justify-center gap-2 bg-[#FFCE10] text-[#0a0a0a] px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(255,206,16,0.5)]"
                >
                  Return to Homepage <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-[#a1a1aa]">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      required
                      className="w-full bg-[#141414] border border-[#333] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FFCE10] transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-[#a1a1aa]">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      required
                      className="w-full bg-[#141414] border border-[#333] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FFCE10] transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-[#a1a1aa]">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject"
                    required
                    className="w-full bg-[#141414] border border-[#333] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FFCE10] transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-[#a1a1aa]">Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    required
                    rows={5}
                    className="w-full bg-[#141414] border border-[#333] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FFCE10] transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#FFCE10] text-[#0a0a0a] px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(255,206,16,0.5)] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
                >
                  {isSubmitting ? "Sending..." : "Send Message"} {!isSubmitting && <ArrowRight className="w-5 h-5" />}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

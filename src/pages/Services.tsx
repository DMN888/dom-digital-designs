import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import services from '../data/services.json';

export default function Services() {
  return (
    <div className="pt-24 pb-16 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Services</h1>
        <p className="text-xl text-gray-400 max-w-2xl">
          Comprehensive creative solutions tailored to elevate your brand.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Link 
            key={service.id} 
            to={`/services/${service.id}`}
            className="group block p-8 rounded-3xl bg-[#141414] border border-[#333] hover:border-[#FFCE10]/50 transition-all duration-300 relative overflow-hidden"
          >
            <h2 className="text-2xl font-bold mb-4 group-hover:text-[#FFCE10] transition-colors">{service.name}</h2>
            <p className="text-gray-400 mb-8">{service.description}</p>
            
            <div className="flex items-center text-sm font-medium tracking-wider uppercase text-[#FFCE10]">
              Explore 
              <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

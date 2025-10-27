import { Download } from 'lucide-react';
import { Button } from './ui/button';
import profileImg from 'figma:asset/9e06ce4c78f1bc749d4cdaa5d0efd8b613b5d30c.png';

export function Header() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-8 py-16 pt-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Column - Profile Image */}
        <div className="relative flex justify-center lg:justify-start">
          <div className="relative">
            {/* Abstract background shapes */}
            <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-orange-400 opacity-20 blur-2xl"></div>
            <div className="absolute top-12 -right-12 w-24 h-24 rounded-full bg-violet-500 opacity-20 blur-2xl"></div>
            
            {/* Decorative shapes */}
            <div className="absolute -top-4 left-16 w-12 h-12 rotate-45">
              <div className="w-full h-full bg-orange-400 opacity-80"></div>
            </div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8">
              <div className="w-full h-full bg-violet-500 opacity-80 rotate-45"></div>
            </div>
            <div className="absolute top-1/2 -right-8 w-16 h-16 border-4 border-orange-400 border-dashed rounded-full opacity-60"></div>
            <div className="absolute -top-6 right-12 w-12 h-12 border-4 border-violet-500 rounded-full opacity-60"></div>
            
            {/* Profile Image Container */}
            <div className="relative w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
              <img 
                src={profileImg} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right Column - Text Content */}
        <div className="space-y-8">
          <div>
            <p className="text-violet-600 uppercase tracking-wide mb-3">About Me</p>
            <h1 className="text-gray-900 mb-4">
              Full Stack Developer
            </h1>
            <p className="text-gray-600">
            Analytical Full Stack Developer with 3+ years of experience building high-performance web apps and scalable microservices. Skilled in React, FastAPI, Spring Boot, and AWS, I focus on creating fast, reliable, and user-friendly solutions. Passionate about problem-solving and collaboration, I love turning complex ideas into impactful products.            </p>
          </div>

          {/* Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-orange-50 rounded-2xl p-6 shadow-sm border border-orange-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-orange-400 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-gray-900">40% Faster APIs Delivered</h3>
              </div>
              <p className="text-gray-600">
              Engineered high-performance RESTful APIs with optimized databases and asynchronous processing, reducing response times by over 60%.
              </p>
            </div>

            <div className="bg-violet-50 rounded-2xl p-6 shadow-sm border border-violet-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-violet-500 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-gray-900">2.5+ Years of Experience</h3>
              </div>
              <p className="text-gray-600">
                Full Stack Developer skilled in React, FastAPI, Spring Boot, and AWS—specializing in scalable microservices and data-driven platforms.
              </p>
            </div>
          </div>

          {/* Download CV Button */}
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-full shadow-lg">
            <Download className="mr-2 h-5 w-5" />
              <a href="https://docs.google.com/document/d/1R_mSWb3gNXA2r7KnxQjumspQ_P6jL0wBSeF1thT7LcY/edit?tab=t.0" download>Download CV</a>
          </Button>
          
        </div>
      </div>
    </section>
  );
}

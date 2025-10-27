import { Linkedin, Github, Dribbble, Mail } from 'lucide-react';
import { Button } from './ui/button';

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="text-center space-y-8">
          <h2 className="text-white mb-4">Interview Availability</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Open to Full-time (Backend/Frontend/Full-stack). Timezone IST (UTC+5:30).
          </p>

          {/* Email */}
          <div className="flex items-center justify-center gap-3 text-gray-300">
            <Mail className="w-5 h-5" />
            <a href="mailto:contact@example.com" className="hover:text-white transition-colors">
              souravsarkar257887@gmail.com
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/sourav-sarkar-086107156/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gray-800 hover:bg-violet-600 flex items-center justify-center transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gray-800 hover:bg-violet-600 flex items-center justify-center transition-colors"
            >
              <Dribbble className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/sourav03561"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gray-800 hover:bg-violet-600 flex items-center justify-center transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>

          {/* CTA Button */}
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-full shadow-lg">
            Contact Now
          </Button>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>© 2025 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

import React from "react";
import { Download, Mail, Github, Linkedin, Code } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center animate-fade-in">
          {/* Profile Image Placeholder */}

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Vikas Kurimelly
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 font-medium">
            Full Stack Developer
          </h2>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Turning ideas into intelligent systems that improve workflows and
            customer experience.
          </p>

          <div className="text-gray-400 mb-8 space-y-2">
            <p>📍 Karimnagar, Telangana</p>
            <p>📧 vikaskurimelly@gmail.com | 📱 +91 6281653705</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            >
              <Mail size={20} />
              <span>Contact Me</span>
            </button>
            <button
              onClick={() => {
                const element = document.querySelector("#projects");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="border-2 border-blue-500 text-blue-400 px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>View Projects</span>
            </button>
            <a
              href="/resume.pdf"
              download="Vikas_Kurimelly_Resume.pdf"
              className="border-2 border-purple-500 text-purple-400 px-6 py-3 rounded-full text-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Download size={20} />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/vikas-kurimelly"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/vikas-kurimelly"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import { ExternalLink, Github, Brain, Shield, Mail, Users, Bus } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'ChefMate – AI Culinary Companion',
      description: 'Image-based recipe generation with 92% ingredient detection accuracy. Features 500+ users, 1000+ AI images rendered with filters, authentication, and role-based access.',
      technologies: ['MERN Stack', 'Gemini AI', 'Tailwind CSS', 'Cloudinary'],
      icon: Brain,
      color: 'purple',
      github: 'https://github.com/vikas-kurimelly/ChefMate.git'
    },
    {
      title: 'Pneumonia Detection using Deep Learning',
      description: '95% accuracy CNN model trained on 5,863 X-rays. Implemented transfer learning with data augmentation to boost recall. Serves 200+ real-time users.',
      technologies: ['Python', 'TensorFlow', 'Streamlit', 'CNN'],
      icon: Shield,
      color: 'blue',
      github: 'https://github.com/vikas-kurimelly/Pneumonia-Detection.git'
    },
    {
      title: 'Spam Email Detection',
      description: 'NLP-based email classification system using Naive Bayes algorithm with text preprocessing. Trained on Kaggle dataset for accurate spam detection.',
      technologies: ['NLP', 'Naive Bayes', 'Streamlit', 'Python'],
      icon: Mail,
      color: 'green',
      github: 'https://github.com/vikas-kurimelly/Spam-Email-Detection.git'
    },
    {
      title: 'Customer Segmentation',
      description: 'Market-based user profiling using K-Means clustering and PCA. Features interactive dashboard for customer insights and behavior analysis.',
      technologies: ['K-Means Clustering', 'PCA', 'Python', 'Matplotlib'],
      icon: Users,
      color: 'yellow',
      github: 'https://github.com/vikas-kurimelly/Customer-Segmentation.git'
    },
    {
      title: 'Bus Reservation System',
      description: 'Live CRUD system for bus bookings with secure login and real-time search. Built during EY GDS internship with optimized SQL queries.',
      technologies: ['Django', 'SQLite', 'Bootstrap', 'HTML/CSS'],
      icon: Bus,
      color: 'pink',
      github: 'https://github.com/vikas-kurimelly/new-bus.git'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      purple: 'from-purple-500 to-purple-700 border-purple-500/30',
      blue: 'from-blue-500 to-blue-700 border-blue-500/30',
      green: 'from-green-500 to-green-700 border-green-500/30',
      yellow: 'from-yellow-500 to-yellow-700 border-yellow-500/30',
      pink: 'from-pink-500 to-pink-700 border-pink-500/30'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="projects" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing innovative solutions at the intersection of AI and full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-gray-900/50 rounded-2xl border border-gray-700 overflow-hidden hover:border-gray-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Project Header */}
              <div className={`p-6 bg-gradient-to-br ${getColorClasses(project.color)} border-b`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                    <project.icon size={24} className="text-white" />
                  </div>
                  <div className="flex space-x-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors duration-300"
                    >
                      <Github size={16} className="text-white" />
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Github size={16} />
                    <span>View Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/vikas-kurimelly"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-full hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
          >
            <Github size={20} />
            <span>View All Projects</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
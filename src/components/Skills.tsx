import React from 'react';
import { Code, Palette, Server, Wrench, Plus } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      color: 'purple',
      skills: ['Python', 'Java', 'C', 'C++', 'JavaScript']
    },
    {
      title: 'Frontend',
      icon: Palette,
      color: 'blue',
      skills: ['HTML5', 'CSS3', 'React.js', 'Bootstrap', 'Tailwind CSS']
    },
    {
      title: 'Backend',
      icon: Server,
      color: 'green',
      skills: ['Node.js', 'Django']
    },
    {
      title: 'AI/Data Science',
      icon: Wrench,
      color: 'yellow',
      skills: ['TensorFlow', 'NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Streamlit']
    },
    {
      title: 'Databases',
      icon: Plus,
      color: 'pink',
      skills: ['MySQL', 'MongoDB']
    },
    {
      title: 'Tools & Cloud',
      icon: Wrench,
      color: 'green',
      skills: ['VS Code', 'Postman', 'Jupyter Notebook', 'Git', 'GitHub', 'Google Cloud Platform']
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      purple: 'border-purple-500 text-purple-400 bg-purple-500/10',
      blue: 'border-blue-500 text-blue-400 bg-blue-500/10',
      green: 'border-green-500 text-green-400 bg-green-500/10',
      yellow: 'border-yellow-500 text-yellow-400 bg-yellow-500/10',
      pink: 'border-pink-500 text-pink-400 bg-pink-500/10'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 bg-gray-900/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, intelligent applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg ${getColorClasses(category.color)} mr-4`}>
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm border border-gray-600 hover:border-gray-500 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skill Progress Bars (Alternative Visual) */}
        <div className="mt-16 bg-gray-800/30 p-8 rounded-2xl border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Proficiency Levels</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { skill: 'Python', level: 95 },
              { skill: 'React.js', level: 90 },
              { skill: 'Django', level: 85 },
              { skill: 'TensorFlow', level: 88 },
              { skill: 'Node.js', level: 80 },
              { skill: 'JavaScript', level: 85 }
            ].map((item) => (
              <div key={item.skill} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-300 font-medium">{item.skill}</span>
                  <span className="text-gray-400">{item.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
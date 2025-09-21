import React from 'react';
import { GraduationCap, Target, BookOpen, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Career Objective */}
            <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Target className="text-purple-400 mr-3" size={24} />
                <h3 className="text-2xl font-bold text-white">Career Objective</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Computer Science graduate with project-based experience in AI, ML, and Full-Stack Development. 
                Seeking to apply AI engineering skills to build intelligent systems that improve operational workflows and customer interaction.
              </p>
            </div>

            {/* Languages */}
            <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <BookOpen className="text-blue-400 mr-3" size={24} />
                <h3 className="text-2xl font-bold text-white">Languages</h3>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">English</span>
                  <span className="text-green-400 font-semibold">Fluent</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Telugu</span>
                  <span className="text-green-400 font-semibold">Native</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Hindi</span>
                  <span className="text-yellow-400 font-semibold">Intermediate</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Education */}
            <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-700 hover:border-green-500/50 transition-all duration-300">
              <div className="flex items-center mb-6">
                <GraduationCap className="text-green-400 mr-3" size={24} />
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>
              <div className="space-y-6">
                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="text-lg font-semibold text-white">B.Tech in CSE (AI & ML)</h4>
                  <p className="text-gray-400">JNTUH College of Engineering Rajanna Sircilla</p>
                  <p className="text-gray-400 text-sm">2022 – 2025</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="text-lg font-semibold text-white">Diploma in Computer Engineering</h4>
                  <p className="text-gray-400">Government Institute Of Electronics</p>
                  <p className="text-gray-400 text-sm">2019 – 2022</p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="text-lg font-semibold text-white">10th Grade (SSC)</h4>
                  <p className="text-green-400 font-semibold">GPA: 9.3</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-700 hover:border-yellow-500/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Award className="text-yellow-400 mr-3" size={24} />
                <h3 className="text-2xl font-bold text-white">Certifications</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">Programming with Python – Skillup</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">Career Edge Young Professional – TCS ION</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">SQL and Relational Databases 101 – IBM</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">Google Cloud Skill Badges</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">Full Stack Developer Bootcamp – GeeksforGeeks</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Internship Experience */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Professional Experience</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
          </div>
          
          <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h4 className="text-xl font-bold text-white">Full Stack Web Development Intern</h4>
                <p className="text-purple-400 font-semibold">EY GDS (Edunet Foundation & AICTE)</p>
              </div>
              <span className="text-gray-400 text-sm">Feb 2024 – Apr 2024</span>
            </div>
            <ul className="text-gray-300 space-y-2">
              <li>• Built a live Bus Reservation System with Django, Bootstrap, and JavaScript</li>
              <li>• Optimized SQL queries resulting in 40% faster booking performance</li>
              <li>• Collaborated in Agile team environment with 15+ GitHub issues resolved</li>
            </ul>
          </div>
        </div>

        {/* Achievements */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Achievements</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-700 hover:border-yellow-500/50 transition-all duration-300">
              <h4 className="text-lg font-bold text-white mb-2">🏆 Advanced Milestone – Google Cloud Arcade Cohort 2</h4>
              <p className="text-gray-400 text-sm mb-2">2024</p>
              <p className="text-gray-300">427 Labs, 78 Courses, 73 Quizzes, 27 Games on Google Cloud Skills Boost</p>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
              <h4 className="text-lg font-bold text-white mb-2">🥈 Finalist – Web Design</h4>
              <p className="text-gray-400 text-sm mb-2">2024</p>
              <p className="text-gray-300">National Symposium, JNTUH Rajanna Sircilla</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
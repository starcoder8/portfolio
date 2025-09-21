import React from 'react';
import { User, Award, Coffee, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, label: 'Years Experience', value: '5+' },
    { icon: Coffee, label: 'Projects Completed', value: '50+' },
    { icon: Heart, label: 'Happy Clients', value: '30+' },
    { icon: User, label: 'Technologies Mastered', value: '15+' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate fullstack developer with expertise in modern web technologies and a love for creating efficient, scalable solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              With over 5 years of experience in web development, I specialize in building robust, 
              scalable applications using cutting-edge technologies. My expertise spans both frontend 
              and backend development, allowing me to deliver complete solutions from concept to deployment.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm passionate about clean code, modern architecture patterns, and staying up-to-date 
              with the latest industry trends. Whether it's a complex enterprise application or a 
              sleek startup MVP, I bring dedication and technical excellence to every project.
            </p>
            
            <div className="pt-4">
              <a 
                href="/resume.pdf" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-blue-100 rounded-full mb-4">
                    <stat.icon size={32} className="text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Senior Fullstack Developer',
      company: 'Tech Innovations Inc.',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Leading development of scalable web applications using React, Next.js, and Node.js. Mentoring junior developers and architecting cloud infrastructure.',
      achievements: [
        'Reduced application load time by 60% through optimization',
        'Led a team of 5 developers on multiple projects',
        'Implemented CI/CD pipelines improving deployment efficiency by 40%'
      ]
    },
    {
      id: 2,
      title: 'Fullstack Developer',
      company: 'Digital Solutions Ltd.',
      location: 'New York, NY',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client projects using Laravel, React, and various cloud services. Collaborated with design and product teams.',
      achievements: [
        'Built 15+ client applications from scratch',
        'Integrated payment systems and third-party APIs',
        'Improved code quality through testing and code reviews'
      ]
    },
    {
      id: 3,
      title: 'Frontend Developer',
      company: 'Creative Agency Pro',
      location: 'Austin, TX',
      period: '2019 - 2020',
      description: 'Specialized in creating responsive, user-friendly interfaces using React and modern CSS frameworks. Worked closely with designers and UX teams.',
      achievements: [
        'Delivered pixel-perfect implementations of 20+ designs',
        'Improved website performance scores by 35%',
        'Established frontend development best practices'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My journey through various roles, building expertise and delivering impactful solutions.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div key={experience.id} className="relative">
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-full bg-blue-200 hidden md:block"></div>
              )}
              
              <div className="flex flex-col md:flex-row gap-6">
                {/* Timeline Dot */}
                <div className="hidden md:flex items-start pt-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Building size={20} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{experience.title}</h3>
                        <div className="flex flex-wrap items-center gap-4 text-gray-600">
                          <div className="flex items-center space-x-2">
                            <Building size={16} />
                            <span className="font-medium">{experience.company}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin size={16} />
                            <span>{experience.location}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar size={16} />
                            <span>{experience.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4 leading-relaxed">{experience.description}</p>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
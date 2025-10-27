import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { Badge } from './ui/badge';

export function Experience() {
  const experiences = [
    {
      company: 'Cognizant',
      position: 'Full Stack Developer',
      duration: 'Jul 2021 – Sep 2023',
      location: 'Remote / India',
      type: 'Full-time',
      description: 'Engineered high-performance APIs and scalable microservices while optimizing frontend performance for enterprise banking platforms.',
      responsibilities: [
        'Developed RESTful APIs integrating SQL, NoSQL, and third-party sources, improving aggregation efficiency by 40%',
        'Reduced average API response time from 1.8s to 600ms through database indexing and asynchronous processing',
        'Architected backend controllers to unify financial and investment data across systems, enabling real-time analytics',
        'Optimized React front-end performance with API caching and lazy loading, improving user conversions by 23%',
        'Collaborated with cross-functional teams on NNIP banking data platform acquired by Goldman Sachs',
        'Led performance profiling and code reviews, reducing production incidents by 25%'
      ],
      technologies: ['React', 'Flask','FastAPI', 'Jinja', 'AWS', 'REST APIs', 'PostgreSQL', 'MongoDB'],
      achievements: [
        '40% improvement in data aggregation efficiency',
        '23% increase in user conversions',
        'Platform success contributed to Goldman Sachs acquisition'
      ]
    },
    {
      company: 'Cognizant',
      position: 'Full Stack Engineer Intern',
      duration: 'Jan 2021 – Jun 2021',
      location: 'Remote / India',
      type: 'Internship',
      description: 'Contributed to backend services and cloud deployments while assisting in the transition to microservices architecture.',
      responsibilities: [
        'Developed RESTful APIs and backend services using Spring Boot deployed on AWS (EC2, RDS, S3)',
        'Helped transition monolithic applications to microservices, reducing deployment speed by ~25%',
        'Optimized API performance with query tuning and caching, improving response times by 20–30%',
        'Collaborated with senior engineers in code reviews, sprint planning, and client demos',
        'Supported CI/CD automation with Jenkins and GitHub Actions, reducing manual deployment tasks'
      ],
      technologies: ['Spring Boot', 'AWS (EC2, RDS, S3)', 'SQL', 'React','Jenkins', 'GitHub Actions'],
      achievements: [
        'Improved API response time by ~30%',
        'Reduced deployment effort by ~25%',
        'Hands-on cloud deployment experience (AWS)'
      ]
    }
  ];

  return (
    <section id="experience" className="max-w-7xl mx-auto px-8 py-16 bg-white">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
            <Briefcase className="w-5 h-5 text-orange-600" />
          </div>
          <h2 className="text-gray-900">Work Experience</h2>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          My professional journey spanning over 3 years in software development and design.
        </p>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl border border-gray-200 hover:border-violet-200 hover:shadow-lg transition-all p-8"
          >
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-gray-900">{exp.position}</h3>
                  <Badge className="bg-violet-100 text-violet-700 hover:bg-violet-200">
                    {exp.type}
                  </Badge>
                </div>
                <p className="text-orange-600 mb-3">{exp.company}</p>
                <p className="text-gray-600 mb-4">{exp.description}</p>

                <div className="flex flex-wrap gap-4 text-gray-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Achievements Badge */}
              <div className="bg-gradient-to-br from-violet-50 to-orange-50 rounded-xl p-4 lg:w-64 flex-shrink-0">
                <p className="text-gray-900 mb-3">Key Achievements</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-violet-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Responsibilities */}
            <div className="mb-6">
              <p className="text-gray-900 mb-3">Responsibilities</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {exp.responsibilities.map((responsibility, respIndex) => (
                  <li key={respIndex} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-violet-600 mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <p className="text-gray-900 mb-3">Technologies Used</p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <Badge
                    key={techIndex}
                    variant="outline"
                    className="bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100 rounded-full"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

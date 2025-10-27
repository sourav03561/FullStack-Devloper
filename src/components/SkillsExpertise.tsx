import { useState } from 'react';
import { Code2, Palette, Globe, ChevronDown,DatabaseZap,Cloud,Network,GitBranch } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from './ui/collapsible';
import { Badge } from './ui/badge';

export function SkillsExpertise() {
  const [openSkills, setOpenSkills] = useState<number[]>([]);

  const toggleSkill = (index: number) => {
    setOpenSkills(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const skills = [
  {
    icon: <Code2 className="w-6 h-6 text-violet-600" />,
    title: 'Backend Development',
    level: 'Advanced',
    color: 'violet',
    description: 'Building scalable and high-performance backend systems with modern frameworks and microservices architecture.',
    technologies: ['FastAPI', 'Spring Boot', 'Node.js', 'Express', 'Python', 'Java'],
    experience: '3+ years of professional experience in backend and API development',
    highlights: [
      'RESTful API design & optimization',
      'Microservices architecture',
      'Asynchronous processing',
      'Database query tuning'
    ]
  },
  {
    icon: <Palette className="w-6 h-6 text-violet-600" />,
    title: 'Frontend Development',
    level: 'Expert',
    color: 'violet',
    description: 'Developing responsive, user-friendly interfaces with modern JavaScript frameworks and UI libraries.',
    technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'JavaScript (ES6+)'],
    experience: '3+ years of building optimized and scalable front-end solutions',
    highlights: [
      'Component-based architecture',
      'State management (Redux, Zustand)',
      'Lazy loading & API caching',
      'Accessibility standards (WCAG)'
    ]
  },
  {
    icon: <DatabaseZap className="w-6 h-6 text-violet-600" />,
    title: 'Databases',
    level: 'Advanced',
    color: 'violet',
    description: 'Designing, optimizing, and managing SQL and NoSQL databases for high-performance applications.',
    technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
    experience: 'Hands-on experience in database design, indexing, and optimization',
    highlights: [
      'Database schema design',
      'Query optimization',
      'Indexing strategies',
      'Data aggregation & analytics'
    ]
  },
  {
    icon: <Cloud className="w-6 h-6 text-violet-600" />,
    title: 'Cloud & DevOps',
    level: 'Advanced',
    color: 'violet',
    description: 'Deploying, automating, and scaling applications on cloud platforms with CI/CD practices.',
    technologies: ['AWS (EC2, S3, RDS)', 'Docker', 'Jenkins', 'GitHub Actions'],
    experience: 'Experience in deploying and maintaining production-grade applications on AWS',
    highlights: [
      'CI/CD pipeline automation',
      'Containerization with Docker',
      'Infrastructure scaling',
      'Cloud-native deployments'
    ]
  },
  {
    icon: <Network className="w-6 h-6 text-violet-600" />,
    title: 'API Development',
    level: 'Advanced',
    color: 'violet',
    description: 'Designing and integrating RESTful APIs for seamless communication across services and platforms.',
    technologies: ['REST APIs', 'GraphQL', 'Third-party API integrations'],
    experience: 'Built APIs powering financial and data-driven platforms at scale',
    highlights: [
      'RESTful API design',
      'Payload optimization',
      'Real-time data sync',
      'Cross-system integration'
    ]
  },
  {
    icon: <GitBranch className="w-6 h-6 text-violet-600" />,
    title: 'Software Practices',
    level: 'Advanced',
    color: 'violet',
    description: 'Ensuring code quality, scalability, and maintainability through best practices and agile methodologies.',
    technologies: ['Agile/Scrum', 'Git', 'Jest/Unit Testing', 'Code Reviews'],
    experience: '3+ years of experience in collaborative software engineering environments',
    highlights: [
      'Agile & Scrum methodology',
      'Code review & mentoring',
      'Performance profiling',
      'Test-driven development'
    ]
  }
];


  return (
    <section id="skills" className="max-w-7xl mx-auto px-8 py-16">
      <div className="flex items-center gap-3 mb-12">
        <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center">
          <svg className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h2 className="text-gray-900">Skills & Expertise</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <Collapsible
            key={index}
            open={openSkills.includes(index)}
            onOpenChange={() => toggleSkill(index)}
          >
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <CollapsibleTrigger className="w-full p-6 text-left">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-violet-50 flex items-center justify-center flex-shrink-0">
                    {skill.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-900 mb-1">{skill.title}</h3>
                    <p className="text-gray-500">{skill.level}</p>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                      openSkills.includes(index) ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <div className="px-6 pb-6 space-y-4 border-t border-gray-100 pt-4">
                  <p className="text-gray-600">{skill.description}</p>
                  
                  <div>
                    <p className="text-gray-900 mb-2">Technologies</p>
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-violet-50 text-violet-700 hover:bg-violet-100 rounded-full"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="bg-violet-50 rounded-lg p-4">
                    <p className="text-violet-900">{skill.experience}</p>
                  </div>

                  <div>
                    <p className="text-gray-900 mb-2">Key Highlights</p>
                    <ul className="space-y-2">
                      {skill.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-violet-600 mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CollapsibleContent>
            </div>
          </Collapsible>
        ))}
      </div>
    </section>
  );
}

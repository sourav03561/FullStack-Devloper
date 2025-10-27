import { Badge } from './ui/badge';
import { Button } from './ui/button'; // assuming you are using shadcn/ui or similar
import projectsImg from 'figma:asset/b970d08400a085d6a1a995a84e42606f8dbd1b81.png';
import projectsImg1 from '../assets/COVID-19.png';

export function FeaturedProjects() {
  const projects = [
    {
      image: projectsImg,
      year: '2023',
      category: 'Full Stack Development + NLP',
      title: 'BookBid – Smart Book Exchange Platform',
      description:
        'Built a web app for swapping books, helping readers save ~70% costs. Added an NLP-based recommendation engine boosting match relevance by ~40%, and a streamlined UI that cut user steps by ~30%. Promotes sustainability by reducing 1–2 kg paper waste per user annually.',
      tags: ['Flask', 'React', 'Firebase', 'NLP', 'Full Stack'],
      github: 'https://github.com/sourav03561/BookBid',
      live: 'https://bookbid-demo.vercel.app', // replace with your live demo link
    },
    {
      image: projectsImg1,
      year: '2022',
      category: 'Big Data / Data Analysis',
      title: 'COVID-19 Data Analysis',
      description:
        'Built an automated ETL pipeline from REST APIs & MySQL, storing in Parquet (60% smaller). Indexed data in Elasticsearch for ms-level queries and visualized 190+ countries’ trends in Kibana. Automated with Airflow, cutting manual work by 90% and enabling real-time global & regional insights.',
      tags: ['Big Data', 'Python', 'Airflow', 'Elasticsearch', 'Kibana'],
      github: 'https://github.com/sourav03561/covid-19-data-analysis-Big-Data-',
      live: 'https://covid-analysis-demo.vercel.app', // replace with your live demo link
    },
  ];

  return (
    <section id="projects" className="max-w-7xl mx-auto px-8 py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-gray-900 mb-4">Featured Projects</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Showcasing projects that deliver seamless experiences and scalable web solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
          >
            {/* Project Image */}
            <div className="relative aspect-video overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              {/* Year Badge */}
              <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-md">
                <span className="text-gray-900">{project.year}</span>
              </div>
            </div>

            {/* Project Details */}
            <div className="p-6 space-y-4">
              <p className="text-violet-600">{project.category}</p>
              <h3 className="text-gray-900">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag, tagIndex) => (
                  <Badge
                    key={tagIndex}
                    variant="secondary"
                    className="bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-full px-4 py-1"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <Button
                  asChild
                  className="bg-violet-600 text-white hover:bg-violet-700 rounded-full"
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full"
                >
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    Live Project
                  </a>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Timeline() {
  const events = [
    {
      year: '2017-2021',
      title: 'Graduated',
      description: 'BTech in Information Technology',
      side: 'left'
    },
    {
      year: '2021',
      title: 'Full Stack Engineer(Intern)',
      description: 'Cognizant',
      side: 'right'
    },
    {
      year: '2021-2023',
      title: 'Software Engineer(Full Time)',
      description: 'Cognizant',
      side: 'left'
    },
    {
      year: '2023-2025',
      title: 'Masters',
      description: 'Data Science(ISEP)',
      side: 'right'
    }
  ];

  return (
    <section id="timeline" className="max-w-7xl mx-auto px-8 py-16">
      <div className="text-center mb-16">
        <h2 className="text-gray-900 mb-4">My Timeline</h2>
        <p className="text-gray-600">A journey through my career milestones</p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300"></div>

        {/* Timeline Events */}
        <div className="space-y-12">
          {events.map((event, index) => (
            <div
              key={index}
              className={`relative flex items-center ${
                event.side === 'left' ? 'justify-start' : 'justify-end'
              }`}
            >
              {/* Content */}
              <div
                className={`w-5/12 ${
                  event.side === 'left' ? 'text-right pr-12' : 'text-left pl-12'
                }`}
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="inline-block px-3 py-1 bg-violet-100 text-violet-700 rounded-full mb-3">
                    {event.year}
                  </div>
                  <h3 className="text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>

              {/* Center Node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-violet-600 border-4 border-white shadow-lg z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';


function Projects() {
  const [filter, setFilter] = useState('All');

  const projectImages = [
    {
      src: 'src/assets/projects-images/1.png',
      alt: 'Project 1',
      category: 'Web',
      description: 'A responsive website project.',
      tools: 'HTML, CSS, JavaScript',
      projectType: 'School Project',
    },
    {
      src: 'src/assets/projects-images/2.png',
      alt: 'Project 2',
      category: 'Desktop',
      description: 'Desktop app with Electron.',
      tools: 'JavaScript, Electron',
      projectType: 'Activity',
    },
    {
      src: 'src/assets/projects-images/3.png',
      alt: 'Project 3',
      category: 'Mobile',
      description: 'Mobile app built with React Native.',
      tools: 'React Native, JavaScript',
      projectType: 'Capstone',
    },
    {
      src: 'src/assets/projects-images/4.png',
      alt: 'Project 4',
      category: 'Web',
      description: 'Single page portfolio site.',
      tools: 'React, Tailwind CSS',
      projectType: 'School Project',
    },
    {
      src: 'src/assets/projects-images/5.png',
      alt: 'Project 5',
      category: 'Desktop',
      description: 'Inventory system project.',
      tools: 'C#, .NET',
      projectType: 'Capstone',
    },
    {
      src: 'src/assets/projects-images/6.png',
      alt: 'Project 6',
      category: 'Mobile',
      description: 'To-do app for Android.',
      tools: 'Kotlin, Android Studio',
      projectType: 'Activity',
    },
    {
      src: 'src/assets/projects-images/7.png',
      alt: 'Project 7',
      category: 'Web',
      description: 'Company landing page.',
      tools: 'HTML, CSS, Bootstrap',
      projectType: 'School Project',
    },
    {
      src: 'src/assets/projects-images/8.png',
      alt: 'Project 8',
      category: 'Desktop',
      description: 'Payroll system project.',
      tools: 'Java, Swing',
      projectType: 'Activity',
    },
    {
      src: 'src/assets/projects-images/9.png',
      alt: 'Project 9',
      category: 'Mobile',
      description: 'Fitness tracker app.',
      tools: 'Flutter, Dart',
      projectType: 'Capstone',
    },
    {
      src: 'src/assets/projects-images/10.png',
      alt: 'Project 10',
      category: 'Web',
      description: 'Blog site with CMS.',
      tools: 'PHP, MySQL',
      projectType: 'School Project',
    },
  ];

  const filteredImages =
    filter === 'All'
      ? projectImages
      : projectImages.filter((img) => {
          if (filter === 'Webpage/Website') return img.category === 'Web';
          if (filter === 'Desktop Application') return img.category === 'Desktop';
          if (filter === 'Mobile Application') return img.category === 'Mobile';
          return true;
        });

  return (
    <div className="projects mx-4 md:mx-8 lg:mx-16 py-8">
      <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Projects</h2>
      <p className="text-center text-gray-600 mb-6">Here are some of my projects.</p>

      <div className="flex justify-center gap-2 flex-wrap mb-8">
        <button
          onClick={() => setFilter('All')}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          All
        </button>
        <button
          onClick={() => setFilter('Webpage/Website')}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Webpage/Website
        </button>
        <button
          onClick={() => setFilter('Desktop Application')}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Desktop Application
        </button>
        <button
          onClick={() => setFilter('Mobile Application')}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Mobile Application
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {filteredImages.map((image, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-md transform transition duration-300 hover:scale-105"
          >
            {/* Project Type Badge */}
            <p
              className={`text-xs absolute top-2 left-2 z-10 font-semibold px-2 py-1 rounded ${
                image.projectType === 'School Project'
                  ? 'bg-gray-900 text-white'
                  : image.projectType === 'Activity'
                  ? 'bg-blue-600 text-white'
                  : image.projectType === 'Capstone'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-200 text-black'
              }`}
            >
              {image.projectType}
            </p>

            {/* Image */}
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto object-cover transition-transform duration-300 ease-in-out"
            />

            {/* Overlay */}
            <div className="absolute inset-0 md:bg-white/30 md:backdrop-blur-md md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center p-4">
              <div className="flex flex-col gap-2 text-center text-black w-full items-center">
                <span className="px-3 py-1 text-sm font-bold bg-white/70 backdrop-blur-md rounded">
                  {image.alt}
                </span>
                <span className="px-3 py-1 text-xs bg-white/70 backdrop-blur-md rounded">
                  {image.description}
                </span>
                <span className="px-3 py-1 text-[10px] italic bg-white/70 backdrop-blur-md rounded">
                  Tools: {image.tools}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

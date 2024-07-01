
import React from 'react';

const projects = [
  { id: 1, title: 'Project 1', description: 'Online Watch', link: 'https://aylanasoat.netlify.app/' },
  { id: 2, title: 'Project 2', description: 'Currency Converter', link: 'https://valyutaayirboshla.netlify.app/' },
  { id: 3, title: 'Project 3', description: 'Restaurant Website', link: 'https://6682ac85c5b6a418c5b9096c--chimerical-gumdrop-1086a0.netlify.app/' },
  { id: 4, title: 'Project 4', description: 'Delivery service website', link: 'https://deliveryservise-eta.vercel.app/' },
  { id: 5, title: 'Project 5', description: 'Online tasbeh', link: 'https://zikr-pearl.vercel.app/' },
  { id: 6, title: 'Project 6', description: 'Fabrh website', link: 'https://react-project-1-five.vercel.app/' },
  { id: 7, title: 'Project 7', description: 'TV-maze', link: 'https://tvmaze-mtql.vercel.app/' },
  { id: 8, title: 'Project 8', description: 'Table students', link: 'https://table-students.netlify.app/' },

];

function Projects() {
  return (
    <section className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div key={project.id} className="bg-white p-4 rounded " id="project">
            <h2 className="text-xl font-bold mb-2">{project.title}</h2>
            <p className="mb-4">{project.description}</p>
            <a href={project.link} className="text-blue-500 hover:underline">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

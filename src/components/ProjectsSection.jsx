import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "OneGpt",
    description : "An AI-powered chatbot web application for conversational interactions, chat history, and thread management.",
    image: "/projects/onegpt.png",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "OpenAI API"],
    demoUrl: "https://one-ibram8hj8-mayukh44s-projects.vercel.app",
    gitHubUrl: "",
    status: "Live Now",
  },
  {
    id: 2,
    title: "Social Media Platform",
    description: "A full-stack social media platform enabling user authentication, profile management, friend requests, posts, likes, comments, and social interactions.",
    image: "/projects/socialmedia.png",
    tags: ["Next.js", "Node.js", "Express.js", "MongoDB", "Redux"],
    demoUrl: "",
    gitHubUrl: "",
    status: "Under Production",
  },
  {
    id: 3,
    title: "WanderLust",
    description: "An Airbnb-inspired website to list and review travel stays.",
    image: "/projects/wanderlust.png",
    tags: ["EJS", "Node.js", "Express.js", "MongoDB", "Bootstrap"],
    demoUrl: "https://wanderlust-htap.onrender.com/listings",
    gitHubUrl: "https://github.com/mayukh44/WANDERLUST",
    status: "Under Production",
  },

];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">

      <div>
      <div className="container mx-auto max-w-5xl">
        <h2 className="tex-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative group bg-card rounded-lg overflow-hidden shadow-xs card-hover hover:border-primary"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title + Description */}
                <h3 className="text-xl font-semibold mb-1">
                  {project.title}
                </h3>
                <p className="text-center text-sm text-muted-foreground mb-8">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      className="p-2 rounded-full hover:bg-primary/10 transition"
                      target="_blank"
                    >
                      <ExternalLink size={18} />
                    </a>
                    <a
                      href={project.gitHubUrl}
                      className="p-2 rounded-full hover:bg-primary/10 transition"
                      target="_blank"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Status Badge (bottom-right corner) */}
              {project.status && (
                <span className="absolute bottom-2 right-2 px-3 py-1 text-xs rounded-full bg-yellow-200 text-yellow-900 font-medium shadow-md mb-5">
                  {project.status}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/mayukh44"
          >
            Check My Github <ArrowRight size={16} />
          </a>
      </div>
      </div>
      
    </section>
    
  );
};

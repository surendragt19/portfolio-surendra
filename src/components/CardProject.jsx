const CardProject = ({ project }) => {
  const { technology, title, description, image, link, github } = project;

  return (
    <div className="card flex flex-col relative lg:w-[24vw] lg:h-[34vw] h-[60vw] bg-zinc-800 px-6 py-6 rounded-md gap-4 transition-transform duration-300 hover:translate-y-[-5px]">
      {/* Project Image */}
      <div className="flex-1 h-1/2 w-full">
        <img
          src={image}
          alt={`${title} project preview`}
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      {/* Project Details */}
      <div className="flex-1 flex flex-col justify-between">
        <h1 className="text-2xl font-bold flex items-center justify-between w-full">
          {/* Project Title Link */}
          <a href={link} target="_blank" rel="noopener noreferrer" className="hover:underline">
            <span>{title} ↗</span>
          </a>

          {/* GitHub Link */}
          <a href={github} target="_blank" rel="noopener noreferrer" className="font-thin">
            <i className="ri-github-line"></i>
          </a>
        </h1>

        {/* Project Description */}
        <p className="text-sm">
          {description}
        </p>

        {/* Technology Stack */}
        <div className="flex flex-wrap gap-2 text-sm">
          {technology.map((item, index) => (
            <span key={index} className="bg-cyenH px-2 py-1 leading-none text-zinc-900 rounded-full">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardProject;

import { experiences } from "@/lib/constants";

const ExperienceSection = () => {
  return (
    <div className="flex flex-col gap-6">
      <h4
        className={`font-plus-jakarta-sans font-bold text-6xl capitalize -ml-3 text-sidebar-foreground/85 tracking-tight`}
      >
        where I&apos;ve been
      </h4>
      <p
        className={`font-light leading-relaxed lg:w-3/4 text-md text-secondary-foreground`}
      >
        Roles and experiences that shaped how I think, build, and collaborate.
      </p>
      <ul className="flex flex-col gap-8">
        {experiences.map((exp, index) => (
          <li key={index} className="flex flex-col gap-1.5">
            <span className="text-lg font-medium">{exp.role}</span>
            <span className="text-sm text-foreground/50 font-mono">
              {exp.company} · {exp.duration}
            </span>
            {exp.description && (
              <p className="text-sm text-foreground/60 leading-relaxed font-light mt-1">
                {exp.description}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceSection;

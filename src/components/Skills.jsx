const skillGroups = [
  {
    name: "Languages",
    description: "Programming and the web fundamentals",
    skills: ["JavaScript", "HTML & CSS", "Python"],
  },
  {
    name: "Frontend",
    description: "Building responsive interfaces",
    skills: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    name: "Backend & data",
    description: "Connecting products to data and services",
    skills: ["Supabase", "MongoDB", "MySQL", "Better Auth"],
  },
  {
    name: "Tools",
    description: "Everyday development workflow",
    skills: ["Git & GitHub", "Vite", "Lucide React"],
  },
];

function Skills() {
  return (
    <div className="section-space section-divider">
      <div className="page-container">
        <div className="section-heading-row">
          <div>
            <p className="section-kicker">Technical skills</p>
            <h2 className="section-title mt-4">Tools I’m learning and using.</h2>
          </div>
          <p className="section-copy section-heading-aside">
            A practical toolkit shaped by the projects I build and the concepts
            I’m exploring.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <section
              className="skill-group surface-card"
              key={group.name}
            >
              <h3>{group.name}</h3>
              <p>{group.description}</p>
              <ul className="skill-list" aria-label={`${group.name} skills`}>
                {group.skills.map((skill) => (
                  <li className="skill-badge" key={skill}>
                    {skill}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;

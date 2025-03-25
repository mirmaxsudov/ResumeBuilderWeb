import React from "react";

// Helper function to format dates
const formatDate = (dateString) => {
  // Check if the date is already in the format "Mon YYYY" or just "YYYY"
  if (
    typeof dateString === "string" &&
    (dateString.match(/^[A-Za-z]{3}\s\d{4}$/) || dateString.match(/^\d{4}$/))
  ) {
    return dateString;
  }

  // If it's empty, return empty string
  if (!dateString) return "";

  try {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  } catch (e) {
    return dateString; // Return as is if parsing fails
  }
};

// Helper function to split responsibilities into an array
const formatResponsibilities = (responsibilities) => {
  if (!responsibilities) return "";

  // Replace newlines with <br/> tags for HTML rendering
  return responsibilities.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      {index < responsibilities.split("\n").length - 1 && <br />}
    </React.Fragment>
  ));
};

// Create a mock version of skills.ver1.subs from skills.ver2.technologies
const createSkillsStructure = (skills) => {
  if (skills.ver1 && skills.ver1.subs) {
    return skills.ver1.subs;
  }

  // If ver1 doesn't exist, create a mock structure from ver2
  return [
    {
      title: "Technical Skills",
      technologies: skills.ver2.technologies,
    },
  ];
};

export default function Resume1({ data }) {
  // Create a skills structure that matches what the component expects
  const skillsStructure = createSkillsStructure(data.skills);

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white font-sans">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-1">
          {data.info.firstName.toUpperCase()} {data.info.lastName.toUpperCase()}
        </h1>
        <p className="text-sm text-gray-600">{data.info.title}</p>
      </header>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Column */}
        <div className="w-full md:w-2/5">
          <section className="mb-8">
            <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-4">
              DETAILS
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-sm">{data.info.address}</p>
              </div>
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-sm">{data.info.phone}</p>
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-sm">{data.info.email}</p>
              </div>
            </div>
          </section>

          {data.info.socials.length > 0 && (
            <section className="mb-8">
              <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-4">
                LINKS
              </h2>
              <div className="space-y-2">
                {data.info.socials.map((social) => (
                  <p key={social.id} className="text-sm">
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline">
                      {social.label}
                    </a>
                  </p>
                ))}
              </div>
            </section>
          )}

          <section className="mb-8">
            <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-4">
              {data.skills.title.toUpperCase()}
            </h2>
            <div className="space-y-6">
              {/* Using our created skills structure */}
              {skillsStructure.map((category, index) => (
                <div key={index} className="space-y-3">
                  <h3 className="font-semibold">{category.title}</h3>
                  {category.technologies.map((skill) => (
                    <div key={skill.id}>
                      <p className="text-sm mb-1">{skill.name}</p>
                      <div className="w-full bg-gray-200 h-1.5 rounded-full">
                        <div
                          className="bg-gray-800 h-1.5 rounded-full"
                          style={{ width: `${skill.percent}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-4">
              {data.languages.title.toUpperCase()}
            </h2>
            <div className="space-y-3">
              {data.languages.languages.map((language) => (
                <div key={language.id}>
                  <p className="text-sm mb-1">
                    {language.name}{" "}
                    <span className="text-gray-500">({language.level})</span>
                  </p>
                  <div className="w-full bg-gray-200 h-1.5 rounded-full">
                    <div
                      className="bg-gray-800 h-1.5 rounded-full"
                      style={{
                        width:
                          language.level === "Native"
                            ? "100%"
                            : language.level === "C2"
                            ? "100%"
                            : language.level === "C1"
                            ? "90%"
                            : language.level === "B2"
                            ? "80%"
                            : language.level === "B1"
                            ? "60%"
                            : language.level === "A2"
                            ? "40%"
                            : "20%",
                      }}></div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-3/5">
          <section className="mb-8">
            <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-4">
              {data.profile.title.toUpperCase()}
            </h2>
            <p className="text-sm">{data.profile.text}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-4">
              {data.experience.title.toUpperCase()}
            </h2>

            {data.experience.jobs.map((job) => (
              <div key={job.id} className="mb-6">
                <h3 className="font-semibold">{job.title}</h3>
                <p className="text-sm text-gray-600">
                  {job.company}, {job.city}
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  {formatDate(job.startDate)} -{" "}
                  {job.isCurrent ? "Present" : formatDate(job.endDate)}
                </p>
                <p className="text-sm mb-2">
                  {formatResponsibilities(job.responsibilities)}
                </p>
                {job.technologies && job.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-2">
                    {job.technologies.map((tech) => (
                      <span
                        key={tech.id}
                        className="text-xs bg-gray-100 px-2 py-1 rounded">
                        {tech.name}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-4">
              {data.education.title.toUpperCase()}
            </h2>

            {data.education.educations.map((edu) => (
              <div key={edu.id} className="mb-4">
                <h3 className="font-semibold">{edu.name}</h3>
                <p className="text-sm">
                  {edu.degree && `${edu.degree}, `}
                  {edu.city}
                </p>
                {(edu.startDate || edu.endDate) && (
                  <p className="text-sm text-gray-600 mb-1">
                    {formatDate(edu.startDate)}
                    {edu.endDate && ` - ${formatDate(edu.endDate)}`}
                  </p>
                )}
                {edu.desc && <p className="text-sm">{edu.desc}</p>}
              </div>
            ))}
          </section>

          {data.projects &&
            data.projects.count > 0 &&
            data.projects.projects && (
              <section>
                <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-4">
                  {data.projects.title.toUpperCase()}
                </h2>

                {data.projects.projects.map((project) => (
                  <div key={project.id} className="mb-4">
                    <h3 className="font-semibold">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline">
                        {project.title}
                      </a>
                    </h3>
                    <p className="text-sm text-gray-600 mb-1">
                      {formatDate(project.startDate)} -{" "}
                      {project.isCurrent
                        ? "Present"
                        : formatDate(project.endDate)}
                    </p>
                    <p className="text-sm mb-2">{project.desc}</p>
                    {project.technologies &&
                      project.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech.id}
                              className="text-xs bg-gray-100 px-2 py-1 rounded">
                              {tech.name}
                            </span>
                          ))}
                        </div>
                      )}
                  </div>
                ))}
              </section>
            )}
        </div>
      </div>
    </div>
  );
}

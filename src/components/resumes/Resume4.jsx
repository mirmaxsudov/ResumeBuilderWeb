// Helper function to format dates
const formatDate = (dateString) => {
    // Check if the date is already in the format "Mon YYYY" or just "YYYY"
    if (typeof dateString === "string" && (dateString.match(/^[A-Za-z]{3}\s\d{4}$/) || dateString.match(/^\d{4}$/))) {
      return dateString
    }
  
    // If it's empty, return empty string
    if (!dateString) return ""
  
    try {
      const date = new Date(dateString)
      return date.toLocaleDateString("en-US", { month: "short", year: "numeric" })
    } catch (e) {
      return dateString // Return as is if parsing fails
    }
  }
  
  // Helper function to format responsibilities
  const formatResponsibilities = (responsibilities) => {
    if (!responsibilities) return []
  
    // Split by newlines or by periods if no newlines
    if (responsibilities.includes("\n")) {
      return responsibilities
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line !== "")
        .map((line) => (line.startsWith("• ") ? line.substring(2) : line))
    } else {
      return responsibilities.split(". ").filter((item) => item.trim() !== "")
    }
  }
  
  export default function Resume4({ data }) {
    return (
      <div className="max-w-4xl mx-auto bg-white font-sans">
        {/* Header */}
        <header className="bg-black text-white py-8">
          <div className="flex flex-col items-center justify-center">
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
              <img src={data.image.url || "/placeholder.svg"} alt="Profile" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-2xl font-bold">
              {data.info.firstName} {data.info.lastName}
            </h1>
            <p className="text-gray-400">{data.info.title}</p>
          </div>
        </header>
  
        {/* Contact Info Bar */}
        <div className="bg-black text-white py-3 px-4 flex justify-center space-x-8 text-sm border-t border-gray-800">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{data.info.address}</span>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span>{data.info.email}</span>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span>{data.info.phone}</span>
          </div>
        </div>
  
        <div className="flex flex-col md:flex-row">
          {/* Left Column */}
          <div className="w-full md:w-2/3 p-8 border-r">
            {/* Profile Section */}
            <section className="mb-10">
              <h2 className="text-xl font-bold mb-6 uppercase border-b pb-2">Profile</h2>
              <p className="text-gray-600 leading-relaxed">{data.profile.text}</p>
            </section>
  
            {/* Experience Section */}
            <section className="mb-10">
              <h2 className="text-xl font-bold mb-6 uppercase border-b pb-2">Experience</h2>
              {data.experience.jobs.map((job) => (
                <div key={job.id} className="mb-6">
                  <div className="mb-2">
                    <h3 className="font-bold">{job.company}</h3>
                    <p className="text-gray-600">{job.title}</p>
                    <p className="text-sm text-gray-500">
                      {formatDate(job.startDate)} - {job.isCurrent ? "Present" : formatDate(job.endDate)}
                    </p>
                  </div>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {formatResponsibilities(job.responsibilities).map((responsibility, index) => (
                      <li key={index} className="text-sm">
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
  
            {/* Education Section */}
            <section>
              <h2 className="text-xl font-bold mb-6 uppercase border-b pb-2">Education</h2>
              {data.education.educations.map((edu) => (
                <div key={edu.id} className="mb-4">
                  <h3 className="font-bold">{edu.name}</h3>
                  {edu.degree && <p className="text-gray-600">{edu.degree}</p>}
                  <p className="text-sm text-gray-500">
                    {edu.city && !edu.city.includes(formatDate(edu.startDate)) ? (
                      // If city doesn't already contain the date info
                      <>
                        {edu.city}
                        <br />
                        {formatDate(edu.startDate)}
                        {edu.endDate && ` - ${formatDate(edu.endDate)}`}
                      </>
                    ) : (
                      // If city already contains the date info or other details
                      edu.city || `${formatDate(edu.startDate)}${edu.endDate ? ` - ${formatDate(edu.endDate)}` : ""}`
                    )}
                  </p>
                </div>
              ))}
            </section>
          </div>
  
          {/* Right Column */}
          <div className="w-full md:w-1/3 p-8">
            {/* Links Section */}
            <section className="mb-10">
              <h2 className="text-xl font-bold mb-6 uppercase border-b pb-2">Links</h2>
              <div className="space-y-2">
                {data.info.socials.map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-600 hover:text-gray-900 text-sm"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </section>
  
            {/* Skills Section */}
            <section className="mb-10">
              <h2 className="text-xl font-bold mb-6 uppercase border-b pb-2">Skills</h2>
              <div className="space-y-4">
                {data.skills.ver2.technologies.map((skill) => (
                  <div key={skill.id}>
                    <p className="text-sm text-gray-600 mb-1">{skill.name}</p>
                    <div className="w-full bg-gray-200 h-1">
                      <div className="bg-black h-1" style={{ width: `${skill.percent}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
  
            {/* Languages Section */}
            <section>
              <h2 className="text-xl font-bold mb-6 uppercase border-b pb-2">Languages</h2>
              <div className="space-y-4">
                {data.languages.languages.map((language) => (
                  <div key={language.id}>
                    <p className="text-sm text-gray-600 mb-1">{language.name}</p>
                    <div className="w-full bg-gray-200 h-1">
                      <div
                        className="bg-black h-1"
                        style={{
                          width:
                            language.level === "Native"
                              ? "100%"
                              : language.level === "C2"
                                ? "100%"
                                : language.level === "C1"
                                  ? "90%"
                                  : language.level === "B2"
                                    ? "75%"
                                    : language.level === "B1"
                                      ? "60%"
                                      : language.level === "A2"
                                        ? "40%"
                                        : "20%",
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    )
  }
  
  
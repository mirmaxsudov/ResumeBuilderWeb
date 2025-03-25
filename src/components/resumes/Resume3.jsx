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

export default function Resume3({ data }) {
  return (
    <div className="max-w-4xl mx-auto bg-white font-sans border border-gray-300">
      <div className="flex flex-col md:flex-row">
        {/* Left Column */}
        <div className="w-full md:w-2/3 p-8">
          {/* Header with Photo and Name */}
          <div className="flex items-start mb-8">
            <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
              <img
                src={data.image.url || "/placeholder.svg?height=64&width=64"}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold">
                {data.info.firstName} {data.info.lastName}
              </h1>
              <p className="text-gray-600">{data.info.title}</p>
            </div>
          </div>

          {/* Profile Section */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3">Profile</h2>
            <p className="text-gray-700 text-sm leading-relaxed">{data.profile.text}</p>
          </section>

          {/* Experience Section */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3">Experience</h2>
            {data.experience.jobs.map((job) => (
              <div key={job.id} className="mb-5">
                <h3 className="font-bold">{job.company}</h3>
                <p className="text-gray-600 text-sm">{job.title}</p>
                <p className="text-gray-500 text-sm mb-2">
                  {formatDate(job.startDate)} - {job.isCurrent ? "Present" : formatDate(job.endDate)}
                </p>
                <ul className="text-sm space-y-1">
                  {formatResponsibilities(job.responsibilities).map((responsibility, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Education Section */}
          <section>
            <h2 className="text-xl font-bold mb-3">Education</h2>
            {data.education.educations.map((edu) => (
              <div key={edu.id} className="mb-3">
                <h3 className="font-bold">{edu.name}</h3>
                {edu.city && !edu.city.includes("Class of") && !edu.city.includes("studies") ? (
                  <p className="text-gray-600 text-sm">{edu.city}</p>
                ) : (
                  <p className="text-gray-600 text-sm">
                    {edu.city ||
                      (edu.degree && `${edu.degree}, ${formatDate(edu.startDate)} - ${formatDate(edu.endDate)}`)}
                  </p>
                )}
              </div>
            ))}
          </section>
        </div>

        {/* Right Column with Gradient */}
        <div className="w-full md:w-1/3 bg-gradient-to-b from-yellow-50 to-yellow-100 p-8 pt-32">
          {/* Details Section */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">Details</h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-sm">Address</h3>
                <p className="text-gray-700 text-sm">{data.info.address}</p>
              </div>
              <div>
                <h3 className="font-semibold text-sm">Phone</h3>
                <p className="text-gray-700 text-sm">{data.info.phone}</p>
              </div>
              <div>
                <h3 className="font-semibold text-sm">Email</h3>
                <p className="text-gray-700 text-sm">{data.info.email}</p>
              </div>
            </div>
          </section>

          {/* Links Section */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">Links</h2>
            <div className="space-y-2">
              {data.info.socials.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-700 hover:text-gray-900 text-sm"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section>
            <h2 className="text-xl font-bold mb-4">Skills</h2>
            <div className="space-y-4">
              {data.skills.ver2.technologies.map((skill) => (
                <div key={skill.id}>
                  <p className="text-sm text-gray-700 mb-1">{skill.name}</p>
                  <div className="w-full bg-white h-1">
                    <div className="bg-gray-700 h-1" style={{ width: `${skill.percent}%` }}></div>
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


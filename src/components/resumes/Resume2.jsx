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
  
    // Remove bullet points and split by newlines
    return responsibilities
      .replace(/^• /gm, "") // Remove bullet points at the start of lines
      .split("\n")
      .filter((item) => item.trim() !== "")
  }
  
  export default function Resume2({ data }) {
    return (
      <div className="max-w-4xl mx-auto bg-white font-sans">
        <div className="flex flex-col md:flex-row min-h-screen">
          {/* Left Sidebar */}
          <div className="w-full md:w-[320px] bg-emerald-900 text-white p-12 space-y-12">
            {/* Profile Image */}
            <div className="flex justify-center">
              <div className="w-32 h-32 rounded-full overflow-hidden">
                <img src={data.image.url || "/placeholder.svg"} alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
  
            {/* Name and Title */}
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-2">
                {data.info.firstName} {data.info.lastName}
              </h1>
              <p className="text-emerald-100 text-lg">{data.info.title}</p>
            </div>
  
            {/* Details Section */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Details</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p className="text-emerald-100">{data.info.address}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-emerald-100">{data.info.phone}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-emerald-100">{data.info.email}</p>
                </div>
              </div>
            </section>
  
            {/* Links Section */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Links</h2>
              <div className="space-y-3">
                {data.info.socials.map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-emerald-100 hover:text-white transition-colors"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </section>
  
            {/* Skills Section */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Skills</h2>
              <div className="space-y-4">
                {data.skills.ver2.technologies.map((skill) => (
                  <div key={skill.id}>
                    <p className="text-emerald-100 mb-2">{skill.name}</p>
                    <div className="w-full bg-emerald-800/30 h-1">
                      <div className="bg-white h-1" style={{ width: `${skill.percent}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
  
            {/* Languages Section */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Languages</h2>
              <div className="space-y-2">
                {data.languages.languages.map((language) => (
                  <p key={language.id} className="text-emerald-100">
                    {language.name} - {language.level}
                  </p>
                ))}
              </div>
            </section>
          </div>
  
          {/* Right Content */}
          <div className="w-full md:flex-1 p-12 bg-white">
            {/* Profile Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Profile</h2>
              <p className="text-gray-600 leading-relaxed">{data.profile.text}</p>
            </section>
  
            {/* Experience Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Experience</h2>
              {data.experience.jobs.map((job) => (
                <div key={job.id} className="mb-8">
                  <div className="mb-1">
                    <h3 className="text-xl font-bold">{job.company}</h3>
                    <p className="text-lg">{job.title}</p>
                    <p className="text-gray-500">
                      {formatDate(job.startDate)} - {job.isCurrent ? "Present" : formatDate(job.endDate)}
                    </p>
                  </div>
                  <div className="mt-2 space-y-2">
                    {formatResponsibilities(job.responsibilities).map((responsibility, index) => (
                      <p key={index} className="text-gray-600">
                        {responsibility}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </section>
  
            {/* Education Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Education</h2>
              {data.education.educations.map((edu) => (
                <div key={edu.id} className="mb-6">
                  <h3 className="text-xl font-bold">{edu.name}</h3>
                  {edu.degree && <p className="text-lg">{edu.degree}</p>}
                  <p className="text-gray-500">
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
                  {edu.desc && <p className="text-gray-600 mt-2">{edu.desc}</p>}
                </div>
              ))}
            </section>
  
            {/* Languages Section (moved to sidebar) */}
          </div>
        </div>
      </div>
    )
  }
  
  
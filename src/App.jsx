import React from "react";
import TiptapEditor from "./Editor";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HomeLayout from "./layout/HomeLayout";
import ResumeTemplates from "./pages/ResumeTemplates";
import Resume8 from "./components/resumes/Resume8";
import ResumeBuilder from "./components/resumes/resumeBuilder/ResumeBuilder";
import EnjiBlackResume from "./EnjiBlackResume";
import EnjiResume from './EnjiResume';
import Resume6 from "./components/resumes/Resume6";
import Resume1 from "./components/resumes/Resume1";
import Resume2 from "./components/resumes/Resume2";
import Resume3 from "./components/resumes/Resume3";
import Resume4 from "./components/resumes/Resume4";

function App() {
  const data = {
    image: {
      id: 1,
      isExists: true,
      url: null
    },
    info: {
      firstName: "Rick",
      lastName: "Tang",
      title: "Product Designer",
      address: "San Francisco, California", 
      phone: "(315) 802-8179",
      email: "ricktang@gmail.com",
      socials: [
        {
          id: 1,
          label: "LinkedIn",
          url: "https://linkedin.com/in/ricktang"
        },
        {
          id: 2,
          label: "Dribbble",
          url: "https://dribbble.com/ricktang"
        },
        {
          id: 3,
          label: "Behance",
          url: "https://www.behance.net/ricktang"
        }
      ]
    },
    profile: {
      title: "Profile",
      text: "UX/UI specialist focused on designing clean and functional projects across all platforms and devices in response to specific briefs and problems, while always maintaining a unique look and feel."
    },
    experience: {
      title: "Experience",
      count: 4,
      jobs: [
        {
          id: 1,
          title: "Product Designer",
          company: "Uber",
          city: "San Francisco",
          startDate: "Mar 2015",
          endDate: "Present",
          isCurrent: true,
          responsibilities:
            "• Designed safety-focused experiences for Riders and Drivers\n• Physical space problem solving and it’s interaction with the digital\n• Navigated organization to achieve operational improvements\n",
          technologies: []
        },
        {
          id: 2,
          title: "Product Designer",
          company: "IFTTT",
          city: "San Francisco",
          startDate: "Dec 2013",
          endDate: "Mar 2015",
          isCurrent: false,
          responsibilities:
            "• Product and system design for a complex product\n• Designed both consumer and developer products for IFTTT\n• Responsible for maintaining design across iOS, Android, and web",
          technologies: []
        },
        {
          id: 3,
          title: "Product Designer",
          company: "Facebook",
          city: "Menlo Park",
          startDate: "Jun 2012",
          endDate: "Dec 2013",
          isCurrent: false,
          responsibilities:
            "• Designer and prototyped internal tools\n• Worked with Privacy team to build assets and features\n• Redesigned Newsfeed curation experience for mobile",
          technologies: []
        },
        {
          id: 4,
          title: "UX/UI Design Intern",
          company: "Google Maps",
          city: "Mountain View",
          startDate: "Sep 2012",
          endDate: "Jun 2012",
          isCurrent: false,
          responsibilities:
            "• Contributed to Maps on iOS wireframe ans user experience\n• Designed and prototyped onboarding experience\n• Asset and feature design for Maps on Android",
          technologies: []
        }
      ]
    },
    education: {
      count: 2,
      title: "Education",
      educations: [
        {
          id: 1,
          name: "Rhode Island School of Design",
          degree: "BFA",
          startDate: "2009",
          endDate: "",
          city: "BFA Industrial Design, Class of 2013",
          desc: ""
        },
        {
          id: 2,
          name: "Brown University",
          degree: "",
          startDate: "Sep 2010",
          endDate: "May 2013",
          city: "Interdisciplinary studies, Sep 2010 - May 2013",
          desc: ""
        }
      ]
    },
    skills: {
      title: "Skills",
      ver2: {
        technologies: [
          {
            id: 1,
            name: "Figma",
            percent: 100,
            isWithPercent: false
          },
          {
            id: 2,
            name: "Sketch",
            percent: 100,
            isWithPercent: false
          },
          {
            id: 3,
            name: "Photoshop",
            percent: 100,
            isWithPercent: false
          },
          {
            id: 4,
            name: "Illustrator",
            percent: 100,
            isWithPercent: false
          },
          {
            id: 5,
            name: "Adobe XD",
            percent: 100,
            isWithPercent: false
          },
          {
            id: 6,
            name: "Principle",
            percent: 100,
            isWithPercent: false
          }
        ]
      }
    },
    languages: {
      title: "Languages",
      count: 2,
      languages: [
        {
          id: 1,
          name: "English",
          level: "C2"
        },
        {
          id: 2,
          name: "Italian",
          level: "B2"
        }
      ]
    }
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index={true} element={<HomePage />} />
          <Route path="/resume-templates" element={<ResumeTemplates />} />
          <Route path="/profile" element={<EnjiBlackResume />} />
          <Route path="resume6" element={<Resume6 />} />
          <Route path="/resume4" element={<Resume3 data={data} />} />

        </Route>
        <Route path="/resume-builder" element={<ResumeBuilder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// const data = {
//   image: {
//     id: 1,
//     isExists: true,
//     url: "some url",
//   },
//   info: {
//     firstName: "Kimdir",
//     lastName: "Kimdirov",
//     title: "Frontend developer",
//     address: "Tashkent, Uzbekistan",
//     phone: "+998901234567",
//     email: "yTq4W@example.com",
//     socials: [
//       {
//         id: 1,
//         label: "Github",
//         url: "https://github.com/kimdir",
//       }
//     ]
//   },
//   profile: {
//     title: "Profile",
//     text: "about me"
//   },
//   experience: {
//     title: "Experience",
//     count: 1,
//     jobs: [
//       {
//         id: 1,
//         title: "Frontend developer",
//         company: "Company",
//         city: "Tashkent",
//         startDate: "2022-01-01",
//         endDate: "2022-12-31",
//         isCurrent: true,
//         responsibilities: "some responsibilities",
//         technologies: [
//           {
//             id: 1,
//             name: "React"
//           },
//           {
//             id: 2,
//             name: "React Native"
//           }
//         ]
//       },
//       {
//         id: 2,
//         title: "Frontend developer",
//         company: "Company",
//         city: "Tashkent",
//         startDate: "2022-01-01",
//         endDate: "2022-12-31",
//         isCurrent: false,
//         responsibilities: "some responsibilities",
//         technologies: [
//           {
//             id: 1,
//             name: "React"
//           },
//           {
//             id: 2,
//             name: "React Native"
//           }
//         ]
//       }
//     ]
//   },
//   education: {
//     count: 1,
//     title: "Education",
//     educations: [
//       {
//         id: 1,
//         name: "PDP Academy",
//         degree: "Frontend course",
//         startDate: "2022-01-01",
//         endDate: "2022-12-31",
//         city: "Tashkent",
//         desc: "some description"
//       }
//     ]
//   },
//   skills: {
//     title: "Skills",
//     ver1: {
//       subs: [
//         {
//           title: "Languages",
//           technologies: [
//             {
//               id: 1,
//               name: "HTML",
//               percent: 100
//             },
//             {
//               id: 2,
//               name: "CSS",
//               percent: 100
//             }
//           ]
//         },
//         {
//           title: "Frameworks",
//           technologies: [
//             {
//               id: 1,
//               name: "React",
//               percent: 100
//             },
//             {
//               id: 2,
//               name: "React Native",
//               percent: 60
//             }
//           ]
//         }
//       ]
//     },
//     ver2: {
//       technologies: [
//         {
//           id: 1,
//           name: "HTML",
//           percent: 100,
//           isWithPercent: true
//         },
//         {
//           id: 2,
//           name: "CSS",
//           percent: 100,
//           isWithPercent: true
//         },
//         {
//           id: 3,
//           name: "React",
//           percent: 100,
//           isWithPercent: true
//         },
//         {
//           id: 4,
//           name: "React Native",
//           percent: 60,
//           isWithPercent: true
//         }
//       ]
//     }
//   },
//   languages: {
//     title: "Languages",
//     count: 2,
//     languages: [
//       {
//         id: 1,
//         name: "English",
//         level: "B2"
//       },
//       {
//         id: 2,
//         name: "Uzbek",
//         level: "Native"
//       }
//     ]
//   },
//   projects: {
//     title: "Projects",
//     count: 1,
//     projects: [
//       {
//         id: 1,
//         title: "Resume Builder",
//         technologies: [
//           {
//             id: 1,
//             name: "React"
//           },
//           {
//             id: 2,
//             name: "CSS"
//           }
//         ],
//         desc: "some description",
//         startDate: "2022-01-01",
//         endDate: "2022-12-31",
//         isCurrent: true,
//         link: "https://github.com/kimdir/resume-builder"
//       }
//     ]
//   }
// }

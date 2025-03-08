
import React from "react";
import TiptapEditor from "./Editor";
import EnjiResume from "./EnjiResume";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import HomeLayout from "./layout/HomeLayout";
import ResumeTemplates from "./pages/ResumeTemplates";
import Resume8 from "./components/resumes/Resume8";
import ResumeBuilder from "./components/resumes/resumeBuilder/ResumeBuilder";


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index={true} element={<HomePage />} />
          <Route path="/resume-templates" element={<ResumeTemplates />} />
          <Route path="/profile" element={<Resume8 />} />
        </Route>
        <Route path="/resume-builder" element={<ResumeBuilder />} />
      </Routes>
    </BrowserRouter>
  )
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

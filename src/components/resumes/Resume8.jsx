import { CalendarDays, Figma, Github, Globe, Linkedin, Mail, MapPin } from "lucide-react";

const Resume8 = () => {
    const data = {
        image: {
            id: 1,
            isExists: true,
            url: "some url",
        },
        info: {
            firstName: "Kimdir",
            lastName: "Kimdirov",
            title: "Frontend developer",
            address: "Tashkent, Uzbekistan",
            phone: "+998901234567",
            email: "yTq4W@example.com",
            socials: [
                {
                    id: 1,
                    label: "Github",
                    url: "https://github.com/kimdir",
                }
            ]
        },
        profile: {
            title: "Profile",
            text: "about me"
        },
        experience: {
            title: "Experience",
            count: 1,
            jobs: [
                {
                    id: 1,
                    title: "Frontend developer",
                    company: "Company",
                    city: "Tashkent",
                    startDate: "2022-01-01",
                    endDate: "2022-12-31",
                    isCurrent: true,
                    responsibilities: "some responsibilities",
                    technologies: [
                        {
                            id: 1,
                            name: "React"
                        },
                        {
                            id: 2,
                            name: "React Native"
                        }
                    ]
                },
                {
                    id: 2,
                    title: "Frontend developer",
                    company: "Company",
                    city: "Tashkent",
                    startDate: "2022-01-01",
                    endDate: "2022-12-31",
                    isCurrent: false,
                    responsibilities: "some responsibilities",
                    technologies: [
                        {
                            id: 1,
                            name: "React"
                        },
                        {
                            id: 2,
                            name: "React Native"
                        }
                    ]
                }
            ]
        },
        education: {
            count: 1,
            title: "Education",
            educations: [
                {
                    id: 1,
                    name: "PDP Academy",
                    degree: "Frontend course",
                    startDate: "2022-01-01",
                    endDate: "2022-12-31",
                    city: "Tashkent",
                    desc: "some description"
                }
            ]
        },
        skills: {
            title: "Skills",
            ver1: {
                subs: [
                    {
                        title: "Languages",
                        technologies: [
                            {
                                id: 1,
                                name: "HTML",
                                percent: 100
                            },
                            {
                                id: 2,
                                name: "CSS",
                                percent: 100
                            }
                        ]
                    },
                    {
                        title: "Frameworks",
                        technologies: [
                            {
                                id: 1,
                                name: "React",
                                percent: 100
                            },
                            {
                                id: 2,
                                name: "React Native",
                                percent: 60
                            }
                        ]
                    }
                ]
            },
            ver2: {
                technologies: [
                    {
                        id: 1,
                        name: "HTML",
                        percent: 100,
                        isWithPercent: true
                    },
                    {
                        id: 2,
                        name: "CSS",
                        percent: 100,
                        isWithPercent: true
                    },
                    {
                        id: 3,
                        name: "React",
                        percent: 100,
                        isWithPercent: true
                    },
                    {
                        id: 4,
                        name: "React Native",
                        percent: 60,
                        isWithPercent: true
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
                    level: "B2"
                },
                {
                    id: 2,
                    name: "Uzbek",
                    level: "Native"
                }
            ]
        },
        projects: {
            title: "Projects",
            count: 1,
            projects: [
                {
                    id: 1,
                    title: "Resume Builder",
                    technologies: [
                        {
                            id: 1,
                            name: "React"
                        },
                        {
                            id: 2,
                            name: "CSS"
                        }
                    ],
                    desc: "some description",
                    startDate: "2022-01-01",
                    endDate: "2022-12-31",
                    isCurrent: true,
                    link: "https://github.com/kimdir/resume-builder"
                }
            ]
        }
    }

    return (<>
        <div className="bg-white enji-resume">
            <div className="enji-header flex flex-col items-center ">
                <h2 className="text-3xl font-extrabold text-slate-700"> {data.info.firstName} {data.info.lastName} </h2>
                <h4 className="text-[13px] text-slate-500 font-medium leading-[20px]">
                    {data.info.title}
                </h4>
                <div className="flex gap-2 pt-4 pb-2">
                    <p className="flex items-center gap-[2px] text-[12px] text-slate-800">
                        <MapPin className="v-4 h-4" />
                        {data.info.address}
                    </p>
                    <p className="flex items-center gap-[2px] text-[12px] text-slate-800">
                        <Mail className="v-4 h-4" />
                        {data.info.email}
                    </p>
                </div>
                <div className="flex gap-1">
                    <button className="flex font-semibold border bg-purple-100 border-purple-600 text-purple-600 rounded-full px-2 py-1 items-center text-[12px]">
                        <Globe className="v-4 h-4" /> enji.dev
                    </button>
                    <button className="flex font-semibold border bg-blue-100 border-blue-600 text-blue-600 rounded-full px-2 py-1 items-center text-[12px]">
                        <Linkedin className="v-4 h-4" /> /enjidev
                    </button>
                    <button className="flex font-semibold border bg-orange-100 border-orange-600 text-orange-600 rounded-full px-2 py-1 items-center text-[12px]">
                        <Figma className="v-4 h-4" /> /@enjidev
                    </button>
                    <button className="flex font-semibold border bg-gray-200 border-black text-black rounded-full px-2 py-1 items-center text-[12px]">
                        <Github className="v-4 h-4" /> /enjidev
                    </button>
                </div>
            </div>
            <hr />
            <div className="enji-container">
                <div className="grid grid-cols-12 gap-4 items-center pt-8 pb-4">
                    <h4 className="text-[14px] text-slate-700 col-span-12 md:col-span-3 font-semibold">
                        Education
                    </h4>
                    <p className="flex items-center text-[14px] text-slate-700 col-span-12 md:col-span-6 ">
                        <span className=" font-semibold block text-sm text-slate-600">
                            {data.education.educations[0].name}
                        </span>
                        — {data.education.educations[0].degree}
                    </p>
                    <p className="flex col-span-12 md:col-span-3 gap-1 text-gray-600 text-[10px] font-medium">
                        <CalendarDays className="w-3 h-3" />{data.education.educations[0].startDate} - {data.education.educations[0].endDate}
                    </p>
                </div>
                <hr />
                <div className="grid grid-cols-12 gap-4 items-center pt-4 pb-2">
                    <h4 className="text-[14px] text-slate-700 col-span-12 md:col-span-3 font-semibold">
                        {data.experience.title}
                    </h4>
                    <p className="flex items-center text-[14px] text-slate-700 col-span-12 md:col-span-6 ">
                        <span className=" font-semibold block text-sm text-slate-600">
                            {data.experience.jobs[0].company}
                        </span>
                        —  {data.experience.jobs[0].title}
                    </p>
                    <p className="flex col-span-12 md:col-span-3 gap-1 text-gray-600 text-[10px] font-medium">
                        <CalendarDays className="w-3 h-3" />{data.education.educations[0].startDate} - {data.education.educations[0].endDate}
                    </p>
                </div>
                <div className="grid grid-cols-12 gap-4 items-center pb-4">
                    <h4 className="text-[14px] text-slate-700 col-span-12 md:col-span-3 font-semibold">
                    </h4>
                    <div className="flex items-center gap-1 md:col-span-9 ">
                        {
                            data.experience.jobs[0].technologies.map((item) => {
                                return <button className="bg-gray-100 text-slate-500 rounded-lg text-[12px] font-medium">{item.name}</button>
                            })
                        }
                    </div>
                </div>
                <hr />
            </div>
        </div>
    </>);
};

export default Resume8;
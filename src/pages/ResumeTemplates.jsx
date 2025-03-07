import React from 'react'
import Resume1 from "../assets/images/resume1.png";
import Resume2 from "../assets/images/resume2.png";
import Resume3 from "../assets/images/resume3.png";
import Resume4 from "../assets/images/resume4.png";
import Resume5 from "../assets/images/resume5.png";
import Resume6 from "../assets/images/resume6.png";
import "./ResumeTemplates.css"

const ResumeTemplates = () => {
    return (
        <section className='resume-templates-section'>
            <div className="max-w-small mx-auto">
                <div className='flex flex-col'>
                    <h1 className='text-center font-bold text-[50px] text-[#1E2532]'>
                        Resume templates
                    </h1>
                    <p className='text-center text-[#1E2532] text-[16px]'>
                        Each resume template is designed to follow the exact rules you need to get hired faster.
                        <br />
                        Use our resume templates and get free access to 18 more career tools!
                    </p>
                    <div className='text-center'>
                        <button className='text-capitalize bg-[#1A91F0] text-[#fff] py-3 px-6 rounded font-semibold text-[18px] hover:bg-[#3891da] transition-all duration-300 index-[9999] mt-[30px]'>
                            Create my resume
                        </button>
                    </div>
                </div>
                <ResumeTemplateShow />
            </div>
        </section>
    )
}

const ResumeTemplateShow = () => {
    const resumes = [Resume1, Resume2, Resume3, Resume4, Resume5, Resume6]

    return (
        <div className="grid grid-cols-3 gap-[20px] py-[30px]">
            {resumes.map((resume, index) => (
                <div className="resume-template-card w-[380px] bg-[#EFF2F9] p-[20px] relative" key={index}>
                    <img className='resume-image object-cover w-[100%] h-[100%] rounded-md hover:shadow-lg    transition-all duration-300' src={resume} alt="Resume list-group-item-danger" />
                    <button className='useBtn text-capitalize bg-[#1A91F0] text-[#fff] py-2 px-3 rounded font-semibold text-[18px] hover:bg-[#3891da] transition-all duration-300 absolute left-[50%] bottom-[50%] translate-x-[-50%]'>
                        Use this template
                    </button>
                </div>
            ))}
        </div>
    )
}

export default ResumeTemplates
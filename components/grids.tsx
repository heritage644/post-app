import React from "react"
import Aos from "aos"
import "aos/dist/aos.css"

export default function Grids (){
 React.useEffect(()=>{
    
    Aos.init({
      duration:800,
      once:true,
      offset:100,
    })
    
    },[])
    return(
        <>
        <section className="flex flex-col space-y-10 md:grid md:grid-cols-2 md:justify-center gap-2 
        xl:grid-cols-3 xl:gap-7
        ">
            <div className="bg-[#1E201D] shadow-md shadow-black w-fit  p-3 rounded-xl sm:px-15 sm:py-10 md:p-3 h-50 
            "
            data-aos="fade-up" data-aos-duration="1500"
            >
                <img src="/file.png" alt="" />
                <h1 className="py-2 sm:py-0 text-white " >AI Cover Letter Generator</h1>
                <p className="w-80">The AI Cover Letter Generator is a tool that uses art
                    ificial intelligence algorithms to create 
                    personalized cover letters for job applicants.

                </p>
            </div>
             <div className="bg-[#1E201D] md:p-3 shadow-md shadow-black w-fit  p-3 rounded-xl sm:px-15 sm:py-10 xl:p-3 h-50" data-aos="fade-up" data-aos-duration="1500">
                <img src="/mail.png" alt="" />
                <h1 className="py-2 sm:py-0 text-white" >Resignation Letters</h1>
                <p className="w-80">A resignation letter is a formal document that an 
                    employee writes to inform their employer of their decision to leave the company.
                </p>
            </div>
             <div className="bg-[#1E201D] md:p-3 shadow-md shadow-black w-fit  p-3 rounded-xl sm:px-15 sm:py-10 xl:p-3 h-50" data-aos="fade-up" data-aos-duration="1500">
                <img src="/pull.png" alt="" />
                <h1 className="py-2 sm:py-0 text-white" >Connection Request</h1>
                <p className="w-80">A connection request is a message sent on a social networking site,
                     such as LinkedIn, requesting to connect with another user.

                </p>
            </div>
             <div className="bg-[#1E201D] md:p-3 shadow-md shadow-black w-fit  p-3 rounded-xl sm:px-15 sm:py-10 xl:p-3 h-50" data-aos="fade-up" data-aos-duration="1500">
                <img src="/send.png" alt="" />
                <h1 className="py-2 sm:py-0 text-white" >Outreach Emails</h1>
                <p className="w-80">Outreach emails are messages sent by individuals or businesses to introduce themselves,
                     establish a connection, or propose a collaboration.

                </p>
            </div>
             <div className="bg-[#1E201D] md:p-3 shadow-md shadow-black w-fit  p-3 rounded-xl sm:px-15 sm:py-10 xl:p-3 h-50" data-aos="fade-up" data-aos-duration="1500">
                <img src="/grid.png" alt="" />
                <h1 className="py-2 sm:py-0 text-white" >Resume Optimization</h1>
                <p className="w-80">Smart Personalization refers to the use of data and technology to deliver tailored experiences 
                    and content to individual
                     customers or users.

                </p>
            </div>
             <div className="bg-[#1E201D] md:p-3 shadow-md shadow-black w-fit  p-3 rounded-xl sm:px-15 sm:py-10 xl:p-3 h-50" data-aos="fade-up" data-aos-duration="1500">
                <img src="/codesandbox.png" alt="" />
                <h1 className="py-2 sm:py-0 text-white" >Resume Design</h1>
                <p className="w-80">A resume scanner is a software application that uses optical character recognition (OCR)
                     technology to extract and analyze data from resumes.

                </p>
            </div>
        </section>
        </>
    )
}
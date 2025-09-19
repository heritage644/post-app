export default function TopCard (){

    return(
        <>
        <section className="flex flex-col text-grey mt-20  space-y-10 items-center xl:flex-row  xl:justify-center xl:gap-3 xl:items-start " >
            <div className="bg-[#1E201D] shadow-md shadow-black w-fit  p-3 rounded-xl sm:px-15 sm:py-10 xl:p-3 h-50">
                <img src="/file.png" alt="" />
                <h1 className="py-2 sm:py-0" >AI Cover Letter Generator</h1>
                <p className="w-80">The AI Cover Letter Generator is a tool that uses art
                    ificial intelligence algorithms to create 
                    personalized cover letters for job applicants.

                </p>
            </div>

 <div className="bg-[#1E201D] shadow-md shadow-black w-fit p-3 rounded-xl sm:px-15 sm:py-10 xl:p-3  h-50">
                <img src="/radio.png" alt="" />
                <h1 className="py-2 sm:py-0">Smart Personalization</h1>
                <p className="w-80">Smart Personalization refers to the use of 
                    data and technology to deliver tailored 
                    experiences and content to individual customers or users.

                </p>
            </div>

             <div className="bg-[#1E201D] shadow-md shadow-black w-fit p-3 rounded-xl sm:px-15 sm:py-10 xl:p-3  h-50">
                <img src="/vector.svg" alt="" />
                <h1 className="py-2 sm:py-0"> Resume Scanner</h1>
                <p className="w-80">A resume scanner is a software application that uses 
                    optical character recognition (OCR) technology
                     to extract and analyze data from resumes.

                </p>
            </div>

        </section>
        
        </>
    )
}
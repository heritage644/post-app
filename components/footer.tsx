import NeuButton from "./button"

export default function Footer (){

    return(
        <>
        <footer className="bg-green mt-15 flex flex-col items-center mb-0">
            <div className="items-center flex flex-col space-y-3">
                <h1 className="text-[40px] tex">Whats is next ?</h1>
                <p className="w-80 text-center">Submit better job app — 10x faster. AI cover letter generator, resume keyword checker, 
                    outreach message writer, and more. Powered by GPT</p>
                    <NeuButton/>
            </div>
            <section className="grid grid-cols-2 mt-5 py-10 justify-center  md:grid-cols-4 xl:gap-3 ">
                <ul className="pb-5 text-[14px] line space-y-1" >
                   <h1 className="font-bold">Platform</h1>
                    <li>Plans and Prices</li>
                    <li>AI Create Letters</li>
                    <li>AI Resume Checker</li>
                    <li>Resume Templates</li>
                    <li>Sell Templates</li>
                    <li>Blog</li>


                </ul> 

                 <ul className="w-40 text-[14px] md:w-40 xl:w-60 space-y-1">
                   <h1 className="font-bold">Features</h1>
                    <li>AI Cover Letter Creator</li>
                    <li>Resume Keywords Optimizer</li>
                    <li>ATS Resume Checker</li>
                    


                </ul>

                 <ul className="w-40 text-[14px] xl:w-60 space-y-1">
                   <h1 className="font-bold">Resources</h1>
                    <li>4 AI Tools for Applying a Job</li>
                    <li>How to optimize Resume keywords</li>
                    <li>Why you should use Chat GPT for create Resume</li>
                    <li>What should you include in a Cover Letter</li>
                    


                </ul>
                <div className="flex flex-col  gap-3 space-y-1">
                    <h1 className="font-bold ">Support</h1>
                    <span>support@gmail.com</span>
                    <div>
                        <img src="/social.png" alt=".png" />
                    </div>

                </div>
                
            </section>
            <div className="text-[10px] pb-3">
                <span>© Copywrite Okecukwu</span>
                <span>All Rights Reserved</span>
                <span>Terms of Use</span>
                <span>Privacy</span>
            </div>


        </footer>
        
        </>
    )
}
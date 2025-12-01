import { Linkedin } from "lucide-react";
import { motion } from "motion/react";
import ProjectShowcase from "../components/ProjectShowcase";

const MainPage: React.FC = () => {

  return (
    <div className="flex flex-col justify-center items-center w-screen min-h-screen bg-primary text-white">
        <div className="flex max-w-7xl w-full h-screen justify-center ">
            <section className="flex flex-col justify-center items-center ">
                <motion.div 
                    className="text-7xl p-1 tracking-[0.2em] bg-linear-to-r from-gray-300 to-white bg-clip-text text-transparent font-regola-semibold"
                    initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0)', transition: { duration: 0.8 } }}
                    >
                    GRADY CHEN
                </motion.div>
                <span className="text-3xl p-1 bg-linear-to-r from-gray-500 to-gray-300 bg-clip-text text-transparent font-regola">
                    Software Engineer
                </span>
                <div className="flex flex-row gap-3 ">
                    <a href="https://github.com/Gradyc01">
                        {/* <Github color="#99a1af" size={30} />     */}
                        <img width="29" height="29" src="https://cdn.simpleicons.org/github/99a1af" />
                    </a>
                    <a href="https://www.linkedin.com/in/grady-chen-5b2518243/">
                        <Linkedin color="#99a1af" size={30} />    
                        {/* <i className="fa-brands fa-linkedin"></i> */}
                    </a>
                </div>
            </section> 
        </div>
        <div className="flex flex-col max-w-7xl w-full items-center gap-3 py-3">
            <section className="flex items-start w-full">
                <span   
                    className="text-6xl tracking-widest p-2
                    bg-linear-to-r from-gray-300 to-white bg-clip-text text-transparent font-regola-semibold">
                        Projects
                </span>
            </section>
            <section className="flex flex-col gap-3 w-[90%]">
                <ProjectShowcase
                    title={"OWL Document Reader"}
                    srcLink="https://drive.google.com/file/d/10aKXxbypNO4AXWOCi1nL6v5lZxMc9Qjp/preview"
                    texts={[
                        "Working as a team with Coast Capital Savings in an agile environment, created an OCR-based document processing system that leverages AWS services.",
                        "Created a full stack website that uses AWS Textract, Lambda, RDS, S3, Cognito, API Gateway to build a serverless web application and store the user’s information.",
                        "Designed AWS Aurora Serverless database (RDS) to store user and document data, including creating SQL tables and writing Lambda functions to manage CRUD operations.",
                        "Leveraged AWS S3 for secure storage of documents and associated metadata in JSON format, ensuring safe and efficient data handling.",
                        "Completely scratch-built project, including the Mocha test suite, Node.js API, and custom-build frontend using TypeScript, Node.js with the React framework."
                    ]}
                    githubLink="https://github.com/Gradyc01/OWL-Document-Reader"
                />
                <ProjectShowcase
                    title={"Ascension"}
                    srcLink="https://www.youtube.com/embed/TNjF8nWomms?si=mGo1uKpLdEZHSEiT"
                    texts={[
                        "Performed Java Object-Oriented programming by constructing and organizing class files that adhere to the Factory and Singleton Design Pattern",
                        "Designed and implemented algorithms and data structures to efficiently generate personalized shop inventories based on the player's game state.",
                        "Reduced tick-based lag by streamlining event handlers and resource loading, ensuring consistent performance for up to 32 concurrent players.",
                        "Implemented Caching to have Player Statistics and Game Settings carry over from game to game allowing for leaderboard, and other future displays.",
                    ]}
                    leftSideVid={true}
                    githubLink="https://github.com/Gradyc01/Ascension"
                />
                 <ProjectShowcase
                    title={"Tournament Team Organization"}
                    texts={[
                        "Developed a Java based project that allows Tournament Organizers, using a UI, to keep track of Teams that have registered for their respective tournament.",
                        "Utilizes file caching which allows for tournament organizers to save and open their tournament tracker some other day without losing any data.",
                        "Has an UI which allows for tournament organizers to interactively manage teams (add/remove roster or team, activate/deactivate teams, etc)."
                    ]}
                    githubLink="https://github.com/Gradyc01/Tournament-Team-Organization"
                />
            </section>
        </div>
        
    </div>
  );
};

export default MainPage;
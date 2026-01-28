import { Mail } from "lucide-react";
import { motion } from "motion/react";
import ImageGallery from "../components/ImageGallery";

const MainPage: React.FC = () => {

  return (
    <div className="flex flex-col justify-center items-center w-screen min-h-screen text-primary gap-8">
        <div className="flex max-w-7xl w-full h-screen justify-center ">
            <div
                data-framer-background-image-wrapper="true"
                className="absolute inset-0 -z-10 overflow-hidden"
            >
                <img
                    src="/images/3638_main_image.png"
                    loading="lazy"
                    className="absolute w-full object-cover h-screen brightness-15 opacity-90"
                    alt="Background Image"
                />
            </div>
            <section className="flex flex-col justify-center items-center w-full text-center">
                <motion.div 
                    className="text-5xl sm:text-7xl p-1 tracking-[0.2em] bg-linear-to-r from-gray-300 to-white bg-clip-text text-transparent font-regola-semibold"
                    initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0)', transition: { duration: 0.8 } }}
                    >
                    YOUR NEXT CHAPTER
                </motion.div>
                <span className="text-3xl p-1 bg-linear-to-r from-gray-500 to-gray-300 bg-clip-text text-transparent font-regola">
                    A home planned to focused on family living, flow, and timeless appeal.
                </span>
                <div className="flex flex-row gap-3 ">
                    <a href="mailto:gradychen04@gmail.com">
                        <Mail color="#99a1af" size={30} />    
                    </a>
                </div>
            </section> 
        </div>
        <div className="flex max-w-7xl w-full h-full justify-center">
            <section className="flex flex-col justify-center items-center w-full px-2">
                <ImageGallery />
            </section>
        </div>
    </div>
  );
};

export default MainPage;
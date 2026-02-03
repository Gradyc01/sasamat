import { Mail } from "lucide-react";
import { motion } from "motion/react";
import ImageGallery from "../components/ImageGallery";
import ArticleText from "../components/ArticleText";

const MainPage: React.FC = () => {

  return (
    <div className="flex flex-col justify-center items-center w-screen min-h-screen text-primary gap-8">
        <div className="flex max-w-7xl w-full h-[92vh] justify-center ">
            <div
                data-framer-background-image-wrapper="true"
                className="absolute inset-0 -z-10 overflow-hidden"
            >
                <img
                    src="/images/3638_main_image.png"
                    loading="eager"
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
                <div className="flex flex-col gap-1 bg-linear-to-r from-gray-400 to-gray-300 bg-clip-text text-transparent items-center">
                    <p className="text-xl">3638 West 3rd Avenue</p>
                    <a href="mailto:gradychen04@gmail.com" className="flex items-center gap-2">
                        <p className="text-lg">Email Us:</p>
                        <Mail color="#99a1af" size={30} />    
                    </a>
                </div>
            </section> 
        </div>
        <div className="flex max-w-7xl w-full h-full justify-center flex-col gap-8">
            <section className="flex flex-col justify-center items-center w-full px-2">
                <ImageGallery />
            </section>
            <section className="flex flex-col justify-center items-center w-full px-2 gap-6">
                <ArticleText 
                    title="Property Details"
                    image="/images/3638_main_image.png"
                    secondaryTitle="Property Layout"
                    description="Three bedrooms and three and a half bathrooms"
                    thirdTitle="Key Benefits:"
                    finalDescription="Modern living in this brand new duplex, carefully designed for today’s lifestyle. This home combines the privacy and contemporary elegance in one exceptional package."
                    linkSrc="property-details"
                />
                <ArticleText 
                    title="Area Benefits"
                    image="/images/house-images/happy-people.png"
                    secondaryTitle="Area Benefits"
                    description="Coastal Calm meets urban family ease"
                    thirdTitle="A Lifestyle Like No Other:"
                    finalDescription="Nestled in the heart of Kitsilano. Residents enjoy immediate access to one of Vancouver’s premier waterfront. With nearby trails, tennis courts, and the vibrant 4th Avenue community moments away, this location delivers coastal serenity and urban convenience in one of the city’s most wanted neighborhoods"
                />
                <ArticleText 
                    title="Contact Us"
                    image="/images/house-images/interior-29.png"
                    secondaryTitle="Contact Us"
                    description="Jericho Beach Vista"
                    thirdTitle="Booking:"
                    finalDescription="To enquire about our properties, please use the online contact form  call us or email us by clicking the button below"
                    linkSrc="contact-us"
                    buttonName="Contact Us"
                />
            </section>

        </div>
    </div>
  );
};

export default MainPage;
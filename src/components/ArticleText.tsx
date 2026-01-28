import React from 'react';

interface Props {
    title: string;
    image: string;
    secondaryTitle?: string;
    description?: string;
    thirdTitle?: string;
    finalDescription?: string;
    linkSrc?: string;
    buttonName?: string;
}

const ArticleText: React.FC<Props> = ({
    title, image, secondaryTitle, description, 
    thirdTitle, finalDescription, linkSrc, buttonName}) => {

        const button: string = buttonName ? buttonName : "Learn More";
  return (
        <div className="flex flex-col w-full gap-4 h-full">
            <section className='flex flex-col w-full text-5xl font-regola-semibold'>
                <span>
                    { title }
                </span>
            </section>
            <section className='flex flex-col border-t w-full'>
            </section>
            <section className='flex flex-col sm:flex-row w-full gap-x-16 gap-y-8 p-4'>
                <div className="flex w-full sm:w-1/2 justify-center ">
                    <img
                        src={image}
                        loading="lazy"
                        className="w-full object-cover rounded-3xl"
                    />
                </div>
                <div className='flex w-full sm:w-1/2 flex-col justify-between gap-3'>
                    {/* {texts.map((text, index) => (
                        <span key={index} className="text-lg font-regola leading-7 mb-4">
                            {text}
                        </span>
                    ))} */}
                    <div className='flex w-full flex-col gap-4'>
                        {secondaryTitle && (<span className='flex text-4xl'>
                            { secondaryTitle }
                        </span>)}
                        {description && (<span className='flex text-xl'>
                            { description}
                        </span>)}
                        {thirdTitle && (<span className='flex text-xl font-regola-semibold'>
                            { thirdTitle }
                        </span>)}
                        {finalDescription && (<span className='flex text-xl text-gray-700'>
                            { finalDescription }
                        </span>)}
                    </div>
                    <div className='flex w-full items-center sm:items-end flex-col gap-4 cursor-pointer!'>
                        {linkSrc && (<div className='flex justify-center items-center bg-gray-50 border rounded-full w-30 h-11 hover:bg-primary duration-300 '>
                            <a href="property-details" className='flex text-center text-lg font-regola-semibold duration-150 text-primary hover:text-white cursor-pointer!'>
                               {button}
                            </a>
                        </div>)}
                    </div>
                    
                </div>
                
            </section>
        </div>     
  );
};

export default ArticleText;
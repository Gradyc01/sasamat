import React from 'react';

interface Props {
    title: string;
    description: string;
    explanation: string;
    chosenImage: number;
}

const FloorDetail: React.FC<Props> = ({title, description, explanation, chosenImage}) => {
    
  return (
        <div className="flex flex-col w-full gap-4 h-full items-center p-1">
            <section className='flex max-w-[600px] gap-4 object-contain'>
                <img
                    src='/images/house-images/f1.jpg'
                    loading="lazy"
                    className={`flex w-full max-w-1/3 object-contain p-2 ` + (chosenImage === 1 ? "shadow-xl" : "opacity-50")}
                />
                <img
                    src='/images/house-images/f2.jpg'
                    loading="lazy"
                    className={`flex w-full max-w-1/3 object-contain p-2 ` + (chosenImage === 2 ? "shadow-xl" : "opacity-50")}
                />
                <img
                    src='/images/house-images/f3.jpg'
                    loading="lazy"
                    className={`flex w-full max-w-1/3 object-contain p-2 ` + (chosenImage === 3 ? "shadow-xl" : "opacity-50")}
                />
            </section>
            <section className='flex flex-col w-full text-base font-regola gap-4'>
                <p className='flex font-regola-semibold text-4xl'>
                    { title }
                </p>
                <p>
                    { description }
                </p>
                <p>
                    { explanation } 
                </p>
            </section>
        </div>     
  );
};

export default FloorDetail;
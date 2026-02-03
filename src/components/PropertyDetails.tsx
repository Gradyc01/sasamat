import React, { useState } from 'react';


const images = [
    '/images/house-images/f1.jpg',
    '/images/house-images/f2.jpg',
    '/images/house-images/f3.jpg',
];

const PropertyDetails: React.FC = () => {
    const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

    return (
        <>
            <div className="flex flex-col w-full gap-4 h-full items-center p-1">
                <section className="flex max-w-[600px] gap-4 object-contain">
                    {images.map((src, index) => {
                        return (
                            <img
                                key={src}
                                src={src}
                                loading="lazy"
                                onClick={() => setFullscreenImage(src)}
                                className={
                                    `flex w-full max-w-1/3 object-contain p-2 cursor-pointer transition hover:shadow-xl hover:scale-105` 
                                }
                            />
                        );
                    })}
                </section>
            </div>

            {/* Fullscreen Image Modal */}
            {fullscreenImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
                    onClick={() => setFullscreenImage(null)}
                >
                    {/* Close button */}
                    <button
                        onClick={() => setFullscreenImage(null)}
                        className="absolute top-6 right-6 text-white text-3xl font-bold hover:opacity-80"
                    >
                        ×
                    </button>

                    {/* Image */}
                    <img
                        src={fullscreenImage}
                        className="max-h-[90vh] max-w-[90vw] object-contain"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </>
    );
};

export default PropertyDetails;

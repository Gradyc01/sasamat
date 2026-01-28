import React, { useEffect, useRef, useState } from 'react';
import ReactImageGallery from "react-image-gallery";
// 
// import "react-image-gallery/styles/scss/image-gallery.scss";

import "react-image-gallery/styles/css/image-gallery.css";
import "../assets/scss/gallery.css";

const images = [
  {
    type: "video",
    video: "/video-showcase.mp4",
    original: "/images/house-images/video-thumbnail.png",
    thumbnail: "/video-thumbnail-square.png"
  },
  {
    original: "/images/house-images/interior-8.png",
    thumbnail: "/images/house-images/interior-8-150x150.png"
  },
  {
    original: "/images/house-images/interior-9.png",
    thumbnail: "/images/house-images/interior-9-150x150.png"
  },
  {
    original: "/images/house-images/interior-10.png",
    thumbnail: "/images/house-images/interior-10-150x150.png"
  },
  {
    original: "/images/house-images/interior-11.png",
    thumbnail: "/images/house-images/interior-11-150x150.png"
  },
  {
    original: "/images/house-images/interior-12.png",
    thumbnail: "/images/house-images/interior-12-150x150.png"
  },
  {
    original: "/images/house-images/interior-13.png",
    thumbnail: "/images/house-images/interior-13-150x150.png"
  },
  {
    original: "/images/house-images/interior-21.png",
    thumbnail: "/images/house-images/interior-21-150x150.png"
  },
  {
    original: "/images/house-images/interior-23.png",
    thumbnail: "/images/house-images/interior-23-150x150.png"
  },
  {
    original: "/images/house-images/interior-25.png",
    thumbnail: "/images/house-images/interior-25-150x150.png"
  },
  {
    original: "/images/house-images/interior-27.png",
    thumbnail: "/images/house-images/interior-27-150x150.png"
  },
  {
    original: "/images/house-images/interior-29.png",
    thumbnail: "/images/house-images/interior-29-150x150.png"
  },
  {
    original: "/images/house-images/interior-30.png",
    thumbnail: "/images/house-images/interior-30-150x150.png"
  }
];
// const MAX_THUMBS = 5;

// const getThumbnailClass = (index: number, active: number) => {
//   const half = Math.floor(MAX_THUMBS / 2);

//   const start = Math.max(0, active - half);
//   const end = start + MAX_THUMBS - 1;

//   return index >= start && index <= end
//     ? "thumb-visible"
//     : "thumb-hidden";
// };

// export default function ImageGallery() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const items = images.map((item, index) => ({
//     ...item,
//     thumbnailClass: getThumbnailClass(index, activeIndex),
//   }));

//   return (
//     <ReactImageGallery
//       items={items}
//       renderItem={renderItem}
//       onSlide={(index) => setActiveIndex(index)}
//       showPlayButton={false}
//     />
//   );
// }

function isMobileWidth() {
  return window.innerWidth <= 640;
}

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(isMobileWidth());

  useEffect(() => {
    const handleResize = () => setIsMobile(isMobileWidth());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}

const MAX_THUMBS = 5;

export default function ImageGalleryComponent() {
  const isMobile = useIsMobile();
  const [activeIndex, setActiveIndex] = useState(0);

  // Create items once and keep in a ref
  const itemsRef = useRef(
    images.map((item) => ({
      ...item,
      thumbnailClass: "", // initialize
    }))
  );

  // Compute which thumbnails to show
  const updateThumbnailClasses = (active: number) => {
    const half = Math.floor(MAX_THUMBS / 2);
    const total = itemsRef.current.length;
    const start = Math.max(0, Math.min(active - half, total - MAX_THUMBS));
    const end = start + MAX_THUMBS - 1;

    itemsRef.current.forEach((item, index) => {
      item.thumbnailClass =
        index >= start && index <= end ? "thumb-visible" : "thumb-hidden";
    });
  };

  // Initialize thumbnail classes
  React.useEffect(() => {
    updateThumbnailClasses(activeIndex);
  }, []);

const renderItem = (item: any) => {
  const containerStyle = {
    width: "100%",
    maxWidth: "1000px",
    aspectRatio: "16 / 9",
    maxHeight: "600px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
  } as React.CSSProperties;

  const mediaStyle = {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  } as React.CSSProperties;

  if (item.type === "video") {
    return (
      <div className='w-full max-w-[1000px] aspect-video max-h-[600px] flex justify-center items-center '>
        <iframe
        className="w-[90vw] aspect-video object-contain"
        src="https://www.youtube.com/embed/dRmPgK_e4ss?si=LWJ8kYdq58FZoLl_"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        ></iframe>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <img
        src={item.original}
        loading="lazy"
        style={mediaStyle}
      />
    </div>
  );
};

    return (
        <div className="flex flex-row w-full justify-center items-center overflow-hidden">
            <ReactImageGallery
                items={itemsRef.current}
                renderItem={renderItem}
                showPlayButton={false}
                showFullscreenButton={false}
                showBullets={true}
                onSlide={(index) => {
                    setActiveIndex(index);
                    updateThumbnailClasses(index);
                }}
                disableThumbnailScroll
                showThumbnails={isMobile ? false : true}
                />
        </div>     
  );
}

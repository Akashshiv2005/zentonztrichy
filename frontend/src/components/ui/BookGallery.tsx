import React from "react";

// Asset Imports
import skinImg from "../../assets/facialwebpimages/facial3.webp";
import facialImg from "../../assets/facialwebpimages/facial1.webp";
import manicureImg from "../../assets/pedicurewebpimages/manicure2.webp";
import pedicureImg from "../../assets/pedicurewebpimages/manicure1.webp";
import spaImg from "../../assets/hairspawebpimages/hairspa2.webp";
import bridalImg from "../../assets/bridalwebpimages/bridal1.webp";
import nailImg from "../../assets/nailwebpimages/nail2.webp";
import liceImg from "../../assets/licewebpimages/lice2.webp";
import logoImg from "../../assets/zentonez-logo.png";

const BookGallery: React.FC = () => {
  const pages = [
    { front: skinImg, back: facialImg },
    { front: manicureImg, back: pedicureImg },
    { front: spaImg, back: bridalImg },
    { front: nailImg, back: liceImg },
    { front: logoImg, back: logoImg },
  ];

  return (
    <div className="book-gallery-container w-full h-full relative flex items-center justify-center overflow-hidden">
      <style>{`
        .scene {
          width: 100%;
          height: 100%;
          perspective: 1200px;
          transform-style: preserve-3d;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }


        .galeria-book-3d {
          position: relative;
          width: 200px;
          height: 300px;
          perspective: 1200px;
          transform-style: preserve-3d;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 10;
          /* Removed spine-shift variable, GSAP will use x */
        }

        .book-page {
          position: absolute;
          width: 200px;
          height: 300px;
          perspective: 1200px;
          transform-style: preserve-3d;
          display: flex;
          justify-content: center;
          align-items: center;
          transform-origin: left center;
          box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
          /* No transition here, let GSAP control it */
        }

        .book-page img {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          background: #fdfcfb;
          backface-visibility: hidden;
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .book-page img:nth-child(2) {
          transform: rotateY(180deg) translateZ(1px);
          z-index: 1;
        }

        .book-page img.is-logo {
          object-fit: contain !important;
          padding: 15% !important;
          background: #fff;
        }


        /* Responsive Breakpoints */
        @media (max-width: 640px) {
          .galeria-book-3d, .book-page {
            width: 140px !important;
            height: 210px !important;
          }
        }

        @media (min-width: 641px) and (max-width: 1023px) {
          .galeria-book-3d, .book-page {
            width: 280px !important;
            height: 420px !important;
          }
        }

        @media (min-width: 1024px) {
          .galeria-book-3d, .book-page {
            width: 340px !important;
            height: 480px !important;
          }
        }
      `}</style>

      <div className="scene w-full h-full flex items-center justify-center">
        <div className="galeria-book-3d">
          {pages.map((page, index) => (
            <div
              key={index}
              className="book-page"
              data-index={index}
              style={
                {
                  "--i": index,
                  zIndex: 10 - index,
                } as React.CSSProperties
              }
            >
              <img 
                src={page.front} 
                alt={`Front ${index + 1}`} 
                className={page.front === logoImg ? "is-logo" : "object-cover"} 
              />
              <img 
                src={page.back} 
                alt={`Back ${index + 1}`} 
                className={page.back === logoImg ? "is-logo" : "object-cover"} 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookGallery;

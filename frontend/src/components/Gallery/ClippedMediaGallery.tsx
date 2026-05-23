import { motion } from 'framer-motion';
import InteractiveBentoGallery from '../ui/interactive-bento-gallery';
import type { MediaItemType } from '../ui/interactive-bento-gallery';

// Import assets from specified directories
import bridal1 from "../../assets/bridalwebpimages/bridal1.webp";
import facial1 from "../../assets/facialwebpimages/facial1.webp";
import facial2 from "../../assets/facialwebpimages/facial2.webp";
import hairspa1 from "../../assets/hairspawebpimages/hairspa1.webp";
import hairspa2 from "../../assets/hairspawebpimages/hairspa2.webp";
import manicure1 from "../../assets/pedicurewebpimages/manicure1.webp";
import nail1 from "../../assets/nailwebpimages/nail.jpeg";
import nail2 from "../../assets/nailwebpimages/nail2.webp";
import butterfly from "../../assets/hairwebp images/butterfly cut.webp";

const mediaItems: MediaItemType[] = [
  {
    id: 1,
    type: "image",
    title: "Eternal Bridal",
    desc: "A timeless masterpiece of elegance and radiance.",
    url: bridal1,
    span: "md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2",
    objectPosition: "center 15%",
  },
  {
    id: 2,
    type: "image",
    title: "Skin Alchemy",
    desc: "Transformative rituals for a celestial glow.",
    url: facial1,
    span: "md:col-span-1 md:row-span-1 sm:col-span-1 sm:row-span-1",
    objectPosition: "center 20%",
  },
  {
    id: 3,
    type: "image",
    title: "Facial Rituals",
    desc: "Rejuvenating therapies for mindful beauty.",
    url: facial2,
    span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
    objectPosition: "center 25%",
  },
  {
    id: 4,
    type: "image",
    title: "Luxe Hair Care",
    desc: "Premium treatments for the crown you never take off.",
    url: hairspa1,
    span: "md:col-span-1 md:row-span-1 sm:col-span-1 sm:row-span-1",
    objectPosition: "center 20%",
  },
  {
    id: 5,
    type: "image",
    title: "Scalp Therapy",
    desc: "Holistic care for ultimate hair health.",
    url: hairspa2,
    span: "md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-1", // Changed to 2x2 for better fill
    objectPosition: "center 25%",
  },
  {
    id: 6,
    type: "image",
    title: "Artistic Hands",
    desc: "Bespoke nail artistry and extensions.",
    url: manicure1,
    span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
    objectPosition: "center",
  },
  {
    id: 7,
    type: "image",
    title: "Couture Nails",
    desc: "Precision and detail in every stroke.",
    url: nail1,
    span: "md:col-span-2 md:row-span-1 sm:col-span-2 sm:row-span-1",
    objectPosition: "center",
  },
  {
    id: 8,
    type: "image",
    title: "Precision Detail",
    desc: "The fine art of artisanal beauty.",
    url: nail2,
    span: "md:col-span-1 md:row-span-1 sm:col-span-1 sm:row-span-1",
    objectPosition: "center",
  },
  {
    id: 9,
    type: "image",
    title: "Signature Cut",
    desc: "Avant-garde hair design for the modern woman.",
    url: butterfly,
    span: "md:col-span-1 md:row-span-1 sm:col-span-1 sm:row-span-1",
    objectPosition: "center 35%",
  },
];

const ClippedMediaGallery: React.FC = () => {
  return (
    <section
      id="gallery-section"
      className="py-10 sm:py-16 bg-surface-dim overflow-hidden relative z-10"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <InteractiveBentoGallery
          mediaItems={mediaItems}
          title="Curated Masterpieces"
          description="Drag and explore our visual symphony of finest transformations, capturing the essence of artisanal beauty."
        />
      </div>

      {/* Subtle Background Parallax Accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 0.05, x: 0 }}
          className="absolute top-20 -left-20 w-96 h-96 bg-[#B87333]/15 blur-[96px] rounded-full"
        />
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 0.05, x: 0 }}
          className="absolute bottom-20 -right-20 w-96 h-96 bg-[#B87333]/15 blur-[96px] rounded-full"
        />
      </div>
    </section>
  );
};

export default ClippedMediaGallery;


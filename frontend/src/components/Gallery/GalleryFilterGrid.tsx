import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2, Filter } from "lucide-react";
import { Reveal } from "../ui/Reveal";

// Asset Imports (Gathered from existing components)
import bridal1 from "../../assets/bridalwebpimages/bridal1.webp";
import facial1 from "../../assets/facialwebpimages/facial1.webp";
import facial2 from "../../assets/facialwebpimages/facial2.webp";
import facial3 from "../../assets/facialwebpimages/facial3.webp";
import hairspa1 from "../../assets/hairspawebpimages/hairspa1.webp";
import hairspa2 from "../../assets/hairspawebpimages/hairspa2.webp";
import manicure1 from "../../assets/pedicurewebpimages/manicure1.webp";
import manicure2 from "../../assets/pedicurewebpimages/manicure2.webp";
import nail1 from "../../assets/nailwebpimages/nail1.webp";
import nail2 from "../../assets/nailwebpimages/nail2.webp";
import butterfly from "../../assets/hairwebp images/butterfly cut.webp";
import lice2 from "../../assets/licewebpimages/lice2.webp";

type GalleryItem = {
  id: number;
  title: string;
  category: "Bridal" | "Skin" | "Hair" | "Nails" | "All";
  image: string;
  size: "small" | "medium" | "large";
};

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Eternal Bridal Glow",
    category: "Bridal",
    image: bridal1,
    size: "large",
  },
  {
    id: 2,
    title: "Celestial Skin Ritual",
    category: "Skin",
    image: facial1,
    size: "small",
  },
  {
    id: 3,
    title: "Luxe Hair Therapy",
    category: "Hair",
    image: hairspa1,
    size: "medium",
  },
  {
    id: 4,
    title: "Artisan Nail Design",
    category: "Nails",
    image: nail1,
    size: "small",
  },
  {
    id: 5,
    title: "Royal Bridal Aura",
    category: "Bridal",
    image: bridal1,
    size: "medium",
  },
  {
    id: 6,
    title: "Deep Facial Alchemy",
    category: "Skin",
    image: facial2,
    size: "medium",
  },
  {
    id: 7,
    title: "Signature Butterfly Cut",
    category: "Hair",
    image: butterfly,
    size: "large",
  },
  {
    id: 8,
    title: "Precision Pedicure",
    category: "Nails",
    image: manicure1,
    size: "small",
  },
  {
    id: 9,
    title: "Revitalizing Hair Spa",
    category: "Hair",
    image: hairspa2,
    size: "small",
  },
  {
    id: 10,
    title: "Elegant Manicure",
    category: "Nails",
    image: manicure2,
    size: "medium",
  },
  {
    id: 11,
    title: "Advanced Skin Care",
    category: "Skin",
    image: facial3,
    size: "large",
  },
  {
    id: 12,
    title: "Creative Nail Art",
    category: "Nails",
    image: nail2,
    size: "medium",
  },
  {
    id: 13,
    title: "Scalp Wellness",
    category: "Hair",
    image: lice2,
    size: "small",
  },
];

const categories: ("All" | "Bridal" | "Skin" | "Hair" | "Nails")[] = [
  "All",
  "Bridal",
  "Skin",
  "Hair",
  "Nails",
];

const GalleryFilterGrid: React.FC = () => {
  const [filter, setFilter] = useState<
    "All" | "Bridal" | "Skin" | "Hair" | "Nails"
  >("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    if (filter === "All") {
      return galleryItems;
    }
    return galleryItems.filter((item) => item.category === filter);
  }, [filter]);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredItems.length);
    }
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage(
        (selectedImage - 1 + filteredItems.length) % filteredItems.length,
      );
    }
  };

  return (
    <section className="py-24 bg-background relative z-10">
      <div className="container mx-auto px-6">
        {/* Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <Reveal direction="right" distance={30}>
            <div className="flex items-center gap-3">
              <Filter size={20} className="text-primary" />
              <h2 className="text-2xl font-serif text-slate-900 italic">
                Browse by Category
              </h2>
            </div>
          </Reveal>

          <Reveal direction="left" distance={30} delay={0.2}>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                    filter === cat
                      ? "bg-primary text-white border-primary shadow-lg shadow-primary/20 scale-105"
                      : "bg-white text-slate-600 border-slate-200 hover:border-primary/40 hover:text-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Masonry-like Grid */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative group cursor-pointer overflow-hidden rounded-2xl bg-slate-100 break-inside-avoid shadow-sm hover:shadow-xl transition-shadow duration-500 [content-visibility:auto]"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-primary text-[10px] uppercase tracking-widest font-bold mb-1 block">
                        {item.category}
                      </span>
                      <h3 className="text-white text-xl font-serif italic">
                        {item.title}
                      </h3>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-primary/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                      <Maximize2 size={18} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-2000 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <button
                className="absolute top-8 right-8 text-white/60 hover:text-white transition-colors z-10"
                onClick={closeLightbox}
              >
                <X size={32} />
              </button>

              <button
                className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all z-10"
                onClick={showPrev}
              >
                <ChevronLeft size={24} />
              </button>

              <button
                className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all z-10"
                onClick={showNext}
              >
                <ChevronRight size={24} />
              </button>

              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="relative max-w-5xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={filteredItems[selectedImage].image}
                  alt={filteredItems[selectedImage].title}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                />
                <div className="mt-6 text-center">
                  <span className="text-primary text-xs uppercase tracking-widest font-bold mb-2 block">
                    {filteredItems[selectedImage].category}
                  </span>
                  <h3 className="text-white text-3xl font-serif italic">
                    {filteredItems[selectedImage].title}
                  </h3>
                  <p className="text-white/40 text-sm mt-2">
                    {selectedImage + 1} / {filteredItems.length}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default GalleryFilterGrid;

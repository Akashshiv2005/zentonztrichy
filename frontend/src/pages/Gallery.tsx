import GalleryBookHero from "../components/Gallery/GalleryBookHero";
import InteractiveSelector from "../components/ui/interactive-selector";
import ClippedMediaGallery from "../components/Gallery/ClippedMediaGallery";
import GalleryFooter from "../components/Gallery/GalleryFooter";
import { SocialSidebar } from "../components/ui/SocialSidebar";
import { Reveal } from "../components/ui/Reveal";

const Gallery: React.FC = () => {
  return (
    <div className="overflow-x-hidden bg-background text-slate-900 font-sans relative min-h-screen">
      
      {/* Dust overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03] z-1"
        style={{
          backgroundImage:
            'url("https://img.freepik.com/premium-photo/white-dust-scratches-black-background_279525-2.jpg?w=640")',
          backgroundRepeat: "repeat",
        }}
      />

      <GalleryBookHero />

      <Reveal width="100%" direction="up" distance={50}>
        <InteractiveSelector />
      </Reveal>

      <Reveal width="100%" direction="up">
        <ClippedMediaGallery />
      </Reveal>

      <Reveal width="100%" direction="up">
        <GalleryFooter />
      </Reveal>

      <SocialSidebar />
    </div>
  );
};

export default Gallery;

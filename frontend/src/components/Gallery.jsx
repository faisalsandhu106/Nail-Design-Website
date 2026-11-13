import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia"
import { GrClose } from "react-icons/gr"

export default function Gallery({ servicesGallery }) {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <section className="my-[50px] lg:my-[100px]">
      <div className="wrapper">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {servicesGallery.map((item, index) => (
            <button
              type="button"
              className="overflow-hidden aspect-square cursor-zoom-in group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-500"
              key={item}
              onClick={() => handleImageClick(index)}
              aria-label={`Open gallery image ${index + 1}`}
            >
              <img loading="lazy" decoding="async" src={item}
                alt={`Nail Design portfolio example ${index + 1}`}
                className="group-hover:scale-105 transition-transform duration-500" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox component */}
      {open && (
        <Lightbox
        render={{
            iconPrev: () => <LiaAngleLeftSolid size={40} />,
            iconNext: () => <LiaAngleRightSolid size={40} />,
            iconClose: () => <GrClose size={24} />,
          }}
          styles={{
            container: { backgroundColor: "rgba(0, 0, 0, .85)" },
            slide: { cursor: "grab" },
          }}
          open={open}
          close={() => setOpen(false)}
          slides={servicesGallery.map((image) => ({ src: image }))}
          index={currentIndex}
        />
      )}
    </section>
  );
}

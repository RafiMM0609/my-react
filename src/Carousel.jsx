import React, { useState } from 'react';

// Data untuk carousel (gambar atau konten)
const carouselItems = [
  {
    id: 1,
    image: 'https://picsum.photos/400/200',
    alt: 'Slide 1',
  },
  {
    id: 2,
    image: 'https://picsum.photos/400/200',
    alt: 'Slide 2',
  },
  {
    id: 3,
    image: 'https://picsum.photos/400/200',
    alt: 'Slide 3',
  },
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fungsi untuk menuju slide sebelumnya
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  // Fungsi untuk menuju slide berikutnya
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div id="carouselitem" className="shadow-xl shadow-stone-800 rounded-xl relative overflow-hidden">
      {/* Konten Carousel */}
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {carouselItems.map((item) => (
          <div key={item.id} className="w-full flex-shrink-0">
            <img
              src={item.image}
              alt={item.alt}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Tombol Navigasi */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-transparent bg-opacity-50 p-2 rounded-full shadow-md"
      >
        &#10094; {/* Ikon panah kiri */}
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-transparent bg-opacity-50 p-2 rounded-full shadow-md"
      >
        &#10095; {/* Ikon panah kanan */}
      </button>
    </div>
  );
}

export default Carousel;
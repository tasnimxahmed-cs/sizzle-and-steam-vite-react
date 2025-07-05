import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Gallery() {
  const images = [
    "/images/chicken-skewers.jpg",
    "/images/pork-bao.jpg",
    "/images/kimchi-fries.jpg",
    "/images/scallion-pancakes.jpg",
    "/images/matcha-lemonade.jpg",
    "/images/lychee-tea.jpg",
  ];

  return (
    <section className="flex flex-col items-center justify-center bg-dark text-white py-12 px-4 sm:px-8">
      <title>Sizzle & Steam | Gallery</title>
      <div className="max-w-5xl w-full">
        <h1 className="text-8xl font-logo text-brand text-center mb-10">
          GALLERY
        </h1>

        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },
          }}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="overflow-hidden rounded-xl shadow-lg cursor-pointer">
                <img
                  src={src}
                  alt={`Gallery item ${index + 1}`}
                  className="w-full h-160 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

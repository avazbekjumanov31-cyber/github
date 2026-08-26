import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Smartphone } from 'lucide-react';

function App() {
  const banners = [
    {
      id: 1,
      title: 'iPhone 17 Pro Max',
      subtitle: 'Nasiya savdoga eng qulay shartlar bilan',
      bg: 'from-amber-400 to-amber-600',
      tag: 'Chegirma',
    },
    {
      id: 2,
      title: 'Samsung Galaxy S26 Ultra',
      subtitle: 'Yangi texnologiyalar va sun’iy intellekt',
      bg: 'from-blue-600 to-indigo-800',
      tag: 'Yangi',
    },
    {
      id: 3,
      title: 'Maishiy texnika festivali',
      subtitle: 'Oshxona buyumlariga 30% gacha chegirma',
      bg: 'from-emerald-500 to-teal-700',
      tag: 'Aksiya',
    },
  ];

  return (
    <div>
      <main className="max-w-7xl mx-auto px-4 py-6">
        <Swiper
          spaceBetween={20}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="rounded-3xl overflow-hidden shadow-lg h-[300px] md:h-[400px]"
        >
          {banners.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div
                className={`w-full h-full bg-gradient-to-r ${slide.bg} p-8 md:p-12 text-white flex flex-col justify-between relative`}
              >
                <span className="self-start bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {slide.tag}
                </span>

                <div className="max-w-lg space-y-3">
                  <h2 className="text-3xl md:text-5xl font-black tracking-tight drop-shadow-sm">
                    {slide.title}
                  </h2>
                  <p className="text-white/90 text-sm md:text-lg font-medium">
                    {slide.subtitle}
                  </p>
                  <button className="mt-4 bg-white text-gray-900 font-bold px-6 py-3 rounded-2xl hover:bg-amber-400 active:scale-95 transition-all shadow-md">
                    Xarid qilish
                  </button>
                </div>

                <div className="absolute right-10 bottom-10 opacity-20 hidden md:block">
                  <Smartphone className="w-64 h-64" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
    </div>
  );
}

export default App;
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, FreeMode } from 'swiper/modules';
import { Card } from './Card/Card';
import { useState } from 'react';

interface SwiperContainerProps {
  itemsData: { title: string; description: string }[];
}

export const ActiveSlider: React.FC<SwiperContainerProps> = ({itemsData}) => {
  const [items] = useState(itemsData);
  console.log(items)
  return (
    <div className='w-full pt-5'>
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        modules={[Navigation, Pagination, FreeMode]}
        spaceBetween={20}
        grabCursor={true}
        freeMode={true}
        scrollbar={{ draggable: true }}
        className='flex items-center justify-center '
      >
      {items && items.map((item, index) => (
        <SwiperSlide key={index}>
          <Card title={item.title} description={item.description} />
        </SwiperSlide>
      ))}
      </Swiper>
    </div>
  );
};
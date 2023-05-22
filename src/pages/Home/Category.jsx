import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from '../../assets/home/slide1.jpg';
import slide2 from '../../assets/home/slide2.jpg';
import slide3 from '../../assets/home/slide3.jpg';
import slide4 from '../../assets/home/slide4.jpg';
import slide5 from '../../assets/home/slide5.jpg';

const Category = () => {
  return (
    <div className="pt-20">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        // centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} className="w-full" alt="" />
          <h3 className="-mt-20 text-center text-4xl uppercase text-white">
            Salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} className="w-full" alt="" />
          <h3 className="-mt-20 text-center text-4xl uppercase text-white">
            Pizza
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} className="w-full" alt="" />
          <h3 className="-mt-20 text-center text-4xl uppercase text-white">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} className="w-full" alt="" />
          <h3 className="-mt-20 text-center text-4xl uppercase text-white">
            Dessert
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} className="w-full " alt="" />
          <h3 className="-mt-20 text-center text-4xl uppercase text-white">
            Salad
          </h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;

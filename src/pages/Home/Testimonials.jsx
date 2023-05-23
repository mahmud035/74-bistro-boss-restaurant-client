import { useEffect, useState } from 'react';
import { Autoplay, HashNavigation, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionTitle from '../../shared/SectionTitle';
import { Rating } from '@smastrom/react-rating';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('reviews.json')
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="mt-20">
      <SectionTitle heading="TESTIMONIALS" subHeading="What Our Clients Say" />

      <div>
        <Swiper
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          hashNavigation={{
            watchState: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay, HashNavigation]}
          className=""
        >
          {reviews.map((review) => (
            <SwiperSlide
              key={review._id}
              className="flex min-h-fit flex-col items-center justify-center gap-3 px-24 pb-14 pt-10  text-center"
            >
              <div className="flex flex-col items-center justify-center gap-5">
                <Rating
                  style={{ maxWidth: 150 }}
                  value={review.rating}
                  readOnly
                />
                <FaQuoteLeft size={80} className="my-5" />
              </div>

              <div>
                <p>{review.details}</p>
                <h3 className="pt-2 text-3xl uppercase text-yellow-500">
                  {review.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;

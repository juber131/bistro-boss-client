import { useEffect, useState } from "react";
import Sectiontitle from "../component/Sectiontitle";
import '@smastrom/react-rating/style.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://bistro-boss-server-three-eta.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))


    }, [])

    console.log(reviews)
    return (
        <section>
            <Sectiontitle
                subHeading="What Our Client Say"
                heading={'Testimonials'}

            > </Sectiontitle>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">

                {

                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className="mx-24 flex flex-col items-center my-8">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />

                            <p className="py-8"> {review.details} </p>
                            <h3 className="text-2xl text-orange-400">{review.name}</h3>
                        </div>



                    </SwiperSlide>)




                }


            </Swiper >

        </section >
    );
};

export default Testimonials;
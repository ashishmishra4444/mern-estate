import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css/bundle";
import ReactLoading from "react-loading";

const Listing = () => {
  SwiperCore.use([Navigation, Autoplay]);

  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const params = useParams();

  useEffect(() => {
    const fetchListing = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/listing/get/${params.listingId}`);
        const data = await res.json();
        if (data.success === false) {
          setError(true);
          setLoading(false);
          return;
        }
        setListing(data);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchListing();
  }, [params.listingId]);

  return (
    <main>
      {loading && 
         //<p className="text-2xl text-center my-7">Loading...</p>  
        <div className="flex justify-center items-center my-7">
          <ReactLoading type="spin" color="#000" />
        </div>
      }
      {
        <Link to={"/"}>
          {error && (
            <p className="text-2xl text-center hover:text-red-700 my-7">
              Something went wrong!
            </p>
          )}
        </Link>
      }
      {listing && !loading && !error && (
        <div>
          <Swiper
            navigation
            autoplay={{ delay: 3000, disableOnInteraction: false }}
          >
            {listing.imageUrls.map((url) => (
              <SwiperSlide key={url}>
                <div
                  className="h-[550px]"
                  style={{
                    background: `url(${url}) center no-repeat`,
                    backgroundSize: "cover",
                  }}
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </main>
  );
};

export default Listing;

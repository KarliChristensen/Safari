"use client";
import Image from "next/image";
import Offers from "../../public/img/Pictures/rod-long-VAwxk8MJ3Ks-unsplash.jpg";

const Offerarea = () => {
  return (
    <>
      <div className="offers__area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="offers__area-title">
                <span className="subtitle__one">Safari Tour</span>
                <h2>
                  Discover Botswana <br /> Tour the Okavango River Delta
                </h2>
                <p>
                  Explore the breathtaking beauty of Botswana's Okavango River
                  Delta, a UNESCO World Heritage site. This unique ecosystem is
                  home to diverse wildlife and stunning landscapes, offering
                  unforgettable experiences for nature lovers and adventure
                  seekers alike. From thrilling safaris to serene boat rides,
                  discover the magic of this vibrant region.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="offers__area-image">
                <Image alt="" layout="responsive" src={Offers} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offerarea;

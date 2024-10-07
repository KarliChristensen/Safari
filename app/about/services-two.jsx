"use client";
import Image from "next/image";
import CarParking from "../../public/img/icon/safari.png";
import Locaion1 from "../../public/img/icon/location-1.png";
import Cano from "../../public/img/icon/cano.png";
import SwimmingPool from "../../public/img/icon/boat.png";

const Servicestwo = () => {
  return (
    <>
      <div className="services__two mb-40">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6 xl-mb-30">
              <div className="services__two-item">
                <span>01</span>
                <div className="services__two-item-icon">
                  <Image alt="" layout="responsive" src={Locaion1} />
                </div>
                <div className="services__two-item-content">
                  <h4>Journey</h4>
                  <p>
                  Explore diverse landscapes as you journey through the Okavango Delta.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 lg-mb-30">
              <div className="services__two-item">
                <span>02</span>
                <div className="services__two-item-icon">
                  <Image alt="" layout="responsive" src={CarParking} />
                </div>
                <div className="services__two-item-content">
                  <h4>Safari</h4>
                  <p>
                    Explore the Khwai Okavango Delta, Savuti and the Chobe National Park.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 lg-mb-30">
              <div className="services__two-item">
                <span>03</span>
                <div className="services__two-item-icon">
                  <Image alt="" layout="responsive" src={SwimmingPool} />
                </div>
                <div className="services__two-item-content">
                  <h4>Boat Cruise</h4>
                  <p>
                    Add a Chobe River boat cruise to your experience and see the sunset while afloat.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="services__two-item">
                <span>04</span>
                <div className="services__two-item-icon">
                  <Image alt="" layout="responsive" src={Cano} />
                </div>
                <div className="services__two-item-content">
                  <h4>Mokoro Trips</h4>
                  <p>
                  Experience tranquil mokoro trips through the stunning waterways of the delta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Servicestwo;

import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import Image from "next/image";

const BannerContent = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="row">
      <div className="col-xl-12">
        <div className="banner__area-title">
          <Image
            src="/img/Logo/No icon/Shangamera_Logo_noicon_white.png"
            alt=""
            width={500}
            height={30}
          />
          <div className="banner__area-title-video">
            <div className="video__play">
              <React.Fragment>
                <ModalVideo
                  channel="youtube"
                  isOpen={isOpen}
                  videoId="SZEflIVnhH8"
                  onClose={() => setOpen(false)}
                />
                <span onClick={() => setOpen(true)}>
                  <i className="fas fa-play"></i>
                </span>
              </React.Fragment>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerContent;

import Link from "next/link";

const Accommodationstext = () => {
  return (
    <div className="col-xl-5 col-lg-6 lg-mb-50">
      <div className="accommodations__area-title">
        <span className="subtitle__one">Tours & Safari</span>
        <h2>Shangamera Discover Botswana</h2>
        <p>
          Savvy travelers are looking for more than just the next destination on
          the map. They are looking for a memorable experience and to make new
          friends along the way.
        </p>
        <Link className="theme-btn" href="/trip-details">
          Read More <i className="fal fa-long-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
};

export default Accommodationstext;

import Link from "next/link";
const faqData = {
  faqOne: [
    {
      id: "collapseOnePage",
      class: "icon page collapsed",
      class2: "faq__area-item-body collapse",
      title: "How do we arrange for payment?",
      des: "After receiving your booking information, we will reach out to ensure that all details are in order. Once the final steps are complete, we will arrange for payment and confirm that your journey with us has been properly organized.",
    },
    {
      id: "collapseTwoPage",
      class: "icon page",
      class2: "faq__area-item-body collapse show",
      title: "What are your prices?",
      des: "Our tours are priced at 470 USD per person, per night. Therefore, the 5-day trip through Khwai Okavango totals 1880 USD per person. The full experience, which includes 2 nights in Savuti Private Reserve and 2 nights in Chobe National Park, amounts to 3760 USD per person.",
    },
    {
      id: "collapseThreePage",
      class: "icon page collapsed",
      class2: "faq__area-item-body collapse",
      title: "Do hotels charge your card before you check ?",
      des: "Praesent non ullamcorper ligula. Proin a mi vitae massa lacinia sollicitudin eget eu ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur rhoncus lobortis. Curabitur sit amet velit sagittis, pellentesque diam euismod, faucibus quam. Cras non rhoncus ipsum. Quisque mattis arcu metus, a fermentum justo semper in.",
    },
  ],
};
const { faqOne } = faqData;

const TripDetails = () => {
  return (
    <div className="services__details section-padding">
      <div className="container">
        <div className="row">
          <div className="col-xxl-3 col-xl-4 col-lg-4 lg-mb-30">
            <div className="all__sidebar">
              <div className="all__sidebar-item">
                <h5>Locations</h5>
                <div className="all__sidebar-item-category">
                  <ul>
                    <li>
                      <Link href="#khwai">
                        <i className="far fa-angle-double-right"></i>Khwai
                        Okavango
                      </Link>
                    </li>
                    <li>
                      <Link className="active" href="#savuti">
                        <i className="far fa-angle-double-right"></i>Savuti
                      </Link>
                    </li>
                    <li>
                      <Link href="#chobe">
                        <i className="far fa-angle-double-right"></i>Chobe
                        National Park
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="all__sidebar-item-help mt-30">
                <div className="all__sidebar-item-help-icon">
                  <i className="fal fa-envelope-open-text"></i>
                </div>
                <h5> Any questions for us?</h5>
                <div className="all__sidebar-item-help-contact">
                  <div className="all__sidebar-item-help-contact-content">
                    <span>Reach out</span>
                    <h6>
                      <span>Support@shangamera.com</span>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-9 col-xl-8 col-lg-8">
            <div className="services__details-left">
              <div className="services__details-left-content">
                <h2 id="khwai" className="mb-30">
                  Khwai Okavango
                </h2>
                <p className="mb-0">
                  The Khwai Concession in Botswana's Okavango Delta is a
                  180,000-hectare gem teeming with diverse wildlife and stunning
                  landscapes. This unfenced area, bordering Moremi Game Reserve
                  and Chobe National Park, offers exceptional game viewing
                  opportunities. The Khwai River flows through the concession,
                  attracting a myriad of species to its banks, including large
                  herds of elephants, hippos, crocodiles, and a variety of
                  antelope like lechwe and sable.
                </p>
                <span>
                  With a healthy predator population, including frequent
                  sightings of lions, leopards, hyenas, and the endangered
                  African wild dog, Khwai is an exceptional chance to view a
                  living, breathing predator prey relationship.
                </span>
                <p>
                  Khwai's varied habitats, from mopane forests to grasslands and
                  floodplains, support an impressive array of birdlife, with
                  over 500 species recorded. Visitors can explore this wildlife
                  haven through full-day game drives in the Moremi Game Reserve
                  and Khwai Private Reserve, optional guided walks, and mokoro
                  (dugout canoe) safaris. The Khwai Delta offers a perfect blend
                  of luxury accommodations, diverse activities, and exceptional
                  wildlife viewing, making it a must-visit destination for any
                  safari enthusiast exploring the Okavango Delta
                </p>
                <div className="row align-items-center mt-35 mb-35">
                  <div className="col-xl-6 col-lg-12 xl-mb-30">
                    <img
                      className="img__full"
                      src="/img/unsplashed/duncan-mcnab-68MFPvDusRs-unsplash.jpg"
                      alt="Photo by Duncan McNab on Unsplash"
                    />
                  </div>
                  <div className="col-xl-6 col-lg-12">
                    <h3 className="mb-20">Package includes</h3>
                    <div className="services__details-left-content-list">
                      <p>
                        <i className="fas fa-map"></i>
                        Mokoro trips
                      </p>
                      <p>
                        <i className="fas fa-map"></i>
                        Night game drives
                      </p>
                      <p>
                        <i className="fas fa-map"></i>
                        Full-day game drives
                      </p>
                      <p>
                        <i className="fas fa-map"></i>
                        4-night stay in Khwai Okavango
                      </p>
                      <hr className=""></hr>
                      <h4 className="mb-15">Optionals</h4>
                      <p>
                        <i className="fas fa-map"></i>
                        Guided walks
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="services__details-left">
              <div className="services__details-left-content">
                <h2 id="savuti" className="mb-30">
                  Savuti
                </h2>
                <p className="mb-0">
                  Savuti, located in the Chobe National Park of Botswana, is
                  renowned for its dramatic landscapes and rich wildlife
                  diversity. This area features the Savuti Channel, which flows
                  intermittently, creating a unique ecosystem that attracts
                  various animal species.
                </p>
                <span>
                  The region hosts significant herds of elephants, buffalo, and
                  zebra, especially during the rainy season when thousands of
                  zebras migrate to the lush grasses of the Savuti Marsh
                </span>
                <p>
                  Birdwatchers will find Savuti captivating, with abundant avian
                  life such as Secretary Birds and Kori Bustards. The stark
                  beauty of its open savannas and rocky outcrops, combined with
                  the presence of ancient Baobab trees and unique cave
                  paintings, makes Savuti a fascinating destination for both
                  wildlife enthusiasts and cultural explorers
                </p>
                <div className="row align-items-center mt-35 mb-35">
                  <div className="col-xl-6 col-lg-12">
                    <h3 className="mb-20">Savuti game drives</h3>
                    <p>
                      A game drive in Savuti, located within Botswana's Chobe
                      National Park, promises an exhilarating wildlife
                      experience. Expect to encounter large prides of lions,
                      spotted hyenas, and elusive leopards, particularly during
                      the dry season when animals gather around waterholes.
                    </p>
                    <p>
                      Drives typically occur in the early morning and late
                      afternoon, offering the best chances to see wildlife in
                      action. The diverse landscape features open savannahs,
                      rocky outcrops, and the iconic Savuti Channel. During the
                      rainy season from November to April, thousands of zebras
                      migrate through Savuti, attracting predators eager to
                      hunt.
                    </p>
                    <p>
                      Birdwatchers will also be delighted by the area’s rich
                      avian life, with species like Secretary Birds and Carmine
                      Bee-eaters frequently spotted. Our knowledgeable guides
                      enhance the experience by sharing insights into the
                      ecosystem and local culture. Overall, a game drive in
                      Savuti offers unforgettable encounters with nature in one
                      of Botswana's most stunning settings.
                    </p>
                    <div className="mb-30">
                      <h3 className="mb-20">Package includes</h3>
                      <div className="services__details-left-content-list">
                        <p>
                          <i className="fas fa-map"></i>
                          Game drives
                        </p>
                        <p>
                          <i className="fas fa-map"></i>
                          2-night stay in Savuti
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-12 xl-mb-30">
                    <img
                      className="img__full"
                      src="/img/unsplashed/duncan-mcnab-ewIep2jCgCc-unsplash.jpg"
                      alt="Photo by Duncan McNab on Unsplash"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="services__details-left">
              <div className="services__details-left-content">
                <h2 id="chobe" scroll={false} className="mb-30">
                  Chobe National Park
                </h2>
                <p className="mb-0">
                  Chobe National Park, often hailed as one of Africa's premier
                  safari destinations, offers an unforgettable wildlife
                  experience. Spanning over 11,700 square kilometers, it is home
                  to one of the largest concentrations of elephants in the
                  world, with estimates ranging from 50,000 to 120,000.
                </p>
                <span>
                  The Chobe River is a hub for birdwatching enthusiasts, with
                  hundreds of species inhabiting the area.
                </span>
                <p>
                  Visitors can expect thrilling encounters with diverse
                  wildlife, including lions, giraffes, zebras, and buffaloes.
                  The dry season from May to October is particularly popular for
                  game viewing, as animals flock to the Chobe River for water.
                  Morning and late afternoon game drives are ideal for spotting
                  wildlife in action, while boat cruises along the river provide
                  a unique perspective on the park's vibrant ecosystem. Whether
                  on a game drive or a serene boat safari, the stunning
                  landscapes and rich wildlife make a safari in Chobe National
                  Park a truly remarkable experience.
                </p>
                <div className="row align-items-center mt-35 mb-35">
                  <div className="col-xl-6 col-lg-12 xl-mb-30">
                    <img
                      className="img__full"
                      src="/img/unsplashed/m_oros-Fnvv1TBCndU-unsplash.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col-xl-6 col-lg-12">
                    <h3 className="mb-20">Chobe River sunset boat cruise</h3>
                    <p>
                      A Chobe River sunset boat cruise offers a serene and
                      breathtaking way to experience Botswana's wildlife. As the
                      sun begins to set, casting vibrant hues of orange and pink
                      across the sky, guests can relax on the water while
                      observing the abundant wildlife along the riverbanks.
                    </p>
                    <p>
                      Large herds of elephants, buffalo, and zebra often make
                      their way to the water for an evening drink, while hippos
                      and crocodiles bask nearby. The cruise provides excellent
                      opportunities for birdwatching, with over 460 species in
                      the area, including stunning African fish eagles and
                      colorful kingfishers.
                    </p>
                    <h3 className="mb-20">Package includes</h3>
                    <div className="services__details-left-content-list">
                      <p>
                        <i className="fas fa-map"></i>Game drives
                      </p>
                      <p>
                        <i className="fas fa-map"></i>Sunset boat cruise on the
                        Chobe River
                      </p>
                      <p>
                        <i className="fas fa-map"></i>
                        2-night stay in Chobe National Park
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div id="accordionExamplePage">
                {faqOne?.map((data, id) => (
                  <div className="faq__area-item" key={id}>
                    <h5
                      className={data.class}
                      data-bs-toggle="collapse"
                      data-bs-target={`#${data.id}`}
                    >
                      {data.title}
                    </h5>
                    <div
                      id={data.id}
                      className={data.class2}
                      data-bs-parent="#accordionExamplePage"
                    >
                      <p>{data.des}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripDetails;

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
      class: "icon page collapsed",
      class2: "faq__area-item-body collapse",
      title: "What are your prices?",
      des: "Our tours (for 10+ pax) are currently priced at 400 USD per person, per night. Therefore, for example, a 5-day / 4-night trip through the Khwai Okavango totals 1600 USD per person. And, the full experience, which includes 4 nights in Khwai Okavango as well as 2 nights in the Savuti region and 2 nights in Chobe National Park, amounts to 3200 USD per person. Likewise, our tours (for under 10 pax) are currently priced at 470 USD per person, per night. Therefore, for example, the 5-day / 4-night trip through the Khwai Okavango totals 1880 USD per person. And, the full experience, which includes 4 nights in Khwai Okavango as well as 2 nights in the Savuti region and 2 nights in Chobe National Park, amounts to 3760 USD per person.",
      des2: "PLEASE NOTE THAT OUR RATES VARY AND WILL ONLY BE CONFIRMED ON ENQUIRY.",
    },
    {
      id: "collapseThreePage",
      class: "icon page collapsed",
      class2: "faq__area-item-body collapse",
      title: "What are your options?",
      des: "The Khwai Okavango, Savuti and Chobe National Park packages as well as the Victoria Falls, Kalahari Desert and Birding Safaris may be booked together as a full experience or individually or in combinations as preferred.",
    },
  ],
};
const { faqOne } = faqData;

const scrollToArticle = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

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
                      <a onClick={() => scrollToArticle("khwai")} href="#">
                        <i className="far fa-angle-double-right"></i>Khwai
                        Okavango
                      </a>
                    </li>
                    <li>
                      <Link onClick={() => scrollToArticle("savuti")} href="#">
                        <i className="far fa-angle-double-right"></i>Savuti
                      </Link>
                    </li>
                    <li>
                      <Link onClick={() => scrollToArticle("chobe")} href="#">
                        <i className="far fa-angle-double-right"></i>Chobe
                        National Park
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => scrollToArticle("kalahari")}
                        href="#"
                      >
                        <i className="far fa-angle-double-right"></i>Kalahari
                        Desert
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => scrollToArticle("victoria")}
                        href="#"
                      >
                        <i className="far fa-angle-double-right"></i>Victoria
                        Falls
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => scrollToArticle("birdwatching")}
                        href="#"
                      >
                        <i className="far fa-angle-double-right"></i>
                        Birdwatching Safari
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
                      <span>info@shangamera.com</span>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="khwai" className="col-xxl-9 col-xl-8 col-lg-8">
            <div className="services__details-left">
              <div className="services__details-left-content">
                <h2 className="mb-30">Khwai Okavango</h2>
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
                  living, breathing predator-prey relationship.
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
                  safari enthusiast exploring the Okavango Delta.
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
          <div id="savuti">
            <div className="services__details-left">
              <div className="services__details-left-content">
                <h2 className="mb-30">Savuti</h2>
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
                  zebras migrate to the lush grasses of the Savuti Marsh.
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
            <div id="chobe" className="services__details-left">
              <div className="services__details-left-content">
                <h2 scroll={false} className="mb-30">
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
              <div id="kalahari">
                <div className="services__details-left">
                  <div className="services__details-left-content">
                    <h2 className="mb-30">Kalahari Desert</h2>
                    <p className="mb-0">
                      The Kalahari Desert, a vast expanse of arid beauty,
                      stretches across southern Africa, covering parts of
                      Botswana, Namibia, and South Africa. Despite its name,
                      it's not a true desert but a semi-arid savanna, teeming
                      with diverse wildlife and unique ecosystems. Spanning over
                      900,000 square kilometers, the Kalahari is home to iconic
                      species such as the black-maned Kalahari lion, meerkats,
                      and the elusive pangolin.
                    </p>
                    <span>
                      This "green desert" bursts with life, especially after
                      rare rainfalls, transforming the landscape into a lush
                      paradise.
                    </span>
                    <p>
                      Safari experiences in the Kalahari range from luxury
                      lodges to immersive conservation projects, allowing
                      visitors to contribute to wildlife research and protection
                      efforts. Whether tracking animals on game drives,
                      observing meerkats, or marveling at the iconic red dunes,
                      the Kalahari Desert provides a truly unique and
                      unforgettable African safari experience.
                    </p>
                    <div className="row align-items-center mt-35 mb-35">
                      <div className="col-xl-6 col-lg-12">
                        <h3 className="mb-20">Kalahari Exploration</h3>
                        <p>
                          Exploring the Kalahari Desert offers an unforgettable
                          adventure through one of Africa's most captivating
                          landscapes. Known for its striking red sand dunes and
                          vast salt pans, the Kalahari is a haven for wildlife
                          enthusiasts.
                        </p>
                        <p>
                          The desert hosts remarkable wildlife, including
                          black-maned lions, elusive leopards, and agile
                          springboks. Game drives are particularly rewarding
                          during the dry season when animals gather around
                          waterholes, with early morning and late afternoon
                          excursions providing the best viewing opportunities.
                        </p>
                        <p>
                          Birdwatchers will delight in spotting over 260
                          species, such as the vibrant Lilac-breasted Roller and
                          the Kalahari Scrub Robin. The region's diverse
                          habitats support a rich tapestry of avian life.
                        </p>
                        {/*                         <div className="mb-30">
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
                        </div> */}
                      </div>
                      <div className="col-xl-6 col-lg-12 xl-mb-30">
                        <img
                          className="img__full"
                          src="/img/unsplashed/chris-stenger-sULbb5Jtte8-unsplash.jpg"
                          alt="Photo by Chris Stenger on Unsplash"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="victoria" className="services__details-left-content">
                <h2 scroll={false} className="mb-30">
                  Victoria Falls
                </h2>
                <p className="mb-0">
                  Victoria Falls, one of the world's most spectacular natural
                  wonders, straddles the border between Zimbabwe and Zambia.
                  This UNESCO World Heritage site is a breathtaking spectacle,
                  where the mighty Zambezi River plunges over a cliff, creating
                  a curtain of water 1.7 kilometers wide and up to 108 meters
                  high. Known locally as Mosi-oa-Tunya, or "The Smoke that
                  Thunders," the falls create a mist visible from kilometers
                  away.
                </p>
                <span>
                  The area surrounding Victoria Falls is a paradise for nature
                  lovers and adventure seekers alike. The lush rainforest
                  nurtured by the falls' spray hosts a diverse ecosystem,
                  including over 400 bird species and a variety of mammals such
                  as elephants, hippos, and crocodiles.
                </span>
                <div className="row align-items-center mt-35 mb-35">
                  <div className="col-xl-6 col-lg-12 xl-mb-30">
                    <img
                      className="img__full"
                      src="/img/unsplashed/chris-boland-afGA-TbGNbA-unsplash.jpg"
                      alt="Picture by Chris Boland"
                    />
                  </div>
                  <div className="col-xl-6 col-lg-12">
                    <h3 className="mb-20">The Victoria Falls Experience</h3>
                    <p>
                      Exploring Victoria Falls offers an unparalleled experience
                      combining natural beauty and thrilling activities. The
                      falls can be viewed from various vantage points, with the
                      most popular being the rainforest walk on the Zimbabwean
                      side, offering face-to-face encounters with the cascading
                      water.
                    </p>
                    <p>
                      Wildlife enthusiasts will find the surrounding national
                      parks teeming with life. Elephants, buffalo, zebras, and
                      various antelope species roam freely, while baboons and
                      vervet monkeys are common sights. For bird lovers, the
                      area is a haven, with species ranging from the majestic
                      African fish eagle to the colorful malachite kingfisher.
                    </p>
                    {/*                     <h3 className="mb-20">Package includes</h3>
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
                    </div> */}
                  </div>
                </div>
              </div>

              <div id="birdwatching" className="services__details-left">
                <div className="services__details-left-content">
                  <h2 className="mb-30">Birdwatching Safaris</h2>
                  <p className="mb-0">
                    Birdwatching safaris in the Khwai Delta present an
                    extraordinary opportunity to explore one of Africa's richest
                    avian habitats. This region, characterized by its diverse
                    ecosystems of lagoons, marshes, and woodlands, is home to
                    nearly 500 bird species, making it a paradise for bird
                    enthusiasts.
                  </p>
                  <span>
                    From the vibrant lilac-breasted roller to the majestic
                    African fish eagle, the variety of birds here captivates
                    both novice and experienced birdwatchers alike.
                  </span>
                  <p>
                    The seasonal changes in the Khwai Delta enhance the
                    birdwatching experience, with summer months bringing
                    migratory species that add to the local population. The
                    wetlands attract numerous waterfowl, while open grasslands
                    host raptors and other terrestrial birds. The chance to
                    observe rare species, such as the Rosy-throated Longclaw and
                    Slaty Egret, makes every outing unique and exciting.
                  </p>
                  <div className="row align-items-center mt-35 mb-35">
                    <div className="col-xl-6 col-lg-12">
                      <h3 className="mb-20">
                        Avian Wonders of the Khwai Delta
                      </h3>
                      <p>
                        Exploring the Khwai Delta on a birdwatching safari is an
                        immersive experience that combines stunning landscapes
                        with rich biodiversity. Guided tours often include early
                        morning and late afternoon excursions when birds are
                        most active, providing optimal viewing conditions. The
                        knowledgeable guides share insights about bird behavior
                        and habitat, enriching the experience.
                      </p>
                      <p>
                        Visitors can expect to see a wide range of species,
                        including colorful bee-eaters, elegant herons, and
                        various storks. The interplay between predators and
                        their prey adds drama to the experience, as birdwatchers
                        may witness hunting behaviors firsthand. Additionally,
                        the serene backdrop of the Khwai River enhances the
                        tranquility of birdwatching while providing
                        opportunities to spot hippos and crocodiles basking in
                        the sun.
                      </p>
                      <p>
                        Whether from a boat gliding through papyrus channels or
                        on foot in dry woodlands, birdwatching safaris in the
                        Khwai Delta promise unforgettable encounters with
                        nature's feathered wonders.
                      </p>
                      {/*                         <div className="mb-30">
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
                        </div> */}
                    </div>
                    <div className="col-xl-6 col-lg-12 xl-mb-30">
                      <img
                        className="img__full"
                        src="/img/unsplashed/amaryllis-liampoti-rN8MB3b7_08-unsplash.jpg"
                        alt="Photo by Amaryllis Liampoti on Unsplash"
                      />
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
                      <p>{data.des2}</p>
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

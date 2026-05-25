import styles from "./TtcPage.module.css";
import ButtonLink from "../../components/ButtonLink";

const baseUrl = import.meta.env.BASE_URL;

const storySections = [
  {
    title: "Giving Back to Local Trails",
    text: "Teen Trail Corps riders show up with tools and teamwork to care for the local trails our community rides every week.",
    images: [
      {
        src: `${baseUrl}images/hero_image0.jpg`,
        alt: "Edmond United riders participating in local trail work"
      }
    ]
  },
  {
    title: "Learning Trail Stewardship",
    text: "Athletes learn why trail care matters, how to protect riding spaces, and what it means to leave trails better than we found them.",
    images: [
      {
        src: `${baseUrl}images/hero_image2.jpg`,
        alt: "Student-athletes learning trail stewardship outdoors"
      },
      {
        src: `${baseUrl}images/hero_image1.jpg`,
        alt: "Team outdoor stewardship collage"
      }
    ]
  },
  {
    title: "Working Alongside OMBA",
    text: "By volunteering with OMBA, riders see how local trail systems are maintained and how service keeps the MTB community strong.",
    images: [
      {
        src: `${baseUrl}images/hero_image1.jpg`,
        alt: "Teen Trail Corps athletes supporting OMBA trail efforts"
      }
    ]
  },
  {
    title: "Building Leaders On and Off the Bike",
    text: "TTC develops responsibility, leadership, and pride in helping others enjoy safe, sustainable trails.",
    images: [
      {
        src: `${baseUrl}images/hero_image0.jpg`,
        alt: "Edmond United youth riders leading through service"
      }
    ]
  }
];

function TtcPage() {
  return (
    <article className={styles.page}>
      <header className={styles.hero}>
        <img
          src={`${baseUrl}images/hero_image2.jpg`}
          alt="Teen Trail Corps athletes outdoors on local trails"
        />
        <div className={styles.heroOverlay}>
          <p>Edmond United</p>
          <h1>Teen Trail Corps</h1>
          <span>Ride. Respect. Give Back.</span>
        </div>
      </header>

      <section className={styles.introSection}>
        <h2>Trail Stewardship Starts Here</h2>
        <p>
          Teen Trail Corps helps student-athletes learn service, leadership, and
          respect for the trails they ride through real stewardship and community
          involvement.
        </p>
      </section>

      <div className={styles.storyStack}>
        {storySections.map((section, index) => (
          <section key={section.title} className={styles.storySection}>
            <div className={styles.storyText}>
              <h2>{section.title}</h2>
              <p>{section.text}</p>
            </div>
            <div className={styles.storyMedia}>
              {section.images.length > 1 ? (
                <div className={styles.collage}>
                  {section.images.map((image) => (
                    <img key={image.src} src={image.src} alt={image.alt} />
                  ))}
                </div>
              ) : (
                <img src={section.images[0].src} alt={section.images[0].alt} />
              )}
            </div>
          </section>
        ))}

        <section className={styles.highlightSection}>
          <h2>Partnering with OMBA</h2>
          <p>
            Edmond United works directly with the Oklahoma Mountain Bike Association
            to support local trails, volunteer opportunities, and long-term trail
            stewardship across our riding community.
          </p>
        </section>

        <section className={styles.ctaSection}>
          <h2>Ride with purpose</h2>
          <div>
            <ButtonLink href={`${baseUrl}#contact`}>Join Edmond United</ButtonLink>
            <ButtonLink href="mailto:edmondok.nica@gmail.com">Ask a Question</ButtonLink>
          </div>
        </section>
      </div>
    </article>
  );
}

export default TtcPage;

import styles from "./NicaAdventurePage.module.css";
import ButtonLink from "../components/ButtonLink";

const baseUrl = import.meta.env.BASE_URL;

const storySections = [
  {
    title: "Exploring New Trails",
    text: "NICA Adventure rides invite athletes to discover new terrain, fresh views, and the joy of exploring on two wheels.",
    image: `${baseUrl}images/hero_image0.jpg`,
    alt: "Edmond United riders exploring outdoor trails together"
  },
  {
    title: "Building Confidence and Skills",
    text: "Each ride helps athletes grow technical skills, decision-making, and confidence in changing trail conditions.",
    image: `${baseUrl}images/hero_image2.jpg`,
    alt: "Youth mountain biker developing skills on trail"
  },
  {
    title: "Adventure with Teammates",
    text: "From group rides to trail stops, teammates encourage each other and build friendships through shared adventure.",
    image: `${baseUrl}images/hero_image1.jpg`,
    alt: "Team riders sharing an outdoor adventure moment"
  }
];

function NicaAdventurePage() {
  return (
    <article className={styles.page}>
      <header className={styles.hero}>
        <img
          src={`${baseUrl}images/hero_image0.jpg`}
          alt="Edmond United riders on an outdoor adventure ride"
        />
        <div className={styles.heroOverlay}>
          <p>Edmond United</p>
          <h1>NICA Adventure</h1>
          <span>Explore more on two wheels</span>
        </div>
      </header>

      <section className={styles.introSection}>
        <h2>Adventure Beyond the Usual Ride</h2>
        <p>
          NICA Adventure gives youth new opportunities for outdoor exploration,
          skill-building, teamwork, and camaraderie beyond traditional practices or
          racing.
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
              {index === 2 ? (
                <div className={styles.collage}>
                  <img src={section.image} alt={section.alt} />
                  <img src={`${baseUrl}images/hero_image0.jpg`} alt="Adventure trail collage with Edmond United riders" />
                </div>
              ) : (
                <img src={section.image} alt={section.alt} />
              )}
            </div>
          </section>
        ))}

        <section className={styles.highlightSection}>
          <h2>More than just riding</h2>
          <p>
            NICA Adventure builds outdoor learning, healthy lifestyles, teamwork, and
            friendship while helping athletes discover new places and new confidence
            through mountain biking.
          </p>
        </section>

        <section className={styles.ctaSection}>
          <h2>Ready for the next adventure?</h2>
          <div>
            <ButtonLink href={`${baseUrl}#contact`}>Join Edmond United</ButtonLink>
            <ButtonLink href="mailto:edmondok.nica@gmail.com">Ask a Question</ButtonLink>
          </div>
        </section>
      </div>
    </article>
  );
}

export default NicaAdventurePage;

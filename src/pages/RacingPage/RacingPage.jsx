import styles from "./RacingPage.module.css";
import { storySections } from "./racingPageContent";
import ButtonLink from "../../components/ButtonLink";

const baseUrl = import.meta.env.BASE_URL;

function RacingPage() {
  return (
    <article className={styles.page}>
      <header className={styles.hero}>
        <img
          src={`${baseUrl}images/racingHero.webp`}
          alt="Race weekend scene with Edmond United riders"
        />
        <div className={styles.heroOverlay}>
          <p>NICA Racing</p>
          <h1>NICA Racing</h1>
          <span>A sneek-peak at race weekend with Edmond United</span>
        </div>
      </header>

      <div className={styles.storyStack}>
        {storySections.map((section, index) => (
          <section key={section.title} className={styles.storySection}>
            <div className={styles.storyText} data-reverse={index % 2 !== 0 || undefined}>
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

        <section className={styles.everyoneSection}>
          <h2>Racing is optional, but the race weekend experience is for everyone</h2>
          <p>
            Athletes can race, cheer, support teammates, and still be a big part of
            race weekend. Every role matters, and everyone belongs in the team atmosphere.
          </p>
          <img
            src={`${baseUrl}images/raceExperience.webp`}
            alt="Race weekend scene with Edmond United riders"
          />
        </section>

        <section className={styles.ctaSection}>
          <h2>Ready to experience race weekend?</h2>
          <div>
            <ButtonLink href={`${baseUrl}#contact`}>Join the Team</ButtonLink>
            <ButtonLink href="mailto:edmondok.nica@gmail.com">Ask a Question</ButtonLink>
          </div>
        </section>
      </div>
    </article>
  );
}

export default RacingPage;

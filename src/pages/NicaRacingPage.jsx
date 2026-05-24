import styles from "./NicaRacingPage.module.css";
import ButtonLink from "../components/ButtonLink";

const baseUrl = import.meta.env.BASE_URL;

const storySections = [
  {
    title: "Team Tent Arrival",
    text: "Race weekend starts with bikes unloading, tents going up, and teammates checking in. The energy is high before the first pedal stroke.",
    image: `${baseUrl}images/hero_image0.jpg`,
    alt: "Edmond United riders gathering near the team tent before racing"
  },
  {
    title: "Pre-Ride and Warmups",
    text: "Athletes roll out for pre-ride, dial in lines, and settle nerves. Coaches and teammates help everyone feel prepared.",
    image: `${baseUrl}images/hero_image1.jpg`,
    alt: "Youth rider warming up and preparing for race day"
  },
  {
    title: "Staging and Start Line",
    text: "At staging, focus sharpens and encouragement gets louder. Every rider heads to the line with the whole team behind them.",
    image: `${baseUrl}images/hero_image2.jpg`,
    alt: "Riders near the start area before a NICA race"
  },
  {
    title: "Racing on Course",
    text: "From climbs to corners, riders push their limits and stay resilient. Every lap is a chance to grow stronger and smarter.",
    image: `${baseUrl}images/hero_image0.jpg`,
    alt: "Mountain bike rider racing on course"
  },
  {
    title: "Finish Line and Cheering",
    text: "Crossing the line means hearing your team erupt. The loudest moments happen when teammates cheer each other all the way in.",
    image: `${baseUrl}images/hero_image1.jpg`,
    alt: "Teammates cheering riders at the finish line"
  },
  {
    title: "Hangout, Awards, and Memories",
    text: "After racing, we regroup, celebrate effort, and make memories that last longer than race results.",
    image: `${baseUrl}images/hero_image2.jpg`,
    alt: "Edmond United team celebrating after the race"
  }
];

function NicaRacingPage() {
  return (
    <article className={styles.page}>
      <header className={styles.hero}>
        <img
          src={`${baseUrl}images/hero_image0.jpg`}
          alt="Race weekend scene with Edmond United riders"
        />
        <div className={styles.heroOverlay}>
          <p>NICA Racing</p>
          <h1>NICA Racing</h1>
          <span>Race weekend with Edmond United</span>
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
              {index % 3 === 1 ? (
                <div className={styles.collage}>
                  <img src={section.image} alt={section.alt} />
                  <img src={`${baseUrl}images/hero_image2.jpg`} alt="Edmond United racing moment collage" />
                </div>
              ) : (
                <img src={section.image} alt={section.alt} />
              )}
            </div>
          </section>
        ))}

        <section className={styles.everyoneSection}>
          <h2>Racing is optional, but the experience is for everyone</h2>
          <p>
            Athletes can race, cheer, support teammates, and still be a big part of
            race weekend. Every role matters, and everyone belongs in the team atmosphere.
          </p>
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

export default NicaRacingPage;

import styles from "./GritPage.module.css";
import ButtonLink from "../../components/ButtonLink";

const baseUrl = import.meta.env.BASE_URL;

const storySections = [
  {
    title: "Riding Together at Practice",
    text: "GRiT rides create space for girls to learn skills, try new things, and ride with confidence together.",
    images: [
      {
        src: `${baseUrl}images/hero_image1.jpg`,
        alt: "Girls riding together during team practice"
      }
    ]
  },
  {
    title: "Race Day Warmups and Encouragement",
    text: "Before races, teammates encourage each other, settle nerves, and show up ready for the day as one group.",
    images: [
      {
        src: `${baseUrl}images/hero_image0.jpg`,
        alt: "Teammates warming up and encouraging each other on race day"
      }
    ]
  },
  {
    title: "GRiT Tent and Team Friendships",
    text: "At the GRiT tent, girls connect, laugh, and build friendships that make weekends even more meaningful.",
    images: [
      {
        src: `${baseUrl}images/hero_image2.jpg`,
        alt: "Team friendship moment around the GRiT tent"
      },
      {
        src: `${baseUrl}images/hero_image0.jpg`,
        alt: "Girls sharing team moments together"
      }
    ]
  },
  {
    title: "Girls Supporting Girls",
    text: "From start line to finish chute, girls cheer each other on and celebrate every effort, every finish, and every win.",
    images: [
      {
        src: `${baseUrl}images/hero_image1.jpg`,
        alt: "Girls cheering teammates during a race"
      }
    ]
  }
];

function GritPage() {
  return (
    <article className={styles.page}>
      <header className={styles.hero}>
        <img
          src={`${baseUrl}images/hero_image1.jpg`}
          alt="Girls riding together with Edmond United"
        />
        <div className={styles.heroOverlay}>
          <p>Edmond United</p>
          <h1>GRiT</h1>
          <span>Girls Riding Together</span>
        </div>
      </header>

      <section className={styles.introSection}>
        <h2>Welcome to GRiT</h2>
        <p>
          GRiT helps girls build confidence, friendships, and a strong sense of
          belonging through mountain biking in a team-first environment.
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
          <h2>More than just riding</h2>
          <p>
            GRiT is about confidence, mentorship, friendship, and encouragement. It is
            a welcoming space where girls can grow as riders and leaders together.
          </p>
        </section>

        <section className={styles.ctaSection}>
          <h2>Come ride with us</h2>
          <div>
            <ButtonLink href={`${baseUrl}#contact`}>Join Edmond United</ButtonLink>
            <ButtonLink href="mailto:edmondok.nica@gmail.com">Ask a Question</ButtonLink>
          </div>
        </section>
      </div>
    </article>
  );
}

export default GritPage;

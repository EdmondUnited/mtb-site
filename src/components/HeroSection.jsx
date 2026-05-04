import ButtonLink from "./ButtonLink";
import styles from "./HeroSection.module.css";

function HeroSection({ hero, location }) {
  return (
    <section id="top" className={styles.hero}>
      <img src={hero.image} alt={hero.imageAlt} />
      <div>
        <div>
          <p>{location}</p>
          <h1>{hero.headline}</h1>
          <p>{hero.supportingText}</p>
          <ButtonLink href={hero.ctaHref}>{hero.ctaLabel}</ButtonLink>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

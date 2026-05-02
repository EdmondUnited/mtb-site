import ButtonLink from "./ButtonLink";
import "./HeroSection.css";

function HeroSection({ hero, location }) {
  return (
    <section id="top" className="hero-section">
      <img className="hero-section__image" src={hero.image} alt={hero.imageAlt} />
      <div className="hero-section__overlay">
        <div className="hero-section__content">
          <p className="hero-section__eyebrow">{location}</p>
          <h1>{hero.headline}</h1>
          <p>{hero.supportingText}</p>
          <ButtonLink href={hero.ctaHref}>{hero.ctaLabel}</ButtonLink>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

import { useEffect, useMemo, useState } from "react";
import ButtonLink from "./ButtonLink";
import styles from "./HeroSection.module.css";

function HeroSection({ hero, location }) {
  const heroImages = useMemo(() => {
    if (Array.isArray(hero.images) && hero.images.length > 0) {
      return hero.images.map((image) => {
        if (typeof image === "string") {
          return { src: image, alt: hero.imageAlt ?? "" };
        }

        return { src: image.src, alt: image.alt ?? hero.imageAlt ?? "" };
      });
    }

    return [{ src: hero.image, alt: hero.imageAlt ?? "" }];
  }, [hero.image, hero.imageAlt, hero.images]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const rotationIntervalMs = hero.rotationIntervalMs ?? 5000;

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [heroImages.length]);

  useEffect(() => {
    if (heroImages.length <= 1 || rotationIntervalMs <= 0) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setCurrentImageIndex((index) => (index + 1) % heroImages.length);
    }, rotationIntervalMs);

    return () => window.clearInterval(intervalId);
  }, [heroImages.length, rotationIntervalMs]);

  const currentImage = heroImages[currentImageIndex] ?? heroImages[0];

  return (
    <section id="top" className={styles.hero}>
      <img src={currentImage.src} alt={currentImage.alt} />
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

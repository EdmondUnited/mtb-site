import SectionShell from "./SectionShell";
import styles from "./LeagueInfoSection.module.css";

function LeagueInfoSection({ league }) {
  return (
    <SectionShell
      id={league.id}
      title={league.title}
      subtitle={league.intro}
      className={styles.league}
    >
      <div>
        <iframe
          src="https://www.youtube-nocookie.com/embed/BNz8znDsm-0"
          title="What Is NICA? | West Virginia Battle at Big Bear | Race Coverage"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </SectionShell>
  );
}

export default LeagueInfoSection;

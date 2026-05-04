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
          title="What Is NICA? | West Virginia Battle at Big Bear | Race Coverage"
          frameBorder="0"
          aria-label="YouTube Video, What Is NICA? | West Virginia Battle at Big Bear | Race Coverage"
          src="https://www.youtube.com/embed/BNz8znDsm-0?embed_config=%7B%22enc%22:%22AXH1ezmRoV_DUoPznYNzb3Xj9rp7I4UmTTmVMZuxYROryx3sD96F6puP6Crz5PBQVNimeO5Ma7R2DoZOuiyf5PZ0jrXrj0huI2m9qMJJ35-_UfH0FEPmg8mDQFWUdV39Zl91KWQQcK5_7blvYsVqCVnz5-azAY1KlztxEm_lED4J58qa%22%7D&amp;errorlinks=1&amp;rct=CpcBAXH1ezk-wNjysHfnPSgkBXLrSln4q0wtQnckXAeNJUiNU2pQNXRcKNfdrdvdp37Gz84S7MgLLRaOUTzGrlWdLAkFoSievBGx0Gn2bnl3rjd_LyAZ0fpw8HzrkNchTTZWVII0hiWuPUOkfWl4-LyZQJzuFp0A2nGMsxT9cUr9nZel9J5dKc21d5JGe9WwOC5Cf7tQkgPcwQ%3D%3D" allowfullscreen=""
          allowFullScreen
        ></iframe>
      </div>
    </SectionShell>
  );
}

export default LeagueInfoSection;

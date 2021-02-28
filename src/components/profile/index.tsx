import { useChallenges } from "../../hooks";

import styles from "../../styles/components/profile.module.scss";

export default function Profile() {
  const { level } = useChallenges();

  return (
    <div className={styles.profileContainer}>
      <img
        src="https://avatars.githubusercontent.com/u/24769178?s=460&u=12538dade17efe7ff80355a4c3dddc45233bba7a&v=4"
        alt="Davi Pereira"
      />
      <div>
        <strong>Davi Pereira</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}

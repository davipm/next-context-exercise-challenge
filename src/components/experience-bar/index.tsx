import { useChallenges } from "@/hooks/index";

import styles from "@/styles/components/experience-bar.module.scss";

export default function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useChallenges();

  const percentageNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentageNextLevel}%` }} />
        {currentExperience > 0 && (
          <span
            className={styles.currentExperience}
            style={{ width: `${currentExperience}%` }}
          >
            {currentExperience} xp
          </span>
        )}
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  );
}

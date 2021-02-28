import { useChallenges } from "../../hooks";
import styles from "../../styles/components/levelUpModal.module.scss";

export default function LevelUpModal() {
  const { level, closeLevelUpModal } = useChallenges();

  return (
    <div className={styles.overlay}>
      <div className={styles.content}>
        <header>{level}</header>
        <strong>Congratulations</strong>
        <p>Você alcançou um novo level.</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Close icon" />
        </button>
      </div>
    </div>
  );
}

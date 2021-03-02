import { useChallenges } from "@/hooks/index";
import styles from "@/styles/components/level-up-modal.module.scss";

export default function LevelUpModal() {
  const { level, closeLevelUpModal } = useChallenges();

  return (
    <div className={styles.overlay}>
      <div className={styles.content}>
        <header>{level}</header>
        <strong>Congratulations</strong>
        <p>You have reached a new level.</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Close icon" />
        </button>
      </div>
    </div>
  );
}

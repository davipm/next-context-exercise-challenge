import { useChallenges } from "@/hooks/index";

import styles from "@/styles/components/completed-challenges.module.scss";

export default function CompletedChallenges() {
  const { challengeCompleted } = useChallenges();

  return (
    <div className={styles.completedChallenges}>
      <span>Complete challenges</span>
      <span>{challengeCompleted}</span>
    </div>
  );
}

import { useCountdown, useChallenges } from "@/hooks/index";

import styles from "@/styles/components/challenge-box.module.scss";

export default function ChallengeBox() {
  const { resetCountdown } = useCountdown();
  const {
    activeChallenge,
    completeChallenge,
    resetChallenge,
  } = useChallenges();

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <div className={styles.challengeContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Win {activeChallenge.amount} xp</header>

          <main>
            {activeChallenge.type === "body" ? (
              <img src="/icons/body.svg" alt="Body" />
            ) : (
              <img src="/icons/eye.svg" alt="eye" />
            )}
            <strong>Novo Desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
              onClick={handleChallengeFailed}
            >
              I failed
            </button>
            <button
              type="button"
              className={styles.challengeSucceededButton}
              onClick={handleChallengeSucceeded}
            >
              I completed
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>End a cycle to receive a challenge</strong>
          <p>
            <img src="/icons/level-up.svg" alt="Level up" />
            Level up by completing the challenges.
          </p>
        </div>
      )}
    </div>
  );
}

import cx from "classnames";

import { useCountdown } from "@/hooks/index";

import styles from "../../styles/components/countdown.module.scss";

export default function Countdown() {
  const {
    isActive,
    hasFinished,
    resetCountdown,
    startCountdown,
    minutes,
    seconds,
  } = useCountdown();

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  return (
    <>
      <div className={styles.countdown}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled className={styles.startCycleButton}>
          Ciclo encerrado
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              className={cx(
                styles.startCycleButton,
                styles.startCycleButtonActive
              )}
              onClick={resetCountdown}
            >
              Abandonar ciclo
            </button>
          ) : (
            <button
              type="button"
              className={styles.startCycleButton}
              onClick={startCountdown}
            >
              Iniciar um ciclo
            </button>
          )}
        </>
      )}
    </>
  );
}

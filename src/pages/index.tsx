import Head from "next/head";
import styles from "../styles/pages/home.module.scss";

import Profile from "../components/profile";
import ChallengesProvider from "../contexts/challenges";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home({
  challengesCompleted,
  currentExperience,
  level,
}: HomeProps) {
  return (
    <ChallengesProvider
      level={level}
      challengesCompleted={challengesCompleted}
      currentExperience={currentExperience}
    >
      <div>
        <main className={styles.container}>
          <Head>
            <title>Exercise App</title>
          </Head>

          <div />

          <section>
            <div>
              <Profile />
            </div>
          </section>
        </main>
      </div>
    </ChallengesProvider>
  );
}

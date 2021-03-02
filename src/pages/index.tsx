import Head from "next/head";
import { GetServerSideProps } from "next";

import Profile from "@/components/profile";
import ChallengesProvider from "@/contexts/challenges";
import ExperienceBar from "@/components/experience-bar";
import CompletedChallenges from "@/components/completed-challenges";

import styles from "@/styles/pages/home.module.scss";

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

          <ExperienceBar />

          <section>
            <div>
              <Profile />
              <CompletedChallenges />
            </div>
          </section>
        </main>
      </div>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { level, currentExperience, challengesCompleted } = req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};

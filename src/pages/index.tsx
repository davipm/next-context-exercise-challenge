import Head from "next/head";

import Profile from "@/components/profile";
import ChallengesProvider from "@/contexts/challenges";
import ExperienceBar from "@/components/experience-bar";

import styles from "@/styles/pages/home.module.scss";
import { GetServerSideProps } from "next";

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

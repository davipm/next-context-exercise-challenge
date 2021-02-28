import { useState, useEffect, createContext, ReactNode } from "react";
import Cookies from "js-cookie";

import challenges from "../../../challenges.json";
import LevelUpModal from "../../components/level-up-modal";

interface Challenge {
  type: "body" | "eye";
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number;
  challengeCompleted: number;
  currentExperience: number;
  experienceToNextLevel: number;
  activeChallenge: Challenge;
  completeChallenge: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  closeLevelUpModal: () => void;
}

interface ChallengeProviderProps {
  children: ReactNode;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export default function ChallengesProvider({
  children,
  ...rest
}: ChallengeProviderProps) {
  const [level, setLevel] = useState(rest.level ?? 1);
  const [currentExperience, setCurrentExperience] = useState(rest.level ?? 1);
  const [challengeCompleted, setChallengeCompleted] = useState(rest.level ?? 1);
  const [activeChallenge, setActiveChallenge] = useState(null);
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  useEffect(() => {
    Cookies.set("level", String(level));
    Cookies.set("currentExperience", String(currentExperience));
    Cookies.set("challengesCompleted", String(challengeCompleted));
  }, [level, currentExperience, challengeCompleted]);

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge as Challenge);

    new Audio("/notification.mp3").play();

    if (Notification.permission === "granted") {
      new Notification("New Challenge  🎉", {
        body: `Amount ${challenge.amount} of xp!`,
        silent: false,
      });
    }
  }

  function levelUp() {
    setLevel(level + 1);
    setIsLevelUpModalOpen(true);
  }

  function closeLevelUpModal() {
    setIsLevelUpModalOpen(false);
  }

  function completeChallenge() {
    if (!activeChallenge) return;

    const { amount } = activeChallenge;
    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setChallengeCompleted(challengeCompleted + 1);
    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        challengeCompleted,
        currentExperience,
        experienceToNextLevel,
        activeChallenge,
        closeLevelUpModal,
        completeChallenge,
        resetChallenge,
        startNewChallenge,
      }}
    >
      {children}
      {isLevelUpModalOpen && <LevelUpModal />}
    </ChallengesContext.Provider>
  );
}

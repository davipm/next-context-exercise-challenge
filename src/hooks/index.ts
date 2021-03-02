import { useContext } from "react";
import { ChallengesContext } from "@/contexts/challenges";
import { CountdownContext } from "@/contexts/countdown";

export function useChallenges() {
  return useContext(ChallengesContext);
}

export function useCountdown() {
  return useContext(CountdownContext);
}

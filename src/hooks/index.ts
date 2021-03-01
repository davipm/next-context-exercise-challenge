import { useContext } from "react";
import { ChallengesContext } from "@/contexts/challenges";

export function useChallenges() {
  return useContext(ChallengesContext);
}

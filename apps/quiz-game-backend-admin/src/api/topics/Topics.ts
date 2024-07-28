import { Questions } from "../questions/Questions";
import { QuizPackages } from "../quizPackages/QuizPackages";

export type Topics = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  packageId: string | null;
  questionsItems?: Array<Questions>;
  quizPackage?: QuizPackages | null;
  topicQuizPackage: string | null;
  updatedAt: Date;
};

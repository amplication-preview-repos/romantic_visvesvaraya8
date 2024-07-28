import { QuizPackages as TQuizPackages } from "../api/quizPackages/QuizPackages";

export const QUIZPACKAGES_TITLE_FIELD = "name";

export const QuizPackagesTitle = (record: TQuizPackages): string => {
  return record.name?.toString() || String(record.id);
};

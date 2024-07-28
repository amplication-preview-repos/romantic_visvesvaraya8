import { Questions as TQuestions } from "../api/questions/Questions";

export const QUESTIONS_TITLE_FIELD = "correctAnswer";

export const QuestionsTitle = (record: TQuestions): string => {
  return record.correctAnswer?.toString() || String(record.id);
};

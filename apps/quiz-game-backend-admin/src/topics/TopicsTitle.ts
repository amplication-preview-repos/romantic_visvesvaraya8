import { Topics as TTopics } from "../api/topics/Topics";

export const TOPICS_TITLE_FIELD = "name";

export const TopicsTitle = (record: TTopics): string => {
  return record.name?.toString() || String(record.id);
};

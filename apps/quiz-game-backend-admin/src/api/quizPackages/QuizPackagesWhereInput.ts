import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LobbiesListRelationFilter } from "../lobbies/LobbiesListRelationFilter";
import { TopicsListRelationFilter } from "../topics/TopicsListRelationFilter";

export type QuizPackagesWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  lobbiesItems?: LobbiesListRelationFilter;
  name?: StringNullableFilter;
  topicsItems?: TopicsListRelationFilter;
};

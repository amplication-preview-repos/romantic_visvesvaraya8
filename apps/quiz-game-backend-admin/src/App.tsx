import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { LobbiesList } from "./lobbies/LobbiesList";
import { LobbiesCreate } from "./lobbies/LobbiesCreate";
import { LobbiesEdit } from "./lobbies/LobbiesEdit";
import { LobbiesShow } from "./lobbies/LobbiesShow";
import { QuizPackagesList } from "./quizPackages/QuizPackagesList";
import { QuizPackagesCreate } from "./quizPackages/QuizPackagesCreate";
import { QuizPackagesEdit } from "./quizPackages/QuizPackagesEdit";
import { QuizPackagesShow } from "./quizPackages/QuizPackagesShow";
import { QuestionsList } from "./questions/QuestionsList";
import { QuestionsCreate } from "./questions/QuestionsCreate";
import { QuestionsEdit } from "./questions/QuestionsEdit";
import { QuestionsShow } from "./questions/QuestionsShow";
import { TopicsList } from "./topics/TopicsList";
import { TopicsCreate } from "./topics/TopicsCreate";
import { TopicsEdit } from "./topics/TopicsEdit";
import { TopicsShow } from "./topics/TopicsShow";
import { UserLobbiesList } from "./userLobbies/UserLobbiesList";
import { UserLobbiesCreate } from "./userLobbies/UserLobbiesCreate";
import { UserLobbiesEdit } from "./userLobbies/UserLobbiesEdit";
import { UserLobbiesShow } from "./userLobbies/UserLobbiesShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"QuizGameBackend"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Lobbies"
          list={LobbiesList}
          edit={LobbiesEdit}
          create={LobbiesCreate}
          show={LobbiesShow}
        />
        <Resource
          name="QuizPackages"
          list={QuizPackagesList}
          edit={QuizPackagesEdit}
          create={QuizPackagesCreate}
          show={QuizPackagesShow}
        />
        <Resource
          name="Questions"
          list={QuestionsList}
          edit={QuestionsEdit}
          create={QuestionsCreate}
          show={QuestionsShow}
        />
        <Resource
          name="Topics"
          list={TopicsList}
          edit={TopicsEdit}
          create={TopicsCreate}
          show={TopicsShow}
        />
        <Resource
          name="UserLobbies"
          list={UserLobbiesList}
          edit={UserLobbiesEdit}
          create={UserLobbiesCreate}
          show={UserLobbiesShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;

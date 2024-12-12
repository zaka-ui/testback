import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { ProjectList } from "./project/ProjectList";
import { ProjectCreate } from "./project/ProjectCreate";
import { ProjectEdit } from "./project/ProjectEdit";
import { ProjectShow } from "./project/ProjectShow";
import { KeywordEntryList } from "./keywordEntry/KeywordEntryList";
import { KeywordEntryCreate } from "./keywordEntry/KeywordEntryCreate";
import { KeywordEntryEdit } from "./keywordEntry/KeywordEntryEdit";
import { KeywordEntryShow } from "./keywordEntry/KeywordEntryShow";
import { SearchResultList } from "./searchResult/SearchResultList";
import { SearchResultCreate } from "./searchResult/SearchResultCreate";
import { SearchResultEdit } from "./searchResult/SearchResultEdit";
import { SearchResultShow } from "./searchResult/SearchResultShow";
import { EditHistoryList } from "./editHistory/EditHistoryList";
import { EditHistoryCreate } from "./editHistory/EditHistoryCreate";
import { EditHistoryEdit } from "./editHistory/EditHistoryEdit";
import { EditHistoryShow } from "./editHistory/EditHistoryShow";
import { httpAuthProvider } from "./auth-provider/ra-auth-http";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"user"}
        dataProvider={dataProvider}
        authProvider={httpAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Project"
          list={ProjectList}
          edit={ProjectEdit}
          create={ProjectCreate}
          show={ProjectShow}
        />
        <Resource
          name="KeywordEntry"
          list={KeywordEntryList}
          edit={KeywordEntryEdit}
          create={KeywordEntryCreate}
          show={KeywordEntryShow}
        />
        <Resource
          name="SearchResult"
          list={SearchResultList}
          edit={SearchResultEdit}
          create={SearchResultCreate}
          show={SearchResultShow}
        />
        <Resource
          name="EditHistory"
          list={EditHistoryList}
          edit={EditHistoryEdit}
          create={EditHistoryCreate}
          show={EditHistoryShow}
        />
      </Admin>
    </div>
  );
};

export default App;

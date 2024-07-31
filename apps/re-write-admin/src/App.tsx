import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { WebPageList } from "./webPage/WebPageList";
import { WebPageCreate } from "./webPage/WebPageCreate";
import { WebPageEdit } from "./webPage/WebPageEdit";
import { WebPageShow } from "./webPage/WebPageShow";
import { FormInputList } from "./formInput/FormInputList";
import { FormInputCreate } from "./formInput/FormInputCreate";
import { FormInputEdit } from "./formInput/FormInputEdit";
import { FormInputShow } from "./formInput/FormInputShow";
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
        title={"ReWrite"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="WebPage"
          list={WebPageList}
          edit={WebPageEdit}
          create={WebPageCreate}
          show={WebPageShow}
        />
        <Resource
          name="FormInput"
          list={FormInputList}
          edit={FormInputEdit}
          create={FormInputCreate}
          show={FormInputShow}
        />
      </Admin>
    </div>
  );
};

export default App;

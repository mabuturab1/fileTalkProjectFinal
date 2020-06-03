import React, { useState } from "react";
// import logo from "./logo.svg";
import HomePage from "./containers/homePage/HomePage";
import FileTalk from "./containers/fileTalk/FileTalk";
import SignIn from "./containers/authentication/signin/SignInPage";
import SignUp from "./containers/authentication/signup/SignUpPage";
import "./App.scss";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import OrderSubscriptionPage from "./containers/orderSubscriptionPage/OrderSubscriptionPage";
import InvoicePage from "./containers/invoicePage/InvoicePage";
import { routes } from "./interfaces/routes";

import AuthContext from "./context/authContext";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const setAuthenticationStatus = (auth: boolean) => {
    setAuthenticated(auth);
  };
  return (
    <AuthContext.Provider
      value={{
        authenticated: authenticated,
        setAuthenticated: setAuthenticationStatus,
      }}
    >
      <div className="App">
        <Router>
          <Switch>
            <Route
              path={routes.signIn}
              render={(props) => (
                <SignIn {...props} setAuthStatus={setAuthenticationStatus} />
              )}
            />

            <Route
              path={routes.signUp}
              render={(props) => (
                <SignUp {...props} setAuthStatus={setAuthenticationStatus} />
              )}
            />

            <Route path={routes.fileTalkMainPage} component={FileTalk} />
            <Route
              path={routes.orderSubscriptionPage}
              component={OrderSubscriptionPage}
            />
            <Route path={routes.invoicePage} component={InvoicePage} />
            <Route path={routes.mainPage} component={HomePage} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </div>
    </AuthContext.Provider>
  );
}

export default App;

import React from "react";

const authContext = React.createContext({
  authenticated: false,

  setAuthenticated: (val: boolean) => {},
});
export default authContext;

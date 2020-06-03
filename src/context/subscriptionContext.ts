import React from "react";
export enum CurrentPackage {
  Free,
  Premium,
}

const subscriptionContext = React.createContext({
  billingAnually: true,
  defaultPackage: CurrentPackage.Free,

  isAnnualBilling: (annualBilling: boolean) => {},
  changeCurrentPackage: (currentPackage: CurrentPackage) => {},
});
export default subscriptionContext;

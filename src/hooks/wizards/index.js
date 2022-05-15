import React, { useReducer } from "react";

export const WizardContext = React.createContext();
export const ADD_WIZARD_DATA = "ADD_WIZARD_DATA";
export const RESET_WIZARD_DATA = "RESET_WIZARD_DATA";

const defaultData = {
  data: {
    packages: [],
    selectedPackage: null,
    values: {
      name: "",
      age: "",
      live: "HKD",
      package: null,
    },
    packagePremium: null,
  },
};
const reducer = (state, action) => {
  switch (action.type) {
    case ADD_WIZARD_DATA:
      return { ...state, data: action.payload };
    case RESET_WIZARD_DATA:
      return { ...defaultData };
    default:
      return state;
  }
};

export const WizardContextState = (props) => {
  const [wizardState, dispatch] = useReducer(reducer, defaultData);

  return (
    <WizardContext.Provider value={{ dispatch, wizardState }}>
      {props.children}
    </WizardContext.Provider>
  );
};

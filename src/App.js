import { useContext } from "react";
import { Routes as Switch, Route, Navigate } from "react-router-dom";
import "./App.scss";
import ProgressBar from "./components/progress-bar";
import { LIST_OF_PAGES_PATH } from "./constants/navigation";
import ProtectedRoute from "./guards/route";
import { WizardContext } from "./hooks/wizards";
import Error from "./pages/error";
import Step1 from "./pages/step1";
import Step2 from "./pages/step2";
import Step3 from "./pages/step3";

function App() {
  const { wizardState } = useContext(WizardContext);
  return (
    <div className="app">
      <ProgressBar />
      <div className="content">
        <Switch>
          <Route path="/" element={<Navigate to="wizards/step1" replace />} />
          <Route path="/wizards">
            <Route path={LIST_OF_PAGES_PATH.step1} element={<Step1 />} />
            <Route path={LIST_OF_PAGES_PATH.step2} element={<Step2 />} />
            <Route
              element={
                <ProtectedRoute
                  condition={
                    wizardState.data.values.name !== "" &&
                    wizardState.data.values.live !== "" &&
                    wizardState.data.selectedPackage !== "" &&
                    wizardState.data.packagePremium !== ""
                  }
                ></ProtectedRoute>
              }
            >
              <Route path={LIST_OF_PAGES_PATH.step3} element={<Step3 />} />
            </Route>
            <Route path={LIST_OF_PAGES_PATH.step3} element={<Error />} />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;

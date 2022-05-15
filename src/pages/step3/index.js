import React, { useContext, useEffect, useState } from "react";
import MainHeader from "../../components/main-header";
import PageBaseStructure from "../../components/page-base-structure";
import PageNavigator from "../../components/page-navigator";
import useNavigation from "../../hooks/navigation";
import ConstantPath from "../../constants/navigation";
import { RESET_WIZARD_DATA, WizardContext } from "../../hooks/wizards";
import SummaryBox from "../../components/summary-box";
import { CURRENCY_TO_PLACES } from "../../constants/navigation/places";

export default function Step3() {
  const { goTo } = useNavigation();
  const { dispatch, wizardState } = useContext(WizardContext);
  const [data, setData] = useState([]);

  function buyPolicy() {
    goTo(ConstantPath.wizards.step1);
    dispatch({
      type: RESET_WIZARD_DATA,
    });
  }

  useEffect(() => {
    let tempData = [];
    tempData.push({
      key: "Name",
      value: wizardState.data.values.name,
    });
    tempData.push({
      key: "Where do you live",
      value: CURRENCY_TO_PLACES[wizardState.data.values.live],
    });
    tempData.push({
      key: "Package",
      value: wizardState.data.selectedPackage,
    });
    tempData.push({
      key: "Premium",
      value: wizardState.data.packagePremium,
    });

    setData(tempData);
  }, [wizardState]);
  return (
    <PageBaseStructure>
      <div className="main-page-structure">
        <div className="main-section">
          <MainHeader content="Summary" />
          <SummaryBox data={data} />
        </div>

        <PageNavigator
          left={{
            title: "Back",
            onClick: () => goTo(ConstantPath.wizards.step2),
          }}
          right={{
            title: "Buy",
            onClick: buyPolicy,
          }}
        />
      </div>
    </PageBaseStructure>
  );
}

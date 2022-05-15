import React from "react";
import Button from "../../components/button";
import Description from "../../components/description";
import MainHeader from "../../components/main-header";
import PageBaseStructure from "../../components/page-base-structure";
import ConstantPath from "../../constants/navigation";
import useNavigation from "../../hooks/navigation";

export default function Step1() {
  const { goTo } = useNavigation();
  return (
    <PageBaseStructure>
      <div className="main-page-structure">
        <div className="main-section">
          <MainHeader content="Hello There" />
          <Description content="Let's buy some insurance. It is going to take only a few steps" />
        </div>

        <Button
          className="primary-btn btn-block"
          onClick={() => goTo(ConstantPath.wizards.step2)}
        >
          Start
        </Button>
      </div>
    </PageBaseStructure>
  );
}

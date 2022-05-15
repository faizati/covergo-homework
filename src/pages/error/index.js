import React from "react";
import Button from "../../components/button";
import Description from "../../components/description";
import MainHeader from "../../components/main-header";
import PageBaseStructure from "../../components/page-base-structure";
import useNavigation from "../../hooks/navigation";
import ConstantPath from "../../constants/navigation";

export default function Error() {
  const { goTo } = useNavigation();
  return (
    <PageBaseStructure>
      <div className="main-page-structure">
        <div className="main-section">
          <MainHeader content="Oops" />
          <Description content="Your age is over our accepted limit!" />
          <Description content="We are sorry but we cannot insure you now" />
        </div>

        <Button
          className="primary-btn btn-block"
          onClick={() => goTo(ConstantPath.wizards.step1)}
        >
          Ok :(
        </Button>
      </div>
    </PageBaseStructure>
  );
}

import React, { useState, useEffect, useContext } from "react";
import Input from "../../components/input";
import MainHeader from "../../components/main-header";
import PageNavigator from "../../components/page-navigator";
import Radio from "../../components/radio";
import Select from "../../components/select";
import SubHeader from "../../components/sub-header";
import { useForm } from "../../hooks/forms";
import useNavigation from "../../hooks/navigation";
import { ADD_WIZARD_DATA, WizardContext } from "../../hooks/wizards";
import { formatCurrency } from "../../utils/currency";
import { GetPackage } from "../../utils/package";
const getPackage = new GetPackage();

export default function Step2() {
  const { dispatch, wizardState } = useContext(WizardContext);
  const { goTo, paths } = useNavigation();
  const [options] = useState([
    { label: "Hong Kong", value: "HKD" },
    { label: "USA", value: "USD" },
    { label: "Australia", value: "AUD" },
  ]);

  const [packagePremium, setPackagePremium] = useState(null);

  const [packages, setPackages] = useState([]);
  const [packagesFormatted, setPackagesFormatted] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const { values, handleChange, setFullData } = useForm({
    name: "",
    age: "",
    live: "HKD",
    package: null,
  });

  function checkingInsurance() {
    if (values.age > 100) {
      goTo(paths.wizards.error);
    } else {
      if (
        values.age &&
        values.live &&
        values.name &&
        selectedPackage &&
        packagePremium
      ) {
        dispatch({
          type: ADD_WIZARD_DATA,
          payload: {
            packages,
            values,
            packagePremium,
            selectedPackage,
          },
        });

        goTo(paths.wizards.step3);
      }
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    checkingInsurance();
  }

  function handleFormattedPackages(listOfPackages, currCode) {
    let firstRate = listOfPackages[0];
    let tempPackagesFormatted = listOfPackages.reduce((finalPackages, pckg) => {
      if (pckg.label != firstRate.label) {
        let diff = pckg.value - firstRate.value;
        let percentage = (diff / firstRate.value) * 100;
        finalPackages.push({
          label: `${pckg.label} (+${formatCurrency(
            currCode,
            diff
          )} ${percentage}%)`,
          value: pckg.label,
        });
      } else
        finalPackages.push({
          label: pckg.label,
          value: pckg.label,
        });

      return finalPackages;
    }, []);

    setPackagesFormatted(tempPackagesFormatted);
  }

  useEffect(() => {
    setPackagePremium(formatCurrency(values.live, 100));
    if (values.live && values.age) {
      setPackages(getPackage.getPackage(values.live, values.age));
    }
  }, [values.live, values.age]);

  useEffect(() => {
    if (values.package) {
      setSelectedPackage(values.package);
    }
  }, [values.package, setSelectedPackage]);

  useEffect(() => {
    if (packages.length > 0) {
      handleFormattedPackages(packages, values.live);
      if (selectedPackage) {
        let tempSelectedPackage = packages.reduce((finalAmount, pckg) => {
          if (selectedPackage === pckg.label) {
            finalAmount = pckg.value;
          }
          return finalAmount;
        }, 0);
        setPackagePremium(formatCurrency(values.live, tempSelectedPackage));
      }
    }
  }, [packages]);

  useEffect(() => {
    if (selectedPackage) {
      let tempSelectedPackage = packages.reduce((finalAmount, pckg) => {
        if (selectedPackage === pckg.label) {
          finalAmount = pckg.value;
        }
        return finalAmount;
      }, 0);
      setPackagePremium(formatCurrency(values.live, tempSelectedPackage));
    }
  }, [selectedPackage]);

  useEffect(() => {
    setFullData(wizardState.data.values);
  }, [wizardState]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="white-box">
        <div className="pages-container">
          <div className="main-page-structure">
            <div className="main-section">
              <MainHeader content="Tell us about yourself" />
              <Input
                label="Name"
                placeholder="Your name"
                type="text"
                value={values.name}
                onChange={handleChange}
                name="name"
              />
              <Input
                label="Age"
                placeholder="Your age"
                type="number"
                value={values.age}
                onChange={handleChange}
                name="age"
                id="age"
              />

              <Select
                name="live"
                label="Where do you live"
                options={options}
                value={values.live}
                onChange={handleChange}
              />

              {values.age && values.live && packagesFormatted.length > 0 && (
                <Radio
                  options={packagesFormatted}
                  name="package"
                  value={values.package}
                  onChange={handleChange}
                />
              )}
              {selectedPackage && (
                <SubHeader content={`Your premiums is : ${packagePremium}`} />
              )}
            </div>
            <PageNavigator
              left={{ title: "Back", onClick: () => goTo(paths.wizards.step1) }}
              right={{ title: "Next", onClick: checkingInsurance }}
            />
          </div>
        </div>
      </div>
    </form>
  );
}

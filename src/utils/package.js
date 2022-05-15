const PACKAGE_START = 10;
const PACKAGE_RATE_BY_CURRENCY = {
  HKD: 1,
  AUD: 2,
  USD: 3,
};

const LIST_OF_PACKAGE = {
  STANDARD: {
    title: "Standard",
    rate: 0,
  },
  SAFE: {
    title: "Safe",
    rate: 0.5,
  },
  SUPER_SAFE: {
    title: "Supersafe",
    rate: 0.75,
  },
};

export class GetPackage {
  constructor() {
    this.packageStart = PACKAGE_START;
    this.packageRateByCurrency = PACKAGE_RATE_BY_CURRENCY;
    this.listOfPackage = LIST_OF_PACKAGE;
    this.rateStart = PACKAGE_START;
  }

  calculateRateStart(currCode) {
    return this.packageStart * this.packageRateByCurrency[currCode];
  }

  getPackagePrice(rateStart, pckg, age) {
    let packageRate = {
      label: pckg.title,
      value:
        pckg.rate > 0
          ? (rateStart * pckg.rate + rateStart) * age
          : rateStart * age,
    };

    return packageRate;
  }

  getPackage(currCode, age) {
    this.rateStart = this.calculateRateStart(currCode);
    let listOfPackage = Object.keys(this.listOfPackage).map((key) => {
      return this.getPackagePrice(this.rateStart, this.listOfPackage[key], age);
    });
    return listOfPackage;
  }
}

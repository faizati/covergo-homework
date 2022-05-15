const wizardsPath = "/wizards";

export const LIST_OF_PAGES_PATH = {
  error: "error",
  step1: "step1",
  step2: "step2",
  step3: "step3",
};
export default {
  wizards: {
    step1: `${wizardsPath}/${LIST_OF_PAGES_PATH.step1}`,
    step2: `${wizardsPath}/${LIST_OF_PAGES_PATH.step2}`,
    step3: `${wizardsPath}/${LIST_OF_PAGES_PATH.step3}`,
    error: `${wizardsPath}/${LIST_OF_PAGES_PATH.step4}`,
  },
};

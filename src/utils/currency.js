function getNavigatorLanguage() {
  return navigator.languages && navigator.languages.length
    ? navigator.languages[0]
    : navigator.userLanguage ||
        navigator.language ||
        navigator.browserLanguage ||
        "en";
}

export function formatCurrency(currencyFormat, amount) {
  let formatted = new Intl.NumberFormat(getNavigatorLanguage(), {
    style: "currency",
    currency: currencyFormat,
  }).format(amount);
  return formatted;
}

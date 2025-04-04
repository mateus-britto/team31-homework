// Currency converter

// Variables
const euroExchangeRateApiUrl =
  "https://v6.exchangerate-api.com/v6/ece1faae718b5e53f9a037c5/latest/EUR/";
const dkkExchangeRateApiUrl =
  "https://v6.exchangerate-api.com/v6/ece1faae718b5e53f9a037c5/latest/DKK/";
const selectCurrencyFrom = document.getElementById("currency-from-selector");
const selectCurrencyTo = document.getElementById("currency-to-selector");
const currencyFrom = document.getElementById("from");
const currencyTo = document.getElementById("to");
const lastUpdateDate = document.getElementById("exchange-date");

// Fetching the data
async function fetchCurrency() {
  try {
    // Fetch both URLs
    const [data1, data2] = await Promise.all([
      fetchData(euroExchangeRateApiUrl),
      fetchData(dkkExchangeRateApiUrl),
    ]);

    // Store conversion rates
    conversionRates = data1.conversion_rates;

    getCurrencies(data1.conversion_rates, selectCurrencyFrom);
    getCurrencies(data2.conversion_rates, selectCurrencyTo);

    // Get the last updated data
    let formattedTimeUtc = data1.time_last_update_utc.replace(/\+0000$/, "");
    lastUpdateDate.innerHTML = formattedTimeUtc;

    console.log(data1, data2);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
}

await fetchCurrency();

// Helper function to get the currencies form the API
function getCurrencies(currencyData, elementToAppend) {
  for (key in currencyData) {
    const option = document.createElement("option");
    option.setAttribute("class", "option");
    option.value = key;
    option.textContent = key;
    elementToAppend.appendChild(option);
  }
}

// Helper function to fetch data from a URL
async function fetchData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error fetching data from ${url}: ${response.status}`);
  }
  return response.json();
}

// Function to convert currency
function convertCurrency(amount, fromCurrency, toCurrency) {
  if (!conversionRates[fromCurrency] || !conversionRates[toCurrency]) {
    console.log("Invalid currency selected");
    return;
  }

  // Convert to the target currency
  const convertedAmount = (amount / conversionRates[fromCurrency]) * conversionRates[toCurrency];
  return convertedAmount.toFixed(2); // Return the result rounded to 2 decimal places.
}

// Event listeners for conversion
// This event listener ensures that the conversion is updated dynamically as the user types a new amount.
currencyFrom.addEventListener("input", () => {
  const amount = parseFloat(currencyFrom.value);
  const fromCurrency = selectCurrencyFrom.value;
  const ToCurrency = selectCurrencyTo.value;

  if (!isNaN(amount)) {
    const result = convertCurrency(amount, fromCurrency, ToCurrency);
    currencyTo.value = result;
  }
});

// This event listener ensure the conversion is recalculated if the user changes currency from the dropdown
selectCurrencyFrom.addEventListener("change", () => {
  const amount = parseFloat(currencyFrom.value);
  const fromCurrency = selectCurrencyFrom.value;
  const toCurrency = selectCurrencyTo.value;

  if (!isNaN(amount)) {
    const result = convertCurrency(amount, fromCurrency, toCurrency);
    currencyTo.value = result;
  }
});

// This event listener ensure the conversion is recalculated if the user changes currency from the dropdown
selectCurrencyTo.addEventListener("change", () => {
  const amount = parseFloat(currencyFrom.value);
  const fromCurrency = selectCurrencyFrom.value;
  const toCurrency = selectCurrencyTo.value;

  if (!isNaN(amount)) {
    const result = convertCurrency(amount, fromCurrency, toCurrency);
    currencyTo.value = result;
  }
});

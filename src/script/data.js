function fetchModel() {
  return [
    {
      field: "Symbol",
      type: String,
      visible: true,
    },
    {
      field: "BidLP",
      name: "Bid LP",
      type: undefined,
      visible: true,
    },
    {
      field: "Bid",
      type: Number,
      visible: true,
    },
    {
      field: "AskLP",
      name: "Ask LP",
      type: undefined,
      visible: true,
    },
    {
      field: "Ask",
      type: Number,
      visible: true,
    },
    {
      field: "Spread",
      type: Number,
      visible: true,
    },
  ];
}

function fetchBiggerData() {
  return [
    { Symbol: "AUD/CAD", Bid: "0.93099", Ask: "0.93240", Spread: "14.1" },
    { Symbol: "AUD/CHF", Bid: "0.68366", Ask: "0.68487", Spread: "12.1" },
    { Symbol: "AUD/HKD", Bid: "5.81043", Ask: "5.81985", Spread: "94.2" },
    { Symbol: "AUD/JPY", Bid: "82.377", Ask: "82.527", Spread: "15.0" },
    { Symbol: "AUD/NZD", Bid: "1.07009", Ask: "1.07109", Spread: "10.0" },
    { Symbol: "AUD/SGD", Bid: "1.01023", Ask: "1.01274", Spread: "25.1" },
    { Symbol: "AUD/USD", Bid: "0.74816", Ask: "0.74918", Spread: "10.2" },
    { Symbol: "CAD/CHF", Bid: "0.73401", Ask: "0.73490", Spread: "8.9" },
    { Symbol: "CAD/HKD", Bid: "6.23834", Ask: "6.24497", Spread: "66.3" },
    { Symbol: "CAD/JPY", Bid: "88.444", Ask: "88.527", Spread: "8.3" },
    { Symbol: "CAD/SGD", Bid: "1.08463", Ask: "1.08672", Spread: "20.9" },
    { Symbol: "CHF/HKD", Bid: "8.49555", Ask: "8.50118", Spread: "56.3" },
    { Symbol: "CHF/JPY", Bid: "120.462", Ask: "120.505", Spread: "4.3" },
    { Symbol: "CHF/ZAR", Bid: "15.53529", Ask: "15.62913", Spread: "938.4" },
    { Symbol: "EUR/AUD", Bid: "1.58493", Ask: "1.58693", Spread: "20.0" },
    { Symbol: "EUR/CAD", Bid: "1.47762", Ask: "1.47856", Spread: "9.4" },
    { Symbol: "EUR/CHF", Bid: "1.08499", Ask: "1.08599", Spread: "10.0" },
    { Symbol: "EUR/CZK", Bid: "25.72075", Ask: "25.77075", Spread: "500.0" },
    { Symbol: "EUR/DKK", Bid: "7.43589", Ask: "7.43831", Spread: "24.2" },
    { Symbol: "EUR/GBP", Bid: "0.85367", Ask: "0.85517", Spread: "15.0" },
    { Symbol: "EUR/HKD", Bid: "9.22061", Ask: "9.22983", Spread: "92.2" },
    { Symbol: "EUR/HUF", Bid: "355.185", Ask: "355.870", Spread: "68.5" },
    { Symbol: "EUR/JPY", Bid: "130.694", Ask: "130.844", Spread: "15.0" },
    { Symbol: "EUR/NOK", Bid: "10.27610", Ask: "10.32610", Spread: "500.0" },
    { Symbol: "EUR/NZD", Bid: "1.69691", Ask: "1.69891", Spread: "20.0" },
    { Symbol: "EUR/PLN", Bid: "4.5447", Ask: "4.54830", Spread: "36.0" },
    { Symbol: "EUR/SEK", Bid: "10.16549", Ask: "10.19531", Spread: "298.2" },
    { Symbol: "EUR/SGD", Bid: "1.60314", Ask: "1.60613", Spread: "29.9" },
    { Symbol: "EUR/TRY", Bid: "10.25554", Ask: "10.33691", Spread: "813.7" },
    { Symbol: "EUR/USD", Bid: "1.18726", Ask: "1.18814", Spread: "8.8" },
    { Symbol: "EUR/ZAR", Bid: "16.86115", Ask: "16.96870", Spread: "1075.5" },
    { Symbol: "GBP/AUD", Bid: "1.85552", Ask: "1.85702", Spread: "15.0" },
    { Symbol: "GBP/CAD", Bid: "1.72910", Ask: "1.73060", Spread: "15.0" },
    { Symbol: "GBP/CHF", Bid: "1.26997", Ask: "1.27115", Spread: "11.8" },
    { Symbol: "GBP/HKD", Bid: "10.78839", Ask: "10.80283", Spread: "144.4" },
    { Symbol: "GBP/JPY", Bid: "152.985", Ask: "153.135", Spread: "15.0" },
    { Symbol: "GBP/NZD", Bid: "1.98590", Ask: "1.98790", Spread: "20.0" },
    { Symbol: "GBP/PLN", Bid: "5.31438", Ask: "5.32794", Spread: "135.6" },
    { Symbol: "GBP/SGD", Bid: "1.87573", Ask: "1.87986", Spread: "41.3" },
    { Symbol: "GBP/USD", Bid: "1.38913", Ask: "1.39063", Spread: "15.0" },
    { Symbol: "GBP/ZAR", Bid: "19.72693", Ask: "19.85949", Spread: "1325.6" },
    { Symbol: "HKD/JPY", Bid: "14.17336", Ask: "14.18101", Spread: "76.5" },
    { Symbol: "NZD/CAD", Bid: "0.86953", Ask: "0.87153", Spread: "20.0" },
    { Symbol: "NZD/CHF", Bid: "0.63852", Ask: "0.63989", Spread: "13.7" },
    { Symbol: "NZD/HKD", Bid: "5.42768", Ask: "5.43840", Spread: "107.2" },
    { Symbol: "NZD/JPY", Bid: "76.934", Ask: "77.093", Spread: "15.9" },
    { Symbol: "NZD/SGD", Bid: "0.94369", Ask: "0.94637", Spread: "26.8" },
    { Symbol: "NZD/USD", Bid: "0.69893", Ask: "0.70013", Spread: "12.0" },
    { Symbol: "SGD/CHF", Bid: "0.67580", Ask: "0.67763", Spread: "18.3" },
    { Symbol: "SGD/HKD", Bid: "5.74535", Ask: "5.75288", Spread: "75.3" },
    { Symbol: "SGD/JPY", Bid: "81.427", Ask: "81.591", Spread: "16.4" },
    { Symbol: "TRY/JPY", Bid: "12.643", Ask: "12.759", Spread: "11.6" },
    { Symbol: "USD/CAD", Bid: "1.24393", Ask: "1.24493", Spread: "10.0" },
    { Symbol: "USD/CHF", Bid: "0.91367", Ask: "0.91517", Spread: "15.0" },
    { Symbol: "USD/CNH", Bid: "6.47987", Ask: "6.48337", Spread: "35.0" },
    { Symbol: "USD/CZK", Bid: "21.66580", Ask: "21.71580", Spread: "500.0" },
    { Symbol: "USD/DKK", Bid: "6.25127", Ask: "6.27257", Spread: "213.0" },
    { Symbol: "USD/HKD", Bid: "7.76632", Ask: "7.76832", Spread: "20.0" },
    { Symbol: "USD/HUF", Bid: "298.823", Ask: "299.847", Spread: "102.4" },
    { Symbol: "USD/INR", Bid: "74.335", Ask: "74.585", Spread: "25.0" },
    { Symbol: "USD/JPY", Bid: "110.081", Ask: "110.181", Spread: "10.0" },
    { Symbol: "USD/MXN", Bid: "19.84400", Ask: "19.90400", Spread: "600.0" },
    { Symbol: "USD/NOK", Bid: "8.64823", Ask: "8.69823", Spread: "500.0" },
    { Symbol: "USD/PLN", Bid: "3.82510", Ask: "3.83060", Spread: "55.0" },
    { Symbol: "USD/SAR", Bid: "3.74524", Ask: "3.75524", Spread: "100.0" },
    { Symbol: "USD/SEK", Bid: "8.55699", Ask: "8.58699", Spread: "300.0" },
    { Symbol: "USD/SGD", Bid: "1.35032", Ask: "1.35177", Spread: "14.5" },
    { Symbol: "USD/THB", Bid: "32.469", Ask: "32.660", Spread: "19.1" },
    { Symbol: "USD/TRY", Bid: "8.65438", Ask: "8.67877", Spread: "243.9" },
    { Symbol: "USD/ZAR", Bid: "14.19755", Ask: "14.27755", Spread: "800.0" },
    { Symbol: "ZAR/JPY", Bid: "7.703", Ask: "7.769", Spread: "6.6" },
  ];
}

export { fetchModel, fetchBiggerData };
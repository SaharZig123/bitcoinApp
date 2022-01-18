import { storageService } from "./storageService";
const axios = require("axios");
export const cryptoService = {
  getBitcoinRate,
  getTradeVolume,
};
// Get Bitcoin Rate
async function getBitcoinRate(user) {
  let price = storageService.load("BitcoinRate");
  if (!price) {
    price = await axios.get(
      `https://blockchain.info/tobtc?currency=USD&value=${user.coins}`
    );
    storageService.store("BitcoinRate", price.data);
    return price.data;
  }
  return price;
}

// Charts
async function getTradeVolume() {
  let tradeVolume = storageService.load("TradeVolume");
  if (!tradeVolume) {
    tradeVolume = await axios.get(
      "https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true"
    );
    storageService.store("TradeVolume", tradeVolume.data);
    return tradeVolume.data;
  }
  return tradeVolume;
}

import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x035B4b002066f81eFEf57773c0b4AAde077F4f8B"
);

export default instance;

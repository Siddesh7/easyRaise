import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x8D76379523B0445354c5082c232Db22AD8cfC0e3"
);

export default instance;

import { Coin } from "./Coin";
import { CoinStats } from "./CoinStats";

export interface CoinList {
  coins: Coin[];
  stats: CoinStats;
}

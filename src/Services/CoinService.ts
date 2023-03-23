import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { CoinList } from "../Models/CoinList";
import { coinApiKey } from "../Vault/VeryHiddenKeys";
import { getResponseData, joinUrls } from "./ServiceUtils";

export class CoinService {
  static url = "https://api.coinranking.com/v2";
  static axiosConfig: AxiosRequestConfig = {
    headers: {
      "Content-Type": "application/json",
      "x-access-token": coinApiKey,
    },
  };
  static getList() {
    return axios.get<AxiosResponse<CoinList>>(joinUrls(this.url, "coins"), this.axiosConfig).then(getResponseData);
  }
}

export function useCoinsList() {
  const [list, setList] = useState<CoinList>({
    coins: [],
    stats: {},
  });

  useEffect(() => {
    CoinService.getList().then((response) => {
      setList(response.data);
    });
  }, []);

  return list;
}

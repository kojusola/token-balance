export interface IAddressToken {
  Link: string;
  Usdt: string;
  Dai: string;
  address: string;
}

export interface IAddressData {
  address: string;
}

export type stateContextType = {
  addresses: IAddressData[] | undefined;
  allTokensData: IAddressToken[] | undefined;
  loading: boolean;
  setAllTokenData: (data: IAddressToken[]) => void;
  setAddresses: (data: IAddressData[]) => void;
  setLoading: (data: boolean) => void;
};

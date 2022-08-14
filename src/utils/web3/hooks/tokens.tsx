import { useAppContext } from '../../../context/state';
import { ethers, Contract } from 'ethers';
import { LINK, abi, DAI, USDT } from '../constants';
import { toast } from 'react-toastify';

interface ITokens {
  tokenAddress: string;
  address: string;
  provider: ethers.providers.JsonRpcProvider;
}

export default function useTokens() {
  const { setAllTokenData } = useAppContext();
  const provider = new ethers.providers.JsonRpcProvider(
    process.env.REACT_APP_RPC_URL,
  );
  const getBalance = async (options: ITokens) => {
    const contract = new Contract(options.tokenAddress, abi, options.provider);
    const balance = await contract.balanceOf(options.address);
    const stringBalance: string = balance.toString();
    return stringBalance;
  };

  const getAllTokensBalance = async () => {
    try {
      const allAddress = JSON.parse(localStorage.getItem('addresses') || '[]');
      const allTokensData = await Promise.all(
        allAddress.map(async (address: string) => {
          const data = {
            address,
            Link: await getBalance({
              tokenAddress: LINK,
              provider: provider,
              address: address,
            }),
            Dai: await getBalance({
              tokenAddress: DAI,
              provider: provider,
              address: address,
            }),
            Usdt: await getBalance({
              tokenAddress: USDT,
              provider: provider,
              address: address,
            }),
          };
          return data;
        }),
      );
      setAllTokenData(allTokensData);
      return;
    } catch (err) {
      toast.error('Error fetching tokens');
    }
  };

  return {
    getAllTokensBalance,
  };
}

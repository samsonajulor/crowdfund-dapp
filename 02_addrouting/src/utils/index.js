import { ethers, toBigInt } from 'ethers';
import { rpcUrlsMap, supportedChains } from '../constants';
import { crowdfundContractAddress } from '../constants/addresses';
import crowdFundAbi from '../constants/abis/crowdfund.json';

export const isSupportedChain = (chainId) => supportedChains.includes(Number(chainId));

export const shortenAccount = (account) => `${account.substring(0, 6)}...${account.substring(38)}`;

export const getReadOnlyProvider = (chainId) => {
  return new ethers.JsonRpcProvider(rpcUrlsMap[chainId]);
};

export const getContract = async (address, abi, provider, withWrite) => {
  let signer;
  if (withWrite) signer = await provider.getSigner();

  return new ethers.Contract(address, abi, withWrite ? signer : provider);
};

export const getCrowdfundContract = async (provider, withWrite) => {
  return await getContract(crowdfundContractAddress, crowdFundAbi, provider, withWrite);
};

export const calculateGasMargin = (value) => (toBigInt(value) * toBigInt(120)) / toBigInt(100);

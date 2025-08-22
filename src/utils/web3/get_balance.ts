import { Web3 } from "@kaiachain/web3js-ext";

export const getBalance = async (
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  provider: any,
  account: string
): Promise<string> => {
  const web3 = new Web3(provider);
  
  const balance = await web3.eth.getBalance(account);
  
  // Wei/Peb를 KAIA로 변환 (소수점 4자리)
  const balanceInKAIA = web3.utils.fromWei(balance, 'ether');
  
  return parseFloat(balanceInKAIA).toFixed(4);
};

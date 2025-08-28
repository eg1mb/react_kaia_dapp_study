/*eslint-disable @typescript-eslint/no-explicit-any*/
import { Web3 } from "@kaiachain/web3js-ext";
import type { Transaction } from "../../types/transaction";

export const sendTransaction = async (
  provider: any,
  account: string,
  to: string,
  amount: string
): Promise<string> => {
  const web3 = new Web3(provider);
  
  // KAIA를 Wei 단위로 변환
  const amountInWei = web3.utils.toWei(amount, 'ether');

  const txHash = await web3.eth.sendTransaction({
    from: account,
    to: to,
    value: amountInWei,
    gas: 21000,
  });

  return txHash.transactionHash.toString();
};

export const createTransaction = (
  txHash: string,
  to: string,
  amount: string
): Transaction => {
  return {
    id: Date.now(),
    hash: txHash,
    to,
    amount,
    status: "pending",
    timestamp: new Date().toISOString(),
  };
};

export const checkTransactionStatus = async (
  provider: any,
  txHash: string
): Promise<any> => {
  const web3 = new Web3(provider);
  const receipt = await web3.eth.getTransactionReceipt(txHash);

  return receipt;
};

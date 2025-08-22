export interface Transaction {
  id: number;
  hash: string;
  to: string;
  amount: string;
  status: "pending" | "confirmed";
  timestamp: string;
  gasUsed?: string;
}

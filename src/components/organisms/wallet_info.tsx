import InfoRow from "../molecule/row";
import PlainTextBlock from "../atoms/text/plain_text_block";

interface WalletInfoProps {
  account: string | null;
  balance: string | null;
  network: string | null;
}

export default function WalletInfo({ account, balance, network }: WalletInfoProps) {

  return (
    <div className="wallet-info">
      <PlainTextBlock className="info-title" text="지갑 정보" />
      <InfoRow label="wallet-network" value={network || "N/A"} />
      <InfoRow label="wallet-account" value={account || "N/A"} />
      <InfoRow label="wallet-balance" value={balance || "N/A"} />
    </div>
  );
}

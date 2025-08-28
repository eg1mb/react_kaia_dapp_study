import Button from "../atoms/buttons/button";

interface WalletConnectProps {
  isConnected: boolean;
  isConnecting: boolean;
  onConnect: () => void;
  onDisconnect: () => void;
}

export default function WalletConnect({ 
  isConnected, 
  isConnecting, 
  onConnect, 
  onDisconnect 
}: WalletConnectProps) {

  if (isConnected) {
    return (
      <Button onClick={onDisconnect} className="disconnect-button">
        연결 해제
      </Button>
    );
  }

  return (
    <Button
      onClick={onConnect}
      disabled={isConnecting}
      className="connect-button"
    >
      {isConnecting ? "연결 중..." : "Kaikas 지갑 연결"}
    </Button>
  );
}

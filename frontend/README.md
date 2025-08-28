# Kaia DApp Demo

Kaia 블록체인 네트워크를 위한 데모 dApp입니다. 지갑 연결, 잔액 조회, 트랜잭션 전송 등의 기본 기능을 제공합니다.

## 📋 목차

1. [프로젝트 개요](#프로젝트-개요)
2. [기능](#기능)
3. [기술 스택](#기술-스택)
4. [프로젝트 구조](#프로젝트-구조)
5. [시작하기](#시작하기)
6. [개발 가이드](#개발-가이드)

---

## 🚀 프로젝트 개요

이 프로젝트는 Kaia 블록체인과 상호작용하는 Web3 dApp입니다. 사용자는 지갑을 연결하고, 잔액을 확인하며, 다른 주소로 토큰을 전송할 수 있습니다.

## ✨ 기능

- **지갑 연결**: Kaikas 지갑 연결 및 해제
- **네트워크 자동 추가**: Kaia 테스트넷 자동 추가 기능
- **잔액 조회**: 연결된 지갑의 KAIA 잔액 실시간 표시
- **토큰 전송**: 다른 주소로 KAIA 전송
- **트랜잭션 히스토리**: 전송한 트랜잭션 목록 및 상태 표시
- **반응형 UI**: 모바일 및 데스크톱 환경 지원

## 🛠 기술 스택

- **Frontend**: React 19, TypeScript
- **Build Tool**: Vite
- **Styling**: CSS
- **State Management**: Zustand
- **Web3**: @kaiachain/web3js-ext 2.0.8, Web3.js 4.16.0
- **Router**: React Router 7
- **Linting**: ESLint

## 📁 프로젝트 구조

```
src/
├── components/           # 재사용 가능한 컴포넌트
│   ├── atoms/           # 기본 UI 컴포넌트
│   │   ├── buttons/     # 버튼 컴포넌트들
│   │   ├── inputs/      # 입력 컴포넌트들
│   │   ├── text/        # 텍스트 컴포넌트들
│   │   └── contents/    # 콘텐츠 컴포넌트들
│   ├── molecule/        # 복합 컴포넌트
│   ├── organisms/       # 기능 단위 컴포넌트
│   └── templates/       # 페이지 템플릿
├── store/               # Zustand 상태 관리
│   ├── connection.ts    # 지갑 연결 상태
│   ├── transaction.ts   # 트랜잭션 상태
│   └── error.ts         # 에러 상태
├── utils/               # 유틸리티 함수
│   └── web3/           # Web3 관련 유틸리티
├── types/               # TypeScript 타입 정의
├── configs/             # 설정 파일
└── App.tsx             # 메인 앱 컴포넌트
```

## 🚀 시작하기

### 1. 사전 요구사항

- Node.js 18+
- yarn 또는 npm
- [Kaia Wallet](https://chromewebstore.google.com/detail/kaia-wallet/jblndlipeogpafnldhgmapagcccfchpi) 설치

### 2. 설치 및 실행

```bash
# 저장소 클론 (이미 있는 경우 생략)
git clone <repository-url>
cd kaia-dapp

# 의존성 설치
yarn install

# 개발 서버 시작
yarn dev
```

### 3. 빌드

```bash
# 프로덕션 빌드
yarn build

# 빌드 미리보기
yarn preview
```

## 🎯 개발 가이드

### 주요 컴포넌트

#### 1. 지갑 연결 (`WalletConnect`)

- Kaikas 지갑 감지 및 연결
- 연결 상태 표시

#### 2. 지갑 정보 (`WalletInfo`)

- 연결된 계정 주소 표시
- 잔액 실시간 업데이트
- 네트워크 정보 표시

#### 3. 전송 폼 (`SendForm`)

- 수신 주소 입력
- 전송 금액 입력
- 트랜잭션 실행

#### 4. 트랜잭션 목록 (`TransactionList`)

- 전송한 트랜잭션 히스토리
- 트랜잭션 상태 표시 (대기중/완료)

### 상태 관리

**Connection Store** (`src/store/connection.ts`)

- 지갑 연결 상태
- 계정 정보 및 잔액
- 네트워크 정보

**Transaction Store** (`src/store/transaction.ts`)

- 트랜잭션 히스토리
- 전송 기능

**Error Store** (`src/store/error.ts`)

- 전역 에러 상태 관리

### Web3 유틸리티

**지갑 관련**

- `detect_wallet.ts`: 지갑 감지
- `request_accounts.ts`: 계정 요청
- `add_network.ts`: 네트워크 추가

**블록체인 상호작용**

- `get_balance.ts`: 잔액 조회
- `get_network.ts`: 네트워크 정보
- `send_transaction.ts`: 트랜잭션 전송

### 테스트 방법

1. **Kaikas 지갑 설치**
2. **테스트넷 연결**: 앱에서 자동으로 Kaia 테스트넷 추가
3. **테스트 토큰**: [Kaia Faucet](https://faucet.kaia.io/)에서 받기
4. **트랜잭션 테스트**: 다른 주소로 토큰 전송
5. **확인**: [KaiaScan](https://www.kaiascan.io/)에서 트랜잭션 확인

---

## 🧠 Kaia 블록체인 개념

### 네트워크 구조

- **CCN (Core Cell Network)**: 메인 체인, 높은 성능과 안정성
- **SCN (Service Chain Network)**: 독립적인 서비스 체인
- **ENN (Endpoint Node Network)**: API 게이트웨이 역할

### 주요 특징

- **가스비 추상화**: 다양한 토큰으로 가스비 지불 가능
- **수수료 위임**: dApp이 사용자 대신 가스비 지불 가능
- **호환성**: 이더리움과 호환되는 API 제공

---

## 🔧 트러블슈팅

### 지갑 연결 문제

- Kaikas 지갑이 설치되어 있는지 확인
- 페이지 새로고침 후 다시 시도

### 네트워크 문제

- 앱에서 자동으로 Kaia 테스트넷을 추가하므로 승인만 하면 됨
- 수동 추가가 필요한 경우 네트워크 설정 확인

### 트랜잭션 실패

- 충분한 KAIA 잔액이 있는지 확인
- [Kaia Faucet](https://faucet.kaia.io/)에서 테스트 토큰 받기
- 가스비 설정 확인

---

## 📚 참고 자료

### 공식 문서

- [Kaia 공식 문서](https://docs.kaia.io/)
- [Kaia Wallet 가이드](https://docs.kaia.io/build/tools/wallets/kaia-wallet/)
- [Web3.js 문서](https://web3js.readthedocs.io/)

### 도구

- [Kaia Faucet](https://faucet.kaia.io/) - 테스트 토큰
- [KaiaScan](https://www.kaiascan.io/) - 블록체인 탐색기
- [Kaia Wallet](https://docs.kaiawallet.io/)

---

---

## 🚀 NFT 결제 모듈 구현 가이드

### 개요

PaymentMockSystem을 참고하여 Kaia 네트워크용 NFT 결제 모듈을 구현하는 가이드입니다. React Query를 사용한 API 상태 관리와 기존 Web3 유틸리티를 활용합니다.

### 필요 의존성

```bash
# React Query
yarn add @tanstack/react-query

# Socket.IO 클라이언트 (실시간 결제 상태 업데이트용)
yarn add socket.io-client

# 유틸리티 라이브러리
yarn add lucide-react  # 아이콘
```

### 구현 단계

#### 1. 프로젝트 구조 확장

```
src/
├── components/
│   ├── organisms/
│   │   └── nft-payment/        # 새로 추가
│   │       ├── PaymentFlow.tsx
│   │       ├── PaymentStep.tsx
│   │       ├── ProgressBar.tsx
│   │       └── ResultDisplay.tsx
├── hooks/                      # 새로 추가
│   ├── usePaymentFlow.ts
│   ├── useSocketConnection.ts
│   └── useNFTPayment.ts
├── services/                   # 새로 추가
│   ├── nft-payment/
│   │   ├── api.ts
│   │   └── socket.ts
│   └── react-query/
│       ├── client.ts
│       └── keys.ts
├── store/
│   └── payment.ts              # 새로 추가
└── types/
    └── payment.ts              # 새로 추가
```

#### 2. 핵심 타입 정의

```typescript
// src/types/payment.ts
export type PaymentStep = 'prepare' | 'apply' | 'process' | 'result';

export interface NFTData {
  tokenId: string;
  collection: string;
  price: string;
  gasEstimate: string;
  contractAddress: string;
}

export interface PaymentSession {
  orderProcessId: string;
  orderSheetId: string;
  sessionToken: string;
  socketUrl: string;
  nftData: NFTData;
  walletAddress?: string;
  transactionHash?: string;
  status?: 'pending' | 'success' | 'failed';
}
```

#### 3. React Query 설정

```typescript
// src/services/react-query/client.ts
import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 10,
      retry: 3,
      refetchOnWindowFocus: false,
    },
  },
});
```

#### 4. 결제 플로우 훅

```typescript
// src/hooks/usePaymentFlow.ts
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';

export const usePaymentFlow = () => {
  const [currentStep, setCurrentStep] = useState<PaymentStep>('prepare');
  const [sessionData, setSessionData] = useState<PaymentSession | null>(null);

  const prepareMutation = useMutation({
    mutationFn: (nftData: NFTData) => paymentAPI.createPaymentSession(nftData),
    onSuccess: (data) => {
      setSessionData(data);
      setCurrentStep('apply');
    },
  });

  // 나머지 단계들...

  return {
    currentStep,
    sessionData,
    prepareMutation,
    // ...
  };
};
```

### Web3 통합

기존 `src/utils/web3/` 유틸리티들을 활용하여 NFT 트랜잭션 처리:

```typescript
// src/utils/web3/nft_payment.ts
export class NFTPaymentService {
  async prepareNFTTransaction(contractAddress: string, tokenId: string): Promise<TransactionData> {
    // ERC-721 transferFrom 함수 데이터 인코딩
    // 가스 추정
    // 트랜잭션 데이터 구성
  }

  async sendNFTWithFeeDelegation(transactionData: TransactionData): Promise<string> {
    // Kaia 특화 Fee Delegation 사용
  }
}
```

### 향후 확장 계획

- **NFT 메타데이터 API 연동**
- **Socket.IO를 통한 실시간 상태 업데이트**
- **Fee Delegation 구현** (Kaia 네트워크 특화)
- **에러 처리 및 재시도 로직**
- **테스트 작성**

이 가이드를 따라 단계별로 구현하면 현재 프로젝트에 NFT 결제 모듈을 성공적으로 통합할 수 있습니다.

---

## 📄 라이선스

이 프로젝트는 학습 및 데모 목적으로 제작되었습니다.

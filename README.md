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

- **다중 지갑 지원**: Kaikas, MetaMask, WalletConnect 등 다양한 지갑 연결
- **자동 네트워크 감지**: Kaia Kairos 테스트넷 자동 연결
- **실시간 잔액 조회**: 연결된 지갑의 KAIA 잔액 실시간 표시
- **토큰 전송**: 다른 주소로 KAIA 전송 (준비중)
- **플랫폼 최적화**: PC(QR코드/확장프로그램), 모바일(인앱브라우저) 최적화
- **반응형 UI**: 모바일 및 데스크톱 환경 지원

## 🛠 기술 스택

- **Frontend**: React 19, TypeScript
- **Build Tool**: Vite
- **Styling**: CSS
- **State Management**: Wagmi (React Hooks for Ethereum)
- **Web3**: Reown AppKit (이전 WalletConnect), Wagmi v2
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

### 2. 환경 설정

```bash
# 저장소 클론 (이미 있는 경우 생략)
git clone <repository-url>
cd kaia-dapp

# 환경 변수 설정
echo "VITE_PROJECT_ID=your-reown-project-id" > .env.local

# 의존성 설치
yarn install

# 개발 서버 시작
yarn dev
```

**PROJECT_ID 받기:**
1. https://dashboard.reown.com 접속
2. 새 프로젝트 생성
3. PROJECT_ID 복사 후 .env.local에 설정

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

## 📄 라이선스

이 프로젝트는 학습 및 데모 목적으로 제작되었습니다.

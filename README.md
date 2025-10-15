# React 기반 dApp 지갑 연동 학습 레포지토리

## 📖 프로젝트 소개

이 레포지토리는 React 환경에서 블록체인 지갑을 연동하는 두 가지 주요 라이브러리인 `web3.js`와 `wagmi`를 학습하고 구현한 기록입니다. 각 브랜치에서 두 라이브러리의 구현 방식을 확인할 수 있습니다.

---

## 🌿 브랜치 안내

### 🌳 `web3.js` 브랜치

-   **설명:** Ethereum의 JavaScript API인 `web3.js`를 사용하여 지갑의 기본 기능(연결, 잔액 조회, 트랜잭션 전송 등)을 직접 구현했습니다.
-   **특징:** 라이브러리의 저수준(low-level) 동작 방식을 이해하는 데 중점을 두었습니다.
-   **[이곳을 클릭하여 web3.js 브랜치로 이동](https://github.com/eg1mb/react_kaia_dapp_study/tree/web3.js)**

**주요 학습 내용:**
- `@kaiachain/web3js-ext` + `web3.js`를 사용한 저수준 Web3 API 직접 호출
- Zustand로 connection, transaction, error 상태 관리
- 커스텀 Web3 유틸리티 함수 작성 (`detect_wallet`, `request_accounts`, `get_balance`, `send_transaction` 등)
- window.klaytn 객체를 통한 Kaikas 지갑 직접 제어
- 수동 네트워크 추가 및 트랜잭션 처리

### 🚀 `mobile` (wagmi) 브랜치

-   **설명:** React Hooks 기반의 최신 라이브러리인 `wagmi`를 사용하여 지갑 기능을 구현했습니다.
-   **특징:** 간결한 코드와 자동 상태 관리를 통해 현대적인 React dApp 개발 방식을 학습했습니다.
-   **[이곳을 클릭하여 mobile 브랜치로 이동](https://github.com/eg1mb/react_kaia_dapp_study/tree/mobile)**

**주요 학습 내용:**
- Wagmi v2 + Reown AppKit (구 WalletConnect)을 사용한 선언적 지갑 연동
- React Hooks (`useAccount`, `useBalance`, `useChainId`, `useDisconnect`)로 상태 자동 관리
- WagmiAdapter와 injected connector로 Kaikas 커스텀 커넥터 구성
- 다중 지갑 지원 (Kaikas, MetaMask, WalletConnect)
- PC(QR코드/확장프로그램)와 모바일(인앱브라우저) 환경 최적화
- React Query를 통한 비동기 상태 캐싱 및 자동 갱신

---

## 📊 두 방식 비교

| 구분 | web3.js | wagmi |
|------|---------|-------|
| **난이도** | 높음 (저수준 API) | 낮음 (React Hooks) |
| **코드량** | 많음 (직접 구현) | 적음 (선언적) |
| **상태 관리** | Zustand 수동 관리 | Wagmi 자동 관리 |
| **지갑 지원** | Kaikas 중심 | 다중 지갑 |
| **학습 가치** | Web3 동작 원리 이해 | 현대적 dApp 개발 패턴 |
| **유지보수** | 직접 관리 필요 | 라이브러리가 처리 |

---

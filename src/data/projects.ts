export interface ProjectShot {
  id: string;
  cap: string;
  img?: string;
}

export interface Project {
  id: string;
  no: string;
  title: string;
  navLabel?: string;
  award?: string;
  sub: string;
  period: string;
  role: string;
  team: string;
  stack: string[];
  bullets: string[];
  result: string[];
  link: string;
  shots: ProjectShot[];
}

export const projects = [
  {
    id: "livfit",
    no: "01",
    title: "LIVFIT",
    award: "해커톤 우수상 수상",
    sub: "실시간으로 사용자의 운동 자세를 분석하는 헬스 서비스",
    period: "2024.07 – 2024.08",
    role: "프론트엔드 개발",
    team: "5인",
    stack: [
      "React",
      "JavaScript",
      "Styled-Components",
      "Redux",
      "MediaPipe Pose",
    ],
    bullets: [
      "MediaPipe Pose를 활용한 실시간 신체 관절 인식 기능 구현",
      "관절 좌표 및 각도 데이터를 활용한 스쿼트 횟수 카운팅 로직 개발",
      "Redux를 활용한 전역 상태 관리",
    ],
    result: [
      "멋쟁이사자처럼 12기 중앙해커톤 우수상 수상",
      "전국 단위 해커톤에서 서비스 기획·개발 경험 확보",
    ],
    link: "",
    shots: [
      { id: "livfit-1", cap: "AI 운동 측정 페이지" },
      {
        id: "livfit-2",
        cap: "MediaPipe Pose를 활용하여 실시간 운동 횟수 카운팅 로직",
      },
      { id: "livfit-3", cap: "이전 기록과 비교하는 등수 페이지" },
      { id: "livfit-4", cap: "MediaPipe Pose를 활용하여 거북목 측정" },
    ],
  },
  {
    id: "stocket",
    no: "02",
    title: "Stocket",
    award: "응답속도 50% 개선",
    sub: "흩어진 기업 재무정보와 주가를 한곳에서 비교·분석해 투자 결정을 돕는 서비스",
    period: "2026.03 – 2026.07",
    role: "풀스택 개발",
    team: "1인 (개인 · 졸업 프로젝트)",
    stack: [
      "Next.js",
      "Node.js",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Docker",
      "AWS EC2",
      "GitHub Actions",
      "Turborepo",
      "Yarn Berry",
    ],
    bullets: [
      "기업 재무지표·주가를 나란히 비교하는 기업 비교 페이지 구현",
      "Recharts로 레이더·라인·버블 차트 데이터 시각화 구현",
      "DDART·KIS 데이터 배치 사전 계산으로 API 재호출 없이 응답 최적화",
      "GitHub Actions Cron 기반 주가·재무 데이터 자동 동기화 구축",
      "AWS EC2 기반 서비스 배포 환경 구성",
    ],
    result: [
      "Turborepo 모노레포로 프론트·백엔드·데이터 파이프라인 통합 관리",
      "배치 사전 계산 구조 전환으로 DART API 조회 속도 약 50% 개선",
      "실서비스 배포·운영",
    ],
    link: "https://www.stocket.site/",
    shots: [
      { id: "stocket-1", cap: "기업 분석 - 성장 가능성 점수" },
      { id: "stocket-2", cap: "기업 분석 - 성장세 원인 카드" },
      { id: "stocket-3", cap: "기업 비교 - Recharts를 활용한 4축 비교" },
      { id: "stocket-4", cap: "기업 비교 - 주가 흐름 비교" },
    ],
  },
  {
    id: "pickle",
    no: "03",
    title: "피클",
    award: "해커톤 상위 10%",
    sub: "AI 챗봇을 통해 맞춤형 구매 가이드를 제공하는 장보기 큐레이션 플랫폼",
    period: "2025.07 – 2025.08",
    role: "프론트엔드 개발, UI/UX 디자인",
    team: "5인",
    stack: ["React", "JavaScript", "Styled-Components", "Zustand"],
    bullets: [
      "공공 API 연동으로 월별 제철 식재료 목록 및 상세 정보 페이지 구현",
      "Recharts를 활용해 식재료 시세를 1일·12달·5년 단위로 조회하는 그래프 구현",
      "SSE로 스트리밍되는 AI 응답을 실시간 수신해 타이핑 효과 챗봇 UI 구현",
      "스트리밍 chunk 순서 보장을 위해 타이핑 큐 + setInterval 렌더링 분리 구조 설계",
      "AWS S3 배포 및 PWA 설정으로 모바일 앱 설치 환경 구축",
      "Figma 기반 서비스 전체 UI/UX 디자인",
    ],
    result: [
      "247개 참가 팀 중 상위 10% 기록",
      "AI 챗봇 기능 구현을 통해 사용자 맞춤형 구매 경험 제공",
      "부스 운영을 통해 사용자 피드백 수집 및 서비스 개선 방향 도출",
    ],
    link: "",
    shots: [
      { id: "pickle-1", cap: "전통시장, 대형마트 가격 비교", img: "pickl-1" },
      {
        id: "pickle-2",
        cap: "Recharts를 활용한 식재료 시세 그래프",
        img: "pickl-2",
      },
      { id: "pickle-3", cap: "AI 챗봇 기능", img: "pickl-3" },
      {
        id: "pickle-4",
        cap: "SSE 기반 AI 챗봇 실시간 스트리밍 타이핑 UI 구현",
        img: "pickl-4",
      },
    ],
  },
  {
    id: "donakawa",
    no: "04",
    title: "도나카와",
    award: "데모데이 AWS 특별상 수상",
    sub: "소비 패턴을 분석하여 올바른 소비 습관 형성을 돕는 AI 기반 소비 코칭 서비스",
    period: "2025.12 – 2026.02",
    role: "백엔드 개발",
    team: "9인",
    stack: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "AWS", "Swagger"],
    bullets: [
      "OpenAI API를 활용한 소비 결정 챗봇 API 설계 및 구현",
      "상품 데이터와 사용자 데이터를 AI에 전달해 구매 추천/보류 판단 로직 구현",
      "LLM JSON 응답 불안정 문제를 2단계 호출 구조와 검증 로직으로 해결",
      "PostgreSQL 소비 내역 데이터베이스 스키마 설계",
      "Redis 캐싱 환경 구축",
      "AWS 배포 환경 구축 지원",
      "Swagger 기반 API 문서화",
    ],
    result: [
      "UMC 9기 데모데이 AWS 특별상 수상",
      "서경대학교 창업동아리 선정",
      "창업 지원 프로그램 「모두의 창업」 선정 및 사업화 지원금 수령",
    ],
    link: "",
    shots: [
      { id: "donakawa-1", cap: "AI 상담 챗봇 - 1" },
      { id: "donakawa-2", cap: "AI 상담 챗봇 - 2" },
      { id: "donakawa-3", cap: "위시템 토너먼트" },
      { id: "donakawa-4", cap: "screen 4" },
    ],
  },
  {
    id: "dasijob",
    no: "05",
    title: "다시잡",
    award: "해커톤 대상 수상",
    sub: "AI 기술을 활용하여 중장년층의 구직 활동을 돕는 서비스",
    period: "2025.08 – 2025.09",
    role: "프론트엔드 개발",
    team: "5인",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "TanStack Query",
    ],
    bullets: [
      "OpenAI Whisper + Gemini 기반 AI 음성 네비게이션 기능 구현",
      "음성 명령으로 다중 페이지 순차 이동하는 routingQueue 로직 설계",
      "손글씨 자기소개서 사진 업로드 → OCR 텍스트 변환 기능 구현",
      "TanStack Query로 자기소개서 자동 재조회 처리",
      "KakaoMap API 연동으로 사업장 위치 지도 표시 기능 구현",
      "중장년층 접근성을 고려한 UI 설계 및 기획자·디자이너 협업",
    ],
    result: [
      "서경대학교 교내 해커톤(SKTHON) 대상 수상",
      "심사위원으로부터 기술을 인간 중심으로 풀어냈다는 호평",
      "수상 이후 서비스 고도화 및 AI 공모전 출품",
    ],
    link: "",
    shots: [
      { id: "dasijob-1", cap: "근로자의 건강 상태를 고려한 일자리 추천" },
      { id: "dasijob-2", cap: "AI 음성 네비게이션" },
      { id: "dasijob-3", cap: "손글씨 자기소개서 OCR 텍스트 변환" },
      { id: "dasijob-4", cap: "카카오맵 API 연동" },
    ],
  },
  {
    id: "dasiipda",
    no: "06",
    title: "다시입다연구소",
    award: "ICT 콤플렉스 피우다 본선 진출",
    sub: "사회적 기업 '다시입다연구소'의 의류 교환 활동을 디지털화하는 서비스",
    period: "2025.09 – 2025.12",
    role: "프론트엔드 개발",
    team: "5인",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "WebSocket",
      "GitHub Actions",
    ],
    bullets: [
      "framer-motion을 활용한 스플래시 화면 및 페이지 전환 애니메이션 구현",
      "react-hook-form을 활용한 커뮤니티 게시물 작성 폼 구현",
      "Form 입력 데이터 초기화 문제를 Zustand 전역 상태로 해결",
      "WebSocket 기반 실시간 채팅 기능 구현",
      "KakaoMap API 연동으로 교환 희망 장소 선택 및 위도·경도 저장 기능 구현",
      "GitHub Actions를 활용한 배포 자동화 환경 구축",
      "사회적 기업 대표님과 요구사항 협의 및 기능 구현",
    ],
    result: [
      "ICT콤플렉스 피우다 프로젝트 본선 진출",
      "실제 사회적 기업과 협업하며 요구사항 분석 및 서비스 개발 경험",
      "심사위원 대상 서비스 발표 및 질의응답 진행",
    ],
    link: "",
    shots: [
      { id: "dasiipda-1", cap: "의류 교환 페이지", img: "refitlab-1" },
      {
        id: "dasiipda-2",
        cap: "zustand를 활용해 form 상태 관리",
        img: "refitlab-2",
      },
      {
        id: "dasiipda-3",
        cap: "카카오맵 API를 활용해 거래 장소 설정",
        img: "refitlab-3",
      },
      {
        id: "dasiipda-4",
        cap: "WebSocket 기반 실시간 채팅 기능 구현",
        img: "refitlab-4",
      },
    ],
  },
  {
    id: "blooming",
    no: "07",
    title: "Blooming",
    award: "실 사용자 1,500명",
    sub: "축제 정보와 공연 일정을 통합 제공해 방문객의 편의를 높인 공식 웹사이트",
    period: "2025.04 – 2025.05",
    role: "프론트엔드 개발",
    team: "8인",
    stack: ["React", "TypeScript", "TanStack Query"],
    bullets: [
      "framer-motion과 dotLottie를 활용한 랜딩 페이지 진입 애니메이션 구현",
      "react-i18next를 활용해 한국어·영어·중국어·일본어 다국어 지원 환경 구축",
      "TanStack Query의 staleTime 설정을 통해 중복 API 요청 방지 및 서버 부하 감소",
      "공연 타임테이블, 아티스트 라인업, 부스 안내 메인 페이지 UI 구현",
      "학과별 부스 위치 지도 및 메뉴판 페이지 구현",
      "총학생회와 협업하여 기능 기획 및 구현",
    ],
    result: [
      "실 사용자 1,500명 달성",
      "축제 기간 장애 없이 안정적인 서비스 운영",
      "다국어 지원으로 유학생 방문객 이용성 향상",
    ],
    link: "",
    shots: [
      { id: "blooming-1", cap: "다국어 환경 지원", img: "festival-1" },
      { id: "blooming-2", cap: "공연 타임 테이블", img: "festival-2" },
      { id: "blooming-3", cap: "부스 안내 지도", img: "festival-3" },
      { id: "blooming-4", cap: "다국어 메뉴판 지원", img: "festival-4" },
    ],
  },
  {
    id: "likelion-sku",
    no: "08",
    title: "멋쟁이사자처럼 서경대학교 홈페이지",
    navLabel: "동아리 사이트",
    award: "실 사용자 300명",
    sub: "동아리 모집 안내 및 자체 지원서 사이트 프로젝트",
    period: "2024.12 – 2025.02",
    role: "프로젝트 총괄, 기획, 디자인, 프론트엔드 개발",
    team: "10인",
    stack: ["React", "JavaScript", "Zustand", "Figma"],
    bullets: [
      "프로젝트 일정 관리 및 팀 리딩",
      "서비스 기획 및 화면 설계",
      "Figma 기반 UI/UX 디자인",
      "React 기반 프론트엔드 개발",
    ],
    result: [
      "동아리 공식 홈페이지 런칭",
      "실 사용자 300명 확보",
      "10인 팀 프로젝트 리딩",
      "기획·디자인·개발 전 과정 주도",
    ],
    link: "",
    shots: [
      { id: "likelion-sku-1", cap: "홈화면 마감기한 표시", img: "likelion-1" },
      {
        id: "likelion-sku-2",
        cap: "관리자 페이지 - 지원서 생성",
        img: "likelion-2",
      },
      {
        id: "likelion-sku-3",
        cap: "관리자 페이지 - 지원서 확인",
        img: "likelion-3",
      },
      {
        id: "likelion-sku-4",
        cap: "지원자 페이지 - 면접 날짜 스케줄링",
        img: "likelion-4",
      },
    ],
  },
] satisfies Project[];

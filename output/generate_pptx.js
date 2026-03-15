const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13.3" x 7.5"
pres.title = "Claude Code 에이전트를 활용한 업무 자동화";
pres.author = "PPT Team Agent";

// ─── 컬러 팔레트 (Midnight Executive) ───
const C = {
  navy:    "1E2761",
  iceBlue: "CADCFC",
  white:   "FFFFFF",
  coral:   "F96167",
  teal:    "2E86AB",
  gray:    "F4F6FB",
  darkGray:"444444",
  midGray: "888888",
  gold:    "F9A825",
};

const makeShadow = () => ({ type: "outer", color: "000000", blur: 8, offset: 3, angle: 135, opacity: 0.12 });

// ─────────────────────────────────────────────────────────
// SLIDE 1: 타이틀
// ─────────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.navy };

  // 우측 강조 사각형 장식
  s.addShape(pres.shapes.RECTANGLE, { x: 10.3, y: 0, w: 3, h: 7.5, fill: { color: "162050" }, line: { color: "162050" } });

  // 좌측 coral 포인트 라인
  s.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 2.6, w: 0.08, h: 2.3, fill: { color: C.coral }, line: { color: C.coral } });

  // 메인 타이틀
  s.addText("Claude Code 에이전트를", {
    x: 0.85, y: 2.0, w: 9.2, h: 0.95,
    fontSize: 42, bold: true, color: C.white,
    fontFace: "Calibri", margin: 0,
  });
  s.addText("활용한 업무 자동화", {
    x: 0.85, y: 2.9, w: 9.2, h: 0.95,
    fontSize: 42, bold: true, color: C.coral,
    fontFace: "Calibri", margin: 0,
  });

  // 부제목
  s.addText("혼자서 팀처럼 일하는 시대 — AI 에이전트 팀 구성 실전 가이드", {
    x: 0.85, y: 4.05, w: 9.0, h: 0.5,
    fontSize: 17, color: C.iceBlue, fontFace: "Calibri Light",
    margin: 0,
  });

  // 날짜
  s.addText("2026.03.15", {
    x: 0.85, y: 6.6, w: 3, h: 0.4,
    fontSize: 13, color: "6A7BB0", fontFace: "Calibri", margin: 0,
  });

  // 우측 장식 텍스트
  s.addText("AI\nAGENT\nTEAM", {
    x: 10.4, y: 1.5, w: 2.7, h: 4.0,
    fontSize: 32, bold: true, color: "2A3A70",
    align: "center", fontFace: "Calibri",
    lineSpacingMultiple: 1.4, margin: 0,
  });

  s.addNotes("오늘 발표는 단순한 AI 도구 소개가 아닙니다. '혼자서 팀처럼 일하는' 것이 실제로 가능해진 시대에, 여러분의 조직이 그 첫 번째 수혜자가 될 수 있도록 구체적인 방법을 공유합니다.");
}

// ─────────────────────────────────────────────────────────
// SLIDE 2: 현실 점검
// ─────────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.white };

  // 타이틀 바
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 13.3, h: 1.15, fill: { color: C.navy }, line: { color: C.navy } });
  s.addText("지금 팀이 하루에 하는 일의 70%는 반복이다", {
    x: 0.4, y: 0.15, w: 12.5, h: 0.85,
    fontSize: 26, bold: true, color: C.white, fontFace: "Calibri", margin: 0,
  });

  // 좌측: 반복 업무
  s.addShape(pres.shapes.RECTANGLE, { x: 0.4, y: 1.4, w: 5.8, h: 4.8, fill: { color: "FFF3F4" }, line: { color: "FFCDD0", width: 1 }, shadow: makeShadow() });
  s.addText("⚠ 반복 업무 (70%)", {
    x: 0.6, y: 1.6, w: 5.4, h: 0.5,
    fontSize: 16, bold: true, color: C.coral, fontFace: "Calibri", margin: 0,
  });
  const leftItems = ["코드 리뷰", "문서 업데이트", "주간 보고서 작성", "테스트 실행", "PR 리뷰"];
  leftItems.forEach((item, i) => {
    s.addShape(pres.shapes.OVAL, { x: 0.65, y: 2.25 + i * 0.7, w: 0.25, h: 0.25, fill: { color: C.coral }, line: { color: C.coral } });
    s.addText(item, {
      x: 1.05, y: 2.22 + i * 0.7, w: 4.8, h: 0.35,
      fontSize: 15, color: C.darkGray, fontFace: "Calibri", margin: 0,
    });
  });

  // 우측: 창의 업무
  s.addShape(pres.shapes.RECTANGLE, { x: 6.8, y: 1.4, w: 5.8, h: 4.8, fill: { color: "F0F8FF" }, line: { color: "C5E1F5", width: 1 }, shadow: makeShadow() });
  s.addText("✓ 창의적 판단 (30%)", {
    x: 7.0, y: 1.6, w: 5.4, h: 0.5,
    fontSize: 16, bold: true, color: C.teal, fontFace: "Calibri", margin: 0,
  });
  const rightItems = ["전략 결정", "아키텍처 설계", "고객 소통", "혁신 아이디어"];
  rightItems.forEach((item, i) => {
    s.addShape(pres.shapes.OVAL, { x: 7.05, y: 2.25 + i * 0.7, w: 0.25, h: 0.25, fill: { color: C.teal }, line: { color: C.teal } });
    s.addText(item, {
      x: 7.45, y: 2.22 + i * 0.7, w: 4.8, h: 0.35,
      fontSize: 15, color: C.darkGray, fontFace: "Calibri", margin: 0,
    });
  });

  // 하단 통계 배지
  s.addShape(pres.shapes.RECTANGLE, { x: 0.4, y: 6.4, w: 12.2, h: 0.75, fill: { color: C.navy }, line: { color: C.navy } });
  s.addText("AI 코딩 도구를 사용하거나 사용 계획 중인 개발자  84%  (2025 Stack Overflow Survey)", {
    x: 0.6, y: 6.5, w: 11.8, h: 0.5,
    fontSize: 14, color: C.iceBlue, fontFace: "Calibri", align: "center", margin: 0,
  });

  s.addNotes("청중에게 질문: '여러분 팀에서 지난 주에 가장 많이 한 작업이 뭔가요?' 핵심 메시지: 우리는 이미 비싼 사람들을 싸구려 일에 쓰고 있다.");
}

// ─────────────────────────────────────────────────────────
// SLIDE 3: Claude Code 소개
// ─────────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.gray };

  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 13.3, h: 1.15, fill: { color: C.navy }, line: { color: C.navy } });
  s.addText("Claude Code — 단순한 코딩 보조를 넘어선 자율 실행 엔진", {
    x: 0.4, y: 0.15, w: 12.5, h: 0.85,
    fontSize: 24, bold: true, color: C.white, fontFace: "Calibri", margin: 0,
  });

  const cards = [
    { icon: "🚀", stat: "10억 달러", label: "출시 6개월 만에 연간 매출 달성", sub: "엔터프라이즈 역사상 최단기간", color: C.coral },
    { icon: "📈", stat: "25억 달러", label: "2026년 2월 기준 연간 매출", sub: "활성 개발자 115,000명+", color: C.teal },
    { icon: "🏆", stat: "46%", label: "개발자 선호도 조사 1위", sub: "Cursor 19% · Copilot 9%", color: C.gold },
  ];

  cards.forEach((card, i) => {
    const x = 0.5 + i * 4.2;
    s.addShape(pres.shapes.RECTANGLE, { x, y: 1.4, w: 3.9, h: 5.0, fill: { color: C.white }, line: { color: "DDDDDD", width: 1 }, shadow: makeShadow() });
    // 상단 컬러 바
    s.addShape(pres.shapes.RECTANGLE, { x, y: 1.4, w: 3.9, h: 0.18, fill: { color: card.color }, line: { color: card.color } });
    s.addText(card.icon, { x: x + 0.15, y: 1.75, w: 3.6, h: 0.6, fontSize: 28, align: "center", margin: 0 });
    s.addText(card.stat, {
      x: x + 0.1, y: 2.45, w: 3.7, h: 0.85,
      fontSize: 34, bold: true, color: card.color, align: "center", fontFace: "Calibri", margin: 0,
    });
    s.addText(card.label, {
      x: x + 0.15, y: 3.4, w: 3.6, h: 0.8,
      fontSize: 14, bold: true, color: C.darkGray, align: "center", fontFace: "Calibri", margin: 0,
    });
    s.addText(card.sub, {
      x: x + 0.15, y: 4.3, w: 3.6, h: 0.55,
      fontSize: 12, color: C.midGray, align: "center", fontFace: "Calibri Light", margin: 0,
    });
  });

  // 하단 태그
  s.addShape(pres.shapes.RECTANGLE, { x: 0.4, y: 6.4, w: 12.2, h: 0.75, fill: { color: C.navy }, line: { color: C.navy } });
  s.addText("Fortune 100 기업의 70% 도입 · CLI 기반 · 자율 에이전트 실행 · 멀티파일 리팩토링", {
    x: 0.5, y: 6.5, w: 12.0, h: 0.5,
    fontSize: 13, color: C.iceBlue, align: "center", fontFace: "Calibri", margin: 0,
  });

  s.addNotes("'이미 Fortune 100 기업의 70%가 도입했습니다' — 의사결정자에게 가장 강력한 메시지. 숫자를 천천히 읽어주세요.");
}

// ─────────────────────────────────────────────────────────
// SLIDE 4: 3가지 핵심 요소
// ─────────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.white };

  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 13.3, h: 1.15, fill: { color: C.navy }, line: { color: C.navy } });
  s.addText("에이전트 팀을 구성하는 3가지 핵심 요소", {
    x: 0.4, y: 0.15, w: 12.5, h: 0.85,
    fontSize: 28, bold: true, color: C.white, fontFace: "Calibri", margin: 0,
  });

  // 중앙 허브
  s.addShape(pres.shapes.OVAL, { x: 5.15, y: 2.8, w: 3.0, h: 1.7, fill: { color: C.navy }, line: { color: C.navy }, shadow: makeShadow() });
  s.addText("오케스트레이터\n(메인 Claude)", {
    x: 5.15, y: 2.9, w: 3.0, h: 1.5,
    fontSize: 13, bold: true, color: C.white, align: "center", fontFace: "Calibri", margin: 0,
  });

  // 3개 스포크 카드
  const spokes = [
    { x: 0.4, y: 2.5, color: C.coral, title: "Sub-agents", body: "독립 컨텍스트에서\n특화 작업 실행\n최대 7개 병렬", tag: "실행자" },
    { x: 4.65, y: 5.5, color: C.teal, title: "Skills", body: "재사용 가능한\n워크플로우 모듈\n/batch  /loop  /simplify", tag: "레시피" },
    { x: 8.9, y: 2.5, color: C.gold, title: "Hooks", body: "이벤트 기반\n자동 품질 게이트\n파일 저장 → 자동 Lint", tag: "규칙" },
  ];

  spokes.forEach((sp) => {
    s.addShape(pres.shapes.RECTANGLE, { x: sp.x, y: sp.y, w: 3.7, h: 2.4, fill: { color: C.white }, line: { color: sp.color, width: 2 }, shadow: makeShadow() });
    s.addShape(pres.shapes.RECTANGLE, { x: sp.x, y: sp.y, w: 3.7, h: 0.18, fill: { color: sp.color }, line: { color: sp.color } });
    s.addText(sp.title, {
      x: sp.x + 0.15, y: sp.y + 0.3, w: 3.4, h: 0.5,
      fontSize: 18, bold: true, color: sp.color, fontFace: "Calibri", margin: 0,
    });
    s.addText(sp.body, {
      x: sp.x + 0.15, y: sp.y + 0.85, w: 3.4, h: 1.1,
      fontSize: 13, color: C.darkGray, fontFace: "Calibri Light", lineSpacingMultiple: 1.3, margin: 0,
    });
    // 태그 배지
    s.addShape(pres.shapes.RECTANGLE, { x: sp.x + 2.7, y: sp.y + 0.3, w: 0.85, h: 0.35, fill: { color: sp.color }, line: { color: sp.color } });
    s.addText(sp.tag, {
      x: sp.x + 2.7, y: sp.y + 0.3, w: 0.85, h: 0.35,
      fontSize: 11, bold: true, color: C.white, align: "center", fontFace: "Calibri", margin: 0,
    });
  });

  // 핵심 메시지 박스
  s.addShape(pres.shapes.RECTANGLE, { x: 0.4, y: 6.4, w: 12.2, h: 0.75, fill: { color: "FFF8E1" }, line: { color: C.gold, width: 1 } });
  s.addText("Sub-agents는 실행자 · Skills는 레시피 · Hooks는 규칙", {
    x: 0.6, y: 6.5, w: 11.8, h: 0.5,
    fontSize: 15, bold: true, color: C.navy, align: "center", fontFace: "Calibri", margin: 0,
  });

  s.addNotes("'요리 비유'를 사용하세요 — Skills는 레시피북, Sub-agents는 요리사, Hooks는 위생 검사관.");
}

// ─────────────────────────────────────────────────────────
// SLIDE 5: Sub-agents 상세
// ─────────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.gray };

  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 13.3, h: 1.15, fill: { color: C.coral }, line: { color: C.coral } });
  s.addText("Sub-agent — 역할과 권한이 분리된 특화 AI 어시스턴트", {
    x: 0.4, y: 0.15, w: 12.5, h: 0.85,
    fontSize: 24, bold: true, color: C.white, fontFace: "Calibri", margin: 0,
  });

  // 좌측 개념
  const points = [
    "독립 컨텍스트 + 커스텀 역할 + 특정 도구 권한",
    "메인 대화를 오염시키지 않고 병렬로 최대 7개 동시 실행",
    "파일 하나로 생성: YAML 헤더 + 역할 지시문",
  ];
  points.forEach((pt, i) => {
    s.addShape(pres.shapes.OVAL, { x: 0.45, y: 1.55 + i * 0.85, w: 0.32, h: 0.32, fill: { color: C.coral }, line: { color: C.coral } });
    s.addText(`${i + 1}`, { x: 0.45, y: 1.55 + i * 0.85, w: 0.32, h: 0.32, fontSize: 13, bold: true, color: C.white, align: "center", margin: 0 });
    s.addText(pt, {
      x: 0.95, y: 1.52 + i * 0.85, w: 5.5, h: 0.4,
      fontSize: 14, color: C.darkGray, fontFace: "Calibri", margin: 0,
    });
  });

  // 코드 예시
  s.addShape(pres.shapes.RECTANGLE, { x: 0.4, y: 4.3, w: 6.0, h: 2.8, fill: { color: "1A1A2E" }, line: { color: "333366", width: 1 }, shadow: makeShadow() });
  s.addText(".claude/agents/code-reviewer.md", {
    x: 0.55, y: 4.4, w: 5.7, h: 0.35,
    fontSize: 11, color: "888888", fontFace: "Consolas", margin: 0,
  });
  s.addText("---\nname: code-reviewer\ndescription: 코드 품질과 보안을 검토하는 전문가\ntools: Read, Grep, Glob, Bash\nmodel: sonnet\n---\n\n당신은 시니어 코드 리뷰어입니다...", {
    x: 0.55, y: 4.8, w: 5.7, h: 2.1,
    fontSize: 12, color: "A8D8A8", fontFace: "Consolas", lineSpacingMultiple: 1.4, margin: 0,
  });

  // 우측: 빌트인 에이전트 목록
  s.addShape(pres.shapes.RECTANGLE, { x: 7.0, y: 1.3, w: 5.9, h: 5.8, fill: { color: C.white }, line: { color: "DDDDDD", width: 1 }, shadow: makeShadow() });
  s.addText("빌트인 Sub-agents", {
    x: 7.2, y: 1.5, w: 5.5, h: 0.45,
    fontSize: 16, bold: true, color: C.navy, fontFace: "Calibri", margin: 0,
  });
  const builtins = [
    { name: "Explore", desc: "코드베이스 탐색 및 분석 전문" },
    { name: "Plan", desc: "아키텍처 설계 및 실행 계획 수립" },
    { name: "General-purpose", desc: "복잡한 멀티스텝 작업 실행" },
    { name: "claude-code-guide", desc: "Claude API / SDK 활용 가이드" },
  ];
  builtins.forEach((b, i) => {
    s.addShape(pres.shapes.RECTANGLE, { x: 7.2, y: 2.1 + i * 1.1, w: 5.5, h: 0.9, fill: { color: C.gray }, line: { color: "EEEEEE", width: 1 } });
    s.addText(b.name, {
      x: 7.4, y: 2.18 + i * 1.1, w: 5.0, h: 0.35,
      fontSize: 14, bold: true, color: C.coral, fontFace: "Calibri", margin: 0,
    });
    s.addText(b.desc, {
      x: 7.4, y: 2.53 + i * 1.1, w: 5.0, h: 0.35,
      fontSize: 12, color: C.darkGray, fontFace: "Calibri Light", margin: 0,
    });
  });

  s.addNotes("'파일 하나만 만들면 전문가 팀원이 생깁니다'. 기술적 복잡성보다 결과에 초점을 맞추세요.");
}

// ─────────────────────────────────────────────────────────
// SLIDE 6: Skills 상세
// ─────────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.white };

  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 13.3, h: 1.15, fill: { color: C.teal }, line: { color: C.teal } });
  s.addText("Skills — 반복 업무를 /명령어 하나로 처리하는 모듈", {
    x: 0.4, y: 0.15, w: 12.5, h: 0.85,
    fontSize: 24, bold: true, color: C.white, fontFace: "Calibri", margin: 0,
  });

  // 좌측: 개념
  s.addText("Skills 개념", { x: 0.4, y: 1.35, w: 6.0, h: 0.45, fontSize: 17, bold: true, color: C.teal, fontFace: "Calibri", margin: 0 });
  const concepts = ["SKILL.md 파일 하나로 정의", "/명령어로 즉시 호출", "팀 전체 공유 및 재사용 가능", "공식 마켓플레이스에서 설치 가능"];
  concepts.forEach((c, i) => {
    s.addShape(pres.shapes.RECTANGLE, { x: 0.4, y: 1.92 + i * 0.65, w: 0.05, h: 0.35, fill: { color: C.teal }, line: { color: C.teal } });
    s.addText(c, { x: 0.6, y: 1.9 + i * 0.65, w: 5.7, h: 0.38, fontSize: 14, color: C.darkGray, fontFace: "Calibri", margin: 0 });
  });

  // 좌측 하단: 강조 박스
  s.addShape(pres.shapes.RECTANGLE, { x: 0.4, y: 4.8, w: 6.0, h: 1.0, fill: { color: "E8F8F5" }, line: { color: C.teal, width: 1 } });
  s.addText("💡 사내 브랜드 PPT 템플릿을 Skill로 등록 →\n    매번 지시 없이 브랜드 가이드라인 자동 적용", {
    x: 0.6, y: 4.88, w: 5.7, h: 0.85,
    fontSize: 13, color: C.teal, fontFace: "Calibri", lineSpacingMultiple: 1.3, margin: 0,
  });

  // 우측: 빌트인 Skills
  s.addShape(pres.shapes.RECTANGLE, { x: 6.8, y: 1.3, w: 6.1, h: 5.8, fill: { color: C.gray }, line: { color: "DDDDDD", width: 1 }, shadow: makeShadow() });
  s.addText("빌트인 Skills 실사용 예시", {
    x: 7.0, y: 1.5, w: 5.7, h: 0.45,
    fontSize: 16, bold: true, color: C.navy, fontFace: "Calibri", margin: 0,
  });
  const skills = [
    { cmd: "/batch", desc: "전체 코드베이스를 30개 작업으로 분해\n병렬 마이그레이션 실행", color: C.coral },
    { cmd: "/loop", desc: "주기적 모니터링 자동화\n배포 감시, PR 알림", color: C.teal },
    { cmd: "/simplify", desc: "3개 병렬 리뷰 에이전트로\n코드 품질 자동 검토", color: C.gold },
  ];
  skills.forEach((sk, i) => {
    s.addShape(pres.shapes.RECTANGLE, { x: 7.0, y: 2.1 + i * 1.5, w: 5.7, h: 1.3, fill: { color: C.white }, line: { color: sk.color, width: 1.5 }, shadow: makeShadow() });
    s.addText(sk.cmd, {
      x: 7.15, y: 2.18 + i * 1.5, w: 1.5, h: 0.45,
      fontSize: 18, bold: true, color: sk.color, fontFace: "Consolas", margin: 0,
    });
    s.addText(sk.desc, {
      x: 7.15, y: 2.65 + i * 1.5, w: 5.4, h: 0.65,
      fontSize: 12, color: C.darkGray, fontFace: "Calibri Light", lineSpacingMultiple: 1.3, margin: 0,
    });
  });

  s.addNotes("Skills의 가치: 팀 지식의 코드화. 시니어 개발자의 노하우를 Skills에 담으면 주니어도 동일 품질로 실행 가능.");
}

// ─────────────────────────────────────────────────────────
// SLIDE 7: 사례 1 — 코드 리뷰
// ─────────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.white };

  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 13.3, h: 1.15, fill: { color: C.navy }, line: { color: C.navy } });
  s.addText("사례 1 — 코드 리뷰 3시간 → 15분: Fountain의 실전 사례", {
    x: 0.4, y: 0.15, w: 12.5, h: 0.85,
    fontSize: 24, bold: true, color: C.white, fontFace: "Calibri", margin: 0,
  });

  // 3단계 타임라인
  const stages = [
    { label: "BEFORE", color: "CC3333", items: ["PR 하나당 수동 리뷰", "보안 검토 + 성능 분석\n+ 테스트 커버리지", "평균 소요: 3시간"] },
    { label: "PROCESS", color: C.teal, items: ["Agent 1: 보안 취약점 스캔", "Agent 2: 성능 병목 분석", "Agent 3: 테스트 커버리지 확인"] },
    { label: "AFTER", color: "227722", items: ["계층형 멀티에이전트로", "전체 코드베이스 리뷰 자동화", "15분 내 완료"] },
  ];

  stages.forEach((st, i) => {
    const x = 0.4 + i * 4.2;
    s.addShape(pres.shapes.RECTANGLE, { x, y: 1.3, w: 3.9, h: 4.9, fill: { color: C.white }, line: { color: st.color, width: 2 }, shadow: makeShadow() });
    s.addShape(pres.shapes.RECTANGLE, { x, y: 1.3, w: 3.9, h: 0.6, fill: { color: st.color }, line: { color: st.color } });
    s.addText(st.label, {
      x: x + 0.1, y: 1.35, w: 3.7, h: 0.5,
      fontSize: 16, bold: true, color: C.white, align: "center", fontFace: "Calibri", margin: 0,
    });
    st.items.forEach((item, j) => {
      s.addText(item, {
        x: x + 0.2, y: 2.1 + j * 1.1, w: 3.5, h: 0.85,
        fontSize: 13, color: C.darkGray, fontFace: "Calibri", lineSpacingMultiple: 1.3, margin: 0,
      });
      if (j < st.items.length - 1) {
        s.addShape(pres.shapes.LINE, { x: x + 0.5, y: 2.9 + j * 1.1, w: 2.9, h: 0, line: { color: "EEEEEE", width: 0.5 } });
      }
    });
    // 화살표 연결
    if (i < 2) {
      s.addShape(pres.shapes.RECTANGLE, { x: x + 4.0, y: 3.4, w: 0.1, h: 0.5, fill: { color: C.midGray }, line: { color: C.midGray } });
      s.addText("▶", { x: x + 3.95, y: 3.55, w: 0.35, h: 0.35, fontSize: 14, color: C.midGray, margin: 0 });
    }
  });

  // 하단 핵심 통계
  s.addShape(pres.shapes.RECTANGLE, { x: 0.4, y: 6.35, w: 12.2, h: 0.82, fill: { color: C.navy }, line: { color: C.navy } });
  s.addText("🎯  엔지니어 1인당 일일 PR 병합 수  +67% 증가  (Anthropic 내부 데이터)", {
    x: 0.5, y: 6.45, w: 12.0, h: 0.55,
    fontSize: 16, bold: true, color: C.coral, align: "center", fontFace: "Calibri", margin: 0,
  });

  s.addNotes("'지금 여러분 팀의 PR 리뷰에 얼마나 시간이 걸리나요?' 67% 향상은 Anthropic 내부 데이터로 신뢰도 높음.");
}

// ─────────────────────────────────────────────────────────
// SLIDE 8: 사례 2 — 대규모 마이그레이션
// ─────────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: "0D1B3E" };

  // 배경 장식 원
  s.addShape(pres.shapes.OVAL, { x: 7.0, y: -1.0, w: 8.0, h: 8.0, fill: { color: "162050", transparency: 30 }, line: { color: "162050" } });

  s.addText("사례 2 — 대규모 코드 마이그레이션", {
    x: 0.5, y: 0.3, w: 8.0, h: 0.5,
    fontSize: 14, color: "6A7BB0", fontFace: "Calibri", margin: 0,
  });
  s.addText("C 컴파일러를\n처음부터 만든\n16개의 에이전트", {
    x: 0.5, y: 0.9, w: 8.5, h: 2.8,
    fontSize: 38, bold: true, color: C.white, fontFace: "Calibri", lineSpacingMultiple: 1.2, margin: 0,
  });

  // 수치 카드들
  const stats = [
    { n: "16개", label: "병렬 에이전트" },
    { n: "10만 줄", label: "코드 규모" },
    { n: "99%", label: "테스트 통과율" },
  ];
  stats.forEach((st, i) => {
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5 + i * 3.1, y: 4.4, w: 2.8, h: 1.6, fill: { color: "1A2B5E" }, line: { color: C.coral, width: 1.5 }, shadow: makeShadow() });
    s.addText(st.n, {
      x: 0.5 + i * 3.1, y: 4.5, w: 2.8, h: 0.8,
      fontSize: 28, bold: true, color: C.coral, align: "center", fontFace: "Calibri", margin: 0,
    });
    s.addText(st.label, {
      x: 0.5 + i * 3.1, y: 5.3, w: 2.8, h: 0.5,
      fontSize: 13, color: C.iceBlue, align: "center", fontFace: "Calibri Light", margin: 0,
    });
  });

  // 인용구
  s.addShape(pres.shapes.RECTANGLE, { x: 7.2, y: 4.3, w: 5.7, h: 2.8, fill: { color: "162050" }, line: { color: C.teal, width: 1 } });
  s.addText('"', { x: 7.3, y: 4.3, w: 0.8, h: 0.9, fontSize: 50, color: C.teal, fontFace: "Georgia", margin: 0 });
  s.addText("16비트 x86 에이전트 팀이 처음부터 C 컴파일러를 구축해 Linux 커널을 컴파일했다.", {
    x: 7.35, y: 4.9, w: 5.4, h: 1.3,
    fontSize: 13, italic: true, color: C.iceBlue, fontFace: "Calibri Light", lineSpacingMultiple: 1.4, margin: 0,
  });
  s.addText("— Nicholas Carlini, Anthropic 연구원", {
    x: 7.35, y: 6.3, w: 5.4, h: 0.4,
    fontSize: 12, bold: true, color: C.teal, fontFace: "Calibri", margin: 0,
  });

  // 실용 사례
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 6.15, w: 6.0, h: 0.9, fill: { color: "162050" }, line: { color: C.gold, width: 1 } });
  s.addText("실용 예시: /batch로 src/ 전체를 Solid → React 마이그레이션 (5~30개 병렬)", {
    x: 0.65, y: 6.25, w: 5.7, h: 0.65,
    fontSize: 12, color: C.gold, fontFace: "Calibri", lineSpacingMultiple: 1.2, margin: 0,
  });

  s.addNotes("이 슬라이드 목적: '가능성의 한계'를 보여주기. $20,000 비용은 인건비 대비 리프레이밍. 10만 줄을 사람이 짜면 얼마일까요?");
}

// ─────────────────────────────────────────────────────────
// SLIDE 9: 사례 3 — 문서 자동화
// ─────────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.gray };

  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 13.3, h: 1.15, fill: { color: C.navy }, line: { color: C.navy } });
  s.addText("사례 3 — 판매 데이터 → Excel → PPT → 이메일 초안 자동 완성", {
    x: 0.4, y: 0.15, w: 12.5, h: 0.85,
    fontSize: 22, bold: true, color: C.white, fontFace: "Calibri", margin: 0,
  });

  // 4단계 파이프라인
  const pipeline = [
    { icon: "🗄️", label: "데이터 수집", desc: "SQL/BigQuery\n자동 쿼리", color: C.navy },
    { icon: "📊", label: "Excel 업데이트", desc: "자동 집계\n& 시각화", color: C.teal },
    { icon: "📑", label: "PPT 자동 갱신", desc: "브랜드 가이드\n유지", color: C.coral },
    { icon: "📧", label: "이메일 초안", desc: "다국어 버전\n자동 생성", color: "227722" },
  ];

  pipeline.forEach((p, i) => {
    const x = 0.5 + i * 3.1;
    s.addShape(pres.shapes.OVAL, { x: x + 0.8, y: 1.4, w: 1.4, h: 1.4, fill: { color: p.color }, line: { color: p.color }, shadow: makeShadow() });
    s.addText(p.icon, { x: x + 0.8, y: 1.5, w: 1.4, h: 1.2, fontSize: 28, align: "center", margin: 0 });
    s.addShape(pres.shapes.RECTANGLE, { x, y: 3.0, w: 2.9, h: 2.2, fill: { color: C.white }, line: { color: p.color, width: 1.5 }, shadow: makeShadow() });
    s.addText(p.label, {
      x: x + 0.1, y: 3.1, w: 2.7, h: 0.5,
      fontSize: 15, bold: true, color: p.color, align: "center", fontFace: "Calibri", margin: 0,
    });
    s.addText(p.desc, {
      x: x + 0.1, y: 3.65, w: 2.7, h: 1.2,
      fontSize: 13, color: C.darkGray, align: "center", fontFace: "Calibri Light", lineSpacingMultiple: 1.3, margin: 0,
    });
    // 화살표
    if (i < 3) {
      s.addText("▶", { x: x + 3.0, y: 2.1, w: 0.4, h: 0.5, fontSize: 20, color: C.midGray, align: "center", margin: 0 });
    }
    // 세로 연결선
    s.addShape(pres.shapes.LINE, { x: x + 1.45, y: 2.82, w: 0, h: 0.2, line: { color: p.color, width: 1.5 } });
  });

  // 하단 강조
  s.addShape(pres.shapes.RECTANGLE, { x: 0.4, y: 5.55, w: 5.5, h: 0.85, fill: { color: C.navy }, line: { color: C.navy } });
  s.addText("⏱  주간 보고서 작성 시간  90% 절감", {
    x: 0.5, y: 5.65, w: 5.3, h: 0.55,
    fontSize: 16, bold: true, color: C.coral, align: "center", fontFace: "Calibri", margin: 0,
  });
  s.addShape(pres.shapes.RECTANGLE, { x: 6.5, y: 5.55, w: 6.4, h: 0.85, fill: { color: "E8F8F5" }, line: { color: C.teal, width: 1 } });
  s.addText("Anthropic × Microsoft 통합 (2025) — Excel, PowerPoint 공유 컨텍스트", {
    x: 6.6, y: 5.65, w: 6.2, h: 0.55,
    fontSize: 13, color: C.teal, fontFace: "Calibri", align: "center", margin: 0,
  });

  s.addNotes("개발자가 아닌 기획자/관리자에게 가장 어필. '주간 보고서를 Claude Code에 맡기면 어떻게 될까요?'");
}

// ─────────────────────────────────────────────────────────
// SLIDE 10: ROI 데이터
// ─────────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.white };

  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 13.3, h: 1.15, fill: { color: C.navy }, line: { color: C.navy } });
  s.addText("도입 기업의 공통 결과 — 숫자가 증명한다", {
    x: 0.4, y: 0.15, w: 12.5, h: 0.85,
    fontSize: 28, bold: true, color: C.white, fontFace: "Calibri", margin: 0,
  });

  const kpis = [
    { n: "+50%", label: "개발자 생산성 향상", sub: "Anthropic 내부 (최대)", color: C.coral },
    { n: "+67%", label: "PR 병합 수 증가", sub: "엔지니어 1인당 일일", color: C.teal },
    { n: "+45%", label: "리팩토링 생산성", sub: "6,000명+ 개발자 연구", color: C.gold },
    { n: "171%", label: "평균 AI 에이전트 ROI", sub: "미국 기업 평균 192%", color: C.coral },
    { n: "74%", label: "첫 해 ROI 달성", sub: "임원 보고 기준", color: C.teal },
    { n: "70%", label: "비용 절감 가능", sub: "워크플로우 자동화 시", color: C.gold },
  ];

  kpis.forEach((k, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = 0.4 + col * 4.2;
    const y = 1.35 + row * 2.5;
    s.addShape(pres.shapes.RECTANGLE, { x, y, w: 3.9, h: 2.15, fill: { color: C.gray }, line: { color: k.color, width: 2 }, shadow: makeShadow() });
    s.addShape(pres.shapes.RECTANGLE, { x, y, w: 3.9, h: 0.15, fill: { color: k.color }, line: { color: k.color } });
    s.addText(k.n, {
      x: x + 0.1, y: y + 0.25, w: 3.7, h: 0.95,
      fontSize: 42, bold: true, color: k.color, align: "center", fontFace: "Calibri", margin: 0,
    });
    s.addText(k.label, {
      x: x + 0.1, y: y + 1.2, w: 3.7, h: 0.45,
      fontSize: 13, bold: true, color: C.darkGray, align: "center", fontFace: "Calibri", margin: 0,
    });
    s.addText(k.sub, {
      x: x + 0.1, y: y + 1.65, w: 3.7, h: 0.35,
      fontSize: 11, color: C.midGray, align: "center", fontFace: "Calibri Light", margin: 0,
    });
  });

  // 하단 주의사항
  s.addShape(pres.shapes.RECTANGLE, { x: 0.4, y: 6.45, w: 12.2, h: 0.7, fill: { color: "FFF8E1" }, line: { color: C.gold, width: 1 } });
  s.addText("⚠  무조건적 도입보다 적합한 작업 선별과 품질 게이트(Hooks) 설정이 필수", {
    x: 0.6, y: 6.52, w: 11.8, h: 0.5,
    fontSize: 12, color: "7A6000", align: "center", fontFace: "Calibri", margin: 0,
  });

  s.addNotes("171% ROI는 CFO/CEO에게 결정적. 하단 주의사항은 반드시 언급 — '올바른 도입 방법'으로 신뢰도 상승.");
}

// ─────────────────────────────────────────────────────────
// SLIDE 11: 모범 사례 5원칙
// ─────────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.gray };

  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 13.3, h: 1.15, fill: { color: C.navy }, line: { color: C.navy } });
  s.addText("효과를 3배로 만드는 에이전트 팀 구성 5원칙", {
    x: 0.4, y: 0.15, w: 12.5, h: 0.85,
    fontSize: 26, bold: true, color: C.white, fontFace: "Calibri", margin: 0,
  });

  const principles = [
    { n: "01", title: "팀 규모 최적화", body: "3~5명의 Sub-agent가 최적. Teammate당 5~6개 태스크", color: C.coral },
    { n: "02", title: "역할 명확화", body: "각 에이전트는 명확히 구분된 파일/모듈 소유. 보안/성능/테스트 역할 분리", color: C.teal },
    { n: "03", title: "작업 단위 최적화", body: "명확한 결과물을 갖는 독립 단위로 설계. 너무 작으면 오버헤드, 너무 크면 낭비", color: C.gold },
    { n: "04", title: "컨텍스트 공유", body: "CLAUDE.md로 팀 전체에 프로젝트 가이드라인 배포", color: "8B5CF6" },
    { n: "05", title: "품질 게이트 적용", body: "Hooks로 자동 품질 검사: 파일 편집 후 자동 Lint, .env 수정 차단", color: "059669" },
  ];

  principles.forEach((p, i) => {
    const y = 1.35 + i * 1.15;
    s.addShape(pres.shapes.RECTANGLE, { x: 0.4, y, w: 12.2, h: 1.0, fill: { color: C.white }, line: { color: "EEEEEE", width: 1 }, shadow: makeShadow() });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.4, y, w: 0.95, h: 1.0, fill: { color: p.color }, line: { color: p.color } });
    s.addText(p.n, { x: 0.4, y, w: 0.95, h: 1.0, fontSize: 18, bold: true, color: C.white, align: "center", valign: "middle", fontFace: "Calibri", margin: 0 });
    s.addText(p.title, {
      x: 1.55, y: y + 0.1, w: 3.0, h: 0.42,
      fontSize: 15, bold: true, color: p.color, fontFace: "Calibri", margin: 0,
    });
    s.addText(p.body, {
      x: 1.55, y: y + 0.5, w: 10.8, h: 0.42,
      fontSize: 13, color: C.darkGray, fontFace: "Calibri Light", margin: 0,
    });
  });

  s.addNotes("'품질 게이트'는 AI가 실수를 해도 자동으로 잡아준다는 안심 메시지. 보수적 의사결정자의 리스크 우려 해소.");
}

// ─────────────────────────────────────────────────────────
// SLIDE 12: 경쟁 도구 비교
// ─────────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.white };

  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 13.3, h: 1.15, fill: { color: C.navy }, line: { color: C.navy } });
  s.addText("AI 코딩 도구 3파전 — Claude Code가 선택받는 이유", {
    x: 0.4, y: 0.15, w: 12.5, h: 0.85,
    fontSize: 26, bold: true, color: C.white, fontFace: "Calibri", margin: 0,
  });

  // 테이블 헤더
  const cols = [{ label: "기준", w: 3.5, x: 0.4 }, { label: "Claude Code ★", w: 3.2, x: 3.95, highlight: true }, { label: "Cursor", w: 2.9, x: 7.2 }, { label: "GitHub Copilot", w: 3.0, x: 10.15 }];
  cols.forEach((col) => {
    const bg = col.highlight ? C.coral : C.navy;
    s.addShape(pres.shapes.RECTANGLE, { x: col.x, y: 1.3, w: col.w, h: 0.6, fill: { color: bg }, line: { color: bg } });
    s.addText(col.label, {
      x: col.x + 0.1, y: 1.35, w: col.w - 0.2, h: 0.5,
      fontSize: 14, bold: true, color: C.white, align: "center", fontFace: "Calibri", margin: 0,
    });
  });

  // 테이블 행
  const rows = [
    ["자율 에이전트 실행", "★★★ 최고", "★★ 강력", "★ 기본"],
    ["Sub-agent 내장", "✓ 기본 제공", "✗ 미지원", "제한적"],
    ["멀티파일 리팩토링", "최강", "강력", "기본"],
    ["개발자 선호도 1위", "46%", "19%", "9%"],
    ["월 구독료", "Pro $17 / Max $100+", "Pro $20", "$10"],
  ];

  rows.forEach((row, ri) => {
    const bg = ri % 2 === 0 ? C.gray : C.white;
    cols.forEach((col, ci) => {
      const cellBg = ci === 1 ? (ri % 2 === 0 ? "FFF0F0" : "FFE8E8") : bg;
      s.addShape(pres.shapes.RECTANGLE, { x: col.x, y: 1.92 + ri * 0.8, w: col.w, h: 0.78, fill: { color: cellBg }, line: { color: "DDDDDD", width: 0.5 } });
      s.addText(row[ci], {
        x: col.x + 0.1, y: 1.95 + ri * 0.8, w: col.w - 0.2, h: 0.65,
        fontSize: ci === 1 ? 13 : 13, bold: ci === 1, color: ci === 1 ? C.coral : C.darkGray,
        align: ci === 0 ? "left" : "center", fontFace: "Calibri", valign: "middle", margin: 0,
      });
    });
  });

  // 권장 시나리오 박스
  s.addShape(pres.shapes.RECTANGLE, { x: 0.4, y: 6.3, w: 12.2, h: 0.85, fill: { color: "FFF0F0" }, line: { color: C.coral, width: 1 } });
  s.addText("Claude Code 권장: 자율 에이전트 워크플로우 · 복잡한 리팩토링 · 최고 수준 추론이 필요한 경우", {
    x: 0.6, y: 6.4, w: 11.8, h: 0.6,
    fontSize: 13, color: C.coral, fontFace: "Calibri", align: "center", margin: 0,
  });

  s.addNotes("46% vs 19% vs 9% 숫자는 기억에 남음. 경쟁사를 깎아내리기보다 '용도에 맞는 선택'을 강조.");
}

// ─────────────────────────────────────────────────────────
// SLIDE 13: 도입 로드맵
// ─────────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.gray };

  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 13.3, h: 1.15, fill: { color: C.navy }, line: { color: C.navy } });
  s.addText("내일부터 시작할 수 있는 Claude Code 에이전트 팀 도입 로드맵", {
    x: 0.4, y: 0.15, w: 12.5, h: 0.85,
    fontSize: 22, bold: true, color: C.white, fontFace: "Calibri", margin: 0,
  });

  // 연결선
  s.addShape(pres.shapes.LINE, { x: 2.15, y: 2.0, w: 9.0, h: 0, line: { color: "CCCCCC", width: 2, dashType: "dash" } });

  const phases = [
    {
      label: "Week 1", sublabel: "파일럿 시작", color: C.coral, x: 0.4,
      items: ["Claude Code Pro 설치", "팀 1~2명 테스트", "반복 업무 하나 선정", "첫 Sub-agent 작성 (30분)"],
    },
    {
      label: "Month 1", sublabel: "팀 워크플로우 통합", color: C.teal, x: 4.65,
      items: ["3~5개 핵심 Sub-agent 구성", "Skills로 팀 컨벤션 코드화", "Hooks 품질 게이트 설정", "팀 전체 온보딩"],
    },
    {
      label: "Month 3", sublabel: "조직 전체 확산", color: "8B5CF6", x: 8.9,
      items: ["Agent Teams 활성화", "사내 Skills 라이브러리 구축", "ROI 측정 및 경영진 보고", "지속적 최적화"],
    },
  ];

  phases.forEach((ph) => {
    // 타임라인 노드
    s.addShape(pres.shapes.OVAL, { x: ph.x + 1.55, y: 1.65, w: 0.7, h: 0.7, fill: { color: ph.color }, line: { color: ph.color }, shadow: makeShadow() });
    s.addShape(pres.shapes.LINE, { x: ph.x + 1.9, y: 2.35, w: 0, h: 0.35, line: { color: ph.color, width: 2 } });

    s.addShape(pres.shapes.RECTANGLE, { x: ph.x, y: 2.7, w: 3.9, h: 4.35, fill: { color: C.white }, line: { color: ph.color, width: 2 }, shadow: makeShadow() });
    s.addShape(pres.shapes.RECTANGLE, { x: ph.x, y: 2.7, w: 3.9, h: 0.65, fill: { color: ph.color }, line: { color: ph.color } });
    s.addText(ph.label, {
      x: ph.x + 0.1, y: 2.75, w: 2.0, h: 0.55,
      fontSize: 17, bold: true, color: C.white, fontFace: "Calibri", margin: 0,
    });
    s.addText(ph.sublabel, {
      x: ph.x + 0.1, y: 3.45, w: 3.7, h: 0.4,
      fontSize: 13, bold: true, color: ph.color, fontFace: "Calibri", margin: 0,
    });
    ph.items.forEach((item, j) => {
      s.addShape(pres.shapes.RECTANGLE, { x: ph.x + 0.18, y: 3.95 + j * 0.7, w: 0.06, h: 0.3, fill: { color: ph.color }, line: { color: ph.color } });
      s.addText(item, {
        x: ph.x + 0.38, y: 3.93 + j * 0.7, w: 3.4, h: 0.35,
        fontSize: 13, color: C.darkGray, fontFace: "Calibri", margin: 0,
      });
    });
  });

  // 하단 강조
  s.addShape(pres.shapes.RECTANGLE, { x: 0.4, y: 7.05, w: 12.2, h: 0.12, fill: { color: C.coral }, line: { color: C.coral } });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.4, y: 6.45, w: 12.2, h: 0.55, fill: { color: "FFF0F0" }, line: { color: C.coral, width: 1 } });
  s.addText("💰  시작 비용: Claude Code Pro $17/월  +  팀원 반나절", {
    x: 0.6, y: 6.5, w: 11.8, h: 0.42,
    fontSize: 14, bold: true, color: C.coral, align: "center", fontFace: "Calibri", margin: 0,
  });

  s.addNotes("'오늘 발표 끝나고 30분 안에 첫 번째 Sub-agent를 만들 수 있습니다.' Month 1에 이미 가시적 효과 강조.");
}

// ─────────────────────────────────────────────────────────
// SLIDE 14: 클로징 CTA
// ─────────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.navy };

  // 장식
  s.addShape(pres.shapes.OVAL, { x: -2.0, y: -2.0, w: 9.0, h: 9.0, fill: { color: "162050" }, line: { color: "162050" } });
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 13.3, h: 0.25, fill: { color: C.coral }, line: { color: C.coral } });
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 7.25, w: 13.3, h: 0.25, fill: { color: C.coral }, line: { color: C.coral } });

  s.addText("지금 도입하지 않으면\n경쟁사가 먼저 한다", {
    x: 0.5, y: 0.5, w: 8.5, h: 2.2,
    fontSize: 36, bold: true, color: C.white, fontFace: "Calibri", lineSpacingMultiple: 1.2, margin: 0,
  });

  // 통계 3개
  const closingStats = [
    { n: "40%", label: "2026년까지 에이전트 포함\n엔터프라이즈 앱 비율 (Gartner)" },
    { n: "93%", label: "자율 에이전트 도입 의향\nIT 리더 비율" },
    { n: "46.2%", label: "엔터프라이즈 AI 에이전트 시장\nCAGR (2024~2030)" },
  ];
  closingStats.forEach((st, i) => {
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5 + i * 2.8, y: 3.0, w: 2.6, h: 2.2, fill: { color: "162050" }, line: { color: C.coral, width: 1.5 }, shadow: makeShadow() });
    s.addText(st.n, {
      x: 0.5 + i * 2.8, y: 3.1, w: 2.6, h: 0.9,
      fontSize: 32, bold: true, color: C.coral, align: "center", fontFace: "Calibri", margin: 0,
    });
    s.addText(st.label, {
      x: 0.5 + i * 2.8, y: 4.05, w: 2.6, h: 1.0,
      fontSize: 11, color: C.iceBlue, align: "center", fontFace: "Calibri Light", lineSpacingMultiple: 1.3, margin: 0,
    });
  });

  // 인용구
  s.addShape(pres.shapes.RECTANGLE, { x: 9.0, y: 1.3, w: 4.0, h: 2.8, fill: { color: "162050" }, line: { color: C.teal, width: 1 } });
  s.addText('"', { x: 9.1, y: 1.3, w: 0.7, h: 0.8, fontSize: 44, color: C.teal, fontFace: "Georgia", margin: 0 });
  s.addText("Claude는 동료에게 물었던 질문의 80~90%를 처리해준다.", {
    x: 9.1, y: 1.9, w: 3.8, h: 1.3,
    fontSize: 13, italic: true, color: C.iceBlue, fontFace: "Calibri Light", lineSpacingMultiple: 1.4, margin: 0,
  });
  s.addText("— Anthropic 엔지니어", {
    x: 9.1, y: 3.3, w: 3.8, h: 0.4,
    fontSize: 11, bold: true, color: C.teal, fontFace: "Calibri", margin: 0,
  });

  // CTA 영역
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 5.4, w: 8.2, h: 1.75, fill: { color: C.coral }, line: { color: C.coral }, shadow: makeShadow() });
  s.addText("지금 시작하세요", {
    x: 0.7, y: 5.5, w: 7.8, h: 0.55,
    fontSize: 20, bold: true, color: C.white, fontFace: "Calibri", margin: 0,
  });
  s.addText("claude.ai/code  →  Claude Code Pro $17/월로 시작\n오늘 미팅 후 30분, 첫 번째 Sub-agent를 함께 만들어보실 분?", {
    x: 0.7, y: 6.08, w: 7.8, h: 0.9,
    fontSize: 13, color: C.white, fontFace: "Calibri Light", lineSpacingMultiple: 1.3, margin: 0,
  });

  s.addNotes("마지막 슬라이드: 긴박감(지금 하지 않으면 뒤처짐) + 희망(지금 바로 시작 가능). '오늘 미팅 후 30분, 저와 함께 첫 Sub-agent를 만들어 보시겠습니까?'");
}

// ─── 파일 저장 ───
pres.writeFile({ fileName: "presentation.pptx" })
  .then(() => console.log("✅ presentation.pptx 생성 완료!"))
  .catch((err) => console.error("❌ 오류:", err));

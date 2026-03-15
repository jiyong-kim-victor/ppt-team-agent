---
name: frontend-design
description: Create distinctive, production-grade frontend interfaces with high design quality. Use this skill when the user asks to build web components, pages, artifacts, posters, or applications (examples include websites, landing pages, dashboards, React components, HTML/CSS layouts, or when styling/beautifying any web UI). Generates creative, polished code and UI design that avoids generic AI aesthetics.
license: Complete terms in LICENSE.txt
---

This skill guides creation of distinctive, production-grade frontend interfaces that avoid generic "AI slop" aesthetics. Implement real working code with exceptional attention to aesthetic details and creative choices.

The user provides frontend requirements: a component, page, application, or interface to build. They may include context about the purpose, audience, or technical constraints.

## Design Thinking

Before coding, understand the context and commit to a BOLD aesthetic direction:
- **Purpose**: What problem does this interface solve? Who uses it?
- **Tone**: Pick an extreme: brutally minimal, maximalist chaos, retro-futuristic, organic/natural, luxury/refined, playful/toy-like, editorial/magazine, brutalist/raw, art deco/geometric, soft/pastel, industrial/utilitarian, etc. There are so many flavors to choose from. Use these for inspiration but design one that is true to the aesthetic direction.
- **Constraints**: Technical requirements (framework, performance, accessibility).
- **Differentiation**: What makes this UNFORGETTABLE? What's the one thing someone will remember?

**CRITICAL**: Choose a clear conceptual direction and execute it with precision. Bold maximalism and refined minimalism both work - the key is intentionality, not intensity.

Then implement working code (HTML/CSS/JS, React, Vue, etc.) that is:
- Production-grade and functional
- Visually striking and memorable
- Cohesive with a clear aesthetic point-of-view
- Meticulously refined in every detail

## Frontend Aesthetics Guidelines

Focus on:
- **Typography**: Choose fonts that are beautiful, unique, and interesting. Avoid generic fonts like Arial and Inter; opt instead for distinctive choices that elevate the frontend's aesthetics; unexpected, characterful font choices. Pair a distinctive display font with a refined body font.
- **Color & Theme**: Commit to a cohesive aesthetic. Use CSS variables for consistency. Dominant colors with sharp accents outperform timid, evenly-distributed palettes.
- **Motion**: Use animations for effects and micro-interactions. Prioritize CSS-only solutions for HTML. Use Motion library for React when available. Focus on high-impact moments: one well-orchestrated page load with staggered reveals (animation-delay) creates more delight than scattered micro-interactions. Use scroll-triggering and hover states that surprise.
- **Spatial Composition**: Unexpected layouts. Asymmetry. Overlap. Diagonal flow. Grid-breaking elements. Generous negative space OR controlled density.
- **Backgrounds & Visual Details**: Create atmosphere and depth rather than defaulting to solid colors. Add contextual effects and textures that match the overall aesthetic. Apply creative forms like gradient meshes, noise textures, geometric patterns, layered transparencies, dramatic shadows, decorative borders, custom cursors, and grain overlays.

NEVER use generic AI-generated aesthetics like overused font families (Inter, Roboto, Arial, system fonts), cliched color schemes (particularly purple gradients on white backgrounds), predictable layouts and component patterns, and cookie-cutter design that lacks context-specific character.

Interpret creatively and make unexpected choices that feel genuinely designed for the context. No design should be the same. Vary between light and dark themes, different fonts, different aesthetics. NEVER converge on common choices (Space Grotesk, for example) across generations.

**IMPORTANT**: Match implementation complexity to the aesthetic vision. Maximalist designs need elaborate code with extensive animations and effects. Minimalist or refined designs need restraint, precision, and careful attention to spacing, typography, and subtle details. Elegance comes from executing the vision well.

Remember: Claude is capable of extraordinary creative work. Don't hold back, show what can truly be created when thinking outside the box and committing fully to a distinctive vision.

---

## PPT 프리젠테이션 컨텍스트

`/frontend-design` 스킬로 HTML 슬라이드를 생성할 때 아래 지침을 **반드시** 따르세요.

### 1단계: 콘텐츠 파악

1. `output/content.md` — 슬라이드 구조 및 레이아웃 지시사항 파악
2. `output/research.md` — 실제 데이터·통계·인용구 확인

### 2단계: 폰트 — Pretendard 고정 사용 (필수)

**모든 HTML 슬라이드에서 Pretendard를 반드시 사용합니다.** 다른 본문 폰트로 대체하지 마세요.

```html
<link rel="stylesheet" as="style" crossorigin
  href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css" />
```

```css
:root {
  --font-sans: 'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif;
}

body, * {
  font-family: var(--font-sans);
}
```

디스플레이 폰트(제목용 대형 텍스트)는 Google Fonts에서 어울리는 serif 또는 display 폰트를 **추가로** 조합할 수 있습니다. 단, 본문·설명·UI 레이블은 반드시 Pretendard.

### 3단계: 슬라이드 구조 구현

#### 기본 HTML 뼈대

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>프레젠테이션 제목</title>
  <link rel="stylesheet" crossorigin
    href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css" />
  <!-- 추가 디스플레이 폰트 (선택) -->
  <style>/* 모든 스타일 인라인 */</style>
</head>
<body>
  <div class="presentation">
    <div class="slide active" data-slide="1"> <!-- 각 슬라이드 --> </div>
    <!-- ... -->
  </div>

  <!-- 네비게이션 UI -->
  <div class="nav-bar">
    <button class="nav-btn" id="prev">←</button>
    <span class="slide-counter"><span id="current">1</span> / <span id="total">N</span></span>
    <button class="nav-btn" id="next">→</button>
  </div>
  <div class="progress-bar"><div class="progress-fill" id="progress"></div></div>

  <!-- 발표자 노트 패널 (N키 토글) -->
  <div class="notes-panel" id="notes" hidden>
    <div class="notes-content" id="notes-content"></div>
  </div>

  <script>/* 모든 JS 인라인 */</script>
</body>
</html>
```

#### 슬라이드 비율 및 레이아웃

```css
/* 16:9 고정 비율 — 반드시 유지 */
.presentation {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0a0a0a;
}

.slide {
  width: min(100vw, 177.78vh); /* 16:9 */
  height: min(56.25vw, 100vh);
  position: relative;
  overflow: hidden;
  display: none;
}

.slide.active { display: flex; }
```

#### 레이아웃 패턴 (content.md의 레이아웃 지시에 따라 적용)

| content.md 레이아웃 지시 | 구현 방식 |
|---|---|
| 풀스크린 타이틀 | flex + column, 제목 중앙 배치, 배경 full-bleed |
| 좌우 2분할 | CSS grid `1fr 1fr`, 구분선 또는 색상 대비 |
| 3열 카드 | CSS grid `repeat(3, 1fr)`, 카드 컴포넌트 |
| 허브-스포크 다이어그램 | SVG 또는 CSS absolute positioning |
| 타임라인 | flex row + 연결선, 단계별 번호 |
| 대형 수치 카드 그리드 | CSS grid `repeat(3, 1fr)`, 큰 숫자 강조 |
| 비교 테이블 | HTML table + 강조 열 CSS |
| 워크플로우 플로우차트 | flex row + 화살표 CSS/SVG |
| 코드 예시 박스 | `<pre><code>` + 다크 배경, monospace |

### 4단계: 네비게이션 (완전한 구현)

```javascript
const slides = document.querySelectorAll('.slide');
const notes = [/* 각 슬라이드 발표자 노트 배열 */];
let current = 0;

function goTo(n) {
  slides[current].classList.remove('active');
  current = Math.max(0, Math.min(n, slides.length - 1));
  slides[current].classList.add('active');
  document.getElementById('current').textContent = current + 1;
  document.getElementById('progress').style.width =
    `${((current + 1) / slides.length) * 100}%`;
  document.getElementById('notes-content').textContent = notes[current] || '';
  // 슬라이드 진입 애니메이션 트리거
  slides[current].querySelectorAll('[data-animate]').forEach((el, i) => {
    el.style.animationDelay = `${i * 0.1}s`;
    el.classList.remove('animated');
    void el.offsetWidth; // reflow
    el.classList.add('animated');
  });
}

// 키보드
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight' || e.key === 'Space') goTo(current + 1);
  if (e.key === 'ArrowLeft') goTo(current - 1);
  if (e.key === 'n' || e.key === 'N') {
    const panel = document.getElementById('notes');
    panel.hidden = !panel.hidden;
  }
  if (e.key === 'Home') goTo(0);
  if (e.key === 'End') goTo(slides.length - 1);
});

// 버튼
document.getElementById('prev').addEventListener('click', () => goTo(current - 1));
document.getElementById('next').addEventListener('click', () => goTo(current + 1));

// 터치 스와이프
let touchStartX = 0;
document.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; });
document.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(dx) > 50) goTo(current + (dx < 0 ? 1 : -1));
});

document.getElementById('total').textContent = slides.length;
goTo(0);
```

### 5단계: 애니메이션 원칙

- 슬라이드 전환: `opacity` + `transform: translateY(12px)` fade-up (200ms ease-out)
- 콘텐츠 진입: `data-animate` 속성 요소들을 staggered delay로 순차 등장
- 수치 카드: 큰 숫자는 counter 애니메이션 (`@keyframes count-up` 또는 JS requestAnimationFrame)
- 다이어그램: SVG `stroke-dashoffset` 드로잉 애니메이션
- **과하지 않게**: 슬라이드당 진입 애니메이션 1~2종류로 제한

### 6단계: 디자인 토큰 (CSS 변수 필수)

```css
:root {
  /* 색상 — content.md 주제에 맞게 결정 */
  --bg-primary: #0d0d0d;
  --bg-surface: #1a1a1a;
  --accent: #e85d2f;       /* 주요 강조색 */
  --accent-2: #f5c842;     /* 보조 강조색 */
  --text-primary: #f0ede8;
  --text-muted: #888;
  --border: rgba(255,255,255,0.08);

  /* 타이포그래피 */
  --font-sans: 'Pretendard', -apple-system, sans-serif;
  --font-display: 'display폰트명', serif; /* 선택적 추가 */

  /* 간격 */
  --slide-pad: clamp(2rem, 5vw, 4rem);
}
```

### 출력 파일 및 품질 체크리스트

- **출력**: `output/presentation.html` (단일 파일, 모든 CSS·JS 인라인)
- **폰트**: Pretendard CDN 링크 포함 여부 확인
- **비율**: 16:9 유지 여부 확인
- **네비게이션**: 키보드(←→ Space N Home End) + 버튼 + 터치 작동 확인
- **슬라이드 수**: content.md의 슬라이드 수와 일치 확인
- **발표자 노트**: N키 토글 패널에 content.md 노트 내용 포함
- **진행 표시**: 상단/하단 progress bar + 슬라이드 번호 표시

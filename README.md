# PPT Team Agent

Claude Code의 Sub-agent와 Skill 기능으로 구성된 PPT 자동 제작 팀.

## 구조

```
ppt_team_agent/
├── CLAUDE.md                          # 오케스트레이션 지침
├── output/                            # 생성 결과물
└── .claude/
    ├── agents/
    │   ├── research-agent.md          # 웹 리서치 서브에이전트
    │   └── content-agent.md          # 슬라이드 자료정리 서브에이전트
    └── skills/
        ├── pptx/                      # 공식 PPTX 스킬 (anthropics/skills)
        │   ├── SKILL.md
        │   ├── editing.md
        │   └── pptxgenjs.md
        └── frontend-design/           # 공식 HTML 디자인 스킬 (anthropics/skills)
            └── SKILL.md
```

## 워크플로우

```
[사용자 요청]
      ↓
[research-agent]  WebSearch + WebFetch → output/research.md
      ↓  (Task 도구로 순차 실행)
[content-agent]   Read + Write → output/content.md
      ↓
[사용자가 스킬 실행]
  /pptx             → output/presentation.pptx
  /frontend-design  → output/presentation.html
```

## 사용법

Claude Code를 이 디렉토리에서 실행한 후:

```
"AI 트렌드 2026에 대한 PPT 만들어줘"
```

Claude Code가 자동으로:
1. `research-agent`로 웹 리서치 수행
2. `content-agent`로 슬라이드 구조 정리
3. `/pptx` 또는 `/frontend-design` 스킬 사용 안내

## 의존성

PPTX 생성 시:
```bash
npm install -g pptxgenjs
pip install "markitdown[pptx]"
```

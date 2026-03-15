# PPT Team Agent

PPT 제작을 자동화하는 Claude Code 에이전트 팀입니다.

## 팀 구성

| 역할 | 방식 | 담당 |
|------|------|------|
| 리서치 | Sub-agent (Task 도구) | `research-agent` |
| 자료 정리 | Sub-agent (Task 도구) | `content-agent` |
| PPTX 생성 | Skill (`/pptx`) | `pptx` 스킬 |
| HTML 슬라이드 | Skill (`/frontend-design`) | `frontend-design` 스킬 |

## 표준 워크플로우

사용자가 PPT 제작을 요청하면 다음 순서로 실행하세요:

### 1단계: 리서치 (Task 도구로 research-agent 호출)

```
Task: research-agent에게 "[주제]"에 대한 심층 리서치를 요청하고
      결과를 output/research.md에 저장하도록 지시하세요.
```

### 2단계: 자료 정리 (Task 도구로 content-agent 호출)

리서치가 완료된 후:
```
Task: content-agent에게 output/research.md를 읽고
      슬라이드 구조를 output/content.md에 저장하도록 지시하세요.
```

### 3단계: 사용자 안내

두 에이전트 완료 후 사용자에게 안내:
```
콘텐츠 준비 완료!

생성된 파일:
- output/research.md  (리서치 결과)
- output/content.md   (슬라이드 구성)

다음 스킬로 최종 파일을 생성하세요:
- PowerPoint 파일: /pptx
- HTML 슬라이드:   /frontend-design
```

## 사용 예시

```
사용자: "AI 트렌드 2026에 대한 PPT 만들어줘"

→ 1. research-agent로 AI 트렌드 리서치
→ 2. content-agent로 슬라이드 구조화
→ 3. 사용자에게 /pptx 또는 /frontend-design 안내
```

## output/ 디렉토리

모든 에이전트 결과물은 `output/` 에 저장됩니다:
- `output/research.md` — 리서치 결과
- `output/content.md` — 슬라이드 콘텐츠 구조
- `output/presentation.pptx` — 최종 PPTX (스킬 실행 후)
- `output/presentation.html` — 최종 HTML (스킬 실행 후)

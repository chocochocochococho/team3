# 웹개발 3팀 ToDo 앱 Toy-Project width React.js

## 주요 사용 터미널 명령

- `npm start` : 개발서버 진입
- `ctrl + c` : 터미널 종료
- `git pull` : pull(작업 전, 커밋 전 필수)
- `npm i` : 작업 전, 패키지 설치 업데이트(없을 수도 있음)

## 작업 메인 페이지

- `todo/src/App.js`
- `todo/src/index.css`

## 컴포넌트 작업

- `todo/src/components/` 폴더 안에 각 컴포넌트 명 파일 생성해서 작업(각자 폴더 생성)
- 컴포넌트명 직관적으로, 파스칼케이스

컴포넌트 목록

`TodoTemplate`
투두리스트 전체 레이아웃

`TodoHead`
투두리스트 헤더 ( 요소는 담당자 마음대로 e.g.오늘날짜, 앞으로 남은 할일갯수 ...)

`TodoList`
투두리스트 아이템을 리스트로 나타낼 컴포넌트

`TodoItem`
투두리스트 아이템 컴포넌트. 체크버튼, 삭제버튼 필수

`TodoCreate`
투두리스트 작성 컴포넌트
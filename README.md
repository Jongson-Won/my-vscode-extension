# My VS Code Extension

이것은 VS Code extension 샘플 프로젝트입니다.

## 기능

이 extension은 다음과 같은 기능을 제공합니다:

- `Hello World` 명령어 실행 시 메시지 박스를 표시합니다.

## 사용 방법

1. `Ctrl+Shift+P` (Mac: `Cmd+Shift+P`)를 눌러 명령 팔레트를 엽니다.
2. `Hello World`를 입력하고 선택합니다.
3. 메시지 박스가 표시됩니다.

## 개발 방법

### 설치

```bash
npm install
```

### 실행

1. VS Code에서 이 프로젝트를 엽니다.
2. `F5`를 눌러 새로운 VS Code 창에서 extension을 실행합니다.
3. 새 창에서 명령 팔레트를 열고 `Hello World` 명령을 실행합니다.

### 빌드

```bash
npm run compile
```

### 패키징

```bash
npm install -g @vscode/vsce
vsce package
```

## 요구 사항

- VS Code 1.74.0 이상
- Node.js 16.x 이상

## Extension 설정

이 extension은 현재 추가 설정을 제공하지 않습니다.

## 알려진 문제

없음

## 릴리스 노트

### 0.0.1

초기 릴리스 
# 개인 포트폴리오 웹사이트

이 프로젝트는 React를 사용하여 구축된 개인 포트폴리오 웹사이트입니다. 수평 스크롤 기능을 통해 여러 섹션을 탐색할 수 있도록 구현하였습니다.

## 주요 기능

- **수평 스크롤 네비게이션**: 사용자는 마우스 휠을 사용하여 다양한 섹션을 좌우로 탐색할 수 있습니다.
- **다중 섹션**: Main, Education, Skills & Certificates, Projects 등 여러 섹션으로 구성되어 있습니다.

## 기술 스택

- React
- TailwindCSS
- JavaScript (ES6+)

## 프로젝트 구조

public/<br />
├── images/<br />
│   ├── icons/<br />
│   ├── projects/<br />
│   └── skills/<br />
src/<br />
├── components/<br />
│   ├── Nav.jsx<br />
│   ├── Main.jsx<br />
│   ├── Education.jsx<br />
│   ├── Skill.jsx<br />
│   ├── Certificate.jsx<br />
│   ├── Project.jsx<br />
│   └── ScrollMessage.jsx<br />
├── App.js<br />
└── App.css<br />
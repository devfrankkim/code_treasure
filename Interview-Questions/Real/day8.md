### What is a Polyfill?

- A polyfill is essentially the specific code (or plugin) that would allow you to have some specific functionality that you expect in current or “modern” browsers to also work in other browsers that do not have the support for that functionality built in.
- Polyfills are not part of the HTML5 standard
- Polyfilling is not limited to Javascript
- 브라우저가 지원하지 않는 자바스크립트 코드를 지원 가능하도록 변환한 코드를 뜻한다.
- 하위 브라우저가 지원하는 자바스크립트 코드를 사용해 자바스크립트의 최신 기능을 똑같이 구하는 방식
- polyfill 위한 트랜스파일러는 Babel이 있다. Babel 내부에는 core-js라는 라이브러리가 탑재되어 \*ES6 이후의 문법들을 polyfill 처리할 수 있다.
- 하위 버전 문법을 새로운 버전에 맞게 맞춰주는 신기한 아이다.

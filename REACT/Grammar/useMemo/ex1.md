### useMemo 자식 컴포넌트 모두, 렌더링 안되게 막을 수 있음.

- https://codesandbox.io/s/optimistic-sinoussi-0w413h?file=/src/Info.js:0-1066

```js
import React, { useMemo } from "react";
import "./styles.css";

const getColorKor = (color) => {
  console.log("getColorKor");
  switch (color) {
    case "red":
      return "빨강";
    case "orange":
      return "주황";
    case "yellow":
      return "노랑";
    case "green":
      return "초록";
    case "blue":
      return "파랑";
    case "navy":
      return "남";
    case "purple":
      return "보라";
    default:
      return "레인보우";
  }
};

const getMovieGenreKor = (movie) => {
  console.log("getMovieGenreKor");
  switch (movie) {
    case "Marriage Story":
      return "드라마";
    case "The Fast And The Furious":
      return "액션";
    case "Avengers":
      return "슈퍼히어로";
    default:
      return "아직 잘 모름";
  }
};

const Info = ({ color, movie }) => {
  // 타이핑친,
  // 의존성 배열이, 변경된 부분만 -> [color, movie] 렌더링 됨.
  const colorKor = useMemo(() => getColorKor(color), [color]);
  const movieGenreKor = useMemo(() => getMovieGenreKor(movie), [movie]);

  return (
    <div className="info-wrapper">
      제가 가장 좋아하는 색은 {colorKor} 이고, <br />
      즐겨보는 영화 장르는 {movieGenreKor} 입니다.
    </div>
  );
};

export default Info;
```

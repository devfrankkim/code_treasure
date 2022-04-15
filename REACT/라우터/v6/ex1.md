## URL 파라미터

- https://velog.io/@velopert/react-router-v6-tutorial

```js
// src/pages/Profile.js

import { useParams } from "react-router-dom";

const data = {
  canadian: {
    name: "Frank",
    description: "리액트를 좋아하는 개발자",
  },
  korean: {
    name: "KH",
    description: "movie 주인공",
  },
};

const Profile = () => {
  const params = useParams();
  const profile = data[params.username];

  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
};

export default Profile;
```

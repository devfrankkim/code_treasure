# (Container -> Presenter -> propTypes) Design Pattern

1. Container에서 Presenter로 보내주는 props들을 확인한다.  
   (Check the props in Container.)

2. props 타입들을 확인해준다 ex) array, boolean, string  
   (Check the prop types)

3. Require가 어떤 props들이 isRequired 인지 확인한다.  
   (Check if the prop is required)  
   ex) Presenter.propTypes = {  
   loading: PropTypes.boolean.isRequired,  
   }

[Presenter.js]

```js
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// this will have some props
const TVPresenter = ({ topRated, popular, airingToday, loading, error }) =>
  null;

// 여기서 받은 props들을 체크한다.
TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  loading: PropTypes.boolean.isRequired,
  error: PropTypes.string
};

export default TVPresenter;
```

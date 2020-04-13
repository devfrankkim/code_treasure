# what is Children in React? How to use children?

Reserved React props.
`Children => It is used to display whatever you include between the opening and closing tags when invoking a component.`

CHILDREN=>
[HomePresenter.js]
HomePresenter Container에게 padding을 준다.

Container => title => grid => children

**컴포넌트안에서 직접적으로 부모역할로 children props를 전달하는 방법을 추천하지 않는다**
`ex)Not Recomended <Section title="Now Playing" children={}>`
이런 방식으로 childrend을 전달하지 않는다.

REACT에서 children은 일반적으로 태그 사이의 값을 받는다. childrent is the value between tags
`<Section> CHILDREN </Section>`

```js
import Section from "Components/Section";

const Container = styled.div`
  padding: 0px 10px;
`;
const HomePresenter = ({ nowPlaying, popular, loading }) => {
  loading ? null : (
    <Container>
      // nowPlaying exists && nowPlaying has data && and then render the data
      {nowPlaying && nowPlaying.length > 0 && (
        // <Section title="Now Playing">CHILDREN</Section>
        <Section title="Now Playing">
          {nowPlaying.map(movie => movie.title)}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular Movies">
          {popular.map(movie => movie.title)}
        </Section>
      )}
    </Container>
  );
};
```

[Seciton.js]

```js
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components"

const Container = styled.div``;
const Title = styled.span``;
const Grid = styled.div``;

const Section = ({title, children})=>{
  <Container>
    <Title>{title}</Titlte>
    <Grid>{children}</Grid> //MOVIE CHILDRENS
  </Container>
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(React.PropTypes.node),
    PropTypes.node
  ])
};

// propTypes used to be inside React
// propTypes: {
//     children: React.PropTypes.oneOfType([
//       React.PropTypes.arrayOf(React.PropTypes.node),
//       React.PropTypes.node
//     ])
//   }

export default Section;
```

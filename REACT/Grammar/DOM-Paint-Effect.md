## DOM -> Paint -> Effect

- https://thoughtspile.github.io/2021/11/15/unintentional-layout-effect/

(A)

- In a normal flow, react updates go like this:

1. React stuff: render virtual DOM, schedule effects, update real DOM

2. Call useLayoutEffect

3. React releases control, browser paints the new DOM

4. Call useEffect

(B)

[Source: https://reactjs.org/docs/hooks-reference.html#useeffect]

Timing of effects:

- Unlike componentDidMount and componentDidUpdate, the function passed to useEffect fires after layout and paint, during a deferred event.

- Although useEffect is deferred until after the browser has painted, it’s guaranteed to fire before any new renders. React will always flush a previous render’s effects before starting a new update.

* An update can start before paint, e.g. when triggered from useLayoutEffect, then the effect must be flushed before that update, which is before paint.

(C)

`// We use the postMessage trick to defer idle work until after the repaint.`
Source:

- React/scheduler/src/forks/SchedulerHostConfig.default.js
- https://stackoverflow.com/questions/56727477/react-how-does-react-make-sure-that-useeffect-is-called-after-the-browser-has-h/56727837#56727837

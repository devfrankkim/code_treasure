## Explain event bubbling and how one may prevent it

- Event bubbling is the concept in which an event triggers at the deepest possible element, and triggers on parent elements in nesting order.
- As a result, when clicking on a child element one may exhibit the handler of the parent activating.
- One way to prevent event bubbling is using event.stopPropagation() or event.cancelBubble on IE < 9.

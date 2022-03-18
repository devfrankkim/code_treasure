### useLayoutEffect

- DOM -> useLayoutEffect 실행 -> 화면에 painting.ex) CSS properties

- Runs `synchronously` between when react calculates your DOM and when it paints it out to the screen. DOM계산 ——> 화면에 보여주기 전에 실행된다.
- React → DOM —→ `useLayoutEffect` —→ Browser
- Perfect do something based on the layout of your DOM.
- ex)
- Measure DOM elements
- move things in the DOM that are going to be visible to the user.

```js
const [show, setShow] = useState(false);
const popUp = useRef();
const button = useRef();

// useEffect: DOM changes -> 화면 painting -> useEffect 실행됨.
// useLayoutEffect: DOM -> useLayoutEffect -> 화면에 painting.
// DOM을 직접 바꾼 후 브라우저에 띄우기 전에 실행됨 -> user가 깨끗하게 바로 확인할 수 있다.

useLayoutEffect (()=> {
    console.log('useLayoutEffect runs before DOM paints the browser')
	if(popup.current === null || button.current === null ) return;
	const {bottom} = button.current.getBoundingClientRect();
  popup.current.style.top = `${bottom + 25}px` // 먼저 실행되면서 세팅함.

, [show]}

useEffect(()=>{
 console.log('useEffect rus after DOM paints the browser')
}, [])
return(
	<>
		<button ref={button} onClick={()=> setShow(prev => !prev}>
    	Click here
    </button>
		{
			show &&
				(
					<div style={{ position: 'absolute'}} ref={popup} >
						This is a popup
				  </div>
				)
		}
	</>
)
```

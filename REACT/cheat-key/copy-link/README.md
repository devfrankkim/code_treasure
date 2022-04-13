```js
const [shareLinkCopies, setShareLinkCopies] = useState(false)

// 링크 카피.
<button
  onClick={() => {
    navigator.clipboard.writeText(window.location.href);
    setShareLinkCopied(true);
    setTimeout(() => {
      setShareLinkCopies(false);
    }, 2000);
  }}
>
  Wanna share?
</button>;

{
  shareLinkCopied && <p> Link Copied! </p>;
}
```

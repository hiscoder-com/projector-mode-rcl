A hook that helps to show a preview of the second screen.
<br/>
For the preview, we create an iframe on the page with the same url as the second window.
<br/>
The iframe listens for the localstorage change event.
<br/>
We track the resize of the second window and make the iframe the same size.
<br/>
For scaling, use the css property transform: scale()
<br/>
We also listen to the screen scroll in the iframe in order to scroll synchronously on the second screen

```js {"file":"./usePreview.js"}

```

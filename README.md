# detectAnimationEnd

## How to use it

    head over to https://www.npmjs.com/
    - npm install detectAnimationEnd --save
    - import it: import detectAnimationEnd from 'detectAnimationEnd'; (you might use require).

## Example Usage

Get a reference to your element, and then add an eventListener on it. How you do that is up to you, but here is an example.

```javascript
  const eventEnd = detectAnimationEnd();
  document.querySelector(YOURSELECTOR).addEventListener(eventEnd.animation, () => {
    callback(); // whatever your callbabck is.
  })
```
Note: the 'effectEvent.animation' above is for 'animation'. For 'transition', it would be 'effectEvent.transition'



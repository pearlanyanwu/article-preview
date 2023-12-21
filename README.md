# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

![Article Preview](article_preview.png)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- JS

### What I learned

In this project, I learned how to implement hide/show functionality on a popup element using JS DOM manipulation.

```html
<i class="fa fa-share" alt="share.svg" id="share-button"></i>
  <span id="popup">
    <div class="popup-content">
      <label> Share </label>
    </div>
    <div class="popup-content">
      <img src="images/icon-facebook.svg" alt="facebook" class="icons">
      <img src="images/icon-twitter.svg" alt="twitter" class="icons">
      <img src="images/icon-pinterest.svg" alt="pinterest" class="icons">
    </div>
  </span>
```
```css
span {
  visibility: hidden;
}
.showApps {
  visibility: visible;
}
```
```js
const shareButton = document.getElementById("share-button");
const popup = document.getElementById("popup");

shareButton.addEventListener("click", () => {
  popup.classList.toggle("showApps");
});
```

### Useful resources

- [w3schools.com](https://www.w3schools.com/howto/howto_js_popup.asp) - This helped me create the popup and its functionality.

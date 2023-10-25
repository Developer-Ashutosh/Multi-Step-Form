# Frontend Mentor - Multi-step form solution

This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/solutions/multi-step-form-hBGOZJUC09). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Complete each step of the sequence
- Go back to a previous step to update their selections
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Receive form validation messages if:
  - A field has been missed
  - The email address is not formatted correctly
  - A step is submitted, but no selection has been made

### Links

- Solution URL: [Multi Step Form](https://www.frontendmentor.io/solutions/multi-step-form-hBGOZJUC09)
- Live Site URL: [Multi Step Form](https://developer-ashutosh.github.io/Multi-Step-Form/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

```css
text-decoration-thickness: px ;
About !important 
```

```js
/^[A-Za-z\s]+$/.test();

.classList.add("");
.classList.remove("");
.classList.toggle("");
.classList.contains("");

let addOnHTML = "";
    selectedAddOns.forEach((addOn) => {
        addOnHTML += `
                <div class="add-on">
                    <div class="name">${addOn.querySelector("label h3").innerText}</div>
                    <div class="price">
                        +$<span class="value">${addOn.querySelector(".add-on-price").innerText}</span><span class="subscription">/mo</span>
                    </div>
                </div>
            `;
    });
    planAddOnSection.innerHTML = addOnHTML;
```

## Author

- GitHub - [Ashutosh Kumar](https://www.github.com/Developer-Ashutosh/)
- Frontend Mentor - [@Ashutosh Kuamr](https://www.frontendmentor.io/profile/yourusername)

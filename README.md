# Frontend Mentor - Mortgage repayment calculator solution

This is a solution to the [Mortgage repayment calculator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/mortgage-repayment-calculator-Galx1LXK73). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- Input mortgage information and see monthly repayment and total repayment amounts after submitting the form
- See form validation messages if any field is incomplete
- Complete the form only using their keyboard
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page


### Screenshot

![screenshot mobile](https://github.com/Lo-Deck/Mortgage-repayment-calculator/blob/main/screenshot/Mortgage%20repayment%20calculator-mobile.png).
![screenshot tablet](https://github.com/Lo-Deck/Mortgage-repayment-calculator/blob/main/screenshot/Mortgage%20repayment%20calculator-tablet.png).
![screenshot desktop](https://github.com/Lo-Deck/Mortgage-repayment-calculator/blob/main/screenshot/Mortgage%20repayment%20calculator-desktop.png).
![screenshot desktop-result](https://github.com/Lo-Deck/Mortgage-repayment-calculator/blob/main/screenshot/Mortgage%20repayment%20calculator-desktop-result.png).


### Links

- Solution URL: [Repositories](https://github.com/Lo-Deck/Mortgage-repayment-calculator).
- Live Site URL: [Website](https://lo-deck.github.io/Mortgage-repayment-calculator/).


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JS


### What I learned

I learned how to validate a `form` with ` if(!myForm[i].validity.valid)` and take some values from `input` and calculate and display a result.

```js
perMonth = (myForm[2].value * ((myForm[4].value/100)/12))/(1-(1+((myForm[4].value/100)/12))**-(myForm[3].value*12));

```

Make some modification with `addEventListener('reset', )` and `item.addEventListener('change',)`.


### Continued development

Learning from each challenge, I will continue to make website with JS and learning from different challenge from Front-end Mentor.


### Useful resources

- [Mozilla mdn](https://developer.mozilla.org/) - Very useful.


## Author

- Frontend Mentor - [@Lo-deck](https://www.frontendmentor.io/profile/Lo-Deck)


## Acknowledgments

Thanks to Front-end Mentor and its community.
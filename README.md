<!-- Question-1 -->
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: 'getElementById' select an element by ID and returns only one element. 'getElementsByClassName' select all elements with that class name and the returning type is HTMLCollection. 'querySelector'
it uses CSS selectors and returns the frist matching element only. 'querySelectorAll' it uses CSS selector and return all matching elements.


<!-- Question-2 -->
2. How do you create and insert a new element into the DOM?

Ans: To create and insert a new element into the DOM i'll follow 3 steps ans these are -

const p = document.createElement("p");
p.textContent = "This is a new paragraph.";

document.body.appendChild(p);


<!-- Question-3 -->
3. What is Event Bubbling? And how does it work?

Ans: Event Bubbling is a behavior in the DOM where an event starts from the target element and then propagates (bubbles up) to its parent elements one by one until it reaches the (document.)


<!-- Question-4 -->
4. What is Event Delegation in JavaScript? Why is it useful?

Ans: Event Delegation is a technique where you attach a single event listener to a parent element instead of adding event listeners to multiple child elements it's useful because we have to use only one event listner instead of many and it works for dynamically added elements and it let code clear.


<!-- Question-5 -->
5. What is the difference between preventDefault() and stopPropagation() methods?

Ans: Both are event methods in JavaScript, but they do different things firstly 'preventDefault()' stops the browser's default behavior for an element and 'stopPropagation()' Stops the event from bubbling up to parent elements so that is the difference between them.
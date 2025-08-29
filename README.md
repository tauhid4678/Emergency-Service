# Emergency-Service

1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll:

getElementById selects one element with a specific id.

getElementsByClassName selects all elements with a class and gives an HTMLCollection.

querySelector selects the first element that matches a CSS selector.

querySelectorAll selects all elements that match a CSS selector and gives a NodeList.

2. How to create and insert a new element into the DOM:

Use document.createElement("tag") to create an element.

Add content with innerText or innerHTML.

Insert it using appendChild, prepend, before, or after.

3. What is Event Bubbling and how it works:

Event Bubbling is when an event happens on a child element and then moves up to its parents.

Example: If you click a button inside a div, the click happens on the button first, then the div, then body, and so on.

4. What is Event Delegation and why it is useful:

Event Delegation is adding an event listener to a parent and handling events for its children.

It is useful because you don’t need to add listeners to every child, and it works for dynamically added elements.

5. Difference between preventDefault() and stopPropagation():

preventDefault() stops the default action of the browser, like preventing a link from opening.

stopPropagation() stops the event from moving up (bubbling) or down (capturing) in the DOM.

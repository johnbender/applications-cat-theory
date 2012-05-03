# The Chains That Bind

These are the text snippets that belong on the left third of the poster. It's generally hard to write out copy with the distraction of all the html floating around.

## Ubiquity Thy Name is jQuery

jQuery is an extremely popular open source JavaScript library, dual licensed under the GPL and MIT licenses. Figure 1 shows the percentage use of jQuery among the top ten thousand, hundred thousand, and one millions websites on the internet as ranked by Alexa [!!]. Additionally the project's website sees more than one hundred thousand [!!] unique visits a month from developers all over the world. Given these numbers it's fair to say that jQuery is one of the most popular libraries available to JavaScript developers, and possibly one of the most popular open source libraries available to any developer.

This popularity is due in part to the fluent interface that the library promotes for manipulating the browser's document object model. As with many abstractions that simplify complex data manipulation it often requires performance tradeoffs. Here we identify a subset of chainable jQuery methods that can be fused in the interest of increasing performance. As a result we derive a simple jQuery extension that can assist developers in identifying when these methods are being used.

## Fluent Interface

In Figure 2 you can see an example of a typical DOM manipulation built using jQuery's chainable methods. In this case all the `HTMLDivElement`s are selected from the DOM, hidden, the `foo` CSS class is added, and they are shown again. Figure 3 shows a "deabstracted" naive implementation of the method chain from Figure 2, and, as you can see, iterating over the set three times where one would seemingly suffice suggests an opportunity for a performance improvement.

Internally these methods are implemented using for loops or in one of two forms supported by the library, the "map form" with `jQuery.map` and the "each form" with `jQuery.each`. In most cases the each form and for loops can be realized using the more restrictive map form.

## Map Form

One of the two general forms that jQuery methods take is referred to here as the "map form". This leverages the jQuery helper methods `jQuery.map` or `jQuery.fn.map` to alter each element in the jQuery object set, Figure 4. This is the form with which our work is predominantly concerned with due to the way it promotes operations on elements without side effects.

## Each Form

The second of the two forms that one might find underlying jQuery methods is the "each form". Here side effects are the order of the day as there is no expectation that the element provided to the callback will be returned, Figure 5. The standard and optimizations described here can also be applied with this form because of JavaScript's pass by reference nature where objects are concerned. Unfortunately composition becomes impossible and the category definitions will not apply in those cases.

## When to Optimize?

Given that many of jQuery's core methods and the thriving plugin ecosystem that accompanies them frequently leverage these forms [!! - possible list them in a figure] there is likely great value in identifying ways to reduce the full number of set itterations made when they are used in chains. Unfortunately the source that makes up these methods is often complex even from the implementors perspective so a rigorous definition of which can be targetted for optimization has value. For that purpose we turn to some rudimentary category theory.

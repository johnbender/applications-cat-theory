# The Chains That Bind

These are the text snippets that belong on the left third of the poster. It's generally hard to write out copy with the distraction of all the html floating around.

## Ubiquity Thy Name is jQuery

jQuery is an extremely popular open source JavaScript library, dual licensed under the GPL and MIT licenses. Figure 1 shows the percentage use of jQuery among the top ten thousand, hundred thousand, and one millions websites on the internet as ranked by Alexa [!!]. Additionally the project's website sees more than one hundred thousand [!!] unique visits a month from developers all over the world. Given these numbers it's fair to say that jQuery is one of the most popular libraries available to JavaScript developers, and possibly one of the most popular open source libraries available to any developer.

This popularity is due in part to the fluent interface that the library promotes for manipulating the browser's document object model. As with many abstractions that simplify complex data manipulation it often requires performance tradeoffs. Here we identify a subset of chainable jQuery methods that can be fused in the interest of increasing performance. As a result we derive a simple jQuery extension that can assist developers in identifying when these methods are being used.

## Fluent Interface

In Figure 2 you can see an example of a typical DOM manipulation built using jQuery's chainable methods. In this case all the `HTMLDivElement`s are selected from the DOM, hidden, the `foo` CSS class is added, and they are shown again. Figure 3 shows a "deabstracted" naive implementation of the method chain from Figure 2, and, as you can see, iterating over the set three times where one would seemingly suffice leaves room for improvement where performance is concerned.

Internally these methods are implemented using for loops or in one of two forms supported by the library, the map form with `jQuery.map` and the each form with `jQuery.each`.

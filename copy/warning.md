# Automatically Warning the User

## A Simple Standard
icon-comments

The proposed optimization requires that the Html morphism underlying each morphism in Jqry is available to be fused when optimizing two or more jQuery methods. Given the possible complexity of those morphisms the onus should be on the developers creating them to decide when and where to provide them. That could be a core developer, a plugin author, or just a developer abstracting common code to a single jQuery method within a project. Either way it's important for developers building new chainable jQuery methods to know and participate in the process. To that end we propose a simple standard:

1. All jQuery methods should, wherever possible and performant, be built using the `$.map` and `$.fn.map` methods. This enforces consistency and readability so that when the Html morphism isn't provided seperately end users can make their own attempt at provding it.
2. Methods defined using the map form should provide the underlying Html morphism as the `composable` attribute on the method itself. Providing a consistent property makes fusion easier for the end user and enables automatic tool creation.
3. Performance must be measured when converting existing jQuery methods to the map form. Developers should verify, when converting jQuery methods from the for and each forms that there isn't a performance degredation. This will guarantees that any theoretical speed benefits garnered from composing the Html morphisms won't be negated by the conversion.


## Stuck in the Middle
icon-list-alt

jQuery's primary function, <code>jQuery</code> or <code>$</code>, is actually a proxy to the primary jQuery object constructor <code>jQuery.fn.init</code>. The objects created using the function with the <code>new</code> operator have as their prototype <code>jQuery.fn</code> which is why defining Jqry morphisms on <code>$.fn</code> ensures that the <code>this</code> value will be correct when they are invoked.

jquery.fn.init, Inserting a proxy object into the prototype chain, diagram

## Sample Implementation
icon-github-sign

link to github source, mention automatic optimization attempt, warning only split method calls, drop in include

## Further work
icon-plus-sign, icon-info-sign
Closure compiler optimization using advanced mode, testing on large jQuery based projects

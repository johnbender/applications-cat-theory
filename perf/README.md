# Performance Testing

This subdirectory contains code for performance tests hosted and run through [jsperf.com](http://jsperf.com). The idea is to provide a comprehensive view of the performance benefits and expenses incured for both method chain fusion and the abstraction of DOM manipulations from `jQuery.fn` methods.

## DOM Manipulation Abstraction

The following tests compare the existing implementatin of `jQuery.fn` methods and a hypothetical implementation that contains an abstraction of the DOM Manipulations found within them.

- wrap: http://jsperf.com/wrap-vs-split-wrap/2
- unwrap: http://jsperf.com/unwrap-vs-split-unwrap/2
- append: http://jsperf.com/append-vs-split-append/2
- wrapAll: http://jsperf.com/wrapall-vs-split-wrapall/2
- prepend: http://jsperf.com/prepend-vs-split-prepend
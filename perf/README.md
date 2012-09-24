# Performance Testing

This subdirectory contains code for performance tests hosted and run through [jsperf.com](http://jsperf.com). The idea is to provide a comprehensive view of the performance benefits and expenses incured for both method chain fusion and the abstraction of DOM manipulations from `jQuery.fn` methods.

## Function Overhead

The following tests compare the existing implementation of `jQuery.fn` methods and a hypothetical implementation that contains an abstraction of the DOM Manipulations found within them.

- wrapAll: http://jsperf.com/wrapall-vs-split-wrapall/4
- wrap: http://jsperf.com/wrap-vs-split-wrap/3
- unwrap: http://jsperf.com/unwrap-vs-split-unwrap/4
- append: http://jsperf.com/append-vs-split-append/2
- prepend: http://jsperf.com/prepend-vs-split-prepend
- before: http://jsperf.com/before-vs-split-before/2
- after: http://jsperf.com/after-vs-after-split/2
- remove: http://jsperf.com/remove-vs-split-remove/6, http://jsperf.com/basic-abstracted-remove
- empty: http://jsperf.com/empty-vs-split-empty/3
- replaceWith: http://jsperf.com/replacewith-vs-split-replacewith

## Core Abstraction

The following tests compare the existing implementation of `jQuery.fn` methods and the "core" abstraction with a while loop:

- wrapAll: http://jsperf.com/wrapall-vs-core-wrapall
- append: http://jsperf.com/append-vs-core-append/5
- prepend: http://jsperf.com/prepend-vs-core-prepend/2

## Notes

Some of the tests have to do setup and teardown inside the timed code portion because of the way the DOM manipulations slow down overtime. For example, `wrapAll` nests elements and without a cleanup the DOM tree appears to explode and ruin the test numbers.

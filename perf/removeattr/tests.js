var suite = new Benchmark.Suite;

Benchmark.prototype.setup = function() {
	// cache the test sets
    window.testSet = $( "[data-test]" );

    // add the attribute and data to be removed
    window.testSet
      .attr("foo", "bar")
      .attr("bar", "bang")
      .attr("baz", "bak");
};

// add tests
suite.add( '3 fast removeAttr chains', function() {
	window.testSet.removeAttr( "foo" ).removeAttr( "bar" ).removeAttr( "baz" );
})
.add( '3 inline $.removeAttr calls', function(){
	window.testSet.removeThreeAttrs( "foo", "bar", "baz" );
})
.add( '3 composed $.removeAttrCalls', function() {
	window.testSet.removeThreeAttrsCmps( "foo", "bar", "baz" );
})
.on('complete', function() {
  $( "#results" ).text('Results: Fastest is ' + this.filter('fastest').pluck('name'));
})
.run();

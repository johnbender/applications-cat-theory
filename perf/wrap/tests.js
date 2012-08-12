var suite = new Benchmark.Suite, i = 0;

Benchmark.prototype.setup = function() {
	// cache the test sets
	window.testSetCurrent = jQuery( "[data-test]" );
	window.testSetSplit = jqsplit( "[data-test]" );

	window.testSetCurrent.unwrap();
};

// add tests
suite
	.add( 'wrap with string (1.8)', function(){
		window.testSetCurrent.wrap( "<div></div>" );
	})
	.add( 'wrap with string (split)', function() {
		window.testSetSplit.wrap( "<div></div>" );
	})
	.on('complete', function() {
		$( "#results" ).text('Results: Fastest is ' + this.filter('1fastest').pluck('name'));
	})
	.run();

var suite = new Benchmark.Suite;

Benchmark.prototype.setup = function() {
	// cache the test sets
	window.testSetCurrent = jQuery( "[data-test]" );
	window.testSetSplit = jqsplit( "[data-test]" );

	window.testSetCurrent.empty();
	window.testSetSplit.empty();
};

// add tests
suite
	.add( 'append with string (1.8)', function(){
		window.testSetCurrent.append( "<div></div>" );
	})
	.add( 'append with string (split)', function() {
		window.testSetSplit.append( "<div></div>" );
	})
	.on('complete', function() {
		$( "#results" ).text('Results: Fastest is ' + this.filter('fastest').pluck('name'));
	})
	.run();

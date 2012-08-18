var suite = new Benchmark.Suite, i = 0;

Benchmark.prototype.setup = function() {
	// cache the test sets
	var l = 500;

	// make sure there are enough wrapping divs to keep the tests busy
	while( l-- ){
		window.testSetCurrent.wrap("<div class='cleanup'></div>");
	}

	window.testSetCurrent = old( "[data-test]" );
	window.testSetSplit = jqsplit( "[data-test]" );
};

Benchmark.prototype.setup = function() {
	// move the test set back into the body
	window.testSetCurrent.appendTo( "body" );

	// remove all the wrappers
	old( '.cleanup' ).remove();
};

// add tests
suite
	.add( 'unwrap (1.8)', function(){
		window.testSetCurrent.unwrap();
	})
	.add( 'unwrap (split)', function() {
		window.testSetSplit.unwrap();
	})
	.on('complete', function() {
		$( "#results" ).text('Results: Fastest is ' + this.filter('fastest').pluck('name'));
	})
	.run();

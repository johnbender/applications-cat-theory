var suite = new Benchmark.Suite, i = 0;

Benchmark.prototype.setup = function() {
	// cache the test sets
	window.testSetCurrent = jQuery( "[data-test]" );
	window.testSetSplit = jqsplit( "[data-test]" );

	window.testSetCurrent.wrap("<div></div>");
	if( !i ){
	console.log( window.testSetCurrent.first() );
	console.log( window.testSetCurrent.first().parent() );
i++
	}
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

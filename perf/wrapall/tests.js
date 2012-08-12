var suite = new Benchmark.Suite, i = 0;

Benchmark.prototype.setup = function() {
	// cache the test sets
	window.testSetCurrent = jQuery( "[data-test]" );
	window.testSetSplit = jqsplit( "[data-test]" );

	if( !window.testSetCurrent.parent().is( "body") ){
		var wrapper = window.testSetCurrent.parent();
		window.testSetCurrent.appendTo( "body" );
		wrapper.remove();
	}
};

// add tests
suite
	.add( 'wrapAll with string (1.8)', function(){
		window.testSetCurrent.wrapAll( "<div></div>" );
	})
	.add( 'wrapAll with string (split)', function() {
		window.testSetSplit.wrapAll( "<div></div>" );
	})
	.on('complete', function() {
		$( "#results" ).text('Results: Fastest is ' + this.filter('fastest').pluck('name'));
	})
	.run();

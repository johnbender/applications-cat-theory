var suite = new Benchmark.Suite, i = 0;

Benchmark.prototype.setup = function() {
  var selector = window.testSetCurrent.selector,
        clone = window.testSetCurrent.clone();

    old( ".cleanup" ).remove();
    clone.appendTo( "body" );
    window.testSetCurrent = old( "[data-test]" );
    window.testSetSplit = jqsplit( "[data-test]" );
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

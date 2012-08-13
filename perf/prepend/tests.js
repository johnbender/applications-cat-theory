var suite = new Benchmark.Suite;

Benchmark.prototype.setup = function() {
	window.testSetCurrent = old( "[data-test]" );
	window.testSetSplit = jqsplit( "[data-test]" );

	window.testSetCurrent.empty();
	window.testSetSplit.empty();

	if( window.testSetCurrent.jquery !== "1.8.0"
			|| window.testSetSplit.jquery !== "1.8.0pre"){
		throw "wrong versions";
	}

	// make sure that the firstChild call does some work
	window.testSetCurrent.append( "<div></div>" );
};

// add tests
suite
	.add( 'append with string (1.8)', function(){
		window.testSetCurrent.prepend( "<div></div>" );
	})
	.add( 'append with string (split)', function() {
		window.testSetSplit.prepend( "<div></div>" );
	})
	.on('complete', function() {
		jQuery( "#results" ).text('Results: Fastest is ' + this.filter('fastest').pluck('name'));
	})
	.run();

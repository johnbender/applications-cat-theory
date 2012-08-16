var suite = new Benchmark.Suite;

Benchmark.prototype.setup = function() {
	window.testSetCurrent.append( "<div></div>" );
	window.testSetSplit.append( "<div></div>" );

	var l = 10;

	while( l-- ){
		window.testSetCurrent.children().wrapAll( "<div></div>" );
		window.testSetSplit.children().wrapAll( "<div></div>" );
	}
};

// add tests
suite
	.add( 'empty (1.8)', function(){
		window.testSetCurrent.first().empty();
		window.testSetCurrent = window.testSetCurrent.slice( 1 );
	})
	.add( 'empty (split)', function() {
		window.testSetSplit.first().empty();
		window.testSetSplit = window.testSetSplit.slice( 1 );
	})
	.on('complete', function() {
		$( "#results" ).text('Results: Fastest is ' + this.filter('fastest').pluck('name'));
	})
	.run();

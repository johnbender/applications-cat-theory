var suite = new Benchmark.Suite;

Benchmark.prototype.setup = function() {
	window.testSetCurrent.append( "<div></div>" );
	window.testSetSplit.append( "<div></div>" );

	window.testSetCurrentLength = window.testSetCurrent.length;
	window.testSetSplitLength = window.testSetSplit.length;
};

Benchmark.prototype.teardown = function() {
	$( "[data-test]" ).remove();
	window.createTestSet();
};

// add tests
suite
	.add( 'empty (1.8)', function(){
		window.testSetCurrent.eq(window.testSetCurrentLength--).empty();

		if( window.testSetCurrentLength < 0 ){
			throw "shit";
		}
	})
	.add( 'empty (split)', function() {
		window.testSetSplit.eq(window.testSetSplitLength--).empty();

		if( window.testSetSplitLength < 0 ){
			throw "shit";
		}
	})
	.on('complete', function() {
		$( "#results" ).text('Results: Fastest is ' + this.filter('fastest').pluck('name'));
	})
	.run();

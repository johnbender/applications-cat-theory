var suite = new Benchmark.Suite, i = 0;

Benchmark.prototype.setup = function() {
	window.createTestSet( 10 );
};

// add tests
suite
	.add( 'unwrap (1.8)', function(){
		$( ".test" ).wrap( "<div data-test='true'></div>" );
		window.testSetCurrent.unwrap();
	})
	.add( 'unwrap (split)', function() {
		$( ".test" ).wrap( "<div data-test='true'></div>" );
		window.testSetSplit.unwrap();
	})
	.on('complete', function() {
		$( "#results" ).text('Results: Fastest is ' + this.filter('fastest').pluck('name'));
	})
	.run();

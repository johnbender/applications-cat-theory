var suite = new Benchmark.Suite, i = 0;

Benchmark.prototype.setup = function() {
	window.createTestSet( 10 );
};

Benchmark.prototype.teardown = function() {
	$( ".cleanup" ).remove();
};

// add tests
suite
	.add( 'wrapAll with string (1.8)', function(){
		window.testSetCurrent.wrapAll( "<div class='cleanup'></div>" );
	})
	.add( 'wrapAll with string (split)', function() {
		window.testSetSplit.wrapAll( "<div class='cleanup'></div>" );
	})
	.on('complete', function() {
		$( "#results" ).text('Results: Fastest is ' + this.filter('fastest').pluck('name'));
	})
	.run();

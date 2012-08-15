var suite = new Benchmark.Suite, setupRun = 0, testRun = 0;

Benchmark.prototype.teardown = function() {
	$( ".cleanup" ).remove();
};

// add tests
suite
	.add( 'before with string (1.8)', function(){
		window.testSetCurrent.before( "<div class='cleanup'></div>" );
	})
	.add( 'before with string (split)', function() {
		window.testSetSplit.before( "<div class='cleanup'></div>" );
	})
	.on('complete', function() {
		$( "#results" ).text('Results: Fastest is ' + this.filter('fastest').pluck('name'));
	})
	.run();

var suite = new Benchmark.Suite, setupRun = 0, testRun = 0;

// add tests
suite
	.add( 'before with string (1.8)', function(){
		$( ".cleanup" ).remove();
		window.testSetCurrent.after( "<div class='cleanup'></div>" );
	})
	.add( 'before with string (split)', function() {
		$( ".cleanup" ).remove();
		window.testSetSplit.after( "<div class='cleanup'></div>" );
	})
	.on('complete', function() {
		$( "#results" ).text('Results: Fastest is ' + this.filter('fastest').pluck('name'));
	})
	.run();

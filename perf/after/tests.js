var suite = new Benchmark.Suite;

// add tests
suite
	.add( 'after with string (1.8)', function(){
		$( ".cleanup" ).remove();
		window.testSetCurrent.after( "<div class='cleanup'></div>" );
	})
	.add( 'after with string (split)', function() {
		$( ".cleanup" ).remove();
		window.testSetSplit.after( "<div class='cleanup'></div>" );
	})
	.on('complete', function() {
		$( "#results" ).text('Results: Fastest is ' + this.filter('fastest').pluck('name'));
	})
	.run();

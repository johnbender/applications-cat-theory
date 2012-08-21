var suite = new Benchmark.Suite, i = 0;

// add tests
suite
	.add( 'wrapAll with string (1.8)', function(){
		window.createTestSet( 1 );
		window.testSetCurrent.wrapAll( "<div class='cleanup'></div>" );
		$( ".cleanup" ).remove();
	})
	.add( 'wrapAll with string (split)', function() {
		window.createTestSet( 1 );
		window.testSetSplit.wrapAll( "<div class='cleanup'></div>" );
		$( ".cleanup" ).remove();
	})
	.on('complete', function() {
		$( "#results" ).text('Results: Fastest is ' + this.filter('fastest').pluck('name'));
	})
	.run();

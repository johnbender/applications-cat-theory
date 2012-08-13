var suite = new Benchmark.Suite;

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

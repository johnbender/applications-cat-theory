var suite = new Benchmark.Suite;

// add tests
suite
	.add( 'remove (1.8)', function(){
		window.createTestSet( 1 );
		window.testSetCurrent.remove();
	})
	.add( 'remove (split)', function() {
		window.createTestSet( 1 );
		window.testSetSplit.remove();
	})
	.on('complete', function() {
		console.log( this[0].error );
		$( "#results" ).text('Results: Fastest is ' + this.filter('fastest').pluck('name'));
	})
	.run();

var suite = new Benchmark.Suite;

Benchmark.prototype.setup = function() {
  window.createTestSet( 1 );
};


// add tests
suite
	.add( 'after with string (1.8)', function(){
		window.testSetCurrent.after( "<div class='cleanup'></div>" );
		$( ".cleanup" ).remove();
	})
	.add( 'after with string (split)', function() {
		window.testSetSplit.after( "<div class='cleanup'></div>" );
		$( ".cleanup" ).remove();
	})
	.on('complete', function() {
		$( "#results" ).text('Results: Fastest is ' + this.filter('fastest').pluck('name'));
	})
	.run();

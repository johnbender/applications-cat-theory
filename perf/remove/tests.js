var suite = new Benchmark.Suite;

Benchmark.prototype.setup = function() {
	window.testSetCurrent = old( "[data-test]" );
	window.testSetSplit = jqsplit( "[data-test]" );

	window.testSetClone = window.testSetCurrent.clone();
};

Benchmark.prototype.teardown = function() {
	$( "[data-test]" ).remove();
	window.testSetClone.appendTo( "body" );
};

// add tests
suite
	.add( 'remove (1.8)', function(){
		window.testSetCurrent.first().remove();
	})
	.add( 'remove (split)', function() {
		window.testSetSplit.first().remove();
	})
	.on('complete', function() {
		$( "#results" ).text('Results: Fastest is ' + this.filter('fastest').pluck('name'));
	})
	.run();

var suite = new Benchmark.Suite;

Benchmark.prototype.setup = function() {
	window.testSetClone = window.testSetCurrent.clone();
};

Benchmark.prototype.teardown = function() {
	$( "[data-test]" ).remove();
	window.testSetClone.appendTo( "body" );
};

// add tests
suite
	.add( 'remove (1.8)', function(){
		old( "body > .test" ).first().remove();
	})
	.add( 'remove (split)', function() {
		jqsplit( "body > .test" ).first().remove();
	})
	.on('complete', function() {
		$( "#results" ).text('Results: Fastest is ' + this.filter('fastest').pluck('name'));
	})
	.run();

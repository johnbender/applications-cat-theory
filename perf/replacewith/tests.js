var suite = new Benchmark.Suite;

// add tests
suite
	.add( 'replaceWith string (1.8)', function(){
		old( "[data-test]" ).replaceWith( "<div data-test='true'></div>" );
	})
	.add( 'replaceWith string (split)', function() {
		jqsplit( "[data-test]" ).replaceWith( "<div data-test='true'></div>" );
	})
	.on('complete', function() {
		$( "#results" ).text('Results: Fastest is ' + this.filter('fastest').pluck('name'));
	})
	.run();

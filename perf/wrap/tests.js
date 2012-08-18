var suite = new Benchmark.Suite, i = 0;

Benchmark.prototype.teardown = function() {
	old( 'body > .test' ).empty();
};

// add tests
suite
	.add( 'wrap with string (1.8)', function(){
		old( 'body > .test' ).wrap( "<div class='test'></div>" );
	})
	.add( 'wrap with string (split)', function() {
		jqsplit( 'body > .test' ).wrap( "<div class='test'></div>" );
	})
	.on('complete', function() {
		$( "#results" ).text('Results: Fastest is ' + this.filter('fastest').pluck('name'));
	})
	.run();

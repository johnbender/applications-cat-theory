var suite = new Benchmark.Suite;

Benchmark.prototype.setup = function() {
	window.testSetClone = $( "body > [data-test]" ).clone( true );
	window.testSetClone.appendTo( "#staging" );

	window.testSetCurrent = old( "body > [data-test]" );
	window.testSetSplit = jqsplit( "body > [data-test]" );

	window.testSetCurrentLength = window.testSetCurrent.length;
	window.testSetSplitLength = window.testSetSplit.length;
};

Benchmark.prototype.teardown = function() {
	$( "body > [data-test]" ).remove();
	window.testSetClone.appendTo( "body" );
};

// add tests
suite
	.add( 'remove (1.8)', function(){
		window.testSetCurrent.eq(window.testSetCurrentLength--).remove();

		if( window.testSetCurrentLength < 0 ){
			throw "shit";
		}
	})
	.add( 'remove (split)', function() {
		window.testSetSplit.eq(window.testSetSplitLength--).remove();
		if( window.testSetSplitLength < 0 ){
			throw "shit";
		}
	})
	.on('complete', function() {
		$( "#results" ).text('Results: Fastest is ' + this.filter('fastest').pluck('name'));
	})
	.run();

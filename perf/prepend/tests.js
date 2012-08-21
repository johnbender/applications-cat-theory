var suite = new Benchmark.Suite;

Benchmark.prototype.setup = function() {
	window.createTestSet( 1000 );
};

// add tests
suite
	.add( 'prepend with string (1.8)', function(){
		window.testSetCurrent.prepend( "<div></div>" );
	})
	.add( 'prepend with string (split)', function() {
		window.testSetSplit.prepend( "<div></div>" );
	})
	.add( 'prepend with string (1.8)', function() {
		window.testSetCurrent.prepend( "<div class='cleanup'></div>" );
	})
	.add( 'prepend with element (core)', function() {
		var l = window.testSetCurrent.length, prepend;

		while( l-- ) {
			prepend = document.createElement( "div" );
			prepend.setAttribute( "class", "cleanup" );
			jqsplit.prepend( window.testSetCurrent[l], prepend);
		}
	})
	.on('complete', function() {
		jQuery( "#results" ).text('Results: Fastest is ' + this.filter('fastest').pluck('name'));
	})
	.run();

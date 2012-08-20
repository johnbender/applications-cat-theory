var suite = new Benchmark.Suite;

Benchmark.prototype.setup = function() {
	window.testSetCurrent.empty();
	window.testSetSplit.empty();
};

// add tests
suite
	.add( 'append with string (1.8)', function(){
		window.testSetCurrent.append( "<div></div>" );
	})
	.add( 'append with string (split)', function() {
		window.testSetSplit.append( "<div></div>" );
	})
	.add( 'append with string (1.8)', function() {
		window.testSetCurrent.append( "<div class='cleanup'></div>" );
	})
	.add( 'append with string (core)', function() {
		var l = window.testSetCurrent.length, append;

		while( l-- ) {
			append = document.createElement( "div" );
			append.setAttribute( "class", "cleanup" );
			jqsplit.append( window.testSetCurrent[l], append);
		}
	})
	.on('complete', function() {
		$( "#results" ).text('Results: Fastest is ' + this.filter('fastest').pluck('name'));
	})
	.run();

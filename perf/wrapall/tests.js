var suite = new Benchmark.Suite, i = 0;

// add tests
suite
	.add( 'wrapAll with string (1.8)', function(){
		window.createTestSet( 1 );
		window.testSetCurrent.wrapAll( "<div class='cleanup'></div>" );
		$( ".cleanup" ).remove();
	})
	.add( 'wrapAll with string (split)', function() {n
		window.createTestSet( 1 );
		window.testSetSplit.wrapAll( "<div class='cleanup'></div>" );
		$( ".cleanup" ).remove();
	})
	.add( 'wrapAll with element (core)', function() {
		var wrapper;

		window.createTestSet( 1 );
		wrapper = document.createElement( "div" );
		wrapper.setAttribute( "class", "cleanup" );
		jqsplit.wrapAll( window.testSetCurrent, wrapper );
		$( ".cleanup" ).remove();
	})
	.on('complete', function() {
		$( "#results" ).text('Results: Fastest is ' + this.filter('fastest').pluck('name'));
	})
	.run();

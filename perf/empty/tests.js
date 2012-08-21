var suite = new Benchmark.Suite;

Benchmark.prototype.setup = function() {
	window.createTestSet( 10 );
};

// add tests
suite
	.add( 'empty (1.8)', function(){
		var l = window.testSetCurrent.length;

		while( l-- ){
			jqsplit.append( window.testSetCurrent[l], document.createElement( "div" ));
		}

		window.testSetCurrent.empty();
	})
	.add( 'empty (split)', function() {
		var l = window.testSetSplit.length;

		while( l-- ){
			jqsplit.append( window.testSetSplit[l], document.createElement( "div" ));
		}

		window.testSetSplit.empty();
	})
	.on('complete', function() {
		$( "#results" ).text('Results: Fastest is ' + this.filter('fastest').pluck('name'));
	})
	.run();

var suite = new Benchmark.Suite;

for( var i = 0; i <= (window.testElementCount || 100); i++ ){
	var div = document.createElement("div");
	div.setAttribute("data-test", "true");
	div.setAttribute("data-test-foo", "true");
	$( div ).data("baz", "bak").appendTo( "body" );
}

$.fn.removeThreeAttrs = function( fst, snd, third ) {
	var length = this.length, elem;

	while( length-- ){
		elem = this[length];

		$.removeAttr( elem, fst );
		$.removeAttr( elem, snd );
		$.removeAttr( elem, third );
	}

	return this;
};

function cmps( f, g ) {
	return function( elem ) {
		return f(g(elem));
	};
}

function composableRemoveAttrs( attr ) {
	return function( elem ) {
		$.removeAttr( elem, attr );
    return elem;
	};
}

var removeFoo = composableRemoveAttrs( "foo" ),
	removeBar = composableRemoveAttrs( "bar" ),
	removeBaz = composableRemoveAttrs( "baz" ),
	composedRemoveAttrs = cmps( removeBaz, cmps( removeBar, removeFoo ));

$.fn.removeThreeAttrsCmps = function( fst, snd, third ) {
	var length = this.length, elem;

	while( length-- ){
		elem = this[length];
		composedRemoveAttrs( elem );
	}

	return this;
};

Benchmark.prototype.setup = function() {
	// cache the test sets
    window.testSet = $( "[data-test]" );

    // add the attribute and data to be removed
    window.testSet
      .attr("foo", "bar")
      .attr("bar", "bang")
      .attr("baz", "bak");
};

// add tests
suite.add( '3 fast removeAttr chains', function() {
	window.testSet.removeAttr( "foo" ).removeAttr( "bar" ).removeAttr( "baz" );
})
.add( '3 inline $.removeAttr calls', function(){
	window.testSet.removeThreeAttrs( "foo", "bar", "baz" );
})
.add( '3 composed $.removeAttrCalls', function() {
	window.testSet.removeThreeAttrsCmps( "foo", "bar", "baz" );
})
.on('complete', function() {
  $( "#results" ).text('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run();

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

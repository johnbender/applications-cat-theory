function cmps( f, g ) {
	return function( a ) {
		return f(g(a));
	};
}

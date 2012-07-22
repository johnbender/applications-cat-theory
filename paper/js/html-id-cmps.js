@\label{lst-line:html-id}@function id( a ) {
	return a;
}

@\label{lst-line:html-cmps}@function cmps( f, g ) {
	return function( a ) {
		return f(g(a));
	};
}

@\label{fig-line:html-id}@function id( a ) {
	return a;
}

@\label{fig-line:html-cmps}@function compose( f, g ) {
	return function( a ) {
		return f(g(a));
	};
}

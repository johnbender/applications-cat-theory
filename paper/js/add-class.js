jQuery.fn.naiveAddClass = function( cls ){
	var length = this.length;

	while( length-- ){
    var e = this[length];

		// append the new class value
    var old = e.getAttribute( "class" );
    e.setAttribute( "class", old + " " + cls );
	}
};

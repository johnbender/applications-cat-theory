// exists in hom(Jqry)
@\label{lst-line:remove-prop-jqry}@jQuery.fn.removeProp = function( name ) {
	name = jQuery.propFix[ name ] || name;

	return this.each(function( elem ) {
		elem[ name ] = undefined;
		delete elem[ name ];
	});
};

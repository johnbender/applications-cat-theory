jQuery.wrapAllWithCoreCall = function( html ) {
	var set, elem;

	if ( jQuery.isFunction( html ) ) {
		return this.each(function(i) {
			jQuery(this).wrapAll( html.call(this, i) );
		});
	}

	elem = this[0];
	set = this;

	if ( elem ) {
		// The elements to wrap the target around
		var wrap = jQuery( html, elem.ownerDocument ).eq(0).clone(true);

		wrap.each(function(i, e) {
			jQuery.wrapAll( set, e );
		});
	}

	return this;
};

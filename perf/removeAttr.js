var rspace = /\s+/,
	rboolean = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
	getSetAttribute = jQuery.support.getSetAttribute;

// Alter jQuery's removeAttr to avoid the call to each
// and inline $.removeAttr. The goal is to simulate the most
// performant case found in the jQuery source
jQuery.fn.extend({
	removeAttr: function( value ) {
		var length = this.length, elem;
		var propName, attrNames, name, l, isBool,	i;

		while( length-- ){
			elem = this[length];

			if ( value && elem.nodeType === 1 ) {
				i = 0;
				attrNames = value.toLowerCase().split( rspace );
				l = attrNames.length;

				for ( ; i < l; i++ ) {
					name = attrNames[ i ];

					if ( name ) {
						propName = jQuery.propFix[ name ] || name;
						isBool = rboolean.test( name );

						// See #9699 for explanation of this approach (setting first, then removal)
						// Do not do this for boolean attributes (see #10870)
						if ( !isBool ) {
							jQuery.attr( elem, name, "" );
						}
						elem.removeAttribute( getSetAttribute ? name : propName );

						// Set corresponding property to false for boolean attributes
						if ( isBool && propName in elem ) {
							elem[ propName ] = false;
						}
					}
				}
			}
		}

		return this;
	}
});

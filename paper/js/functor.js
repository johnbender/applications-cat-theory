// ob(Html) -> ob(Jqry)
@\label{fig-line:functor-ob}@jQuery( document.querySelector( "#sample" ) );

// hom(Html) -> hom(Jqry)
@\label{fig-line:functor-hom}@function functor( morphism ){
	return function(){
		return jQuery.map(this, morphism);
	};
}

@\label{fig-line:functor-hom-use}@jQuery.fn.sample = functor(function( elem ) {
	// ...
	// alteration of domElement
	// ...
});

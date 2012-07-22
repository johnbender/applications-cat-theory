// preservation of identity
@\label{lst-line:functor-law-id}@jQuery(id(elem)) == jQuery(elem).id();

// preservation of composition
@\label{lst-line:functor-law-cmps}@functor(compose(f, g))
  == jQuery.compose(functor(f), functor(g));

// preservation of composition
@\label{lst-line:functor-law-cmps-chain}@jQuery.map(jQuery("div"), compose(f, g))
  == jQuery("div").g().f();

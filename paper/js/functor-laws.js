// preservation of identity
@\label{lst-line:functor-law-id}@jQuery(id(elem)) == jQuery(elem).id();

// preservation of composition
@\label{lst-line:functor-law-cmps}@functor(cmps(f, g))
  == jQuery.cmps(functor(f), functor(g));

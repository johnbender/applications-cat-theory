@\label{fig-line:jqry-id}@jQuery.fn.id = function() {
  return this;
};

@\label{fig-line:jqry-cmps}@jQuery.cmps = function( f, g ){
  return function() {
    return f.call(g.call(this));
  };
};

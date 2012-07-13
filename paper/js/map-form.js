jQuery.fn.mapForm = function(){
  return this.map(function( index, htmlElement ) {
    // some alteration to the html element
    return htmlElement;
  });
};

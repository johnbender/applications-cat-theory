for( var i = 0; i <= (window.testElementCount || 100); i++ ){
	var div = document.createElement("div");
	div.setAttribute("data-test", "true");
	div.setAttribute("data-test-foo", "true");
	$( div ).data("baz", "bak").appendTo( "body" );
}

// make sure the two jQuery versions don't conflict
window.old = jQuery.noConflict( true );
window.jqsplit = window.jQuery;

// make sure the tests fail if the versions are wrong
// NOTE the versions here are arbitrary based on the two includes
//      but this setup is used in many tests so these will likely
//      remain static
if( window.old.fn.jquery !== "1.8.0"
	|| window.jqsplit.fn.jquery !== "1.8.0pre"){
	throw "wrong versions";
}

// cache the test sets
window.testSetCurrent = old( "[data-test]" );
window.testSetSplit = jqsplit( "[data-test]" );
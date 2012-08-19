window.createTestSet = function( count ){
	$( "[data-test]" ).remove();

	for( var i = 0; i <= ( count || window.testElementCount || 100); i++ ){
		var div = document.createElement("div");
		div.setAttribute("data-test", "true");
		div.setAttribute("data-test-foo", "true");
		div.setAttribute("class", "test");
		$( div ).data("baz", "bak").appendTo( "body" );
	}

	// cache the test sets
	window.testSetCurrent = old( "[data-test]" );
	window.testSetSplit = jqsplit( "[data-test]" );
};

// make sure the two jQuery versions don't conflict
window.old = jQuery.noConflict( true );
window.jqsplit = window.jQuery;

// make sure the tests fail if the versions are wrong
// NOTE the versions here are arbitrary based on the two includes
//      but this setup is used in many tests so these will likely
//      remain static
if( window.old.fn.jquery !== "1.8.0"
	|| window.jqsplit.fn.jquery !== "1.8.0-htmlmanip"){
	throw "wrong versions";
}

$( "body" ).append( "<div id='staging'></div>" );

// create the initial test set
window.createTestSet();
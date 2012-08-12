for( var i = 0; i <= (window.testElementCount || 100); i++ ){
	var div = document.createElement("div");
	div.setAttribute("data-test", "true");
	div.setAttribute("data-test-foo", "true");
	$( div ).data("baz", "bak").appendTo( "body" );
}

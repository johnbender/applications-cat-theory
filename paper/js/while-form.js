@\label{lst-line:while-form-method-def}@jQuery.fn.sampleWhileForm = function(){
	var length = this.length;

	while( length-- ){
    var domElement = this[length];

		// ...
		// alteration of domElement
		// ...
	}
};

// invocation
@\label{lst-line:while-form-method-inv}@$( "div" ).sampleWhileForm();

// user "unfriendly"
jQuery("div")
	.removeAttr("data-foo")
	.removeAttr("data-bar");

// user friendly
jQuery("div")
	.removeAttr("data-foo data-bar");
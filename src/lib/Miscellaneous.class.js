function Miscellaneous() {
	this.createFixedToolbar = function() {
		$("div#header").css({
			"position": "fixed",
			"zIndex" : 10,
			"top": 0
		});
		$("div#monkey").css("margin-top", "88px");
	};
}
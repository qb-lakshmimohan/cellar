window.Wine = Backbone.Model.extend({
	urlRoot: "http://localhost:8080/wineserver/api/wines",
	defaults: {
		"id": null,
	    "name":  "",
	    "grapes":  "",
	    "country":  "USA",
	    "region":  "California",
	    "year":  "",
	    "description":  "",
	    "picture":  ""
	  }
});

window.WineCollection = Backbone.Collection.extend({
	model: Wine,
	url: "http://localhost:8080/wineserver/api/wines"
});
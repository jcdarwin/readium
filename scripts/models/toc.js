Readium.Models.Toc = Backbone.Model.extend({

	sync: BBFileSystemSync,

	initialize: function(options) {
		this.file_path = options.file_path;
		this.book = options.book;
		this.book.on("change:toc_visible", this.setVisibility, this);
		this.book.on("change:toolbar_visible", this.setTocVis, this);
	},

	handleLink: function(href) {
		this.book.goToHref(href);
	},

	setVisibility: function() {
		this.set("visible", this.book.get("toc_visible"));
	},

	hide: function() {
		this.book.set("toc_visible", false)
	},

	setTocVis: function() {
		if(!this.book.get("toolbar_visible")) {
			this.book.set("toc_visible", false);
		}
	},

	defaults: {
		visible: false
	}

}, {
	// Class Level Attributes!
	XHTML_MIME: "application/xhtml+xml",
	XML_MIME: "text/xml",	
	NCX_MIME: "application/x-dtbncx+xml",
	getToc: function(manItem, options) {
		var media_type = manItem.get("media_type");
		if(media_type === Readium.Models.Toc.XHTML_MIME || 
				media_type === Readium.Models.Toc.XML_MIME) {
			return new Readium.Models.XhtmlToc(options);
		}
		else if (media_type ===  Readium.Models.Toc.NCX_MIME) {
			return new Readium.Models.NcxToc(options);
		}
	}
});


Readium.Models.NcxToc = Readium.Models.Toc.extend({

	jath_template: {

		title: "//ncx:docTitle/ncx:text",

		// One level of nesting for the time being.
		navs: [ "//ncx:navMap/ncx:navPoint", { 
			text: "ncx:navLabel/ncx:text",
			href: "ncx:content/@src",
			id:   "@id",
			navs: [ "ncx:navPoint", { 
				text: "ncx:navLabel/ncx:text",
				href: "ncx:content/@src",
				id:   "@id"
			} ]
		} ]
		
	},

	parse: function(xmlDom) {
		var json;
		if(typeof(xmlDom) === "string" ) {
			var parser = new window.DOMParser;
      		xmlDom = parser.parseFromString(xmlDom, 'text/xml');
		}
		
		Jath.resolver = function(prefix) {
			if(prefix === "ncx") {
				return "http://www.daisy.org/z3986/2005/ncx/";	
			}
			return "";
		}

		json = Jath.parse( this.jath_template, xmlDom);
		return json;
	},

	TocView: function() {
		return new Readium.Views.NcxTocView({model: this});
	}

});

Readium.Models.XhtmlToc = Readium.Models.Toc.extend({

	parse: function(xmlDom) {
		var json = {};
		if(typeof(xmlDom) === "string" ) {
			var parser = new window.DOMParser;
      		xmlDom = parser.parseFromString(xmlDom, 'text/xml');
		}
		json.title = $('title', xmlDom).text();
		json.body = $('body', xmlDom);
		return json;
	},

	TocView: function() {
		return new Readium.Views.XhtmlTocView({model: this});
	}
});
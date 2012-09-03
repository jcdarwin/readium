Readium.Views.TocViewBase = Backbone.View.extend({

	el: "#readium-toc",

	initialize: function() {
		this.model.on("change", this.render, this);
		this.model.on("change:visible", this.setVisibility, this);
	},

	events: {
		"click a": "handleClick",
		"click #close-toc-button": "closeToc"
	},

	setVisibility: function() {
		this.$el.toggle(this.model.get("visible"));
	},

	handleClick: function(e) {
		e.preventDefault();
		href = $(e.currentTarget).attr("href");
		this.model.handleLink(href);
	},

	closeToc: function(e) {
		e.preventDefault();
		this.model.hide();
	}

});


Readium.Views.NcxTocView = Readium.Views.TocViewBase.extend({ 

	initialize: function() {
		Readium.Views.TocViewBase.prototype.initialize.call(this);
		this.nav_template = Handlebars.templates.ncx_nav_template;
	},

	render: function() {
		this.setVisibility();
		var ol = $("<ol></ol>");
		var navs = this.model.get("navs");
		
		// Recurse down the navigation structure.
		ol = this.render_navs(ol, navs, this.nav_template);
		this.$('#toc-body').html("<h2>" + (this.model.get("title") || "Contents") + "</h2>")
		this.$('#toc-body').append(ol);
		this.$('#toc-body').append("<div id='toc-end-spacer'>");
		return this;
	},

	render_navs: function(ol, navs, template) {
		for(var i = 0; i < navs.length; i++) {
			if ( navs[i].navs && navs[i].navs.length > 0 ) {
				var ol_children = $("<ol></ol>");
				ol_children = this.render_navs(ol_children, navs[i].navs, template);				
				ol.append( $(template(navs[i])).append( ol_children ) );
			} else {
				ol.append( template(navs[i]) );
			}
		}
		return ol;
	}

});

Readium.Views.XhtmlTocView = Readium.Views.TocViewBase.extend({ 

	render: function() {
		this.$('#toc-body').html( this.model.get("body").html() );
		this.$('#toc-body').append("<div id='toc-end-spacer'>");
		return this;
	}

});
Readium.Views.ToolbarView = Backbone.View.extend({

	el: "#toolbar-el",

	initialize: function() {
		this.model.on("change:toolbar_visible", this.renderBarVibility, this);
		this.model.on("change:full_screen", this.renderFullScreen, this);
		this.model.on("change:current_theme", this.renderThemeButton, this);
        this.model.on("change:spine_position", this.hideOrShowMoButton, this);
	},

	render: function() {
		this.renderBarVibility();
		this.renderFullScreen();
		this.renderThemeButton();
		this.renderTitle();
		return this;
	},

	renderBarVibility: function() {
		var visible = this.model.get("toolbar_visible");
		this.$('#show-toolbar-button').toggle( !visible );
		this.$('#toolbar-title').toggle( !visible );
		this.$('#top-bar').toggle( visible );
		return this;
	},

	renderFullScreen: function() {
		var isFs = this.model.get("full_screen");
		this.$("#go-to-fs-ico").toggle( !isFs );
		this.$("#leave-fs-ico").toggle( isFs );
		return this;
	},

	renderThemeButton: function() {
		var isNight = this.model.get("current_theme") === "night-theme";
		this.$('#night-to-day-ico').toggle(isNight);
		this.$('#day-to-night-ico').toggle(!isNight);
		return this;
	},

	renderTitle: function() {
		var title = this.model.epub.get("title");
		this.$('#toolbar-title').html(title);
		return this;
	},

    hideOrShowMoButton: function() {
        if (this.model.getCurrentSection().hasMediaOverlay()) {
            $("#play-mo-btn").show();
        }
        else {
            $("#play-mo-btn").hide();
        }
    },
    
	events: {
		"click #hide-toolbar-button": "hide_toolbar",
		"click #show-toolbar-button": "show_toolbar",
		"click #fs-toggle-btn": "toggle_fs",
		"click #toggle-toc-btn": "toggle_toc",
		"click #nightmode-btn": "toggle_night_mode",
		"click #play-mo-btn": "play_mo"
	},

	show_toolbar: function(e) {
		e.preventDefault();
		this.model.set("toolbar_visible", true);
	},

	hide_toolbar: function(e) {
		e.preventDefault();
		this.model.set("toolbar_visible", false);
	},

	toggle_fs: function(e) {
		e.preventDefault();
		this.model.toggleFullScreen();
	},

	toggle_toc: function(e) {
		e.preventDefault();
		this.model.toggleToc();
	},

	toggle_night_mode: function() {
		var current_theme = this.model.get("current_theme");
		if(current_theme === "night-theme") {
			this.model.set("current_theme", "default-theme");
		}
		else {
			this.model.set("current_theme", "night-theme");
		}
		this.model.save();
	},

	play_mo: function() {
        var moController = this.model.get("media_overlay_controller");
		if (moController.get("active_mo")) {
			moController.pauseMo();
		}
		else {
			moController.playMo();
		}
	}
});

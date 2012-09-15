Readium.Views.ToolbarView = Backbone.View.extend({

	el: "#toolbar-el",

	initialize: function() {
		this.model.on("change:toolbar_visible", this.renderBarVibility, this);
		this.model.on("change:full_screen", this.renderFullScreen, this);
		this.model.on("change:current_theme", this.renderThemeButton, this);
		this.model.on("change:spine_position", this.hideOrShowMoButton, this);

    // JCD: We need to ensure that the 'toolbar_visible' cookie is set when entering a page.
    var toolbar_visible = Readium.Utils.getCookie('toolbar_visible');
    this.internalRenderBarVisibility( toolbar_visible === 'true' );

	},

	render: function() {
		this.internalRenderBarVisibility();
		this.renderFullScreen();
		this.renderThemeButton();
		this.renderTitle();
		return this;
	},

  // JCD: We want to maintain toolbar visibility / invisibility between publications
  // so we'll track the toolbar visibility using a cookie.
	renderBarVibility: function() {
		var visible = this.model.get("toolbar_visible");
		this.internalRenderBarVisibility(visible);
    return this;
  },
  
	internalRenderBarVisibility: function(visible) {
    if (typeof visible === 'undefined') {
  		var visible = this.model.get("toolbar_visible");
      if(Readium.Utils.getCookie("toolbar_visible")) {
        if(Readium.Utils.getCookie("toolbar_visible") == 'true') {
          visible = true;
        } else {
          visible = false;
        }
      } else {
        Readium.Utils.setCookie('toolbar_visible', true, 1000);
      }
    } else {
      Readium.Utils.setCookie('toolbar_visible', visible, 1000);
    }
    
    this.model.set("toolbar_visible", visible);

		this.$('#show-toolbar-button').toggle( !visible );
		this.$('#toolbar-title').toggle( !visible );
		this.$('#top-bar').toggle( visible );

    // JCD: Ensure that our layout will extend over the (now blank & hidden) toolbar area.
    $('body').toggleClass('body_full', !visible);
    $('#readium-right-content').toggleClass('margin_top', !visible);

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

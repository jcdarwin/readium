// todo move this stuff into the proper namespaces
Readium.Models.LibraryItem = Backbone.Model.extend({

	idAttribute: "key",
	
	getViewBookUrl: function(book) {
		return "/view_book/" + this.get('key');
	},

	openInReader: function() {
		window.router.navigate(this.getViewBookUrl(), {trigger: true});
	}

});

Readium.Collections.LibraryItems = Backbone.Collection.extend({

	model: Readium.Models.LibraryItem,

	url: "/epub_content/metadata.json"
	
});

Readium.Views.LibraryItemView = Backbone.View.extend({

	tagName: 'li',

	//className: "book-item clearfix",

	initialize: function() {
		_.bindAll(this, "render");	
		this.template = _.template( $('#library-item-template').html() );
	},

	render: function() {
		var renderedContent = this.template({data: this.model.toJSON()});
		$(this.el).html(renderedContent);
		return this;
	},

	events: {
		"click .delete": function(e) {
			e.preventDefault();
			var confMessage;
			var selector = "#details-modal-" + this.model.get('key');
			confMessage  = "Are you sure you want to perminantly delete " 
			confMessage += this.model.get('title');
			confMessage += "?";


			if(confirm(confMessage)) {
				$(selector).modal('hide');
				this.model.destroy();
				this.remove();
			}
		},

		"click .read": function(e) {
			this.model.openInReader();
		}
		
	}
});

Readium.Views.LibraryItemModalView = Backbone.View.extend({

	initialize: function() {
		this.template = _.template( $('#library-item-modal-template').html() );
	},

	render: function() {
		var renderedContent = this.template({data: this.model.toJSON()});
		$(this.el).html(renderedContent);
		return this;
	}
});

Readium.Views.LibraryItemsView = Backbone.View.extend({
	tagName: 'div',

	id: "library-items-container",

	className: '',

	initialize: function() {
		this.template = _.template( $('#library-items-template').html() );
		this.collection.bind('reset', this.render, this);
		this.collection.bind('add',   this.addOne, this);
	},

	render: function() {
		var that = this;
		this.$el.html(this.template({}));

		this.collection.each(function(item) {
			var view = new Readium.Views.LibraryItemView({
				model: item,
				collection: that.collection,
				id: item.get('id')
			});
			that.$("#lib-list").append( view.render().el );

		});
		
		// i dunno if this should go here
		$('#library-books-list').html(this.el)
		return this;
	},

	addOne: function(book) {
		var view = new LibraryItemView({
			model: book,
			collection: this.collection,
			id: book.get('id')
		});
		// we are adding so this should always be hidden!
		this.$('#empty-message').toggle(false);
		$(this.el).append( view.render().el );
	},

	events: {
		
	}
});


Readium.Views.ExtractItemView = Backbone.View.extend({
	
	el: $('#progress-container')[0],

	initialize: function() {	
		this.template = _.template( $('#extracting-item-template').html() );
		this.model.bind('change', this.render, this);
		this.model.bind("change:error", this.extractionFailed, this);
	},

	render: function() {
		var $el = $(this.el);
		if( this.model.get('extracting') ) {
			$el.html(this.template(this.model.toJSON()));
			$el.show("slow");
		}
		else {
			$el.hide("slow");
		}
		return this;
	},

	extractionFailed: function(msg) {
		alert(this.model.get("error"));
		this.model.set("extracting", false);
	}

});

Readium.Views.ReadiumOptionsView = Backbone.View.extend({
	el: "#readium-options-modal",

	initialize: function() {
		this.model.on("change", this.render, this);
		this.render();
	},

	render: function() {
		var m = this.model;
		this.$('#paginate_everything').prop('checked', m.get("paginate_everything"));
		this.$('#verbose_unpacking').prop('checked', m.get("verbose_unpacking"));
		this.$('#hijack_epub_urls').prop('checked', m.get("hijack_epub_urls"));
	},

	events: {
		"change #verbose_unpacking": "updateSettings",
		"change #hijack_epub_urls": "updateSettings",
		"change #paginate_everything": "updateSettings",
		"click #save-settings-btn": "save"
		},

		updateSettings: function() {
			var hijack = this.$('#hijack_epub_urls').prop('checked')
			var unpack = this.$('#verbose_unpacking').prop('checked')
			var paginate = this.$('#paginate_everything').prop('checked')
			
		this.model.set({"verbose_unpacking": unpack,
						"hijack_epub_urls": hijack,
						"paginate_everything": paginate});
		},

		save: function() {
			this.model.save();
			this.$el.modal("hide");
		}

});

Readium.Views.FilePickerView = Backbone.View.extend({
	el:"#add-book-modal",

	events: {
		"change #files": "handleFileSelect",
		"change #dir_input": "handleDirSelect",
		"click #url-button": "handleUrl"
	},

	show: function() {
		this.$el.modal('show');
	},

	hide: function() {
		this.$el.modal('hide');
	},

	resetForm: function() {

	},

	handleUrl: function(evt) {
		var input = document.getElementById('book-url');
		if(input.value === null || input.value.length < 1) {
			alert("invalid url, cannot process");
		}
		else {
			var url = input.value;
			// TODO check src filename
			var extractor = new Readium.Models.ZipBookExtractor({url: url, src_filename: url});
			this.beginExtraction(extractor);
		}
	},

	handleFileSelect: function(evt) {
		var files = evt.target.files; // FileList object
		var url = window.webkitURL.createObjectURL(files[0]);
		// TODO check src filename
		var extractor = new Readium.Models.ZipBookExtractor({url: url, src_filename: files[0].name});
		this.beginExtraction(extractor);
	},

	handleDirSelect: function(evt) {
		var dirpicker = evt.target; // FileList object		
		var extractor = new Readium.Models.UnpackedBookExtractor({dir_picker: dirpicker});
		this.beginExtraction(extractor);
		
	},

	beginExtraction: function(extractor) {
		window.extract_view = new ExtractItemView({model: extractor});
		extractor.on("extraction_success", function() {
			var book = extractor.packageDoc.toJSON();
			window.Library.add(new window.LibraryItem(book));
			setTimeout(function() {
				chrome.tabs.create({url: "/views/viewer.html?book=" + book.key });
			}, 800);
		});
		extractor.extract();
		this.resetForm();
		this.hide();
	}
});
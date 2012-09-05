Handlebars.registerHelper('orUnknown', function(str) {
  try {
  	return str ? str : chrome.i18n.getMessage("i18n_unknown");
  } catch(e){
  }
});

// A helper method used to fetch i18n messages in handlebars
// templates
Handlebars.registerHelper('fetchInzMessage', function(key) {
  try {
  	return new Handlebars.SafeString(chrome.i18n.getMessage(key));
  } catch(e){
  }
});